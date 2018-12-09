import SVGLogo from '../SVGLogo/SVGLogo';
import { drawSVG } from '../SVGLogo/animations';
import { CSSTransition } from 'react-transition-group';

import './css-transition.css';

export default class Loading extends React.Component {
  constructor() {
    super();
    this.isLoadingIcon = true;
  }
  render() {
    const { transition } = this.props;
    const { isLoadingIcon } = this;
    return (
      <CSSTransition in={transition} timeout={300} classNames="loading">
        <div className="container loading">
          <SVGLogo
            loadingIcon={isLoadingIcon}
            vivusAnimation={drawSVG}
            id={'logo'}
          />
          <style jsx>
            {`
              .container {
                background-image: radial-gradient(
                  circle farthest-corner at 10% 20%,
                  rgba(0, 0, 0, 1) 0%,
                  rgba(45, 45, 45, 1) 90.2%
                );
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                position: relative;
                z-index: 1000;
              }
            `}
          </style>
          <style global jsx>{`
            body {
              padding: 0;
              margin: 0;
              overflow: hidden;
            }
          `}</style>
        </div>
      </CSSTransition>
    );
  }
}
