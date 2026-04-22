import {defineField, defineType} from 'sanity'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Навигация',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название набора меню',
      description: 'Например: Главное меню.',
      type: 'string',
      initialValue: 'Главное меню',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Пункты меню',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Название пункта',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Ссылка',
              description: 'Например: #apartments, #reviews, #contacts.',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'order',
              title: 'Порядок',
              type: 'number',
              initialValue: 1,
            }),
            defineField({
              name: 'isVisible',
              title: 'Показывать',
              type: 'boolean',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              titleRu: 'label.ru',
              titleEn: 'label.en',
              href: 'href',
              isVisible: 'isVisible',
            },
            prepare(selection) {
              const titleRu = typeof selection.titleRu === 'string' ? selection.titleRu : undefined
              const titleEn = typeof selection.titleEn === 'string' ? selection.titleEn : undefined
              const href = typeof selection.href === 'string' ? selection.href : undefined
              const isVisible = selection.isVisible !== false

              return {
                title: titleRu || titleEn || 'Пункт меню',
                subtitle: [href, isVisible ? undefined : 'Скрыт'].filter(Boolean).join(' · '),
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const title = typeof selection.title === 'string' ? selection.title : undefined
      const itemsCount = Array.isArray(selection.items) ? selection.items.length : 0

      return {
        title: title || 'Навигация',
        subtitle: itemsCount ? `Пунктов меню: ${itemsCount}` : 'Пункты меню не добавлены',
      }
    },
  },
})
