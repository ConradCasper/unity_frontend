import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileDisplay from './ProfileDisplay'
import ProfileFeed from './ProfileFeed'
import ErrorBoundary from '../ErrorBoundary'

class Profile extends Component {


    
            


    
    

    render() {
        const { current_user, user, users, follows, comments, likes, posts, resetAppState } = this.props
        return (
            
            <Container style={{"marginTop":"6.5em", "width": "80em"}} >
                <ErrorBoundary>
                    <ProfileDisplay current_user={current_user} user={user} follows={follows} resetAppState={resetAppState} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Container style={{"marginTop":"6.5em", "width": "55em"}} textAlign="center" >
                        <ProfileFeed resetAppState={resetAppState} current_user={current_user} user={user} users={users} follows={follows} comments={comments} likes={likes} posts={posts}/>
                    </Container>
                </ErrorBoundary>
            </Container>
        );
    }
}

export default Profile;