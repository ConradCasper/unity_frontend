import React, { Component } from 'react';
import { Feed, Icon, Segment, Image } from 'semantic-ui-react'
import CommentsContainer from '../../containers/CommentsContainer'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
class Post extends Component {
    
    render() {
        const { id, content, created_at, user, likes, comments, img_url } = this.props.post
        dayjs.extend(relativeTime)
        return (
            <Segment>
                <Segment.Group>
                    <Segment>
                        <Feed.Event>
                            <Feed.Label>
                                <Image avatar src={user.avatar} size="small" />
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Date content={dayjs(created_at).fromNow()}/>
                                <Feed.Summary content={`${user.first_name} ${user.last_name} created a post`} />
                                <Feed.Extra text content={content} />
                                <Feed.Extra images>
                                    
                                      <img src={img_url} alt={`${user.first_name} ${user.last_name} shared something`} />
                                    
                                </Feed.Extra>
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name='like' color="red" />{likes.length}
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                            
                        </Feed.Event>
                    </Segment>
                    <Segment>
                        <CommentsContainer comments={comments} floated="left" postId={id} addCommentToPost={this.props.addCommentToPost}/>
                    </Segment>
                </Segment.Group>
            </Segment>       
            
            
        
        );
    }
}

export default Post;