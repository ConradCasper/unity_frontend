import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileDisplay from './ProfileDisplay'
import ProfileFeed from './ProfileFeed'
import ErrorBoundary from '../ErrorBoundary'

class Profile extends Component {


    
            


    
    

    render() {
        const { user, users, follows, comments, likes, posts, resetAppState } = this.props
        return (
            
            <Container style={{"marginTop":"6.5em", "width": "80em"}} >
                <ErrorBoundary>
                    <ProfileDisplay user={user} follows={follows} resetAppState={resetAppState} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ProfileFeed resetAppState={resetAppState} user={user} users={users} follows={follows} comments={comments} likes={likes} posts={posts}/>
                </ErrorBoundary>
            </Container>
        );
    }
}

export default Profile;