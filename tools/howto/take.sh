#!/bin/bash
# Retake one How this works video end to end (2026-11-15): record, compose, poster, contact sheet.
#   bash tools/howto/take.sh <name>        <name> is tools/howto/<name>.cjs (usually the worksheet slug)
# Needs `bash tools/cloud/setup.sh` once (three.js pack) and ffmpeg. About 5 minutes alone on 4 cores; run at most 4 at once
# (xargs -P 4 -n 1 bash tools/howto/take.sh < list). Writes demos/media/how-this-works/<name>.mp4 and .jpg, and a 6 frame
# contact sheet /tmp/takes/<name>-sheet.jpg. Then LOOK at the sheet and compare the r.check readings in /tmp/takes/<name>.log
# with the "Expected:" line at the top of the script: a take can finish with the wrong value when a demo's layout changed.
set -e
n=$1; [ -f "$(dirname "$0")/$n.cjs" ] || { echo "no tools/howto/$n.cjs"; exit 2; }
cd "$(dirname "$0")/../.."
[ -f "$HOME/.vd-env" ] && . "$HOME/.vd-env"
: "${VD_THREE:?run bash tools/cloud/setup.sh first}"
curl -s -o /dev/null http://localhost:8811/demos/ || { setsid nohup python3 -m http.server 8811 > /dev/null 2>&1 & sleep 1; }
T=/tmp/takes/$n; L=/tmp/takes/$n.log; M=demos/media/how-this-works; mkdir -p /tmp/takes; rm -rf "$T"
grep -m1 'Expected' "tools/howto/$n.cjs" | sed 's|^// *||' > "$L" || true
node "tools/howto/$n.cjs" "$T" >> "$L" 2>&1 || { tail -20 "$L"; exit 1; }
python3 tools/howto/compose.py "$T" "$M/$n.mp4" >> "$L" 2>&1 || { tail -20 "$L"; exit 1; }
ffmpeg -y -loglevel error -ss 1.5 -i "$M/$n.mp4" -frames:v 1 -vf scale=960:-1 -q:v 7 "$M/$n.jpg"
N=$(ffprobe -v error -count_packets -select_streams v:0 -show_entries stream=nb_read_packets -of csv=p=0 "$M/$n.mp4")
sel=""; for k in 1 2 3 4 5 6; do sel="$sel+eq(n\,$(( N*(2*k-1)/12 )))"; done
ffmpeg -y -loglevel error -i "$M/$n.mp4" -vf "select='${sel#+}',scale=480:-1,tile=3x2" -frames:v 1 -vsync 0 "/tmp/takes/$n-sheet.jpg"
rm -rf "$T/frames"
echo "OK $n: $(( N / 30 )) s, $(du -h "$M/$n.mp4" | cut -f1). Look at /tmp/takes/$n-sheet.jpg. Expected, then the readings:"; head -1 "$L"; sed -n "/{/,/}/p" "$L" | tail -15
