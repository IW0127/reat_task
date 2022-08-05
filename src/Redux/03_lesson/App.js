import React from 'react';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <main className='m-auto' style={{ maxWidth: '500px' }}>
      <AddPostForm />
      <PostsList />
    </main>
  );
}
export default App;
