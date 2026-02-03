import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: '8h33lrqb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-02-03',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getPublications() {
  return await sanityClient.fetch(
    `*[_type == "publication"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      category,
      link,
      "pdfUrl": pdfFile.asset->url,
      "imageUrl": image.asset->url,
      publishedAt
    }`
  )
}

export async function getClientLogos() {
  return await sanityClient.fetch(
    `*[_type == "clientLogo"] | order(name asc) {
      _id,
      name,
      "logoUrl": logo.asset->url,
      order
    }`
  )
}
