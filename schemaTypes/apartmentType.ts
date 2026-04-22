import {defineField, defineType} from 'sanity'

export const apartmentType = defineType({
  name: 'apartment',
  title: 'Апартаменты',
  type: 'document',
  groups: [
    {name: 'main', title: 'Основное'},
    {name: 'parameters', title: 'Параметры'},
    {name: 'photos', title: 'Фото'},
    {name: 'description', title: 'Описание'},
    {name: 'amenities', title: 'Удобства'},
    {name: 'location', title: 'Локация'},
    {name: 'marketing', title: 'Маркетинг'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      description:
        'Название карточки на сайте. Например: Студия с видом на море • Alliance Palace.',
      type: 'localizedString',
      group: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'URL-идентификатор. Используйте английские буквы, цифры и дефисы.',
      type: 'slug',
      group: 'main',
      options: {
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Статус',
      description: 'Активный объект показывается на сайте. Скрытый объект не должен отображаться.',
      type: 'string',
      group: 'main',
      options: {
        list: [
          {title: 'Активный', value: 'active'},
          {title: 'Скрытый', value: 'hidden'},
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'complex',
      title: 'Комплекс',
      description:
        'Выберите комплекс из списка. Если комплекса нет — сначала создайте его в разделе “Комплексы”.',
      type: 'reference',
      group: 'main',
      to: [{type: 'complex'}],
    }),
    defineField({
      name: 'complexName',
      title: 'Название комплекса вручную',
      description: 'Временное поле для старых объектов. Лучше использовать поле “Комплекс” выше.',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'apartmentType',
      title: 'Тип апартамента',
      description: 'Выберите тип квартиры.',
      type: 'string',
      group: 'main',
      options: {
        list: [
          {title: 'Студия', value: 'studio'},
          {title: '1+1', value: 'one-bedroom'},
          {title: '2+1', value: 'two-bedroom'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceFrom',
      title: 'Цена от',
      description: 'Минимальная цена за ночь или период.',
      type: 'number',
      group: 'parameters',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Валюта',
      type: 'string',
      group: 'parameters',
      options: {
        list: [
          {title: 'GEL', value: 'GEL'},
          {title: 'USD', value: 'USD'},
          {title: 'EUR', value: 'EUR'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'GEL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'capacity',
      title: 'Количество гостей',
      description: 'Максимальное количество гостей.',
      type: 'number',
      group: 'parameters',
      validation: (Rule) => Rule.required().integer().min(1).max(10),
    }),
    defineField({
      name: 'rooms',
      title: 'Количество комнат',
      description: 'Например: 1 для студии, 2 для 1+1.',
      type: 'number',
      group: 'parameters',
      validation: (Rule) => Rule.integer().min(1).max(10),
    }),
    defineField({
      name: 'areaM2',
      title: 'Площадь, м²',
      description: 'Площадь апартамента в квадратных метрах.',
      type: 'number',
      group: 'parameters',
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'floor',
      title: 'Этаж',
      description: 'Этаж, на котором находится апартамент.',
      type: 'number',
      group: 'parameters',
      validation: (Rule) => Rule.integer(),
    }),
    defineField({
      name: 'viewType',
      title: 'Вид',
      description: 'Основной вид из апартамента.',
      type: 'string',
      group: 'parameters',
      options: {
        list: [
          {title: 'Вид на море', value: 'sea-view'},
          {title: 'Вид на город', value: 'city-view'},
          {title: 'Вид на горы', value: 'mountain-view'},
          {title: 'Без конкретного вида', value: 'no-specific-view'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bedType',
      title: 'Тип кровати',
      description: 'Основной тип спального места.',
      type: 'string',
      group: 'parameters',
      options: {
        list: [
          {title: 'Двуспальная кровать', value: 'double-bed'},
          {title: 'Queen bed', value: 'queen-bed'},
          {title: 'King bed', value: 'king-bed'},
          {title: 'Диван-кровать', value: 'sofa-bed'},
          {title: 'Кровать + диван', value: 'double-bed-and-sofa'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bedCount',
      title: 'Количество кроватей',
      description: 'Сколько спальных мест / кроватей указано для объекта.',
      type: 'number',
      group: 'parameters',
      validation: (Rule) => Rule.integer().min(1),
    }),
    defineField({
      name: 'rentalFormats',
      title: 'Формат аренды',
      description: 'Можно выбрать один или два формата.',
      type: 'array',
      group: 'parameters',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Посуточно', value: 'short-term'},
          {title: 'Долгосрок', value: 'long-term'},
        ],
        layout: 'grid',
      },
      initialValue: ['short-term'],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'coverImage',
      title: 'Главное фото',
      description:
        'Главное фото карточки. Лучше использовать светлое, качественное фото с хорошим ракурсом.',
      type: 'image',
      group: 'photos',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея',
      description: 'Добавьте 5–8 лучших фото. Не загружайте одинаковые кадры.',
      type: 'array',
      group: 'photos',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.max(12),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Краткое описание',
      description: 'Короткое описание для карточки. Без длинных текстов.',
      type: 'localizedText',
      group: 'description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Полное описание',
      description:
        'Подробное описание апартамента. Можно оставить пустым, если не используется на сайте.',
      type: 'localizedText',
      group: 'description',
    }),
    defineField({
      name: 'amenities',
      title: 'Удобства',
      description: 'Выберите только реальные удобства.',
      type: 'array',
      group: 'amenities',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Wi-Fi', value: 'wifi'},
          {title: 'Кондиционер', value: 'air-conditioning'},
          {title: 'Стиральная машина', value: 'washing-machine'},
          {title: 'Кухня', value: 'kitchen'},
          {title: 'Лифт', value: 'elevator'},
          {title: 'Балкон', value: 'balcony'},
          {title: 'Бассейн', value: 'pool'},
          {title: 'Парковка', value: 'parking'},
          {title: 'Парковка рядом', value: 'parking-nearby'},
          {title: 'Телевизор', value: 'tv'},
          {title: 'Постельное бельё', value: 'bed-linen'},
          {title: 'Полотенца', value: 'towels'},
          {title: 'Холодильник', value: 'refrigerator'},
          {title: 'Чайник', value: 'kettle'},
        ],
        layout: 'grid',
      },
      validation: (Rule) => Rule.max(12),
    }),
    defineField({
      name: 'address',
      title: 'Адрес',
      description: 'Короткий адрес апартамента или комплекса.',
      type: 'localizedString',
      group: 'location',
    }),
    defineField({
      name: 'district',
      title: 'Район',
      description: 'Район или короткая локация. Например: Новый бульвар, центр, первая линия.',
      type: 'localizedString',
      group: 'location',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lat',
      title: 'Широта',
      description: 'Координата широты. Можно оставить пустым.',
      type: 'number',
      group: 'location',
    }),
    defineField({
      name: 'lng',
      title: 'Долгота',
      description: 'Координата долготы. Можно оставить пустым.',
      type: 'number',
      group: 'location',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Рекомендуемый объект',
      description: 'Используется для выделения объекта.',
      type: 'boolean',
      group: 'marketing',
      initialValue: true,
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Показывать на главной',
      description: 'Если выключено, объект не должен отображаться в витрине на главной.',
      type: 'boolean',
      group: 'marketing',
      initialValue: true,
    }),
    defineField({
      name: 'orderRank',
      title: 'Порядок сортировки',
      description: 'Чем меньше число, тем выше объект в списке.',
      type: 'number',
      group: 'marketing',
      initialValue: 1,
      validation: (Rule) => Rule.required().integer().min(1),
    }),
    defineField({
      name: 'badges',
      title: 'Бейджи',
      description: 'Дополнительные метки объекта. Например: Вид на море, Популярный, Для семьи.',
      type: 'array',
      group: 'marketing',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'promoText',
      title: 'Промо-текст',
      description: 'Короткий маркетинговый текст, если нужен.',
      type: 'localizedString',
      group: 'marketing',
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Ссылка на бронирование',
      description:
        'Если есть ссылка на Booking.com или другую платформу — вставьте её. Если нет, оставьте пустым.',
      type: 'url',
      group: 'marketing',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO заголовок',
      description: 'Заголовок для поисковиков. Если пусто, будет использоваться название объекта.',
      type: 'localizedString',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO описание',
      description: 'Описание для поисковиков.',
      type: 'localizedText',
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG изображение',
      description: 'Картинка для превью ссылки.',
      type: 'image',
      group: 'seo',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      titleRu: 'title.ru',
      titleEn: 'title.en',
      complexName: 'complexName',
      capacity: 'capacity',
      priceFrom: 'priceFrom',
      currency: 'currency',
      media: 'coverImage',
    },
    prepare(selection) {
      const titleRu = typeof selection.titleRu === 'string' ? selection.titleRu : undefined
      const titleEn = typeof selection.titleEn === 'string' ? selection.titleEn : undefined
      const complexName =
        typeof selection.complexName === 'string' ? selection.complexName : undefined
      const capacity =
        typeof selection.capacity === 'number' ? `${selection.capacity} гостей` : undefined
      const priceFrom =
        typeof selection.priceFrom === 'number'
          ? `от ${selection.priceFrom} ${selection.currency || ''}`.trim()
          : undefined
      const subtitle = [complexName, capacity, priceFrom].filter(Boolean).join(' · ')

      return {
        title: titleRu || titleEn || 'Апартамент',
        subtitle: subtitle || 'Апартамент',
        media: selection.media,
      }
    },
  },
})
