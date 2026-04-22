import {defineField, defineType} from 'sanity'

export const advantageType = defineType({
  name: 'advantage',
  title: 'Преимущества',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      description: 'Короткое название преимущества. Например: Быстрая связь.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      description: 'Короткое описание преимущества для сайта.',
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
      description: 'Чем меньше число, тем выше преимущество в списке.',
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
        title: titleRu || titleEn || 'Преимущество',
        subtitle: subtitle ? `Иконка: ${subtitle}` : 'Преимущество',
      }
    },
  },
})
