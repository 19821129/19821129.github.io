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
      <h1>我的博客</h1>
      <p>这是一个简单的React应用</p>
    </div>
  );
}

export default App;