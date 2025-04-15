import { CollectionConfig } from 'payload'

export const IntroCollection: CollectionConfig = {
  slug: 'intro',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
  ],
}
