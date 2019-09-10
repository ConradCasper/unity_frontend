import React, { Component } from 'react';
import { Container, Segment, Image, Header, Button, Grid, Modal } from 'semantic-ui-react';
import ErrorBoundary from '../ErrorBoundary'
import ModalProfileEditForm from './ModalProfileEditForm'


class ProfileDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            current_user: props.current_user
        }
    }

    static getDerivedStateFromProps(props, state){
        if(props.current_user !== state.current_user){
            console.warn("new props received", props)
            return { current_user: props.current_user }
        }
        return null
    }
    


    render() {
        const { resetAppState, fetchProfile } = this.props
        
        return (
            <ErrorBoundary>
                <Container style={{ "width": "80em", "marginBottom": "5em"}} fluid>
        
                    <Image src={this.state.current_user.background_img}  className="profileBackground" fluid/>
                    <Image src={this.state.current_user.avatar} rounded size="small"  className="profileImg" />
                    <Header as='h2' className="profileName" inverted>{`${this.state.current_user.first_name} ${this.state.current_user.last_name}`}</Header>
                    <Button className="profileFollow" icon="add user" size="huge" content="Follow" inverted></Button>
                    <Modal trigger={<Button className="editPro" icon='edit' size="medium" content="Edit Profile" color="orange" inverted></Button>} closeIcon>
                        <Modal.Header>Edit Your Profile</Modal.Header>
                        <Modal.Content>
                            <ModalProfileEditForm current_user={this.state.current_user} fetchProfile={fetchProfile} resetAppState={resetAppState}/>
                        </Modal.Content>
                    </Modal>
                    <Grid columns={3} divided inverted style={{"marginTop": "-19.5em"}}>
                        <Grid.Row stretched>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Bio:</Header>
                                    <p>{this.state.current_user.bio}</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Interests:</Header>
                                    <p>{this.state.current_user.interests}</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Favorite Bands:</Header>
                                    <p>{this.state.current_user.favorite_bands}</p>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    
                    </Grid>
                
                </Container>
            </ErrorBoundary>
            
        );
    }
}
                    
                    

export default ProfileDisplay;