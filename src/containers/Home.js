import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MainFeed from './MainFeed'
import PostForm from '../components/posts/PostForm'
import ErrorBoundary from '../components/ErrorBoundary'

class Home extends Component {


    


    render() {
        if(this.props === undefined) { return null }
        const { follows, users, likes, comments, posts, resetAppState } = this.props
        
        return (
            
            <Container style={{"marginTop":"6em", "width": "50em"}}>
                <ErrorBoundary>
                    <PostForm style={{ "marginTop":"4em" }}  resetAppState={resetAppState}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <MainFeed posts={posts} comments={comments} users={users} follows={follows} likes={likes} resetAppState={resetAppState}/>
                </ErrorBoundary>
            </Container>
        );
    }
}

export default Home;