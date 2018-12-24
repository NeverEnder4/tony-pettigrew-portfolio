import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import { formatDate, urlify } from '../utils/utils';

export default class Post extends React.Component {
  static async getInitialProps({ query }) {
    let post;
    const { slug } = query;
    const page = query.p;
    try {
      const res = await fetch(`http://localhost:3000/blog/${slug}`);
      const { data } = await res.json();
      post = data;
    } catch (err) {
      console.warn(err);
      post = null;
    }
    return { post, page };
  }
  render() {
    const post = this.props.post.object;
    const { page } = this.props;
    const urlFormattedTitle = urlify(post.title);
    if (!post) return <Error statusCode={503} />;
    return (
      <Layout title={`TonyPettigrew.com | ${post.title}`}>
        <div className="container">
          <img
            src={
              post.metadata.img.imgix_url +
              `?fit=crop&h=300&w=2000&txt=${urlFormattedTitle}&txtsize=90&txtclr=fefefe&txtalign=middle,center&txtfont=Futura%20Condensed%20Medium`
            }
          />
          <div className="post">
            <Link href={`/blog?page=${page}`}>
              <a className="color-blue post-nav">Back To Blog</a>
            </Link>
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
            background-image: linear-gradient(
              109.6deg,
              rgba(185, 212, 242, 1) 11.2%,
              rgba(244, 210, 226, 1) 100.3%
            );
          }
          .post {
            margin-top: 2em;
            width: 800px;
          }

          .post-nav {
            font-size: 1.2rem;
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
