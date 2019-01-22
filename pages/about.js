import Particles from 'react-particles-js';
import { TweenLite, Power4 } from 'gsap';

import { configBL } from '../components/ParticleBackground/particles-config';

import Layout from '../components/Layout';
import ContentSlider from '../components/ContentSlider/ContentSlider';

export default class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout title="TonyPettigrew.com | About">
        <Particles
          width="100%"
          height="100%"
          params={configBL}
          className="particle-stars"
        />
        <ContentSlider />
        <style global jsx>{`
          body {
            overflow-y: hidden;
            background-color: #002233;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%2358cccc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%232195aa' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%2358bcc6' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%231f86a4' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%2358abbf' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%231d759d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%235799b8' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%231b6197' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%235783b1' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%2319498f' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%235769aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23162088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
            background-attachment: fixed;
            background-size: cover;
            background-position: 0% -100%;
            background-repeat: no-repeat;
          }
          .particle-stars {
            background-attachment: fixed;
            height: 100vh;
            position: relative;
            z-index: -10;
          }
        `}</style>
      </Layout>
    );
  }
}
