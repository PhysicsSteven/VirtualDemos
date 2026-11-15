# Runs Jekyll without network lookups (jekyll-github-metadata otherwise asks the GitHub API and fails in cloud sessions).
require 'jekyll'
require 'jekyll-github-metadata'
Jekyll::GitHubMetadata::Client.class_eval { def internet_connected?; false; end }
load Gem.bin_path('jekyll','jekyll')
