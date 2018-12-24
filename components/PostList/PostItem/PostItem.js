import PropTypes from 'prop-types';
import Link from 'next/link';

import { formatDate } from '../../../utils/utils';

export default class PostItem extends React.Component {
  render() {
    const { post, page } = this.props;
    return (
      <div className="post">
        <div className="content">
          <Link href={`/post?p=${page}&slug=${post.slug}`}>
            <a className="title color-red">{post.title}</a>
          </Link>
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

          .title {
            font-size: 2rem;
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
  }
}

PostItem.propTypes = {
  post: PropTypes.object,
};
