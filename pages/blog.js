import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Link from 'next/link';

import Layout from '../components/Layout';
import PostList from '../components/PostList/PostList';

export default class Blog extends React.Component {
  static async getInitialProps({ query }) {
    let posts, page, skip;
    try {
      page = Number(query.page) || 1;
      skip = page === 1 ? 0 : (page - 1) * 3;
      const res = await fetch(`http://localhost:3000/blog/posts`);
      const { data } = await res.json();
      posts = data.objectsByType;
    } catch (err) {
      console.warn(err);
      posts = [];
    }
    return { posts, page, skip };
  }

  render() {
    const { posts, page, skip } = this.props;
    const numPages = (numPosts, perPage) => Math.ceil(numPosts / perPage);
    const renderPageLinks = numLinks => {
      const linksArr = [];
      for (let i = 1; i <= numLinks; i++) {
        if (i === page) {
          linksArr.push(
            <Link key={i} href={`/blog?page=${i}`}>
              <a className="selected-link page-link">{i}</a>
            </Link>,
          );
        } else {
          linksArr.push(
            <Link key={i} href={`/blog?page=${i}`}>
              <a className="color-yellow page-link">{i}</a>
            </Link>,
          );
        }

        if (i < numLinks) {
          linksArr.push(
            <span key={i} className="color-yellow page-link--divider">
              &nbsp;|&nbsp;
            </span>,
          );
        }
      }
      return linksArr;
    };

    if (!posts.length) return <Error statusCode={503} />;
    else
      return (
        <Layout title="TonyPettigrew.com | Blog">
          <div className="container">
            <PostList skip={skip} page={page} posts={posts} />
            <div className="button-container">
              {renderPageLinks(numPages(posts.length, 3))}
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
                font-size: 1rem;
                font-weight: 800;
                margin: 0 auto;
                width: 800px;
              }
            `}
          </style>
          <style global jsx>{`
            .page-link {
              transition: color 0.15s ease-out;
            }

            .selected-link {
              opacity: 0.5;
            }

            .page-link:hover {
              color: #565656;
            }

            .page-link--divider {
              margin: 0 0.5em;
            }
          `}</style>
        </Layout>
      );
  }
}
