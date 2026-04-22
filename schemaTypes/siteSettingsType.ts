import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Название бренда',
      description: 'Например: NESTRO Apartments.',
      type: 'string',
      initialValue: 'NESTRO Apartments',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandSubtitle',
      title: 'Подзаголовок бренда',
      description: 'Например: Apartments in Batumi.',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      description: 'Основной телефон для связи.',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      description: 'Номер WhatsApp в международном формате. Например: +995558209739.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'telegram',
      title: 'Telegram',
      description: 'Telegram username или ссылка.',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      description: 'Ссылка на Instagram.',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Адрес',
      description: 'Город или адрес компании.',
      type: 'localizedString',
    }),
    defineField({
      name: 'workingHours',
      title: 'Часы работы',
      description: 'Например: Ежедневно 09:00–23:00.',
      type: 'localizedString',
    }),
    defineField({
      name: 'defaultWhatsappMessageGuest',
      title: 'Сообщение WhatsApp для гостей',
      description:
        'Текст, который будет подставляться в WhatsApp при клике на кнопки бронирования.',
      type: 'localizedText',
    }),
    defineField({
      name: 'defaultWhatsappMessageOwner',
      title: 'Сообщение WhatsApp для собственников',
      description: 'Текст для кнопок сотрудничества.',
      type: 'localizedText',
    }),
  ],
  preview: {
    select: {
      brandName: 'brandName',
      whatsapp: 'whatsapp',
      phone: 'phone',
    },
    prepare(selection) {
      const brandName = typeof selection.brandName === 'string' ? selection.brandName : undefined
      const whatsapp = typeof selection.whatsapp === 'string' ? selection.whatsapp : undefined
      const phone = typeof selection.phone === 'string' ? selection.phone : undefined

      return {
        title: brandName || 'Настройки сайта',
        subtitle: whatsapp || phone || '',
      }
    },
  },
})
