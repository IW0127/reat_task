import React from 'react';
import { useSelector } from 'react-redux';
import { getPostsError, getPostsStatus, selectPostIds } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

function PostsList() {
  const orderedPostsIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading...."</p>;
  } else if (postStatus === 'succeeded') {
    content = orderedPostsIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section className='m-auto' style={{ maxWidth: '500px' }}>
      {content}
    </section>
  );
}

export default PostsList;
