export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6092864030978400b0a52f5f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2000-studio',
                  apiId: '80e83e99-0555-4db0-b367-0e75b0a0b5f5'
                },
                {
                  buildHookId: '60928640e61bac00cf5e8c3f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2000',
                  apiId: 'be98ffb1-4f17-4a9b-83b7-c96eb5969bd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-kitchen-sink-2000',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2000.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
