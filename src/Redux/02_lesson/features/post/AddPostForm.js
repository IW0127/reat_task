import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  const cnnSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className='mt-3'>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control rounded'
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <label htmlFor='postAuthor'>Author:</label>
        <select
          className='form-select'
          id='postAuthor'
          onChange={onAuthorChanged}
        >
          <option value=''></option>
          {usersOptions}
        </select>

        <label htmlFor='postContent' className='mt-3'>
          Content:
        </label>
        <textarea
          className='form-control'
          id='postContent'
          name='postContent'
          style={{ height: '100px' }}
          value={content}
          onChange={onContentChanged}
        ></textarea>

        <button
          type='button'
          className='btn btn-success w-100 my-4'
          onClick={onSavePostClicked}
          disabled={!cnnSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
