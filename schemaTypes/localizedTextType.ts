import {defineField, defineType} from 'sanity'

export const localizedTextType = defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({
      name: 'ru',
      title: 'Русский',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(1).max(1200),
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(1).max(1200),
    }),
  ],
})