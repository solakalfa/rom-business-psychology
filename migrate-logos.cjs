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

const clientsDir = path.join(__dirname, 'public', 'clients');
const files = fs.readdirSync(clientsDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

async function migrate() {
  console.log('מעלה ' + files.length + ' לוגואים...\n');
  let success = 0;
  let fail = 0;

  for (const file of files) {
    const name = path.basename(file, path.extname(file)).replace(/-/g, ' ').replace(/_/g, ' ');
    const filePath = path.join(clientsDir, file);
    
    try {
      const imageAsset = await client.assets.upload('image', fs.createReadStream(filePath), {
        filename: file,
      });

      await client.create({
        _type: 'clientLogo',
        name: name,
        logo: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id },
        },
      });

      success++;
      console.log('✅ (' + success + '/' + files.length + ') ' + name);
    } catch (err) {
      fail++;
      console.log('❌ ' + name + ' - ' + err.message);
    }
  }

  console.log('\n🎉 סיום! הצלחות: ' + success + ', כשלונות: ' + fail);
}

migrate();
