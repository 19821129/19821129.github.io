import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import './styles/main.css';

const { Link } = ReactRouterDOM;

function App() {
  console.log('App组件被渲染');
  return (
    <div className="App">
      <header>
        <h1>我的博客</h1>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <p>&copy; 2023 我的博客. 保留所有权利。</p>
      </footer>
    </div>
  );
}

export default App;