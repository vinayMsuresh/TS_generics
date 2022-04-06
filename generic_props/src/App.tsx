import React from 'react';
import './App.css';
import PostsTable from './components/PostsTable';
import RecentPosts from './posts.json'

function App() {
  
  return (
    <PostsTable posts={RecentPosts} />
  );
}

export default App;
