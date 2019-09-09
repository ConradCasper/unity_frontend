import React, { Component } from 'react';
import { Container, Segment, Image, Header, Button, Grid } from 'semantic-ui-react';
import ErrorBoundary from '../ErrorBoundary'


class ProfileDisplay extends Component {

    


    render() {
        const { current_user } = this.props
        return (
            <ErrorBoundary>
                <Container style={{ "width": "80em", "marginBottom": "5em"}} fluid>
        
                    <Image src={current_user.background_img}  className="profileBackground" fluid/>
                    <Image src={current_user.avatar} rounded size="small"  className="profileImg" />
                    <Header as='h2' className="profileName" inverted>{`${current_user.first_name} ${current_user.last_name}`}</Header>
                    <Button className="profileFollow" icon="add user" size="huge" content="Follow" inverted></Button>
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