import { defineQuery } from 'next-sanity'

export const INTRO_QUERY = defineQuery(`*[_type == "intro")][0]{
  _id,
  title,
  description
}`)
