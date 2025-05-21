// src/sanity/imageUrlBuilder.ts
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'
import { projectId, dataset } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-07-11', // Use the latest API version
  useCdn: true, // Set to false if you need real-time updates
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// For file URLs (like videos)
export function fileUrlFor(fileRef: string) {
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileRef.replace('file-', '').replace('-', '.')}`
}
