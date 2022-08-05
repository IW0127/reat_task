import React from 'react';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';

import { selectPostById } from './postsSlice';
import { useSelector } from 'react-redux';

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article className='shadow-4-strong my-3 p-3 rounded-7'>
      <h2>{post.title}</h2>
      <p className='excerpt'> {post?.body?.substring(0, 75)}....</p>
      <p className='postCredit'>
        <Link to={`post/${post.id}`}>View Post </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
