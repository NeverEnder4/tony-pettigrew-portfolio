import Contact from '../Contact/Contact';

const LandingContent = () => (
  <React.Fragment>
    <div className="headline">
      <h1 className="title">Tony Pettigrew</h1> <h1 className="separator">|</h1>
      <div className="glow-text-container">
        <span className="glow">w</span>
        <span className="glow-offset">e</span>
        <span className="glow">b</span> <span className="glow-offset">d</span>
        <span className="glow-offset-2">e</span>
        <span className="glow-offset">v</span>
        <span className="glow">e</span>
        <span className="glow-offset">l</span>
        <span className="glow-offset-2">o</span>
        <span className="glow-offset">p</span>
        <span className="glow">e</span>
        <span className="glow-offset-2">r</span>
      </div>
    </div>
    <Contact />
    <style jsx>
      {`
        .title,
        .separator {
          margin: 0;
          font-size: 4.5rem;
          color: #343434;
          text-shadow: 0.5px 1px rgba(0, 0, 0, 0.5);
        }
        .title {
          font-family: 'Righteous', 'sans-serif';
          margin-left: 0;
          text-align: center;
        }
        .separator {
          margin: 0 0.2em;
          display: none;
        }
        .glow-text-container {
          font-size: 2rem;
          color: #131313;
          font-weight: 800;
          opacity: 0.8;
          margin-top: 2rem;
        }

        .glow-text-container .glow {
          animation-name: glow;
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: cubic-bezier(0.28, -0.35, 0.68, 1.49);
        }

        .glow-text-container .glow-offset {
          animation-name: glow-offset;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
          animation-timing-function: cubic-bezier(0.28, -0.35, 0.68, 1.49);
        }

        .glow-text-container .glow-offset-2 {
          animation-name: glow-offset-2;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: cubic-bezier(0.28, -0.35, 0.68, 1.49);
        }

        .headline {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          z-index: 10;
          transform: translateY(-50%);
          top: 35%;
          width: 100%;
        }

        @keyframes glow {
          0% {
            opacity: 0.5;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.4);
          }
          25% {
            opacity: 0.9;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.8);
          }
          50% {
            opacity: 0.5;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.4);
          }
          100% {
            opacity: 0.2;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.2);
          }
        }
        @keyframes glow-offset {
          0% {
            opacity: 0.6;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.4);
          }
          25% {
            opacity: 0.4;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.8);
          }
          50% {
            opacity: 1;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.4);
          }
          100% {
            opacity: 0.6;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.2);
          }
        }
        @keyframes glow-offset-2 {
          0% {
            opacity: 0.2;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.4);
          }
          25% {
            opacity: 0.4;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.8);
          }
          50% {
            opacity: 0.2;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.4);
          }
          100% {
            opacity: 0.6;
            text-shadow: 0.5px 1px rgba(100, 100, 100, 0.2);
          }
        }

        @media (min-width: 550px) {
          .title,
          .separator {
            font-size: 7rem;
          }

          .glow-text-container {
            font-size: 3rem;
          }
        }

        @media (min-width: 810px) {
          .title {
            text-align: left;
          }
        }
        @media (min-width: 1150px) {
          .headline {
            flex-direction: row;
            justify-content: flex-start;
          }

          .title {
            margin-left: 0.5em;
          }

          .separator {
            display: inline;
          }

          .title,
          .separator {
            font-size: 5.8rem;
          }
        }

        @media (min-width: 1330px) {
          .title,
          .separator {
            font-size: 7rem;
          }
        }
      `}
    </style>
  </React.Fragment>
);

export default LandingContent;
