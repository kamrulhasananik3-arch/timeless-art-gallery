#!/usr/bin/env bash
set -euo pipefail

mkdir -p assets/thumbs

# gather unique upload.wikimedia.org full-size or thumb URLs from index.html
tmpfile="/tmp/wikimedia_urls_$$.txt"
grep -oE 'https://upload.wikimedia.org[^" ]+' index.html | awk '!seen[$0]++' > "$tmpfile"
urls=()
while IFS= read -r line; do
  urls+=("$line")
done < "$tmpfile"
rm -f "$tmpfile"

# start index after existing files
i=$(ls assets/thumbs 2>/dev/null | wc -l || echo 0)
if [ -z "$i" ] || [ "$i" -lt 0 ]; then i=0; fi
start=$((i+1))

echo "Found ${#urls[@]} remote URLs; will download thumb variants starting at img$(printf '%02d' $start)."

for idx in "${!urls[@]}"; do
  url="${urls[$idx]}"
  # create a thumbnail variant URL (use 640px)
  # handle already thumb URLs: if '/thumb/' present, keep and use 640px version
  thumb=""
  if [[ "$url" =~ /thumb/ ]]; then
    # replace last path segment with 640px-<basename>
    basename=$(basename "$url")
    # remove leading size if exists
    # construct new thumb URL by replacing the final component
    thumb=$(echo "$url" | sed -E 's|/[^/]+$|/640px-\0|')
    # simpler fallback: use sed to convert to 640px form
    thumb=$(echo "$url" | sed -E 's|/([0-9]+)px-[^/]+$|/640px-\0|' || true)
  fi

  if [ -z "$thumb" ]; then
    # turn full file URL into thumb: /wikipedia/commons/xxx/yyy -> /wikipedia/commons/thumb/xxx/yyy/<size>px-basename
    if [[ "$url" =~ /wikipedia/(commons|en)/ ]]; then
      prefix="https://upload.wikimedia.org/wikipedia/"
      rest=${url#https://upload.wikimedia.org/wikipedia/}
      # if rest starts with 'commons/' or 'en/' handle
      # find basename
      basename=$(basename "$url")
      thumb="${prefix}commons/thumb/${rest}/${basename}"
      # ensure thumb ends with '/640px-<basename>'
      thumb=$(echo "$thumb" | sed -E "s|/+$||")
      # replace possible duplicate basename
      thumb="${prefix}commons/thumb/$(echo "$rest" | sed 's|/|/|g')/640px-${basename}"
    else
      thumb="$url"
    fi
  fi

  # normalize thumb (if malformed fallback to original)
  if [ -z "$thumb" ]; then thumb="$url"; fi

  ext="${thumb##*.}"
  case "$ext" in jpg|jpeg|png|gif|svg) ;; *) ext="jpg";; esac
  fname=$(printf "img%02d.%s" $((start+idx)) "$ext")
  out="assets/thumbs/$fname"

  echo "Downloading thumb for: $url -> $out"
  # curl with retries, smaller timeout and resume support
  if ! curl -fL --retry 6 --retry-delay 5 --connect-timeout 15 --max-time 120 -o "$out" "$thumb"; then
    echo "Primary thumb failed, trying original URL"
    if ! curl -fL --retry 4 --retry-delay 5 --connect-timeout 15 --max-time 120 -o "$out" "$url"; then
      echo "Both attempts failed — using placeholder for $out"
      cp assets/placeholder.svg "$out" || true
    fi
  fi

  # replace url in index.html with local path (only first occurrence) using perl
  esc=$(printf '%s' "$url" )
  perl -0777 -i.bak -pe "s/\Q$esc\E/$out/" index.html || true
done

echo "Done. Updated index.html and saved backups as index.html.bak and index.html.bak2 if any."