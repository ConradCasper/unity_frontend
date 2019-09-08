import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MainFeed from './MainFeed'
import PostForm from '../components/posts/PostForm'

class Home extends Component {


    render() {
        
        
        return (
            
            <Container style={{"marginTop":"6em", "width": "50em"}}>
                <PostForm style={{ "marginTop":"4em" }}  resetAppState={this.props.resetAppState}/>
                <MainFeed posts={this.props.posts} comments={this.props.comments} users={this.props.users} follows={this.props.follows} likes={this.props.likes} resetAppState={this.props.resetAppState}/>
            </Container>
        );
    }
}

export default Home;