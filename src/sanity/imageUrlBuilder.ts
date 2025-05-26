import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '@/sanity/env'
import { client } from '@/sanity/client'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// For file URLs (like videos)
export function fileUrlFor(fileRef: string) {
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileRef.replace('file-', '').replace('-', '.')}`
}
