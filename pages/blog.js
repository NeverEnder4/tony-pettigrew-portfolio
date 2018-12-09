// import ReactDOM from 'react-dom';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import Layout from '../components/Layout';

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
    const imgixConfig = '?w=100&auto=format&fit=crop';
    if (posts.length === 0) return <Error statusCode={503} />;
    else
      return (
        <Layout title="TonyPettigrew.com | Blog">
          <h1>BLOG</h1>
          <p>Here are your posts:</p>
          {posts.map(post => (
            <div key={post._id}>
              <img
                src={post.metadata.img.imgix_url + imgixConfig}
                alt={post.title}
              />
              <h3>{post.title}</h3>
              <p>Slug: {post.slug}</p>
              <pre>{post.created_at}</pre>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              <p>Written by: {post.metadata.author}</p>
              <p>Tags: {post.metadata.tag}</p>
            </div>
          ))}
        </Layout>
      );
  }
}
