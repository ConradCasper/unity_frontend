import React, { Component } from 'react';
import logo from '../unity_logo.png';
import { Link } from 'react-router-dom';
import {
    Container,
    Form,
    Button,
    Image,
    Menu,
    Search
} from 'semantic-ui-react'


class NavBar extends Component {

    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }


    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value })
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
        .then(data => {
            localStorage.setItem("jwt", data.jwt)
            this.props.login(data.user)
        })
            

        
        
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const { current_user } = this.props
        return (
            <div>
            {(current_user !== null) ? 
            
                <Container>
                    <Menu fixed='top' inverted>

                        <Menu.Item as='a' header>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                            <h3 style={{ "paddingBottom": "1.2em" }}>Unity</h3>
                        </Menu.Item>
                        <Menu.Item>
                        <Search/>
                        </Menu.Item>
                            
                        
                                <Menu.Item>
                                  <Link to='/home'> Home </Link>  
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/profile'> Profile </Link>
                                </Menu.Item>
                    
                        
                        <Menu.Item position='right'>
                            
                                        <Button color="orange" onClick={this.props.logout}>
                                            Logout
                                        </Button>
                                    
                        </Menu.Item>

                    </Menu>
                </Container>

            
            
            
            
            : 
            
            
            
            <Container>
                    <Menu fixed='top' inverted>

                        <Menu.Item as='a' header>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                            <h3 style={{ "paddingBottom": "1.2em" }}>Unity</h3>
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
                                        <Button  style={{ marginTop: '1.3em' }} type="submit" color="orange">
                                            Log in
                                        </Button>
                                    </Form.Field>
                                </Form.Group>

                            </Form>
                        </Menu.Item>

                    </Menu>
                </Container> 
                
                }
                
            </div>
        )
    }
}






export default NavBar;