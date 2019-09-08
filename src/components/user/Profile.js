import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileDisplay from './ProfileDisplay'
import ProfileFormAndFeed from './ProfileFormAndFeed'

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
        .then(data => this.setState({current_user: data.user}))
    }


    componentDidMount(){
        this.fetchProfile()
    }
    

    render() {
        return (
            <Container style={{"marginTop":"6.5em", "width": "80em"}} >
                <ProfileDisplay current_user={this.state.current_user} />
                <ProfileFormAndFeed current_user={this.state.current_user} />
            </Container>
        );
    }
}

export default Profile;