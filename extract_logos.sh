#!/bin/bash

# Extract all image URLs from HTML (macOS compatible)
sed -n 's/.*src="__\?\([^"]*\)__\?".*/\1/p' /tmp/clients_html.txt | sort -u > /tmp/logo_urls.txt

echo "✅ Extracted $(wc -l < /tmp/logo_urls.txt | tr -d ' ') unique logo URLs"
echo "📄 URLs saved to: /tmp/logo_urls.txt"
echo ""
echo "Preview (first 10):"
head -10 /tmp/logo_urls.txt
