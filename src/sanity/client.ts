import { createClient } from 'next-sanity'

import { projectId, dataset } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: 'v2025-03-04',
  useCdn: true,
})
