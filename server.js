const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.port || 3000;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
// Import routes
const api = require('./routes/api');
const graphql = require('./routes/graphql');

nextApp.prepare().then(() => {
  const app = express();

  app.use('/api', api);
  app.use('/graphql', graphql);

  app.get('*', (req, res) => {
    return handle(req, res);
  });
  app.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
