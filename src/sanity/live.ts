import { defineLive } from 'next-sanity'
import { client } from '@/sanity/client'

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: '2024-11-01' }),
  serverToken: process.env.SANITY_API_TOKEN,
  browserToken: process.env.SANITY_API_TOKEN,
})
