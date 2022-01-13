export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61e029ae18048a4f54489d50',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ca6p412p',
                  apiId: '2225cf2e-0dd3-4a87-8bb6-ca4093054b8b'
                },
                {
                  buildHookId: '61e029ae28128a57a635d9f8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qsq84r8y',
                  apiId: '033fb49d-ff4e-4335-b7e2-266af38bc1fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elovseth/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qsq84r8y.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
