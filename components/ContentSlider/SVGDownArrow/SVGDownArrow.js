export default class SVGDownArrow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <svg
          ref={this.svgRef}
          width="63"
          height="63"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-1.5"
            y="-1.5"
            width="60"
            height="60"
            rx="30"
            transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 60 60)"
            stroke="#FDEFA9"
            strokeWidth="3"
          />
          <path
            d="M23.732 18L40.2893 18L32.1141 32.5182L23.732 18Z"
            stroke="#15BAC4"
            strokeWidth="2"
          />
          <path
            d="M50.1865 18.5L32 50L13.8135 18.5L50.1865 18.5Z"
            stroke="#F7C6A9"
            strokeWidth="3"
          />
        </svg>

        <style jsx>
          {`
            svg {
              width: 10rem;
              position: relative;
              left: -75%;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
