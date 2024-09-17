import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import './styles/main.css';

const { Link } = ReactRouterDOM;

function App() {
  console.log('App组件被渲染');
  return (
    <ReactRouterDOM.BrowserRouter>
      <div className="App">
        <header>
          <h1>我的博客</h1>
          <nav>
            <ul>
              <li><Link to="/">首页</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <ReactRouterDOM.Switch>
            <ReactRouterDOM.Route exact path="/" component={Home} />
            <ReactRouterDOM.Route path="/post/:id" component={PostDetail} />
          </ReactRouterDOM.Switch>
        </main>
        <footer>
          <p>&copy; 2023 我的博客. 保留所有权利。</p>
        </footer>
      </div>
    </ReactRouterDOM.BrowserRouter>
  );
}

export default App;