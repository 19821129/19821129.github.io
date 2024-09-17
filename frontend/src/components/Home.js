import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: '第一篇博客文章', content: '这是第一篇博客文章的内容...' },
  { id: 2, title: '第二篇博客文章', content: '这是第二篇博客文章的内容...' },
];

function Home() {
  return (
    <div>
      <h2>最新文章</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default Home;