import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectAllUsers } from '../users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { useAddNewPostMutation } from './postsSlice';

const AddPostForm = () => {
  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const cnnSave = [title, content, userId].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (cnnSave) {
      try {
        await addNewPost({ title, body: content, userId }).unwrap();

        setTitle('');
        setContent('');
        setUserId('');
        navigate('/');
      } catch (err) {
        console.error('failed to save the post', err);
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className='mt-2'>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <div className='input-group mb-3'>
          <input
            className='form-control rounded'
            type='text'
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <label htmlFor='postAuthor'>Author:</label>
        <select
          id='postAuthor'
          onChange={onAuthorChanged}
          className='form-select'
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
          value={content}
          onChange={onContentChanged}
          style={{ height: '100px' }}
        ></textarea>
        <button
          type='button'
          className='btn btn-success w-100 mt-3'
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
