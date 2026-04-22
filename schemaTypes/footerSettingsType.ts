import {defineField, defineType} from 'sanity'

export const footerSettingsType = defineType({
  name: 'footerSettings',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Описание',
      description: 'Короткое описание компании в подвале сайта.',
      type: 'localizedText',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright',
      description: 'Например: © NESTRO Apartments. All rights reserved.',
      type: 'localizedString',
    }),
    defineField({
      name: 'showDeveloperCredit',
      title: 'Показывать разработчика',
      description: 'Показывать маленькую строку Website by Empire Web.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'developerCreditText',
      title: 'Текст разработчика',
      description: 'Например: Website by Empire Web.',
      type: 'string',
    }),
    defineField({
      name: 'quickLinks',
      title: 'Быстрые ссылки',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Название',
              type: 'localizedString',
            }),
            defineField({
              name: 'href',
              title: 'Ссылка',
              type: 'string',
            }),
            defineField({
              name: 'order',
              title: 'Порядок',
              type: 'number',
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
                title: titleRu || titleEn || 'Быстрая ссылка',
                subtitle: [href, isVisible ? undefined : 'Скрыта'].filter(Boolean).join(' · '),
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      copyrightRu: 'copyrightText.ru',
      copyrightEn: 'copyrightText.en',
    },
    prepare(selection) {
      const copyrightRu =
        typeof selection.copyrightRu === 'string' ? selection.copyrightRu : undefined
      const copyrightEn =
        typeof selection.copyrightEn === 'string' ? selection.copyrightEn : undefined

      return {
        title: 'Footer',
        subtitle: copyrightRu || copyrightEn || '',
      }
    },
  },
})
