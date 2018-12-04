import Particles from 'react-particles-js';
import { configTR } from '../components/ParticleBackground/particles-config';

import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <Particles
      width="100%"
      height="100vh"
      params={configTR}
      className="wrapper"
    />
    <style global jsx>{`
      body {
        overflow-y: hidden;
      }
    `}</style>
  </Layout>
);

export default About;
