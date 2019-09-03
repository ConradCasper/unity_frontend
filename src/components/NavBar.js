import React, { Component } from 'react';
import logo from '../unity_logo.png';
import {
    Container,
    Form,
    Button,
    Image,
    Menu
} from 'semantic-ui-react'


export default class NavBar extends Component {

    constructor(){
        super()
        this.state ={
            email: '',
            password: ''
        }
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const userCreds = this.state
        const requestObject ={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify({
                user: userCreds
            })
        }

        fetch(`http://localhost:3000/api/v1/login`, requestObject)
        .then(res => res.json())
        .then(data => localStorage.setItem("jwt", data.jwt))
        
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Menu fixed='top' inverted>

                        <Menu.Item as='a' header>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                            Unity
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <Form inverted onSubmit={this.handleOnSubmit}>
                                <Form.Group>
                                    <Form.Field inverted="true">
                                        <label>Email</label>
                                        <Form.Input placeholder='Email' type="text" icon='user' iconPosition='left' name="email" value={this.state.email} onChange={this.handleOnChange}/>
                                    </Form.Field>
                                    <Form.Field inverted='true'>
                                        <label>Password</label>
                                        <Form.Input placeholder='Password' type="password" icon='lock' iconPosition='left' name="password" value={this.state.password} onChange={this.handleOnChange}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <Button inverted style={{ marginTop: '1.3em' }} type="submit">
                                            Log in
                                        </Button>
                                    </Form.Field>
                                </Form.Group>

                            </Form>
                        </Menu.Item>

                    </Menu>
                </Container>

            </div>
        )
    }
}