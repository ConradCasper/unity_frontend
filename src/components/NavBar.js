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
    render() {
        return (
            <div>
                <Container>
                    <Menu fixed='top' inverted>

                        <Menu.Item as='a' header>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                            Unity
                        </Menu.Item>
                        <Menu.Item inverted position='right'>
                            <Form inverted>
                                <Form.Group>
                                    <Form.Field inverted>
                                        <label>Email</label>
                                        <input placeholder='Email' />
                                    </Form.Field>
                                    <Form.Field inverted>
                                        <label>Password</label>
                                        <input placeholder='Password' type="password" />
                                    </Form.Field>
                                    <Form.Field>
                                        <Button as='a' inverted style={{ marginTop: '1.25em' }}>
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