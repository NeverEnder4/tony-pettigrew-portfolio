import SVGDownArrow from '../SVGDownArrow/SVGDownArrow';
import TweenLite from 'gsap';

export default class ContentSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0,
    };
    this.contentRefArr = [];
    this.setContentRef = element => {
      this.contentRefArr.push(element);
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    const { contentRefArr } = this;
    const { clickCount } = this.state;
    TweenLite.fromTo(
      contentRefArr[clickCount],
      0.6,
      {
        y: '25%',
        autoAlpha: 0,
        ease: Expo.easeOut,
      },
      {
        y: '0%',
        autoAlpha: 1,
      },
    );
  }

  onClickHandler() {
    const { contentRefArr } = this;
    const currIndex = this.state.clickCount;
    let nextIndex;
    // Fade out and push up current content
    TweenLite.to(contentRefArr[currIndex], 0.4, {
      y: '-100%',
      autoAlpha: 0,
      ease: Expo.easeIn,
    });

    // If count is 2 change count to 0
    if (this.state.clickCount === 2) this.setState({ clickCount: 0 });
    // Else, increment count by 1
    else {
      this.setState({ clickCount: currIndex + 1 });
    }
    // Fade in and push up next content
    nextIndex = currIndex + 1;
    if (nextIndex === 3) nextIndex = 0;
    TweenLite.fromTo(
      contentRefArr[nextIndex],
      0.8,
      {
        y: '100%',
        ease: Expo.easeIn,
        opacity: 0,
      },
      {
        y: '0%',
        autoAlpha: 1,
        opacity: 1,
        ease: Expo.easeOut,
        delay: 0.3,
      },
    );
  }
  render() {
    return (
      <div className="container">
        <div
          ref={element => this.setContentRef(element)}
          className="content-block intro"
        >
          <div>
            <p>
              Hi, my name is Tony Pettigrew. I'm a developer based in the
              grayest depths of Seattle.
            </p>
            <p>At the moment, I'm looking for my first job.</p>
          </div>
        </div>
        <div
          ref={element => this.setContentRef(element)}
          className="content-block middle"
        >
          <p>
            I spend most of my time tinkering with JavaScript based web
            technologies and designing UIs for personal projects.
          </p>
        </div>
        <div
          ref={element => this.setContentRef(element)}
          className="content-block end"
        >
          <p>
            If you'd like to get in touch, feel free to send me an{` `}
            <a href="mailto:apettigrew.wsdev@gmail.com">email</a>.
          </p>
        </div>

        <a href="#" onClick={this.onClickHandler}>
          <SVGDownArrow id="logo" />
        </a>

        <style jsx>{`
          .conatiner {
          }
          .content-block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 50%;
            width: 79%;
            transform: translateX(-50%);
            opacity: 0;
            visibility: hidden;
            height: 100vh;
            z-index: -5;
          }
          p {
            color: #eee;
            font-size: 5rem;
            font-weight: 900;
            line-height: 8rem;
            letter-spacing: 0.35rem;
          }

          a {
            color: #eee;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
          }

          a:hover,
          a:focus {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }
}
