import PropTypes from 'prop-types';

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
      <div className="content">
        <h1 className="title color-red">{post.title}</h1>
        <pre className="created-at color-black">
          {formatDate(post.created_at)}
        </pre>
        <p className="description color-black">{post.metadata.description}</p>
      </div>

      <style jsx>{`
        .post {
          height: 100%;
          margin: 1em 0;
          padding: 1em 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          width: 800px;
        }

        .description {
          font-size: 1.2rem;
          margin-top: 1em;
        }

        h1,
        p,
        pre {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object,
};

export default PostItem;
