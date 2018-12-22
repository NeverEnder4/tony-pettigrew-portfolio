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
          <img
            src={
              post.metadata.img.imgix_url +
              '?fit=crop&h=300&w=2000&txt=NextJS:%20Getting%20Started!&txtsize=90&txtclr=fefefe&txtalign=middle,center&txtfont=Futura%20Condensed%20Medium'
            }
          />
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
            background: #565656;
          }
          .post {
            width: 800px;
          }

          img {
            width: 100%;
            height: 300px;
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