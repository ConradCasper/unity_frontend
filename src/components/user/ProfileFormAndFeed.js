import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileForm from './ProfileForm';
import ProfileFeed from './ProfileFeed';
import ErrorBoundary from '../ErrorBoundary'

class ProfileFormAndFeed extends Component {
    render() {
        const { current_user, likes, comments, users, follows, posts, resetAppState } = this.props
        return (
            <Container style={{"marginTop":"4.5em", "width": "50em"}} >
                <ErrorBoundary>
                    <ProfileForm resetAppState={resetAppState} current_user={current_user}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ProfileFeed resetAppState={resetAppState} current_user={current_user} users={users} follows={follows} comments={comments} likes={likes} posts={posts} />
                </ErrorBoundary>    
            </Container>
        );
    }
}

export default ProfileFormAndFeed;