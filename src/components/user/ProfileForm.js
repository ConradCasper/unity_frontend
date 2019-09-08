import React, { Component } from 'react';
import { Grid, Segment, Image, Form, TextArea } from 'semantic-ui-react';

class ProfileForm extends Component {


    constructor(){
        super()
        this.state ={
            content: '',
            img_url: ''
        }
    }


    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const token = localStorage.getItem("jwt")
        const post = this.state
        const request = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"applicaiton/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                post: post
            })
        }

        fetch(`http://localhost:3000/api/v1/posts`, request)
        .then(res => res.json())
        .then(post => this.props.resetAppState())

        this.setState({
            content: '',
            img_url: ''
        })

    }




    render() {
        return (
            
        );
    }
}

export default ProfileForm;