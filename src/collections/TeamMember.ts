import { CollectionConfig } from 'payload'

const TeamMembers: CollectionConfig = {
  slug: 'team-members', // The API endpoint for this collection
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titel',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Telefonnummer',
    },
    {
      name: 'mail',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection for image uploads
      required: true,
      label: 'Profile Picture',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
    },
  ],
}

export default TeamMembers
