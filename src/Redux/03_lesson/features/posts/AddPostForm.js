import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const cnnSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = () => {
    if (cnnSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
        console.error('failed to save the post', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
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
          value={userId}
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
        />
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
