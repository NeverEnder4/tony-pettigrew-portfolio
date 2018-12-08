import ReactDOM from 'react-dom';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import { TweenLite } from 'gsap';

import Loading from '../components/Loading/Loading';
import Layout from '../components/Layout';

import { fadeOutLoad } from '../components/Loading/animations';

export default class blog extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
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
  componentDidMount() {
    const loadingCompRef = ReactDOM.findDOMNode(this);

    setTimeout(() => {
      this.setState({
        loading: false,
      });

      // Fade page in
      const blogCompRef = ReactDOM.findDOMNode(this);
      console.log(blogCompRef.children);

      TweenLite.from(blogCompRef.childNodes[3], 0.5, {
        opacity: 0,
        ease: Circ.easeOut,
      });
      TweenLite.from(blogCompRef.childNodes[4], 0.5, {
        opactiy: 0,
        ease: Circ.easeInOut,
      });
    }, 3000);

    fadeOutLoad(loadingCompRef);
  }
  render() {
    const { posts } = this.props;
    const { loading } = this.state;
    const imgixConfig = '?w=100&auto=format&fit=crop';
    if (posts.length === 0) return <Error statusCode={503} />;
    if (loading) return <Loading />;
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
