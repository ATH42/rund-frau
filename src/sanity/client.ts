import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'x8r4dlu1',
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: false,
})
