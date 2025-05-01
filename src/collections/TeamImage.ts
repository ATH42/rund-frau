import type { CollectionConfig } from 'payload'

export const TeamImageCollection: CollectionConfig = {
  slug: 'team-image',
  labels: {
    singular: 'Team Bild',
    plural: 'Team Bilder',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'description',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Team Bild',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titel',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Beschreibung',
      admin: {
        placeholder: 'Beschreibung des Bildes (z.B. Teamfoto)',
      },
    },
  ],
}
