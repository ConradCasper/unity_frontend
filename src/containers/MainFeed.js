import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'
import Post from '../components/posts/Post'

class MainFeed extends Component {
    
    render() {
        const posts = this.props.posts.map(post => {
            return <Post key={post.id} post={post} />
        })
        return (
           
            <Feed>
                {posts}
            </Feed>
        );
    }
}

export default MainFeed;