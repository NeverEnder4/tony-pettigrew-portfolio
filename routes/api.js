const express = require('express');
const router = express.Router();
const Cosmic = require('cosmicjs')();
const bucket = Cosmic.bucket({
  slug: 'tony-pettigrew-portfolio',
});

router.get('/posts', (req, res, next) => {
  const getPosts = async () => {
    await bucket
      .getObjects({ type: 'posts' })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.warn(err);
      });
  };
  getPosts();
});

module.exports = router;
