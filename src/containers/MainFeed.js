import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'
import Post from '../components/posts/Post'


class MainFeed extends Component {
    
    render() {
        
        
        const renderPosts = this.props.posts.map(post => {
            
            return <Post key={post.id} post={post} users={this.props.users} likes={this.props.likes} comments={this.props.comments} resetAppState={this.props.resetAppState} />
        })
        return (
           
            <Feed className="MainFeed">
                {renderPosts}
            </Feed>
        );
    }
}

export default MainFeed;