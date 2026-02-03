import { defineType, defineField } from 'sanity'

export const clientLogo = defineType({
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'שם החברה',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'לוגו',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'סדר תצוגה',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'שם',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})
