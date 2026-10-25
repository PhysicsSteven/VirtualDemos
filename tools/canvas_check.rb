# Import check for tools/canvas.py: runs Canvas's own Common Cartridge import code on a built .imscc and prints a summary
# (package type Canvas detects, modules, items by type, assignments and their settings). Canvas's code is not copied here;
# fetch these files from instructure/canvas-lms (master) into one folder first:
#   B=https://raw.githubusercontent.com/instructure/canvas-lms/master
#   for f in lib/canvas/migration/xml_helper.rb lib/canvas/migration/migrator.rb lib/cc/importer.rb \
#            lib/cc/importer/standard/weblink_converter.rb lib/cc/importer/standard/org_converter.rb \
#            lib/cc/importer/standard/assignment_converter.rb; do curl -sSfO "$B/$f"; done
#   gem install nokogiri activesupport
#   ruby tools/canvas_check.rb <that folder> _build/canvas/virtualdemos-thermo.imscc
# Covered: PackageIdentifier's Common Cartridge test, Migrator#get_all_resources, and the Standard assignment, module and
# web link converters, with stubs for the Rails parts. Not covered: the database step that creates the Canvas objects.
require "nokogiri"; require "active_support/all"; require "json"; require "tmpdir"
SRC = ARGV[0]; DIR = Dir.mktmpdir
system("unzip", "-q", ARGV[1], "-d", DIR) or abort("cannot unzip #{ARGV[1]}")
module CC; module CCHelper; COURSE_SETTINGS_DIR="course_settings"; SYLLABUS="syllabus.html"; COURSE_SETTINGS="course_settings.xml"; CANVAS_EXPORT_FLAG="canvas_export.txt"; end; end
module Canvas; module Migration; class Error < StandardError; end; end; end
load File.join(SRC, "xml_helper.rb")
load File.join(SRC, "importer.rb")
module CC::Importer::Standard; end
load File.join(SRC, "weblink_converter.rb"); load File.join(SRC, "org_converter.rb"); load File.join(SRC, "assignment_converter.rb")
# methods copied verbatim from lib/canvas/migration/migrator.rb
def extract(file, names)
  lines = File.readlines(file); out = []
  names.each do |n|
    i = lines.index { |l| l =~ /^\s*def #{n}\b/ }; ind = lines[i][/^\s*/]
    j = (i+1...lines.size).find { |k| lines[k] =~ /^#{ind}end\b/ }
    out << lines[i..j].join
  end
  out.join("\n")
end
class Harness
  include CC::Importer::Standard::AssignmentConverter
  include CC::Importer::Standard::OrgConverter
  class_eval extract(File.join(SRC, "migrator.rb"), %w[get_all_resources resources_by_type open_rel_path get_node_or_open_file])
  def initialize(dir); @dir = dir; @resources = {}; @resource_nodes_for_flat_manifest = {}; @course = { assignments: [], wikis: [] }; end
  def get_full_path(f); File.join(@dir, f) if f.present?; end
  def replace_urls(html, _d = nil); html; end
  def get_canvas_att_replacement_url(*); nil; end
  def find_assignment(id); @course[:assignments].find { |a| a[:migration_id] == id }; end
  def run
    m = open_file_xml(File.join(@dir, "imsmanifest.xml")); m.remove_namespaces!
    get_all_resources(m)
    convert_cc_assignments(@course[:assignments])
    @course[:modules] = convert_organizations(m)
    @course
  end
end
# PackageIdentifier#identify_package, the imsmanifest.xml branch
class Ident; include Canvas::Migration::XMLHelper; end
id = Ident.new; doc = id.create_xml_doc(File.read(File.join(DIR, "imsmanifest.xml")))
type = if /IMS(?: Thin)? Common Cartridge/i.match?(id.get_node_val(doc, "metadata schema")) && id.get_node_val(doc, "metadata schemaversion") == "1.3.0" then "common_cartridge_1_3" else "UNKNOWN" end
c = Harness.new(DIR).run
types = c[:modules].flat_map { |m| m[:items] }.map { |i| i[:linked_resource_type] }.tally
ok = ->(a) { a[:title].present? && a[:description].present? && a[:submission_types] == "online_upload" && a[:allowed_extensions] == "pdf,csv" && a[:workflow_state] == "unpublished" }
ids = c[:assignments].map { |a| a[:migration_id] }
dangling = c[:modules].flat_map { |m| m[:items] }.count { |i| i[:linked_resource_type] == "ASSIGNMENT" && !ids.include?(i[:linked_resource_id]) }
puts "package #{type}; #{c[:modules].size} modules; items #{types}; #{c[:assignments].size} assignments, #{c[:assignments].count { |a| !ok.(a) }} with wrong settings, #{dangling} module items without an assignment"
c[:modules].each { |m| puts "  #{m[:title]} (#{m[:items].size})" } if ARGV.include?("-v")
exit(type == "common_cartridge_1_3" && dangling.zero? && c[:assignments].all?(&ok) && !types.key?(nil) ? 0 : 1)
