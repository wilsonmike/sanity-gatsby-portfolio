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
                  buildHookId: '61e5dd88cccf0af94a07e65d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mhmz692t',
                  apiId: '798671c9-5cc3-4263-b0f0-5f9c61f13318'
                },
                {
                  buildHookId: '61e5dd88bf34470c6bce03d5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-psrajr4v',
                  apiId: '2c83a772-8037-44f4-ab05-c49a283ca4fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wilsonmike/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-psrajr4v.netlify.app',
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
