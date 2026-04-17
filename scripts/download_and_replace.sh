#!/usr/bin/env bash
set -euo pipefail

# Create thumbs dir
mkdir -p assets/thumbs

# Extract unique Wikimedia URLs from index.html
grep -oE 'https://upload.wikimedia.org[^" ]+' index.html | awk '!seen[$0]++' > /tmp/wikimedia_urls.txt

# Download each URL to assets/thumbs/imgNN.ext
i=1
while IFS= read -r url; do
  [ -z "$url" ] && continue
  ext="${url##*.}"
  case "$ext" in jpg|jpeg|png|svg|gif) ;; *) ext="jpg";; esac
  fname=$(printf "img%02d.%s" "$i" "$ext")
  out="assets/thumbs/$fname"
  echo "Downloading $url -> $out"
  # Use curl with retries; on failure copy placeholder
  if ! curl -fL --retry 5 --retry-delay 5 --max-time 60 -o "$out" "$url"; then
    echo "Download failed for $url, using placeholder"
    cp assets/placeholder.svg "$out" || true
  fi
  i=$((i+1))
done < /tmp/wikimedia_urls.txt

# Replace occurrences in index.html with local paths
cp index.html index.html.bak

i=1
while IFS= read -r url; do
  [ -z "$url" ] && continue
  ext="${url##*.}"
  case "$ext" in jpg|jpeg|png|svg|gif) ;; *) ext="jpg";; esac
  fname=$(printf "img%02d.%s" "$i" "$ext")
  out_path="assets/thumbs/$fname"
  # escape characters for perl
  esc_url=$(printf '%s' "$url" | sed 's/[\\/&]/\\&/g')
  perl -0777 -pe "s/$esc_url/$out_path/g" -i index.html
  i=$((i+1))
done < /tmp/wikimedia_urls.txt

echo "Downloaded images and updated index.html. Backup saved as index.html.bak"
