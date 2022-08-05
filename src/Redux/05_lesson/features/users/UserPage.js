import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectAllUserById } from './usersSlice';
import { selectPostByUser } from '../posts/postsSlice';
const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectAllUserById(state, Number(userId)));

  const postsForUser = useSelector((state) =>
    selectPostByUser(state, Number(userId))
  );
  const postTitles = postsForUser.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/post/${id}`}>{title} </Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name} </h2>
      <ol>{postTitles} </ol>
    </section>
  );
};

export default UserPage;
