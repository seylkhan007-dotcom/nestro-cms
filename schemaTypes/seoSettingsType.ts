import {defineField, defineType} from 'sanity'

export const seoSettingsType = defineType({
  name: 'seoSettings',
  title: 'SEO настройки',
  type: 'document',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'SEO заголовок',
      description: 'Заголовок страницы для поисковиков.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO описание',
      description: 'Описание страницы для поисковиков.',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ogTitle',
      title: 'Заголовок для соцсетей',
      description: 'Заголовок при отправке ссылки в мессенджеры и соцсети.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ogDescription',
      title: 'Описание для соцсетей',
      description: 'Описание при отправке ссылки в мессенджеры и соцсети.',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Изображение для соцсетей',
      description: 'Картинка для превью ссылки.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'SEO настройки',
      }
    },
  },
})
