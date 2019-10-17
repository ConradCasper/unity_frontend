import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'
import Post from '../posts/Post'
import ErrorBoundary from '../ErrorBoundary'

class ProfileFeed extends Component {
    render() {
        const { user, likes, comments, users, posts, resetAppState, current_user } = this.props
        const user_posts = posts.filter(post => {
            return post.user_id === user.id
        })
        const renderPosts = user_posts.map(post => {
            return <ErrorBoundary key={post.id}><Post current_user={current_user} key={post.id} post={post} users={users} likes={likes} comments={comments} resetAppState={resetAppState} /></ErrorBoundary>
        })
        return (
            <ErrorBoundary>
                <Feed  className="MainFeed" size="small">
                    {renderPosts}
                </Feed>
            </ErrorBoundary>
        );
    }
}

export default ProfileFeed;