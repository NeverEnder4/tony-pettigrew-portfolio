import Link from 'next/link';

import SVGDownArrow from './SVGDownArrow/SVGDownArrow';
import { contentEnter, contentSlideOut, contentSlideIn } from './animations';

export default class ContentSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0,
      disabled: false,
    };
    //reference array that holds the three blocks of content to be displayed in the slider
    this.contentRefArr = [];
    this.setContentRef = element => {
      if (this.contentRefArr.length < 3) this.contentRefArr.push(element);
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  // when component mounts, slide in content
  componentDidMount() {
    const { contentRefArr } = this;
    const { clickCount } = this.state;
    contentEnter(contentRefArr, clickCount);
  }

  onClickHandler() {
    const { contentRefArr } = this;
    const refArrLength = contentRefArr.length;
    const currIndex = this.state.clickCount;
    let nextIndex;
    // fade out and push up current content
    contentSlideOut(contentRefArr, currIndex);
    // disable down arrow button
    this.setState({ disabled: true });
    // if count is 2 change count to 0
    if (this.state.clickCount === refArrLength - 1)
      this.setState({ clickCount: 0 });
    // else, increment count by 1
    else {
      this.setState({ clickCount: currIndex + 1 });
    }
    // nextIndex is equal to currentIndex + 1
    nextIndex = currIndex + 1;
    // if nextIndex is equal to ref array length then set nextIndex to 0
    if (nextIndex === refArrLength) nextIndex = 0;
    // fade in and push up next content, then disable the button until animation ends
    contentSlideIn(contentRefArr, nextIndex, this);
  }
  render() {
    return (
      <div className="container">
        <div
          ref={element => this.setContentRef(element)}
          className="content-block intro"
        >
          <p>
            Hi, my name is <span className="color-blue">Tony Pettigrew</span>.
            I'm a developer based in Seattle.
          </p>
        </div>
        <div
          ref={element => this.setContentRef(element)}
          className="content-block middle"
        >
          <p>
            I spend most of my time learning{' '}
            <Link prefetch href="/demonstrations">
              <a className="color-red">JavaScript web technologies</a>
            </Link>
            , designing UIs and sharing what I've learned through my{' '}
            <Link prefetch href="/blog">
              <a className="color-blue">blog</a>
            </Link>
            .
          </p>
        </div>
        <div
          ref={element => this.setContentRef(element)}
          className="content-block end"
        >
          <p>
            If you'd like to get in touch, feel free to send me an{` `}
            <a
              className="color-yellow"
              href="mailto:apettigrew.wsdev@gmail.com"
            >
              email
            </a>
            .
          </p>
        </div>

        <button disabled={this.state.disabled} onClick={this.onClickHandler}>
          <SVGDownArrow id="logo" />
        </button>

        <style jsx>{`
          .content-block {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 60px;
            left: 50%;
            width: 79%;
            transform: translateX(-50%);
            opacity: 0;
            visibility: hidden;
            height: 100vh;
          }
          p {
            color: #eee;
            font-size: 5rem;
            font-weight: 900;
            line-height: 8rem;
            letter-spacing: 0.35rem;
            transform: translateY(-60px);
          }

          a {
            text-decoration: none;
            transition: color 0.15s ease-out;
          }

          a:hover,
          a:focus {
            color: #565656;
          }

          button:hover {
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}
