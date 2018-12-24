const next = require('next');
const express = require('express');
const { createApolloFetch } = require('apollo-fetch');

const uri = 'https://graphql.cosmicjs.com/v1';

const fetch = createApolloFetch({ uri });

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.port || 3000;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
// Import routes
nextApp.prepare().then(() => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get('/blog/posts/:skip', (req, res, next) => {
    fetch({
      query: `{
        objectsByType(bucket_slug: "tony-pettigrew-portfolio", type_slug: "posts", limit: 4, skip: ${
          req.params.skip
        }) {
             _id
             title
             slug
             created_at
             metadata
           }
     }`,
    })
      .then(posts => {
        res.json(posts);
      })
      .catch(err => {
        console.warn(err);
      });
  });

  app.get('/blog/:slug', (req, res, next) => {
    fetch({
      query: `{
        object(bucket_slug: "tony-pettigrew-portfolio", slug:"${
          req.params.slug
        }" ) {
             _id
             title
             slug
             content
             created_at
             metadata
           }
     }`,
    })
      .then(post => {
        res.json(post);
      })
      .catch(err => {
        console.warn(err);
      });
  });

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
