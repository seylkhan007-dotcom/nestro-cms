import {defineField, defineType} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'guestName',
      title: 'Имя гостя',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    defineField({
      name: 'country',
      title: 'Страна / город',
      type: 'string',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'rating',
      title: 'Рейтинг',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'text',
      title: 'Текст отзыва / Review Text',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stayType',
      title: 'Тип гостя',
      type: 'string',
      options: {
        list: [
          {title: 'Tourist', value: 'tourist'},
          {title: 'Family', value: 'family'},
          {title: 'Business', value: 'business'},
          {title: 'Couple', value: 'couple'},
          {title: 'Long Stay', value: 'long-stay'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Показывать на главной',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'orderRank',
      title: 'Порядок сортировки',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.required().integer().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'guestName',
      subtitle: 'country',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle ? subtitle : 'Review',
      }
    },
  },
})