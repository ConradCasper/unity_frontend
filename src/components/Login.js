import React, { Component } from 'react';
import { Grid, Button, Form, Header, Segment, Image } from 'semantic-ui-react';
import logo from '../../src/unity_logo.png'



export default class Login extends Component {
    render() {
        return (
            
                <Grid columns={2} className="App-header">
                    <Grid.Column  width={5} style={{"justifyContent": "center", "alignItems": "center", "display": "flex"}} floated="left">

                        <header>
                            <img src={logo} className="App-logo" alt="logo" />
                        </header>

                    </Grid.Column>
                    
                    <Grid.Column  width={5} style={{ "justifyContent": "center", "alignItems": "center" }} verticalAlign="middle" floated="left">
                        <Header as='h2' color='orange' textAlign='center'>
                            <Image src={logo} /> Create a New Account
                        </Header>
                        <Form size='large' >
                            <Segment stacked>
                                <Form.Input  placeholder='First Name' icon="user" iconPosition="left"/>
                                <Form.Input placeholder='Last Name' icon="user" iconPosition="left"/>
                                <Form.Input placeholder="Email" icon="user" iconPosition="left"/>
                                <Form.Input placeholder="Password" type="password" icon="lock" iconPosition="left"/>

                                <Button as='a' color='orange' fluid size='large'>
                                    Sign Up!
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
        
        )
    }
}

