import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название блока / Title',
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
      type: 'string',
      validation: (Rule) => Rule.max(30),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'address',
      title: 'Адрес / Address',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workingHours',
      title: 'Часы связи / Working Hours',
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
        title: titleRu || titleEn || 'Contacts',
        subtitle: subtitle ? `WhatsApp: ${subtitle}` : 'Contacts',
      }
    },
  },
})