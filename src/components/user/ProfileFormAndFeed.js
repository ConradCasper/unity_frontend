import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileForm from './ProfileForm';
import ProfileFeed from './ProfileFeed';

class ProfileFormAndFeed extends Component {
    render() {
        return (
            <Container >
                <ProfileForm />
                <ProfileFeed />
            </Container>
        );
    }
}

export default ProfileFormAndFeed;