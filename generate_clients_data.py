import os
import re

# Get all files from public/clients
logo_files = sorted(os.listdir('public/clients'))

# Generate JavaScript data
js_content = '''// ========================================
// CLIENTS DATA - Ready for Sanity Integration
// ========================================

// TODO: Import Sanity client when ready
// import { sanityClient } from '../lib/sanity';

const CLIENTS_DATA = [
'''

for i, filename in enumerate(logo_files):
    # Extract clean name from filename
    name = re.sub(r'[-_]', ' ', os.path.splitext(filename)[0])
    name = name.title()
    
    # Create ID
    client_id = os.path.splitext(filename)[0].lower().replace(' ', '-')
    
    js_content += f'  {{ id: "{client_id}", name: "{name}", logo: "/clients/{filename}" }}'
    
    if i < len(logo_files) - 1:
        js_content += ',\n'
    else:
        js_content += '\n'

js_content += '''];

/**
 * Get all clients
 * TODO: Replace with Sanity query when ready
 */
export async function getClients() {
  return CLIENTS_DATA;
  
  // SANITY VERSION (uncomment when ready):
  // const query = `*[_type == "client"] | order(name asc) {
  //   "id": slug.current,
  //   name,
  //   "logo": logo.asset->url
  // }`;
  // return await sanityClient.fetch(query);
}

export const clients = CLIENTS_DATA;
'''

# Write to file
with open('src/data/clients.js', 'w') as f:
    f.write(js_content)

print(f"✅ Generated src/data/clients.js with {len(logo_files)} clients")
