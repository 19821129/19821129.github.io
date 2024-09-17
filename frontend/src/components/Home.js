function Home() {
  console.log('Home组件被渲染');
  const posts = [
    { id: 1, title: '第一篇博客文章', content: '这是第一篇博客文章的内容...' },
    { id: 2, title: '第二篇博客文章', content: '这是第二篇博客文章的内容...' },
  ];

  return (
    <div>
      <h2>最新文章</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}