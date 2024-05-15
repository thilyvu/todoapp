module.exports = {
    client: {
      service: {
        name: 'my-app',
        // URL to the GraphQL API
        url: 'https://todoapp1111.hasura.app/v1/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/App.vue',
        'src/main.js',
      ],
    },
  }