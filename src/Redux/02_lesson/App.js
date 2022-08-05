import AddPostForm from './features/post/AddPostForm';
import PostList from './features/post/PostList';
import React from 'react';

function App() {
  return (
    <main className='m-auto' style={{ maxWidth: '500px' }}>
      <AddPostForm />
      <PostList />
    </main>
  );
}
export default App;
