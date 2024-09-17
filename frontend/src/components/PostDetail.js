import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { id: 1, title: '第一篇博客文章', content: '这是第一篇博客文章的完整内容...' },
  { id: 2, title: '第二篇博客文章', content: '这是第二篇博客文章的完整内容...' },
];

function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div>文章不存在</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;