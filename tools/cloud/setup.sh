#!/bin/bash
# One command setup for a cloud session (2026-11-15). Run from anywhere:
#   bash tools/cloud/setup.sh          hooks, Python markdown, three.js/MathJax/anchor-js packs, ~/.vd-env   (about 30 s)
#   bash tools/cloud/setup.sh --site   also Jekyll gems, a local build of the site and the server on :8765    (about 3 min the first time)
# Then `source ~/.vd-env` in each shell that runs a check. Safe to run again: it skips what is already there.
# --site is needed only for worksheets and key captures (they are Jekyll pages); demo checks read the files directly.
set -e
REPO=$(cd "$(dirname "$0")/../.." && pwd)
KEYS=${TEACHERKEYS:-$(cd "$REPO/.." && for d in teacherkeys TeacherKeys; do [ -d "$d/worksheet-keys" ] && echo "$PWD/$d" && break; done)}
V=${VD_VENDOR:-$HOME/vendor}
SITE=${VD_SITE:-$HOME/vd-site/VirtualDemos}
RUBY=/opt/rbenv/versions/3.3.6/bin

git -C "$REPO" config core.hooksPath .githooks
[ -n "$KEYS" ] && [ -d "$KEYS/.githooks" ] && git -C "$KEYS" config core.hooksPath .githooks
python3 -c 'import markdown' 2>/dev/null || pip install -q markdown

# cdnjs and jsdelivr are blocked in cloud sessions; the npm registry is not
mkdir -p "$V"
for p in three@0.128.0:three mathjax@3.2.2:mathjax anchor-js@4.1.0:anchor-js; do
  pkg=${p%%:*}; dir=${p##*:}
  if [ ! -d "$V/$dir/package" ]; then
    (cd "$V" && f=$(npm pack -q "$pkg" 2>/dev/null | tail -1) && mkdir -p "$dir" && tar xzf "$f" -C "$dir" && rm -f "$f")
  fi
done
ln -sfn "$V/mathjax" "$V/mj"; ln -sfn "$V/anchor-js" "$V/aj"   # the names TeacherKeys tools/lib.cjs looks for

cat > "$HOME/.vd-env" <<ENV
export NODE_PATH=/opt/node-tools/node_modules
export VD_THREE=$V/three/package/build/three.min.js
export VD_VENDOR=$V
export VENDOR=$V
export VD_SITE=$SITE
export TEACHERKEYS=$KEYS
export PATH=$RUBY:\$PATH
ENV

if [ "$1" = "--site" ]; then
  export PATH=$RUBY:$PATH
  gem list -i jekyll-theme-primer >/dev/null 2>&1 || gem install -N -q jekyll jekyll-theme-primer jekyll-optional-front-matter \
    jekyll-readme-index jekyll-default-layout jekyll-titles-from-headings jekyll-relative-links jekyll-github-metadata \
    jekyll-seo-tag kramdown-parser-gfm webrick
  ruby "$REPO/tools/cloud/jk.rb" build -q -s "$REPO" -d "$SITE" --config "$REPO/tools/cloud/jekyll.yml" 2> /tmp/vd-jekyll.log || { tail -20 /tmp/vd-jekyll.log; exit 1; }
  if ! curl -s -o /dev/null http://127.0.0.1:8765/VirtualDemos/; then
    VD_SITE=$SITE setsid nohup node "$REPO/tools/cloud/serve.cjs" > /tmp/vd-serve.log 2>&1 &
    sleep 1
  fi
  echo "site: http://127.0.0.1:8765/VirtualDemos/  (after editing a worksheet .md, run setup.sh --site again to rebuild, about 10 s)"
fi
echo "ready. Run: source ~/.vd-env"
