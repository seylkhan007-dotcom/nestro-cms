import {defineField, defineType} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Отзывы',
  type: 'document',
  fields: [
    defineField({
      name: 'guestName',
      title: 'Имя гостя',
      description: 'Имя гостя, которое будет показано на сайте.',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    defineField({
      name: 'country',
      title: 'Страна / город',
      description: 'Например: Польша, Тбилиси, Казахстан.',
      type: 'string',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'rating',
      title: 'Рейтинг',
      description: 'Оценка от 1 до 5.',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'text',
      title: 'Текст отзыва',
      description: 'Короткий отзыв гостя.',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stayType',
      title: 'Тип гостя',
      description: 'Выберите подходящий тип гостя.',
      type: 'string',
      options: {
        list: [
          {title: 'Турист', value: 'tourist'},
          {title: 'Семья', value: 'family'},
          {title: 'Бизнес', value: 'business'},
          {title: 'Пара', value: 'couple'},
          {title: 'Долгое проживание', value: 'long-stay'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Показывать на главной',
      description: 'Если включено, отзыв может отображаться на сайте.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'orderRank',
      title: 'Порядок сортировки',
      description: 'Чем меньше число, тем выше отзыв в списке.',
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
        subtitle: subtitle ? subtitle : 'Отзыв',
      }
    },
  },
})
