import { defineType, defineField } from 'sanity'

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'כותרת',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'תקציר',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'category',
      title: 'קטגוריה',
      type: 'string',
      options: {
        list: [
          { title: 'From the Press', value: 'From the Press' },
          { title: 'Podcasts', value: 'Podcasts' },
          { title: 'Research', value: 'Research' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'קישור',
      type: 'url',
    }),
    defineField({
      name: 'pdfFile',
      title: 'קובץ PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'image',
      title: 'תמונה',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'תאריך פרסום',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'תאריך פרסום',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
