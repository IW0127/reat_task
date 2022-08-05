import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { Link } from 'react-router-dom';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return (
    <span>
      by{' '}
      {author ? (
        <Link to={`/redux/lesson_7/user/${userId}`}>{author.name} </Link>
      ) : (
        'Unknown author'
      )}
    </span>
  );
};

export default PostAuthor;
