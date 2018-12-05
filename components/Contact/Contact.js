import { TimelineLite } from 'gsap';
import ReactDOM from 'react-dom';

import { iconScaleIn } from './animations';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.tl = new TimelineLite();
  }

  componentDidMount() {
    const contactNodes = this.getContactNodes();
    const { tl } = this;
    const { icons, title, emailLink } = contactNodes;
    iconScaleIn(icons, emailLink, tl);
  }

  // Get refs to DOM elements
  getContactNodes() {
    const contactNodes = ReactDOM.findDOMNode(this).childNodes;
    const iconArr = [];
    contactNodes.forEach((node, index) => {
      if (index > 0 && index < contactNodes.length - 1) {
        iconArr.push(node.childNodes);
      }
    });

    const orderedNodes = {
      icons: iconArr,
      title: contactNodes[0],
      emailLink: contactNodes[contactNodes.length - 1],
    };
    return orderedNodes;
  }

  render() {
    return (
      <React.Fragment>
        <div className="contact">
          <p />

          <a href="#">
            <img
              ref={this.element}
              src="/static/github-icon.svg"
              alt="github"
            />
          </a>
          <a href="#">
            <img src="/static/linkedin-icon.svg" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/static/twitter-icon.svg" alt="twitter" />
          </a>
          <a href="#">
            <img
              ref={this.setIconRef}
              src="/static/facebook-icon.svg"
              alt="facebook"
            />
          </a>
          <a className="email-link" href="mailto:apettigrew.wsdev@gmail.com">
            apettigrew.wsdev@gmail.com
          </a>
        </div>
        <style jsx>
          {`
            .contact {
              display: flex;
              justify-content: space-around;
              align-items: center;
              position: absolute;
              z-index: 10;
              bottom: 20%;
              left: 20%;
              width: 60%;
            }

            .email-link {
              padding: 0.3em 0.7em;
              font-size: 2rem;
              color: #131313;
              font-weight: 800;
              text-decoration: none;
              opacity: 0;
              border: 3px dashed rgba(0, 0, 0, 0.8);
              transform: translateY(-200);
            }

            .contact a img {
              opacity: 0.8;
              transform: scale(0);
            }

            .contact a {
              transition: all 0.1s ease-out;
            }
            .contact a:hover,
            .contact a:focus {
              opacity: 0.5;
            }
            p {
              font-size: 3rem;
              color: #131313;
              font-weight: 800;
              opacity: 0.8;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
