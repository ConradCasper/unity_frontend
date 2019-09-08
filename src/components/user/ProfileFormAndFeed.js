import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileForm from './ProfileForm';
import ProfileFeed from './ProfileFeed';

class ProfileFormAndFeed extends Component {
    render() {
        const { current_user, likes, comments, users, follows, posts, resetAppState } = this.props
        return (
            <Container style={{"marginTop":"4.5em", "width": "50em"}} >
                <ProfileForm resetAppState={resetAppState} current_user={current_user}/>
                <ProfileFeed resetAppState={resetAppState} current_user={current_user} users={users} follows={follows} comments={comments} likes={likes} posts={posts} />
            </Container>
        );
    }
}

export default ProfileFormAndFeed;