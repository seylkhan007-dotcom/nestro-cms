import {defineField, defineType} from 'sanity'

export const advantageType = defineType({
  name: 'advantage',
  title: 'Advantages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок / Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание / Description',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconKey',
      title: 'Ключ иконки',
      type: 'string',
      description: 'Например: shield, home, messageCircle, keyRound, waves, sparkles',
      validation: (Rule) => Rule.required().min(2).max(40),
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
      titleRu: 'title.ru',
      titleEn: 'title.en',
      subtitle: 'iconKey',
    },
    prepare({titleRu, titleEn, subtitle}) {
      return {
        title: titleRu || titleEn || 'Advantage',
        subtitle: subtitle ? `icon: ${subtitle}` : 'advantage',
      }
    },
  },
})