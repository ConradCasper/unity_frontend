import React, { Component } from 'react';
import { Grid, Button, Form, Header, Segment, Image } from 'semantic-ui-react';
import logo from '../../src/unity_logo.png'



export default class SignUp extends Component {

    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
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
        const user = this.state
        const requestObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify({
                user: user
            })
        }

        fetch(`http://localhost:3000/api/v1/users`, requestObject)
        .then(res => res.json())
        .then(data => console.log(data))

        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        })

    }

    


    render() {
        return (
            
                <Grid columns="equal" className="App-header">
                <Grid.Row>
                    <Grid.Column  width={4} style={{"justifyContent": "center", "alignItems": "center"}} >

                        
                            <Image src={logo}  className="App-logo" alt="logo" style={{ "marginTop": "298px" }}/>
                        

                    </Grid.Column>
                    <Grid.Column width={3}>

                    </Grid.Column>
                    
                    <Grid.Column  width={5} style={{ "justifyContent": "center", "alignItems": "center" }} verticalAlign="middle">
                        <Header as='h2' color='orange' textAlign='center'>
                            <Image src={logo} /> Create a New Account
                        </Header>
                        <Form size='large' onSubmit={this.handleOnSubmit}>
                            <Segment stacked>
                                <Form.Input  placeholder='First Name' type="text" icon="user" iconPosition="left" name="first_name" value={this.state.first_name} onChange={this.handleOnChange}/>
                                <Form.Input placeholder='Last Name' type="text" icon="user" iconPosition="left" name="last_name" value={this.state.last_name} onChange={this.handleOnChange}/>
                                <Form.Input placeholder="Email" type="email" icon="user" iconPosition="left" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                                <Form.Input placeholder="Password" type="password" icon="lock" iconPosition="left" name="password" value={this.state.password} onChange={this.handleOnChange}/>

                                <Button color="orange" fluid size='large' type="submit">
                                    Sign Up!
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
        
        )
    }
}

