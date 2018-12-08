import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import Layout from '../components/Layout';

export default class blog extends React.Component {
  static async getInitialProps() {
    let posts;
    try {
      const res = await fetch('http://localhost:3000/api/posts');
      const data = await res.json();
      posts = data.objects;
    } catch (err) {
      console.warn(err);
      posts = [];
    }
    return { posts };
  }
  render() {
    const { posts } = this.props;
    if (posts.length === 0) return <Error statusCode={503} />;
    return (
      <Layout>
        <h1>BLOG</h1>
        <p>Here are your posts:</p>
        {posts.map(post => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </Layout>
    );
  }
}
