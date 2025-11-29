import re
import sys

# Read from stdin
html = sys.stdin.read()

# Extract all image URLs
urls = re.findall(r'src="([^"]+)"', html)

# Remove duplicates and sort
unique_urls = sorted(set(urls))

# Save to file
with open('logo_urls.txt', 'w') as f:
    for url in unique_urls:
        f.write(url + '\n')

print(f"✅ Extracted {len(unique_urls)} unique logo URLs")
print(f"📄 URLs saved to: logo_urls.txt")
