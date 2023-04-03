module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: 'http://3.27.6.57:1337',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
