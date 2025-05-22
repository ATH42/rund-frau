import { defineLive } from 'next-sanity'
import { client } from '@/sanity/client'
import { token } from './env'

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: 'vX' }),
  serverToken: token,
  browserToken: token,
})
