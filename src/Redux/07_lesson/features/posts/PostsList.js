import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostIds } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';
import { useGetPostsQuery } from './postsSlice';

function PostsList() {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();
  const orderedPostsIds = useSelector(selectPostIds);

  let content;
  if (isLoading) {
    content = <p>"Loading...."</p>;
  } else if (isSuccess) {
    content = orderedPostsIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
}

export default PostsList;
