import React, { Component } from 'react';
import { Grid, Segment, Image, Form, TextArea, Button, Header, Container } from 'semantic-ui-react';

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
        const { current_user } = this.props
        return (
            
            
            <Grid  inverted textAlign="center" centered style={{ "marginBottom": "50px", "marginTop":"50px" }} >
                <Grid.Column width={3}>
                    <Image src={current_user.avatar} avatar size="tiny" floated="left"   centered verticalAlign="bottom" style={{ "marginTop":"15px" }}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    
                    <Form onSubmit={this.handleOnSubmit} size="large">
                        <Grid.Row>
                            <TextArea placeholder="What's going on in your world?" name="content" value={this.state.content} onChange={this.handleOnChange}></TextArea>
                        </Grid.Row>
                        <br/>
                        <Grid.Row>
                            <Form.Input name="img_url" value={this.state.img_url} onChange={this.handleOnChange} placeholder="Upload an image!" />
                        </Grid.Row>
                        <br/>
                        <Button type="submit" content="Post" floated="right" color="orange"/>
                    </Form>
                </Grid.Column>
            </Grid>
            
        );
    }
}

export default ProfileForm;