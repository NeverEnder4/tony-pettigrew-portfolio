import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Link from 'next/link';

import Layout from '../components/Layout';
import PostList from '../components/PostList/PostList';

export default class Blog extends React.Component {
  static async getInitialProps({ query }) {
    let posts;
    let page;
    try {
      page = Number(query.page) || 0;
      const skip = page * 4;
      const res = await fetch(`http://localhost:3000/blog/posts/${skip}`);
      const { data } = await res.json();
      posts = data.objectsByType;
    } catch (err) {
      console.warn(err);
      posts = [];
    }
    return { posts, page };
  }

  render() {
    const { posts, page } = this.props;

    if (!posts.length) return <Error statusCode={503} />;
    else
      return (
        <Layout title="TonyPettigrew.com | Blog">
          <div className="container">
            <PostList page={page} posts={posts} />
            <div className="button-container">
              {posts.length < 4 ? null : (
                <Link href={`/blog?page=${page + 1}`}>
                  <a className="color-yellow page-button">Next</a>
                </Link>
              )}
              {page > 0 ? (
                <Link href={`/blog?page=${page - 1}`}>
                  <a className=" color-yellow page-button">Prev</a>
                </Link>
              ) : null}
            </div>
          </div>
          <style jsx>
            {`
              .container {
                background-image: linear-gradient(
                  89.2deg,
                  rgba(99, 75, 136, 1) 5.8%,
                  rgba(229, 131, 59, 1) 118.4%
                );
                height: 100vh;
              }
              .button-container {
                margin: 0 auto;
                width: 800px;
              }
              .button-container:first-child {
                margin-right: 1em;
              }
              .page-button {
                font-size: 1.2em;
                transition: color 0.15s ease-out;
              }
              .page-button:hover {
                color: #565656;
              }
            `}
          </style>
        </Layout>
      );
  }
}
