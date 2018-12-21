import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import { formatDate } from '../utils/utils';

export default class Post extends React.Component {
  static async getInitialProps({ query }) {
    let post;
    const { slug } = query;
    try {
      const res = await fetch(`http://localhost:3000/blog/${slug}`);
      const { data } = await res.json();
      post = data;
    } catch (err) {
      console.warn(err);
      post = null;
    }
    return { post };
  }
  render() {
    const post = this.props.post.object;
    if (!post) return <Error statusCode={503} />;
    return (
      <Layout title={`TonyPettigrew.com | ${post.title}`}>
        <div className="container">
          <img src={post.metadata.img.imgix_url + '?auto=format&w=1200'} />
          <div className="post">
            <h1>{post.title}</h1>
            <pre>{formatDate(post.created_at)}</pre>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .post {
            width: 800px;
          }
        `}</style>
        <style global jsx>{`
          body {
            overflow: auto;
          }
        `}</style>
      </Layout>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
};
