import {defineField, defineType} from 'sanity'

const ownerLeadStatusLabels: Record<string, string> = {
  new: 'Новая',
  contacted: 'Связались',
  'in-progress': 'В работе',
  rejected: 'Отказ',
}

const ownerLeadPropertyTypeLabels: Record<string, string> = {
  studio: 'Студия',
  'one-bedroom': '1+1',
  'two-bedroom': '2+1',
  other: 'Другое',
}

export const ownerLeadType = defineType({
  name: 'ownerLead',
  title: 'Заявки собственников',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Телефон / WhatsApp',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Сообщение',
      type: 'text',
    }),
    defineField({
      name: 'propertyType',
      title: 'Тип объекта',
      type: 'string',
      options: {
        list: [
          {title: 'Студия', value: 'studio'},
          {title: '1+1', value: 'one-bedroom'},
          {title: '2+1', value: 'two-bedroom'},
          {title: 'Другое', value: 'other'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'complexName',
      title: 'Комплекс',
      description: 'Название комплекса, если собственник указал.',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Статус заявки',
      type: 'string',
      options: {
        list: [
          {title: 'Новая', value: 'new'},
          {title: 'Связались', value: 'contacted'},
          {title: 'В работе', value: 'in-progress'},
          {title: 'Отказ', value: 'rejected'},
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
      propertyType: 'propertyType',
      complexName: 'complexName',
    },
    prepare(selection) {
      const phone = typeof selection.phone === 'string' ? selection.phone : undefined
      const name = typeof selection.name === 'string' ? selection.name : undefined
      const status =
        typeof selection.status === 'string'
          ? ownerLeadStatusLabels[selection.status] || selection.status
          : undefined
      const propertyType =
        typeof selection.propertyType === 'string'
          ? ownerLeadPropertyTypeLabels[selection.propertyType] || selection.propertyType
          : undefined
      const complexName =
        typeof selection.complexName === 'string' ? selection.complexName : undefined
      const subtitle = [status, propertyType, complexName].filter(Boolean).join(' · ')

      return {
        title: phone || name || 'Заявка собственника',
        subtitle,
      }
    },
  },
})
