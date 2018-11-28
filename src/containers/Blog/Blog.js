import React, { Component } from 'react';
// import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from '../Blog/NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const asyncNewPost = asyncComponent(()=> {return import('../Blog/NewPost/NewPost') } )

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  New post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={Posts} />
        <Route path="/new-post" component={asyncNewPost} />
      </div>
    );
  }
}

export default Blog;
