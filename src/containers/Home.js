import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MainFeed from './MainFeed'
import PostForm from '../components/posts/PostForm'

class Home extends Component {


    


    render() {
        if(this.props === undefined) { return null }
        const { follows, users, likes, comments, posts, resetAppState } = this.props
        
        return (
            
            <Container style={{"marginTop":"6em", "width": "50em"}}>
                <PostForm style={{ "marginTop":"4em" }}  resetAppState={resetAppState}/>
                <MainFeed posts={posts} comments={comments} users={users} follows={follows} likes={likes} resetAppState={resetAppState}/>
            </Container>
        );
    }
}

export default Home;