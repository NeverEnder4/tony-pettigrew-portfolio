import Link from 'next/link';
import PropTypes from 'prop-types';

import PostItem from './PostItem/PostItem';

export default class PostList extends React.Component {
  render() {
    const { posts, page } = this.props;
    return (
      <div className="post-list">
        <div className="title-position">
          <div className="blog-title">
            <img src="/static/tony-keyboard.jpg" alt="Tony Pettigrew" />
            <h1 className="title">
              Personal Blog by{' '}
              <Link href="/about">
                <a className="color-yellow">Tony Pettigrew</a>
              </Link>
            </h1>
          </div>
        </div>

        {posts.map(post => (
          <PostItem key={post._id} page={page} post={post} />
        ))}
        <style jsx>{`
          .post-list {
            padding-top: 3em;
          }

          .title-position {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          .blog-title {
            display: flex;
            align-items: center;
            width: 800px;
            margin-bottom: 1em;
          }

          .blog-title img {
            width: 4em;
            border-radius: 100%;
            margin-right: 1em;
          }

          .blog-title h1 {
            font-size: 1.2rem;
          }

          .blog-title a {
            transition: color 0.15s ease-out;
          }

          .blog-title a:hover,
          .blog-title a:focus {
            color: #565656;
          }
        `}</style>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array,
};
