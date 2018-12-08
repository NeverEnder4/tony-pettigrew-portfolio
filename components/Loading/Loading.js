import SVGLogo from '../SVGLogo/SVGLogo';
import { drawSVG } from '../SVGLogo/animations';

export default class Loading extends React.Component {
  render() {
    return (
      <div className="container">
        <SVGLogo animation={drawSVG} id={'logo'} />
        <style jsx>
          {`
            .container {
              background: #131313;
              width: 100vw;
              height: 100vh;
              overflow: ;
              position: relative;
            }
          `}
        </style>
        <style global jsx>{`
          body {
            padding: 0;
            margin: 0;
            overflow: hidden;
          }
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.5);
          }
        `}</style>
      </div>
    );
  }
}
