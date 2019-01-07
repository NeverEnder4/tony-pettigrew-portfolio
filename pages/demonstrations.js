import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import Demonstration from '../components/Demonstration/Demonstration';

export default class demonstrations extends React.Component {
  static async getInitialProps() {
    let demonstrations;
    try {
      const res = await fetch('http://localhost:3000/portfolio/all');
      const { data } = await res.json();
      demonstrations = data;
    } catch {
      console.warn(error);
      demonstrations = [];
    }
    return { demonstrations };
  }
  render() {
    const demonstrations = this.props.demonstrations.objectsByType;
    if (!demonstrations.length) return <Error statusCode={503} />;
    else
      return (
        <Layout title="TonyPettigrew.com | Demonstrations">
          <div className="container">
            <div className="demonstrations-grid">
              {demonstrations.map(demo => (
                <Demonstration key={demo._id} demo={demo} />
              ))}
            </div>
          </div>
          <style jsx>{`
            .container {
              background-image: radial-gradient(
                circle farthest-corner at 3.6% 26.5%,
                rgba(106, 19, 253, 1) 0.1%,
                rgba(18, 134, 242, 1) 90%
              );
              height: 100vh;
            }
            .demonstrations-grid {
              display: grid;
              height: 60vh;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 20px;
              padding: 10em;
            }
          `}</style>
        </Layout>
      );
  }
}
