import Link from 'next/link';
import PropTypes from 'prop-types';
import { TimelineLite, TweenLite, Power2 } from 'gsap';

import PostItem from './PostItem/PostItem';

export default class PostList extends React.Component {
  constructor() {
    super();
    this.postItemRefs = [];
    this.setPostRefs = element => {
      if (element !== null) this.postItemRefs.push(element.children[0]);
    };
    this.introTLL = new TimelineLite({});
  }

  componentDidMount() {
    const { postItemRefs } = this;
    this.introTLL.fromTo(
      postItemRefs[0],
      0.4,
      { opacity: 0, ease: Power2.easeIn },
      { opacity: 1, ease: Power2.easeIn },
    );
    if (postItemRefs.length > 1) {
      this.introTLL.fromTo(
        postItemRefs[1],
        0.4,
        { opacity: 0, ease: Power2.easeIn },
        { opacity: 1, ease: Power2.easeIn },
        '-=0.2',
      );
    }
    if (postItemRefs.length > 2) {
      this.introTLL.fromTo(
        postItemRefs[2],
        0.4,
        { opacity: 0, ease: Power2.easeIn },
        { opacity: 1, ease: Power2.easeIn },
        '-=0.2',
      );
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.postItemRefs = [];
      return true;
    } else false;
  }

  componentDidUpdate() {
    const { postItemRefs } = this;
    for (let i = 0; i < postItemRefs.length; i++) {
      const earlyStart = i > 0 ? '0.2' : '0';
      TweenLite.fromTo(
        postItemRefs[i],
        0.6,
        { opacity: 0, ease: Power2.easeIn },
        { opacity: 1, ease: Power2.easeIn },
        earlyStart,
      );
    }
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
              <div key={post._id} ref={element => this.setPostRefs(element)}>
                <PostItem page={page} post={post} />
              </div>
            );
        })}
        <style jsx>{`
          .title-position {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          .blog-title {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            text-align: center;
          }

           {
            /* media query @830 pixels */
          }
          @media (min-width: 830px) {
            .blog-title {
              flex-direction: row;
              align-items: flex-start;
              width: 800px;
              text-align: left;
            }
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
