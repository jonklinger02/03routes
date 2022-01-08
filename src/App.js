import React from 'react';
import { HashRouter, Route, Link, Routes, Switch} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import PostItem from './components/postitem';
import Profile from './components/profile';

const App = () => {
  return (
    <HashRouter>
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Pro Product Design</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/">Home</Link> -
              <Link className="p-2 text-dark" to="/posts">Posts</Link> - 
              <Link className="p-2 text-dark" to={{
                pathname:'/profile',
                hash:'#francis',
                search:'?true=enabled'
              }}>Profile</Link>
            </nav>
          </div>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/posts" exact element={<Posts />}/>
            <Route path='/posts/:id' exact element={<PostItem />}/>
            <Route path="/profile" exact element={<Profile />}/>
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;