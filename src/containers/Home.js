import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MainFeed from './MainFeed'

class Home extends Component {

    constructor(){
        super()
        this.state ={
            posts: []
        }
    }

    componentDidMount(){
        let token = localStorage.getItem("jwt")
        fetch(`http://localhost:3000/api/v1/posts`,{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        })
        .then(res => res.json())
        .then(posts => this.setState({
            posts: posts
        }))
    }






    render() {
        return (
            <Container style={{"marginTop":"6em", "width": "50em"}}>
                {/* <PostForm /> */}
                <MainFeed posts={this.state.posts}/>
            </Container>
        );
    }
}

export default Home;