const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: '8h33lrqb',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2025-02-03',
});

// Step 1: Build name map from clients.js
const clientsFile = fs.readFileSync('src/data/clients.js', 'utf8');
const nameMap = {};
const regex = /name:\s*"([^"]+)",\s*logo:\s*"\/clients\/([^"]+)"/g;
let match;
while ((match = regex.exec(clientsFile)) !== null) {
  nameMap[match[2]] = match[1]; // filename -> proper name
}
console.log('Found ' + Object.keys(nameMap).length + ' names in clients.js\n');

async function run() {
  // Step 2: Delete all existing client logos
  const existing = await client.fetch('*[_type == "clientLogo"]._id');
  console.log('Deleting ' + existing.length + ' existing logos...');
  for (const id of existing) {
    await client.delete(id);
  }
  console.log('✅ All deleted\n');

  // Step 3: Re-upload with correct names
  const clientsDir = path.join(__dirname, 'public', 'clients');
  const files = fs.readdirSync(clientsDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));
  let success = 0;

  for (const file of files) {
    const properName = nameMap[file] || file.replace(/\.[^.]+$/, '');
    const filePath = path.join(clientsDir, file);

    try {
      const imageAsset = await client.assets.upload('image', fs.createReadStream(filePath), {
        filename: file,
      });

      await client.create({
        _type: 'clientLogo',
        name: properName,
        logo: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id },
        },
      });

      success++;
      console.log('✅ (' + success + '/' + files.length + ') ' + properName);
    } catch (err) {
      console.log('❌ ' + properName + ' - ' + err.message);
    }
  }

  console.log('\n🎉 סיום! ' + success + ' לוגואים עם שמות נכונים');
}

run();
