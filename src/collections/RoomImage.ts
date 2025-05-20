import type { CollectionConfig } from 'payload'

export const RoomImageCollection: CollectionConfig = {
  slug: 'room-image',
  labels: {
    singular: 'Raum Foto',
    plural: 'Raum Fotos',
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
      label: 'Raum Foto',
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      label: 'Beschreibung',
      admin: {
        placeholder: 'Beschreibung des Bildes (z.B. Raumname)',
      },
    },
  ],
}
