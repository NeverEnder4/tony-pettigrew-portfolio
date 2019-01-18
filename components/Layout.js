import Link from 'next/link';
import Head from 'next/head';
import css from 'styled-jsx/css';
import PropTypes from 'prop-types';

import Loading from '../components/Loading/Loading';
import SVGLogo from './SVGLogo/SVGLogo';

const visible = css`
  .visibility {
    display: flex;
  }
`;

const hidden = css`
  .visibility {
    display: none;
  }
`;

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      transition: false,
    };
  }
  componentDidMount() {
    const { loadIn } = this.props;
    // if loadIn prop exists and is true, run handlePageLoad function
    if (loadIn) this.handlePageLoad();
    // else, set the loading state to false and forego the loading page
    else this.setState({ loading: false });
  }

  handlePageLoad() {
    // set transition state to true
    this.setState({
      transition: true,
    });
    // after 3 seconds, set loading state to false
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
    // after 2.8 seconds, set transition state to false
    setTimeout(() => {
      this.setState({
        transition: false,
      });
    }, 2800);
  }
  render() {
    const { title, children } = this.props;
    const { loading, transition } = this.state;
    // if loading is true, return the loading component and pass it transition props, else return null
    const loadingComponent = loading ? (
      <Loading transition={transition} />
    ) : null;
    // if loading is true, set showHeader to hidden css variable else set showHeader to visible css variable
    const showHeader = loading ? hidden : visible;
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        {loadingComponent}
        <header className="visibility">
          <nav>
            <Link prefetch href="/">
              <a className="nav-logo">
                <SVGLogo />
                <span className="color-grey"> tonypettigrew.com</span>
              </a>
            </Link>

            <Link prefetch href="/about">
              <a className="color-yellow nav-link">
                <img src="/static/about.svg" alt="about me" />
                About Me
              </a>
            </Link>
            <Link prefetch href="/demonstrations">
              <a className="color-red nav-link">
                {' '}
                <img src="/static/demo.svg" alt="portfolio" /> Demonstrations
              </a>
            </Link>
            <Link prefetch href="/blog">
              <a className="color-blue nav-link">
                {' '}
                <img src="/static/blog.svg" alt="blog" />
                Opinions
              </a>
            </Link>
          </nav>
        </header>
        {/* if loading is false, display children */}
        {loading || children}
        <style jsx>{showHeader}</style>
        <style jsx>
          {`
            header {
              background: #131313;
              display: flex;
              justify-content: center;
               {
                /* height: 75px; */
              }
            }

            nav {
              display: flex;
              justify-content: space-between;
              padding: 0.5em 0;
              width: 86vw;
               {
                /* display: none; */
              }
            }

            .nav-link {
              visibility: hidden;
            }

            nav a {
              text-decoration: none;
              font-size: 1.2rem;
              transition: color 0.15s ease-out;
              display: flex;
              align-items: center;
              font-weight: 900;
            }

            nav a img {
              transition: opacity 0.1s ease-out;
            }

            nav a:hover,
            nav a:focus {
              color: #565656;
            }

            nav a:hover img,
            nav a:focus img {
              opacity: 0.3;
            }

            .color-yellow img {
              height: 1em;
            }

            .color-red img {
              height: 2em;
            }

            .color-blue img {
              height: 1.2em;
              margin-right: 0.2em;
            }

            @media (min-width: 1200px) {
              .nav-link {
                visibility: visible;
              }
            }
          `}
        </style>
        <style global jsx>
          {`
            body {
              margin: 0;
              padding: 0;
              background: #131313;
              font-family: 'Noto Sans KR';
              overflow: hidden;
            }
            a {
              text-decoration: none;
            }
            .color-red {
              color: rgba(247, 198, 169, 1);
            }
            .color-yellow {
              color: rgba(253, 239, 132, 1);
            }
            .color-blue {
              color: rgba(21, 186, 196, 1);
            }
            .color-grey {
              color: #565656;
            }
            .color-white {
              color: #efefef;
            }

            .color-black {
              color: #131313;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
};
