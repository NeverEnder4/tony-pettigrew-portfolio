import { TimelineLite } from 'gsap';

import { iconScaleIn } from './animations';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.tl = new TimelineLite();
    this.iconsRef = [];
    this.emailLinkRef = null;
    this.seticonsRef = element => {
      this.iconsRef.push(element);
    };
    this.setEmailLinkRef = element => {
      this.emailLinkRef = element;
    };
  }

  // When component mounts, animate in contact
  componentDidMount() {
    const { tl } = this;
    const { iconsRef, emailLinkRef } = this;
    iconScaleIn(iconsRef, emailLinkRef, tl);
  }

  render() {
    return (
      <React.Fragment>
        <div className="contact">
          <a href="#">
            <img
              ref={this.seticonsRef}
              src="/static/github-icon.svg"
              alt="github link"
            />
          </a>
          <a href="#">
            <img
              ref={this.seticonsRef}
              src="/static/linkedin-icon.svg"
              alt="linkedin link"
            />
          </a>
          <a href="#">
            <img
              ref={this.seticonsRef}
              src="/static/twitter-icon.svg"
              alt="twitter link"
            />
          </a>
          <a href="#">
            <img
              ref={this.seticonsRef}
              src="/static/facebook-icon.svg"
              alt="facebook link"
            />
          </a>
          <a
            ref={this.setEmailLinkRef}
            className="email-link"
            href="mailto:apettigrew.wsdev@gmail.com"
          >
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
              left: 50%;
              width: 60%;
              transform: translateX(-50%);
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

            .email-link:hover,
            .email-link:focus {
              background: rgba(0, 0, 0, 0.9);
              color: #aeaeae;
              border: 3px solid rgba(0, 0, 0, 0.8);
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
             {
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
