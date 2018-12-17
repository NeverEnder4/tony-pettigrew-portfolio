// import ReactDOM from 'react-dom';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import Layout from '../components/Layout';
import PostList from '../components/PostList/PostList';

export default class blog extends React.Component {
  static async getInitialProps() {
    let posts;
    try {
      const res = await fetch('http://localhost:3000/graphql/posts');
      const { data } = await res.json();

      posts = data.objectsByType;
    } catch (err) {
      console.warn(err);
      posts = [];
    }
    return { posts };
  }

  render() {
    const { posts } = this.props;
    if (posts.length === 0) return <Error statusCode={503} />;
    else
      return (
        <Layout title="TonyPettigrew.com | Blog">
          <div className="container">
            <PostList posts={posts} />
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
            `}
          </style>
        </Layout>
      );
  }
}
