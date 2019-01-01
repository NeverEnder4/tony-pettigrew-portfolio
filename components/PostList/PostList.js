import Link from 'next/link';
import PropTypes from 'prop-types';

import PostItem from './PostItem/PostItem';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.postItemRefs = [];
    this.setPostRefs = element => {
      if (element !== null) this.postItemRefs.push(element);
    };
  }

  componentDidMount() {
    console.log(this.postItemRefs);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.postItemRefs = [];
      return true;
    }
  }

  componentDidUpdate() {
    console.log(this.postItemRefs);
  }
  render() {
    const { posts, page, skip } = this.props;
    // the maxIndex of the last post to display in the PostList is either page * skip or 3
    const maxIndex = page * skip ? page * skip : 3;
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
        {posts.map((post, i) => {
          // map through all posts
          // if i is between the amount we want to skip and the maxIndex, render a PostItem component for it
          if (i >= skip && i < maxIndex)
            return (
              <PostItem
                ref={element => this.setPostRefs(element)}
                key={post._id}
                page={page}
                post={post}
              />
            );
        })}
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
