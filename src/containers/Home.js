import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MainFeed from './MainFeed'
import PostForm from '../components/posts/PostForm'
import ErrorBoundary from '../components/ErrorBoundary'

class Home extends Component {


    


    render() {
        if(this.props === undefined) { return null }
        const { current_user, follows, users, likes, comments, posts, resetAppState } = this.props
        
        return (
            
            <Container style={{ "width": "50em", "marginTop":"8em" }}>
                <ErrorBoundary>
                    <PostForm  current_user={current_user} resetAppState={resetAppState}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <MainFeed posts={posts} current_user={current_user} comments={comments} users={users} follows={follows} likes={likes} resetAppState={resetAppState}/>
                </ErrorBoundary>
            </Container>
            
        );
    }
}

export default Home;