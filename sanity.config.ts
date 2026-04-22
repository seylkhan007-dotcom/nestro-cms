import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const orderedDocumentTypes = [
  {type: 'homepageSettings', title: 'Главная страница'},
  {type: 'apartment', title: 'Апартаменты'},
  {type: 'complex', title: 'Комплексы'},
  {type: 'guestLead', title: 'Заявки гостей'},
  {type: 'review', title: 'Отзывы'},
  {type: 'ownerLead', title: 'Заявки собственников'},
  {type: 'advantage', title: 'Преимущества'},
  {type: 'contact', title: 'Контакты'},
  {type: 'navigation', title: 'Навигация'},
  {type: 'footerSettings', title: 'Подвал сайта'},
  {type: 'seoSettings', title: 'SEO настройки'},
  {type: 'siteSettings', title: 'Настройки сайта'},
]

export default defineConfig({
  name: 'default',
  title: 'NESTRO CMS',

  projectId: 'tsqh1ba0',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Разделы')
          .items(
            orderedDocumentTypes.map(({type, title}) => S.documentTypeListItem(type).title(title)),
          ),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
