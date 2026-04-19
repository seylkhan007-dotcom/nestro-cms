import {defineField, defineType} from 'sanity'

export const apartmentType = defineType({
  name: 'apartment',
  title: 'Apartments',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название / Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Краткое описание / Short Description',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'capacity',
      title: 'Вместимость гостей',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1).max(20),
    }),
    defineField({
      name: 'district',
      title: 'Район / District',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'viewType',
      title: 'Тип вида',
      type: 'string',
      options: {
        list: [
          {title: 'Sea View', value: 'sea-view'},
          {title: 'City View', value: 'city-view'},
          {title: 'Mountain View', value: 'mountain-view'},
          {title: 'Mixed View', value: 'mixed-view'},
          {title: 'No Specific View', value: 'no-specific-view'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceFrom',
      title: 'Цена от',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Валюта',
      type: 'string',
      options: {
        list: [
          {title: 'GEL', value: 'GEL'},
          {title: 'USD', value: 'USD'},
          {title: 'EUR', value: 'EUR'},
        ],
        layout: 'radio',
      },
      initialValue: 'GEL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Главное фото',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.max(10),
    }),
    defineField({
      name: 'amenities',
      title: 'Удобства',
      type: 'array',
      of: [{type: 'localizedString'}],
      validation: (Rule) => Rule.max(12),
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
      titleRu: 'title.ru',
      titleEn: 'title.en',
      subtitleRu: 'district.ru',
      media: 'coverImage',
    },
    prepare(selection) {
      const titleRu =
        typeof selection.titleRu === 'string' ? selection.titleRu : undefined
      const titleEn =
        typeof selection.titleEn === 'string' ? selection.titleEn : undefined
      const subtitleRu =
        typeof selection.subtitleRu === 'string'
          ? selection.subtitleRu
          : undefined

      return {
        title: titleRu || titleEn || 'Apartment',
        subtitle: subtitleRu ? `Локация: ${subtitleRu}` : 'Apartment',
        media: selection.media,
      }
    },
  },
})