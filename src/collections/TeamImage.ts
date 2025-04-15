import type { CollectionConfig } from 'payload'

export const TeamImageCollection: CollectionConfig = {
  slug: 'team-image',
  labels: {
    singular: 'Team Image',
    plural: 'Team Images',
  },
  admin: {
    useAsTitle: 'description',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // This links to your Media collection
      required: true,
      label: 'Team Bild',
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      label: 'Beschreibung',
      admin: {
        placeholder: 'Beschreibung des Bildes (z.B. Teamfoto)',
      },
    },
  ],
}
