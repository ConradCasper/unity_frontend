import React, { Component } from 'react';
import { Feed, Icon, Segment } from 'semantic-ui-react'
import CommentsContainer from '../../containers/CommentsContainer'
class Post extends Component {
    
    render() {
        const { content, created_at, user, likes, comments } = this.props.post
        return (
            <Segment>
                <Segment.Group>
                    <Segment>
                        <Feed.Event>
                            <Feed.Label image={user.avatar}/>
                            <Feed.Content>
                                <Feed.Date content={created_at}/>
                                <Feed.Summary content={`${user.first_name} ${user.last_name} created a post`} />
                                <Feed.Extra text content={content} />
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name='like' />{likes.length}
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                            
                        </Feed.Event>
                    </Segment>
                    <Segment>
                        <CommentsContainer comments={comments} floated="left"/>
                    </Segment>
                </Segment.Group>
            </Segment>       
            
            
        
        );
    }
}

export default Post;