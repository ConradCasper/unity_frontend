import React, { Component } from 'react';
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
            <div>
                {/* <PostForm /> */}
                <MainFeed posts={this.state.posts}/>
            </div>
        );
    }
}

export default Home;