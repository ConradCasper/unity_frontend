import React, { Component } from 'react';
import { Container, Segment, Image, Header, Button, Grid, Modal } from 'semantic-ui-react';
import ErrorBoundary from '../ErrorBoundary'
import ModalProfileEditForm from './ModalProfileEditForm'


class ProfileDisplay extends Component {
    
    


    render() {
        const { current_user, resetAppState, resetCurrentUser } = this.props
        
        return (
            <ErrorBoundary>
                <Container style={{ "width": "80em", "marginBottom": "5em"}} fluid>
        
                    <Image src={current_user.background_img}  className="profileBackground" fluid/>
                    <Image src={current_user.avatar} rounded size="small"  className="profileImg" />
                    <Header as='h2' className="profileName" inverted>{`${current_user.first_name} ${current_user.last_name}`}</Header>
                    
                    <Modal trigger={<Button className="editPro" icon='edit' size="medium" content="Edit Profile" color="orange" inverted></Button>} closeIcon>
                        <Modal.Header>Edit Your Profile</Modal.Header>
                        <Modal.Content>
                            <ModalProfileEditForm current_user={current_user} resetAppState={resetAppState} resetCurrentUser={resetCurrentUser}/>
                        </Modal.Content>
                    </Modal>
                    <Grid columns={3} divided inverted style={{"marginTop": "-19.5em"}}>
                        <Grid.Row stretched>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Bio:</Header>
                                    <p>{current_user.bio}</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Interests:</Header>
                                    <p>{current_user.interests}</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Favorite Bands:</Header>
                                    <p>{current_user.favorite_bands}</p>
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