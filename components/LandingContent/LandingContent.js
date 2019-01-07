import Contact from '../Contact/Contact';

const LandingContent = () => (
  <React.Fragment>
    <div className="headline">
      <h1 className="title">Tony Pettigrew</h1> <h1 className="separator">|</h1>
      <p>
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
      </p>
    </div>
    <Contact />
    <style jsx>
      {`
        h1 {
          margin: 0;
          font-size: 7rem;
          color: #343434;
          text-shadow: 0.5px 1px rgba(0, 0, 0, 0.5);
        }
        h1.title {
          font-family: 'Righteous', sans-serif;
          margin-left: 0.5em;
        }
        h1.separator {
          margin: 0 0.2em;
        }
        p {
          font-size: 3rem;
          color: #131313;
          font-weight: 800;
          opacity: 0.8;
        }

        p .glow {
          animation-name: glow;
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: cubic-bezier(0.28, -0.35, 0.68, 1.49);
        }

        p .glow-offset {
          animation-name: glow-offset;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
          animation-timing-function: cubic-bezier(0.28, -0.35, 0.68, 1.49);
        }

        p .glow-offset-2 {
          animation-name: glow-offset-2;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: cubic-bezier(0.28, -0.35, 0.68, 1.49);
        }

        .headline {
          display: flex;
          align-items: center;
          position: absolute;
          z-index: 10;
          transform: translateY(-50%);
          top: 40%;
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
      `}
    </style>
  </React.Fragment>
);

export default LandingContent;
