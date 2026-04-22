import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'NESTRO CMS',

  projectId: 'tsqh1ba0',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) => {
        const singletonItem = (type: string, title: string, documentId: string) =>
          S.listItem().title(title).child(S.document().schemaType(type).documentId(documentId))

        const documentListItem = (type: string, title: string) =>
          S.documentTypeListItem(type).title(title)

        return S.list()
          .title('Разделы')
          .items([
            singletonItem('homepageSettings', 'Главная страница', 'homepageSettings'),
            documentListItem('apartment', 'Апартаменты'),
            documentListItem('complex', 'Комплексы'),
            documentListItem('guestLead', 'Заявки гостей'),
            documentListItem('review', 'Отзывы'),
            documentListItem('ownerLead', 'Заявки собственников'),
            documentListItem('advantage', 'Преимущества'),
            documentListItem('contact', 'Контакты'),
            singletonItem('navigation', 'Навигация', 'mainNavigation'),
            singletonItem('footerSettings', 'Подвал сайта', 'footerSettings'),
            singletonItem('seoSettings', 'SEO настройки', 'seoSettings'),
            singletonItem('siteSettings', 'Настройки сайта', 'siteSettings'),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
