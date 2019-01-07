const Demonstration = ({ demo }) => {
  const getColorClass = () => {
    const i = Math.floor(Math.random() * 3);
    const colorClasses = ['color-red', 'color-yellow', 'color-blue'];
    return colorClasses[i];
  };
  return (
    <div className="display-box">
      <div className="cover" />
      <h1 className={getColorClass()}>{demo.title}</h1>
      <div className="description">
        <p dangerouslySetInnerHTML={{ __html: demo.content }} />
        <div className="display-box__navigation">
          <a className="github-nav" href={demo.metadata.github_repo}>
            Github Repo
          </a>
          <a className="demo-nav" href={demo.metadata.link}>
            Visit Site
          </a>
        </div>
      </div>

      <style jsx>{`
        .display-box {
          background: url(${demo.metadata.img.imgix_url});
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;
          transition: all 300ms ease-in;
        }

        .cover {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 5;
          transition: all 300ms ease-in;
        }

        h1 {
          font-size: 4rem;
          font-family: 'Righteous', sans-serif;
          font-weight: 400;
          text-transform: uppercase;
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 10;
          transform: translate(-50%, -50%);
          margin: 0;
          text-align: center;
          text-shadow: 0 0 2px rgba(0, 0, 0, 1);
          transition: all 150ms ease-in;
        }

        .description {
          position: absolute;
          padding: 1em 2em;
          z-index: 15;
          transform: translateX(10%);
          opacity: 0;
          transition: all 300ms ease-in-out;
        }

        .description p {
          margin: 0;
          color: #efefef;
        }

        .display-box__navigation {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 2em;
          padding-top: 1em;
        }

        .github-nav {
          color: rgba(247, 198, 169, 1);
          border: 1px solid rgba(247, 198, 169, 1);
          margin-right: 1em;
        }

        .demo-nav {
          color: rgba(21, 186, 196, 1);
          border: 1px solid rgba(21, 186, 196, 1);
        }

        .github-nav,
        .demo-nav {
          padding: 0.5em 1em;
          border-radius: 10px;
        }

        .display-box-center:hover,
        .display-box-center:focus {
          background-position: center center;
        }

        .display-box:hover .cover,
        .display-box:focus .cover {
          background: rgba(0, 0, 0, 0.9);
        }
        .display-box:hover h1,
        .display-box:focus h1 {
          opacity: 0;
          visibility: hidden;
          transform: translate(-100%, -50%);
        }

        .display-box:hover .description,
        .display-box:focus .description {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Demonstration;
