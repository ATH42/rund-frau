import { CollectionConfig } from 'payload'

const ContactReasons: CollectionConfig = {
  slug: 'contact-reasons',
  labels: {
    singular: 'Anliegen',
    plural: 'Anliegen',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'reason',
      type: 'text',
      required: true,
      label: 'Anliegen',
    },
  ],
}

export default ContactReasons
