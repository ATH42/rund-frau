import { CollectionConfig } from 'payload'

export const CourseCollection: CollectionConfig = {
  slug: 'courses',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Kurs',
    plural: 'Kurse',
  },
  fields: [
    {
      name: 'title',
      label: 'Titel',
      type: 'text',
      admin: { placeholder: 'Geben Sie den Kurstitel ein' },
    },
    {
      name: 'description',
      label: 'Beschreibung',
      type: 'text',
      admin: { placeholder: 'Geben Sie eine Beschreibung des Kurses ein' },
    },
    {
      name: 'date',
      label: 'Datum',
      type: 'date',
      admin: {
        placeholder: 'Wählen Sie Datum und Uhrzeit aus',
        date: {
          pickerAppearance: 'dayAndTime',
          timeFormat: 'HH:mm',
        },
      },
    },
    {
      name: 'maxAttendees',
      label: 'Maximale Teilnehmerzahl',
      type: 'number',
      admin: { placeholder: 'Geben Sie die maximale Teilnehmerzahl ein' },
    },
    {
      name: 'location',
      label: 'Ort',
      type: 'text',
      admin: { placeholder: 'Geben Sie den Kursort ein' },
    },
    {
      name: 'price',
      label: 'Preis',
      type: 'number',
      admin: { placeholder: 'Geben Sie den Kurspreis ein' },
    },
  ],
}
