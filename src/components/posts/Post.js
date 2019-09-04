import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'
class Post extends Component {
    
    render() {
        const { content, created_at, user } = this.props.post
        return (
        
            <Feed.Event>
                <Feed.Label image={user.avatar}/>
                <Feed.Content>
                    <Feed.Date content={created_at}/>
                    <Feed.Summary content={`${user.first_name} ${user.last_name} created a post`} />
                    <Feed.Extra text content={content} />
                </Feed.Content>
            </Feed.Event>
                    
            
        
        );
    }
}

export default Post;