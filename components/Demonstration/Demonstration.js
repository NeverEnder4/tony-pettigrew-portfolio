import { demoScaleIn } from './animations';

export default class Demonstration extends React.Component {
  constructor() {
    super();
    this.demoItemRef;
    this.setDemoItemRef = element => {
      this.demoItemRef = element;
    };
  }
  componentDidMount() {
    const { timelinelite } = this.props;
    const { demoItemRef } = this;
    demoScaleIn(timelinelite, demoItemRef);
  }

  render() {
    const { demo, titleColor } = this.props;
    return (
      <div ref={this.setDemoItemRef} className="display-box">
        <div className="cover" />
        <h1 className={titleColor}>{demo.title}</h1>
        <div className="description">
          <h2>{demo.title}</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: demo.content }}
          />
          <div className="display-box__navigation">
            <a
              className="demo-nav"
              href={demo.metadata.github_repo}
              target="_blank"
            >
              <img
                src="/static/github-demo-link-icon.svg"
                className="demo-nav__icon github"
              />
              <span className="link-text">Github Repo</span>
            </a>
            <a className="demo-nav" href={demo.metadata.link} target="_blank">
              <img
                src="/static/new-window-icon.svg"
                className="demo-nav__icon demo"
              />
              <span className="link-text">Visit Demo</span>
            </a>
          </div>
        </div>

        <style jsx>{`
          .display-box {
            background: url(${demo.metadata.img.imgix_url});
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
            transition: all 300ms ease-in;
            transform: scale(0.001);
            transform-origin: center center;
          }

          .cover {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.4);
            z-index: 5;
            transition: all 300ms ease-in;
          }

          h1 {
            font-size: 4rem;
            font-family: 'Righteous', sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 10;
            transform: translate(-50%, -50%);
            margin: 0;
            text-align: center;
            text-shadow: 0 0 2px rgba(0, 0, 0, 1);
            transition: all 150ms ease-in;
          }

          .description {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            padding: 1em 2em;
            z-index: 15;
            transform: translateX(10%);
            opacity: 0;
            visibility: hidden;
            transition: all 300ms ease-in-out;
          }

          .description h2 {
            color: #565656;
            margin-top: 3px;
          }

          .description div {
            margin: 0;
            color: #efefef;
            line-height: 1.8;
          }

          .description img {
            margin-right: 5px;
            width: 1rem;
          }

          .demo-nav {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .display-box__navigation {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .link-text {
            opacity: 0;
            transform: rotateX(180deg);
            transition: all 300ms ease-in;
            transition-delay: 100ms;
          }

          .github-nav,
          .demo-nav {
            color: #565656;
            padding: 0.5em 1em;
          }

          .display-box-center:hover,
          .display-box-center:focus {
            background-position: center center;
          }

          .display-box:hover .link-text {
            opacity: 1;
            transform: rotateX(360deg);
          }

          .display-box:hover .cover,
          .display-box:focus .cover {
            background: rgba(0, 0, 0, 0.9);
          }
          .display-box:hover h1,
          .display-box:focus h1 {
            opacity: 0;
            visibility: hidden;
            transform: translate(-100%, -50%);
          }

          .display-box:hover .description,
          .display-box:focus .description {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }
        `}</style>
      </div>
    );
  }
}
