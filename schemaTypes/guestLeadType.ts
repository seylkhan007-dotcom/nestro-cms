import {defineField, defineType} from 'sanity'

const guestLeadStatusLabels: Record<string, string> = {
  new: 'Новая',
  contacted: 'Связались',
  booked: 'Забронировано',
  cancelled: 'Отмена',
}

const guestLeadSourceLabels: Record<string, string> = {
  website: 'Сайт',
  whatsapp: 'WhatsApp',
  booking: 'Booking',
  manual: 'Вручную',
}

export const guestLeadType = defineType({
  name: 'guestLead',
  title: 'Заявки гостей',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      description: 'Имя гостя, если указано.',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Телефон / WhatsApp',
      description: 'Контактный номер гостя.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Сообщение',
      description: 'Сообщение или комментарий гостя.',
      type: 'text',
    }),
    defineField({
      name: 'apartment',
      title: 'Апартамент',
      description: 'Апартамент, по которому пришла заявка.',
      type: 'reference',
      to: [{type: 'apartment'}],
    }),
    defineField({
      name: 'checkinDate',
      title: 'Дата заезда',
      type: 'date',
    }),
    defineField({
      name: 'checkoutDate',
      title: 'Дата выезда',
      type: 'date',
    }),
    defineField({
      name: 'guestsCount',
      title: 'Количество гостей',
      description: 'Сколько гостей планирует проживание.',
      type: 'number',
      validation: (Rule) => Rule.integer().min(1).max(20),
    }),
    defineField({
      name: 'source',
      title: 'Источник заявки',
      type: 'string',
      options: {
        list: [
          {title: 'Сайт', value: 'website'},
          {title: 'WhatsApp', value: 'whatsapp'},
          {title: 'Booking', value: 'booking'},
          {title: 'Вручную', value: 'manual'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'website',
    }),
    defineField({
      name: 'status',
      title: 'Статус заявки',
      type: 'string',
      options: {
        list: [
          {title: 'Новая', value: 'new'},
          {title: 'Связались', value: 'contacted'},
          {title: 'Забронировано', value: 'booked'},
          {title: 'Отмена', value: 'cancelled'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'new',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: 'Дата создания',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      phone: 'phone',
      name: 'name',
      status: 'status',
      source: 'source',
      checkinDate: 'checkinDate',
    },
    prepare(selection) {
      const phone = typeof selection.phone === 'string' ? selection.phone : undefined
      const name = typeof selection.name === 'string' ? selection.name : undefined
      const status =
        typeof selection.status === 'string'
          ? guestLeadStatusLabels[selection.status] || selection.status
          : undefined
      const source =
        typeof selection.source === 'string'
          ? guestLeadSourceLabels[selection.source] || selection.source
          : undefined
      const checkinDate =
        typeof selection.checkinDate === 'string' ? `заезд ${selection.checkinDate}` : undefined
      const subtitle = [status, source, checkinDate].filter(Boolean).join(' · ')

      return {
        title: phone || name || 'Заявка гостя',
        subtitle,
      }
    },
  },
})
