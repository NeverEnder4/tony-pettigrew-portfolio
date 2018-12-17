import { formatDate } from '../../../utils/utils';

const PostItem = ({ post }) => {
  const imgixConfig = '?w=400&auto=compress&q=50&fit=clip';
  const formatTag = tagString => {
    return tagString.split(',').map(tag => (
      <a key={tag} className="tag color-yellow" href="#">
        {tag}
      </a>
    ));
  };
  return (
    <div className="post">
      <img className="image" src={post.metadata.img.imgix_url + imgixConfig} />
      <div className="info-section">
        <h1 className="title color-red">{post.title}</h1>
        <pre className="created-at color-grey">
          {formatDate(post.created_at)}
        </pre>
        <p className="author color-blue">{post.metadata.author}</p>
        <p className="description">{post.metadata.description}</p>
      </div>
      {/* <div className="tags-section">
        <div className="tags color-yellow">{formatTag(post.metadata.tag)}</div>
      </div> */}

      <style jsx>{`
        .post {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid #131313;
          height: 100%;
          margin: 1em 0;
          padding: 1em 15em;
          display: flex;
          align-items: center;
          transition: all 0.15s ease-out;
        }

        .post:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        .post:hover .description {
          color: #efefef;
        }

        .info-section {
          margin-left: 10em;
          width: 800px;
        }
        .tags-section {
          margin-left: 10em;
          text-align: center;
          word-spacing: 0.3rem;
        }

        .author {
          font-weight: 700;
          margin-top: 5px;
        }

        .description {
          font-size: 1.2rem;
          margin-top: 1em;
          color: #565656;
          transition: all 0.1s ease-out;
        }

        h1,
        p,
        pre {
          margin: 0;
        }
      `}</style>
      <style global jsx>{`
        .tag {
          transition: color 0.15s ease-out;
        }
        .tag:hover,
        .tag:focus {
          color: #565656;
        }
      `}</style>
    </div>
  );
};

export default PostItem;
