#!/usr/bin/env bash
# for f in audio/*.wav; do ffmpeg -i "$f" -ac 2 -codec:a libmp3lame -b:a 136k -ar 44100 "public/${f%.wav}.mp3"; done

for old in public/audio/*.mp3; do
  new=$(echo $old | sed -e 's/\.png$/test.png/')
  mv -v "$old" "$new"
done
