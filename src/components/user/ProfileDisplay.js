import React, { Component } from 'react';
import { Container, Segment, Image, Header, Button, Grid, Modal } from 'semantic-ui-react';
import ErrorBoundary from '../ErrorBoundary'



class ProfileDisplay extends Component {
    
    handleFollow = e => {
        e.persist()
        const relationship = this.props.follows.find(follow => {
            return follow.followee_id === this.props.user.id && follow.follower_id === this.props.current_user.id
        })
        if(relationship === undefined){
        const id = this.props.user.id
        const token = localStorage.getItem("jwt")

        const request = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                follow: {
                    followee_id: id
                }
            })
        }
        fetch('http://localhost:3000/api/v1/follows', request)
        .then(res => res.json())
        .then(data => {
            this.props.resetAppState()
            
        })
    } else {
        const id = relationship.id
        const token = localStorage.getItem("jwt")

        const request = {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        fetch(`http://localhost:3000/api/v1/follows/${id}`, request)
        .then(res => res.json())
        .then(data => {
            this.props.resetAppState()
            
        })
    }

    }


    render() {
        
        const { current_user, user, resetAppState, follows } = this.props
        const relationship = follows.find(follow => {
            return follow.followee_id === user.id && follow.follower_id === current_user.id
        })
        
        return (
            <ErrorBoundary>
                <Container style={{ "width": "80em", "marginBottom": "5em"}} >
        
                    <Image src={user.background_img}  className="profileBackground" />
                    <Image src={user.avatar} rounded size="small"  className="profileImg" />
                    <Header as='h2' className="profileName" inverted>{`${user.first_name} ${user.last_name}`}</Header>
                    {(relationship === undefined) ? 
                        <Button className="profileFollow" icon="add user" size="large" content="Follow" onClick={this.handleFollow} color="blue"></Button>
                            :
                        <Button className="profileFollow" icon="remove user" size="large" content="Unfollow" onClick={this.handleFollow} color="red"></Button>
                    }
                    
                    
                    <Grid columns={3} divided inverted style={{"marginTop": "-19.5em"}}>
                        <Grid.Row stretched>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Bio:</Header>
                                    <p>{user.bio}</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Interests:</Header>
                                    <p>{user.interests}</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment inverted color="black" textAlign="center">
                                    <Header>Favorite Bands:</Header>
                                    <p>{user.favorite_bands}</p>
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