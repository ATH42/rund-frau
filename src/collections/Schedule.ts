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
        },
        {
            name: 'date',
            type: 'date',
            required: true,
        },
        {
            name: 'content',
            type: 'text',
            required: true,
        },
    ],
}
