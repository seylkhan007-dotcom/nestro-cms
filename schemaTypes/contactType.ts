import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Контакты',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название блока',
      description: 'Например: Контакты NESTRO.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'Например: +995558209739',
      validation: (Rule) => Rule.required().min(5).max(30),
    }),
    defineField({
      name: 'telegram',
      title: 'Telegram',
      type: 'string',
      description: 'Например: @nestrogroup или номер',
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      description: 'Основной номер телефона, если отличается от WhatsApp.',
      type: 'string',
      validation: (Rule) => Rule.max(30),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      description: 'Email для связи с менеджером.',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      description: 'Ссылка на Instagram.',
      type: 'url',
    }),
    defineField({
      name: 'address',
      title: 'Адрес',
      description: 'Адрес или город, который будет показан в контактах.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workingHours',
      title: 'Часы связи',
      description: 'Например: Ежедневно 09:00–23:00.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      titleRu: 'title.ru',
      titleEn: 'title.en',
      subtitle: 'whatsapp',
    },
    prepare({titleRu, titleEn, subtitle}) {
      return {
        title: titleRu || titleEn || 'Контакты',
        subtitle: subtitle ? `WhatsApp: ${subtitle}` : 'Контакты',
      }
    },
  },
})
