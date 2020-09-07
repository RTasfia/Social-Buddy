import React from 'react';
import './App.css';
import SocialBuddy from './Component/SocialBuddy/SocialBuddy';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import PostDetail from './Component/PostDetail/PostDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <SocialBuddy></SocialBuddy>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
