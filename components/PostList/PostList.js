import PostItem from './PostItem/PostItem';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}
      <style jsx>{`
        .post-list {
          padding: 2em 0;
        }
      `}</style>
    </div>
  );
};

export default PostList;
