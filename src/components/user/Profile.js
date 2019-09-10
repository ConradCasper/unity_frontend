import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileDisplay from './ProfileDisplay'
import ProfileFormAndFeed from './ProfileFormAndFeed'
import ErrorBoundary from '../ErrorBoundary'

class Profile extends Component {


    
            


    
    

    render() {
        const { current_user, users, follows, comments, likes, posts, resetAppState, resetCurrentUser } = this.props
        return (
            
            <Container style={{"marginTop":"6.5em", "width": "80em"}} >
                <ErrorBoundary>
                    <ProfileDisplay current_user={current_user} follows={follows} resetAppState={resetAppState} resetCurrentUser={resetCurrentUser}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ProfileFormAndFeed resetAppState={resetAppState} current_user={current_user} users={users} follows={follows} comments={comments} likes={likes} posts={posts}/>
                </ErrorBoundary>
            </Container>
        );
    }
}

export default Profile;