module.exports = {
    client: {
      service: {
        name: 'my-app',
        // URL to the GraphQL API
        url: 'https://demooooo.hasura.app/v1/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/App.vue',
        'src/main.js',
      ],
    },
  }