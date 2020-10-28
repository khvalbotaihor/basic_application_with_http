import React, {Component} from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                exact
                                to="/posts/"
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    <Redirect from="/" to="/posts" />
{/*
                    <Route path="/" component={Posts}/>
*/}

                </Switch>

            </div>
        );
    }
}

export default Blog;