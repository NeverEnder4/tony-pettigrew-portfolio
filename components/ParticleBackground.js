import Particles from 'react-particles-js';
import { configTR } from '../particles/particles-config';

const ParticlesBackground = () => (
  <div>
    <Particles
      width="100%"
      height="100vh"
      params={configTR}
      className="wrapper"
    />

    <style global jsx>
      {`
        .wrapper {
          background-image: radial-gradient(
            circle farthest-corner at 10% 20%,
            rgba(253, 239, 132, 1) 0%,
            rgba(247, 198, 169, 1) 54.2%,
            rgba(21, 186, 196, 1) 100.3%
          );
          background-attachment: fixed;
          height: 100vh;
          position: relative;
          z-index: 1;
        }
      `}
    </style>
  </div>
);

export default ParticlesBackground;
