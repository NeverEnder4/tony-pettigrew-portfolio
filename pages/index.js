import ParticlesBackground from '../components/ParticleBackground/ParticleBackground';
import Layout from '../components/Layout';
import LandingContent from '../components/LandingContent/LandingContent';

const Index = () => (
  <Layout loadIn={true} title="TonyPettigrew.com | Home">
    <LandingContent />
    <ParticlesBackground />
    <style global jsx>{`
      body {
        overflow-y: hidden;
      }
    `}</style>
  </Layout>
);

export default Index;

// Background Gradient Black
// background-image: radial-gradient(
//   circle farthest-corner at 10% 20%,
//   rgba(0, 0, 0, 1) 0%,
//   rgba(45, 45, 45, 1) 90.2%
// );

// Digital Green
// #33ff99
