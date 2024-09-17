function Home() {
  console.log('Home组件被渲染');
  return (
    <div>
      <h2>最新文章</h2>
      <div className="post">
        <h3>第一篇博客文章</h3>
        <p>这是第一篇博客文章的内容...</p>
      </div>
      <div className="post">
        <h3>第二篇博客文章</h3>
        <p>这是第二篇博客文章的内容...</p>
      </div>
    </div>
  );
}