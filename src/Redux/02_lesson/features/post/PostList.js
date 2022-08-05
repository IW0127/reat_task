import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';

function PostList() {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} className='shadow-4-strong p-3 my-4 rounded-7'>
      <h3>{post.title}</h3>
      <p> {post.content.substring(0, 100)} </p>
      <p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ));

  return (
    <section>
      <h2 className='text-center'>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostList;
