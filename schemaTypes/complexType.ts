import {defineField, defineType} from 'sanity'

export const complexType = defineType({
  name: 'complex',
  title: 'Комплексы',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      description: 'Название комплекса. Например: Alliance Palace, White Sails.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'URL-идентификатор. Используйте английские буквы, цифры и дефисы.',
      type: 'slug',
      options: {
        source: 'title.ru',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Адрес',
      description: 'Короткий адрес комплекса.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'district',
      title: 'Район',
      description: 'Район или локация. Например: Новый бульвар, первая линия, центр.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Главное фото',
      description: 'Главное фото комплекса.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      description: 'Краткое описание комплекса для менеджеров или сайта.',
      type: 'localizedText',
    }),
    defineField({
      name: 'sortPriority',
      title: 'Порядок сортировки',
      description: 'Чем меньше число, тем выше комплекс в списке.',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      titleRu: 'title.ru',
      titleEn: 'title.en',
      districtRu: 'district.ru',
      districtEn: 'district.en',
      addressRu: 'address.ru',
      addressEn: 'address.en',
      media: 'coverImage',
    },
    prepare(selection) {
      const titleRu = typeof selection.titleRu === 'string' ? selection.titleRu : undefined
      const titleEn = typeof selection.titleEn === 'string' ? selection.titleEn : undefined
      const districtRu = typeof selection.districtRu === 'string' ? selection.districtRu : undefined
      const districtEn = typeof selection.districtEn === 'string' ? selection.districtEn : undefined
      const addressRu = typeof selection.addressRu === 'string' ? selection.addressRu : undefined
      const addressEn = typeof selection.addressEn === 'string' ? selection.addressEn : undefined

      return {
        title: titleRu || titleEn || 'Комплекс',
        subtitle: districtRu || districtEn || addressRu || addressEn,
        media: selection.media,
      }
    },
  },
})
