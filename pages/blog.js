import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Link from 'next/link';

import Layout from '../components/Layout';
import PostList from '../components/PostList/PostList';

export default class Blog extends React.Component {
  static async getInitialProps({ query }) {
    let posts, page, skip;
    try {
      // set page equal to the query string value for page converted to a number or 1
      page = Number(query.page) || 1;
      // if page is equal to 1 set skip to 0, else set skip to (page - 1) * 3
      skip = page === 1 ? 0 : (page - 1) * 3;
      // fetch all blog posts from api endpoint
      // set posts equal to array of all blog posts
      const res = await fetch(`http://localhost:3000/blog/posts`);
      const { data } = await res.json();
      posts = data.objectsByType;
      // if there's an error set posts to an empty array
    } catch (err) {
      console.warn(err);
      posts = [];
    }
    // return posts, page and skip on the props object
    return { posts, page, skip };
  }

  render() {
    const { posts, page, skip } = this.props;
    // numPages returns the number of pages you will have given the number of posts returned and number of posts per page
    const numPages = (numPosts, perPage) => Math.ceil(numPosts / perPage);
    // renderPageLinks takes the numbe calculated from numPages and stitches the numbered pagination links together as an array
    // with divider elements inserted between the links:

    const renderPageLinks = numLinks => {
      const linksArr = [];
      for (let i = 1; i <= numLinks; i++) {
        // if index is equal to the current page, the pagination link will appear selected
        if (i === page) {
          linksArr.push(
            <Link key={i} href={`/blog?page=${i}`}>
              <a className="selected-link">{i}</a>
            </Link>,
          );
          // else the numbered pagination link is selectable
        } else {
          linksArr.push(
            <Link key={i} href={`/blog?page=${i}`}>
              <a
                onClick={this.paginationClickHandler}
                className="color-yellow page-link"
              >
                {i}
              </a>
            </Link>,
          );
        }
        // If index is less than the number of pagination links to be displayed
        // insert a span object in between the numbered pagination links
        if (i < numLinks) {
          linksArr.push(
            <span key={i * 1000000} className="color-yellow page-link--divider">
              &nbsp;|&nbsp;
            </span>,
          );
        }
      }
      // return the links arr so that it can be rendered
      return linksArr;
    };
    // if there are no posts returned, display the error page
    if (!posts.length) return <Error statusCode={503} />;
    // else return the blog page displaying a PostList and Pagination links
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
                height: 100%;
                padding-top: 2em;
                padding-bottom: 2em;
              }
              .button-container {
                display: flex;
                justify-content: center;
                font-size: 1rem;
                font-weight: 800;
                width: 100%;
              }
              @media (min-width: 700px) {
                .container {
                  padding-top: 3em;
                  padding-bottom: 0;
                }
              }
              @media (min-width: 830px) {
                .button-container {
                  margin: 0 auto;
                  width: 800px;
                  display: block;
                }
              }
            `}
          </style>
          <style global jsx>{`
            .page-link {
              transition: color 0.15s ease-out;
            }

            .selected-link {
              opacity: 0.5;
              cursor: default;
            }

            .page-link:hover {
              color: #565656;
            }

            .page-link--divider {
              margin: 0 0.5em;
            }
            body {
              overflow: auto;
              background-image: linear-gradient(
                89.2deg,
                rgba(99, 75, 136, 1) 5.8%,
                rgba(229, 131, 59, 1) 118.4%
              );
            }
        
            }
          `}</style>
        </Layout>
      );
  }
}
