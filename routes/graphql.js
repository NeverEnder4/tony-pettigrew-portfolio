const express = require('express');
const router = express.Router();
const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({ uri: 'https://graphql.cosmicjs.com/v1' });

router.get('/posts', (req, res, next) => {
  fetch({
    query: `{
      objectsByType(bucket_slug: "tony-pettigrew-portfolio", type_slug: "posts",) {
           _id
           title
           slug
           content
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

module.exports = router;
