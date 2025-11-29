#!/bin/bash

# Create directory for logos
mkdir -p public/clients

# Counter
count=0
total=$(wc -l < logo_urls.txt | tr -d ' ')

echo "📥 Downloading $total logos..."
echo ""

# Download each logo
while IFS= read -r url; do
  count=$((count + 1))
  
  # Extract filename from URL
  filename=$(basename "$url")
  
  # Download
  echo "[$count/$total] Downloading $filename..."
  curl -s -o "public/clients/$filename" "$url"
  
done < logo_urls.txt

echo ""
echo "✅ Downloaded $count logos to public/clients/"
