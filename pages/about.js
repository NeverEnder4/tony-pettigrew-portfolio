import Particles from 'react-particles-js';
import { configBL } from '../components/ParticleBackground/particles-config';

import Layout from '../components/Layout';
import ContentSlider from '../components/ContentSlider/ContentSlider';

const About = () => (
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

export default About;
