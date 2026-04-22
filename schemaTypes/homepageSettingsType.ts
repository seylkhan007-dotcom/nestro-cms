import {defineField, defineType} from 'sanity'

export const homepageSettingsType = defineType({
  name: 'homepageSettings',
  title: 'Главная страница',
  type: 'document',
  fields: [
    defineField({
      name: 'navigationAdvantages',
      title: 'Навигация: Преимущества',
      description: 'Текст пункта меню для блока преимуществ.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigationApartments',
      title: 'Навигация: Апартаменты',
      description: 'Текст пункта меню для блока апартаментов.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigationReviews',
      title: 'Навигация: Отзывы',
      description: 'Текст пункта меню для блока отзывов.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigationContacts',
      title: 'Навигация: Контакты',
      description: 'Текст пункта меню для блока контактов.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBadge',
      title: 'Бейдж первого экрана',
      description: 'Короткая надпись над главным заголовком.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Заголовок первого экрана',
      description: 'Главный заголовок на первом экране.',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Описание первого экрана',
      description: 'Короткое описание под главным заголовком.',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroPrimaryButton',
      title: 'Основная кнопка первого экрана',
      description: 'Текст главной кнопки.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSecondaryButton',
      title: 'Вторая кнопка первого экрана',
      description: 'Текст дополнительной кнопки.',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'advantagesBadge',
      title: 'Бейдж блока преимуществ',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'advantagesTitle',
      title: 'Заголовок блока преимуществ',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'advantagesDescription',
      title: 'Описание блока преимуществ',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'apartmentsBadge',
      title: 'Бейдж блока апартаментов',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'apartmentsTitle',
      title: 'Заголовок блока апартаментов',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'apartmentsDescription',
      title: 'Описание блока апартаментов',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviewsBadge',
      title: 'Бейдж блока отзывов',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviewsTitle',
      title: 'Заголовок блока отзывов',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviewsDescription',
      title: 'Описание блока отзывов',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactsBadge',
      title: 'Бейдж блока контактов',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactsTitle',
      title: 'Заголовок блока контактов',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactsDescription',
      title: 'Описание блока контактов',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Главная страница',
      }
    },
  },
})
