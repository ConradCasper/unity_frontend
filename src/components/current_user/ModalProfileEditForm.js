import React, { Component } from 'react';
import { Form, TextArea, Button  } from 'semantic-ui-react';

class ModalProfileEditForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: props.current_user.id,
            avatar: props.current_user.avatar,
            first_name: props.current_user.first_name,
            last_name: props.current_user.last_name,
            bio: props.current_user.bio,
            interests: props.current_user.interests,
            favorite_bands: props.current_user.favorite_bands,
            background_img: props.current_user.background_img
        }
    }


    handleOnChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const token = localStorage.getItem("jwt")
        const id = this.props.current_user.id
        const request = {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify({
                user: this.state
            })
        }

        fetch(`https://damp-tundra-82698.herokuapp.com/api/v1/users/${id}`, request)
        .then(res => res.json())
        .then(data => this.props.resetCurrentUser(data.user))
        
            
        
    }


    render() {
        
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Form.Field>
                    <label>First Name</label>
                    <input name="first_name" value={this.state.first_name} onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="last_name" value={this.state.last_name} onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Avatar URL</label>
                    <input name="avatar" value={this.state.avatar} onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Background Image URL</label>
                    <input name="background_img" value={this.state.background_img} onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Bio</label>
                    <TextArea name="bio" value={this.state.bio} onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Interests</label>
                    <TextArea name="interests" value={this.state.interests} onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Favorite Bands</label>
                    <TextArea name="favorite_bands" value={this.state.favorite_bands} onChange={this.handleOnChange}/>
                </Form.Field>
                <Button type="submit" content="Save" color="orange" inverted></Button>
            </Form>
        );
    }
}

export default ModalProfileEditForm;