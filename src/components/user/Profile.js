import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileDisplay from './ProfileDisplay'
import ProfileFormAndFeed from './ProfileFormAndFeed'
import ErrorBoundary from '../ErrorBoundary'

class Profile extends Component {


    constructor(){
        super()
        this.state ={
            current_user: {}
        }
    }

    fetchProfile = () => {
        const token = localStorage.getItem("jwt")
        fetch(`http://localhost:3000/api/v1/profile`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({current_user: data.user}) 
           setTimeout(localStorage.setItem("current_user", JSON.stringify(data.user)), 3000)}
        )
    }
            


    componentDidMount() {
        this.fetchProfile()
    }
    

    render() {
        const { users, follows, comments, likes, posts, resetAppState } = this.props
        return (
            
            <Container style={{"marginTop":"6.5em", "width": "80em"}} >
                <ErrorBoundary>
                    <ProfileDisplay current_user={this.state.current_user} follows={follows} fetchProfile={this.fetchProfile} resetAppState={resetAppState}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ProfileFormAndFeed resetAppState={resetAppState} current_user={this.state.current_user} users={users} follows={follows} comments={comments} likes={likes} posts={posts}/>
                </ErrorBoundary>
            </Container>
        );
    }
}

export default Profile;