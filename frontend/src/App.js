import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import './styles/main.css';

const { BrowserRouter, Route, Switch, Link } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter>
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={PostDetail} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2023 我的博客. 保留所有权利。</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;