import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'
import Post from '../posts/Post'

class ProfileFeed extends Component {
    render() {
        const { current_user, likes, comments, users, posts, resetAppState } = this.props
        const current_user_posts = posts.filter(post => {
            return post.user_id === current_user.id
        })
        const renderPosts = current_user_posts.map(post => {
            return <Post key={post.id} post={post} users={users} likes={likes} comments={comments} resetAppState={resetAppState} />
        })
        return (
            <Feed  className="MainFeed">
                {renderPosts}
            </Feed>
        );
    }
}

export default ProfileFeed;