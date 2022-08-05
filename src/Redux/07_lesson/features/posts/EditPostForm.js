import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';
import { useNavigate, useParams } from 'react-router-dom';

import { selectAllUsers } from '../users/usersSlice';
import { useUpdatePostMutation, useDeletePostMutation } from './postsSlice';

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(Number(e.target.value));

  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await updatePost({
          id: post.id,
          title,
          body: content,
          userId,
        }).unwrap();

        setTitle('');
        setContent('');
        setUserId('');
        navigate(`../${postId}`);
      } catch (err) {
        console.error('failed to save the post', err);
      }
    }
  };
  const usersOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  const onDeletePostClicked = async () => {
    try {
      await deletePost({ id: post.id }).unwrap();

      setTitle('');
      setContent('');
      setUserId('');
      navigate('/redux/lesson_7/');
    } catch (err) {
      console.error('failed to delete the post', err);
    }
  };
  return (
    <section className='mt-2'>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <div className='input-group mb-3'>
          <input
            className='form-control rounded'
            type='text'
            name='postTitle'
            id='postTitle'
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <label htmlFor='postAuthor'>Author:</label>
        <select
          className='form-select'
          id='postAuthor'
          defaultValue={userId}
          onChange={onAuthorChanged}
        >
          <option value=''></option>
          {usersOptions}
        </select>
        <label htmlFor='postContent' className='mt-3'>
          Content:
        </label>
        <textarea
          name='postContent'
          className='form-control'
          id='postContent'
          value={content}
          onChange={onContentChanged}
          style={{ height: '100px' }}
        />
        <button
          type='button'
          className='btn btn-success w-100 mt-3'
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
        <button
          type='button'
          className='btn btn-danger w-100 mt-3'
          onClick={onDeletePostClicked}
        >
          Delete Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
