import { CollectionConfig } from 'payload'

export const Schedule: CollectionConfig = {
  slug: 'schedule',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Veranstaltungstitel', // Event Title
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Veranstaltungsdatum', // Event Date
      admin: {
        date: {
          pickerAppearance: 'dayOnly', // Customize date picker appearance
        },
      },
    },
    {
      name: 'content',
      type: 'richText', // Use richText for more flexibility
      required: true,
      label: 'Veranstaltungsbeschreibung', // Event Description
    },
    {
      name: 'location',
      type: 'text',
      required: false,
      label: 'Veranstaltungsort', // Event Location
    },
  ],
}
