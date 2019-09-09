import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'
import Post from '../posts/Post'
import ErrorBoundary from '../ErrorBoundary'

class ProfileFeed extends Component {
    render() {
        const { current_user, likes, comments, users, posts, resetAppState } = this.props
        const current_user_posts = posts.filter(post => {
            return post.user_id === current_user.id
        })
        const renderPosts = current_user_posts.map(post => {
            return <ErrorBoundary><Post key={post.id} post={post} users={users} likes={likes} comments={comments} resetAppState={resetAppState} /></ErrorBoundary>
        })
        return (
            <ErrorBoundary>
                <Feed  className="MainFeed">
                    {renderPosts}
                </Feed>
            </ErrorBoundary>
        );
    }
}

export default ProfileFeed;