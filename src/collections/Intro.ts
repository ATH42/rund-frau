import { CollectionConfig } from 'payload'

export const IntroCollection: CollectionConfig = {
  slug: 'intro',
  labels: {
    singular: 'Leitbild',
    plural: 'Leitbild',
  },
  access: {
    read: () => true,
  },
  fields: [
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
    },
  ],
}
