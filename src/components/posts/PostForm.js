import React, { Component } from 'react';
import { Form, TextArea, Image, Segment, Button } from 'semantic-ui-react';


class PostForm extends Component {
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
        const current_user = JSON.parse(localStorage.getItem("current_user"))
        const { first_name, last_name, avatar  } = current_user
        
        return (
            <Segment>
            <Segment.Group>
                <Segment.Group horizontal>
                    <Segment>
                        <Image src={avatar} avatar size='small' />
                        <h4>{`${first_name} ${last_name}`}</h4>
                    </Segment>
                    <Segment>
                        <Form onSubmit={this.handleOnSubmit}>
                            <TextArea placeholder="What's going on in your world today?" name="content" value={this.state.content} onChange={this.handleOnChange}/>
                            <Form.Input style={{ "marginTop":"1em" }} placeholder="Add an image url..." name="img_url" value={this.state.img_url} onChange={this.handleOnChange}/>
                            <Button type="submit" style={{ "marginTop": "1em" }} color="orange">Make a New Post</Button>
                        </Form>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
            </Segment>
        );
    }
}



export default PostForm;