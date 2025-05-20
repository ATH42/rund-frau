import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Angebot',
    plural: 'Angebote',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titel des Angebots',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Bild zum Angebot',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Beschreibung zum Angebot',
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Paragraphen zum Angebot',
      maxRows: 4,
      fields: [
        {
          name: 'paragraphTitle',
          type: 'text',
          label: 'Paragraph Titel',
          required: true,
        },
        {
          name: 'paragraph',
          type: 'textarea',
          label: 'Paragraph',
          required: true,
        },
      ],
    },
  ],
}

export default Services
