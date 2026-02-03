import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { publication } from './src/sanity/schemas/publication'
import { clientLogo } from './src/sanity/schemas/clientLogo'

export default defineConfig({
  projectId: '8h33lrqb',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [publication, clientLogo],
  },
})
