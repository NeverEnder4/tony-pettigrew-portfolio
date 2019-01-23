import css from 'styled-jsx/css';

const loadingIconStyle = css`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
    animation: rotate 0.8s ease-in-out 1s 1, rotate-back 0.8s ease-in-out 1.9s 1;
  }
  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.5);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
    }
  }
  @keyframes rotate-back {
    0% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
    }

    100% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.5);
    }
  }
  @media (min-width: 600px) {
    svg {
      transform: translate(-50%, -50%) scale(2);
    }
    @keyframes rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg) scale(2);
      }

      100% {
        transform: translate(-50%, -50%) rotate(360deg) scale(2);
      }
    }
    @keyframes rotate-back {
      0% {
        transform: translate(-50%, -50%) rotate(360deg) scale(2);
      }

      100% {
        transform: translate(-50%, -50%) rotate(0deg) scale(2);
      }
    }
  }
`;

const menuIconStyle = css`
  svg {
    height: 40px;
  }
`;

export default class SVGLogo extends React.Component {
  componentDidMount() {
    if (this.props.vivusAnimation && this.props.id) {
      const { vivusAnimation, id } = this.props;
      vivusAnimation(id);
    }
  }
  render() {
    const { id, loadingIcon } = this.props;
    const iconStyle = loadingIcon ? loadingIconStyle : menuIconStyle;
    return (
      <React.Fragment>
        <svg
          id={id}
          width="193"
          height="60"
          viewBox="0 0 193 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="74.191"
            y="7.21643"
            width="51.5336"
            height="51.5336"
            rx="25.7668"
            stroke="rgba(253, 239, 132, 1)"
            strokeWidth="2.5"
          />
          <rect
            x="75.9126"
            y="1.40607"
            width="51.5336"
            height="51.5336"
            rx="25.7668"
            stroke="rgba(247, 198, 169, 1)"
            strokeWidth="2.5"
          />

          <path
            d="M2.00014 29.3086C2.00014 21.1008 8.80761 14.3922 17.2734 14.3922C25.7391 14.3922 32.5466 21.1008 32.5466 29.3086C32.5466 37.5164 25.7391 44.2249 17.2734 44.2249C8.80762 44.2249 2.00014 37.5164 2.00014 29.3086Z"
            stroke="rgba(247, 198, 169, 1)"
            strokeWidth="3"
          />
          <circle
            cx="39.0428"
            cy="10.751"
            r="3.49628"
            stroke="rgba(253, 239, 132, 1)"
            strokeWidth="3"
          />
          <line
            x1="31.9053"
            y1="28.5223"
            x2="74.0168"
            y2="28.5223"
            stroke="white"
            strokeWidth="3"
          />

          <circle
            cx="183.935"
            cy="29.3086"
            r="7.06505"
            stroke="rgba(247, 198, 169, 1)"
            strokeWidth="3"
          />
          <path
            d="M175.143 29.6663L126.835 29.6663"
            stroke="white"
            strokeWidth="3"
          />

          <path
            d="M95.8603 42.5603L95.9189 42.6263L95.9848 42.6849C96.5521 43.1892 97.2559 43.2933 97.7846 43.2933H102.432C102.939 43.2933 103.693 43.1984 104.267 42.6244C104.833 42.0584 104.965 41.3276 104.965 40.7605V28.1748H107.682C108.188 28.1748 108.943 28.0799 109.517 27.506C110.083 26.9399 110.215 26.2091 110.215 25.642V22.1708C110.215 21.6422 110.1 20.8964 109.518 20.335C108.956 19.7531 108.211 19.6381 107.682 19.6381H92.5348C91.9677 19.6381 91.2369 19.7696 90.6709 20.3356L90.6709 20.3356C90.0969 20.9096 90.002 21.6643 90.002 22.1708V25.642C90.002 26.1708 90.1061 26.8745 90.6104 27.4418L90.669 27.5078L90.735 27.5664C91.3023 28.0707 92.0061 28.1748 92.5348 28.1748H95.2519V40.7605C95.2519 41.2892 95.356 41.993 95.8603 42.5603Z"
            stroke="rgba(21, 186, 196, 1)"
            strokeWidth="3"
          />
        </svg>

        <style jsx>{iconStyle}</style>
      </React.Fragment>
    );
  }
}
