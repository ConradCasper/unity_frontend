import React, { Component } from 'react';
import { Grid, Button, Form, Header, Segment, Image } from 'semantic-ui-react';
import logo from '../../src/unity_logo.png'



export default class Login extends Component {
    render() {
        return (
            <div className="App-header">
                <Grid columns={2}>
                    <Grid.Column floated="left" width={8}>

                        <header>
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                        </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                        </a>
                        </header>

                    </Grid.Column>
                    <Grid.Column floated="right" width={8}>
                        <Header as='h2' color='orange' textAlign='center'>
                            <Image src={logo} /> Create a New Account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button color='orange' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

