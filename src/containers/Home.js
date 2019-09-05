import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MainFeed from './MainFeed'
import PostForm from '../components/posts/PostForm'

class Home extends Component {


    render() {
        return (
            <Container style={{"marginTop":"6em", "width": "50em"}}>
                <PostForm style={{ "marginTop":"4em" }}/>
                <MainFeed posts={this.props.posts}/>
            </Container>
        );
    }
}

export default Home;