import React, { Component } from 'react';
import { Feed, Icon, Segment, Image } from 'semantic-ui-react'
import CommentsContainer from '../../containers/CommentsContainer'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
class Post extends Component {


    componentDidMount(){
        this.props.resetAppState()
    }
    
    render() {
        
        if(this.props === undefined) {return null}
        const user = this.props.users.find(user => user.id === this.props.post.user_id)
        console.log(this.props.users)
        
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
                                <Feed.Date content={dayjs(this.props.post.created_at).fromNow()}/>
                                <Feed.Summary content={`${user.first_name} ${user.last_name} created a post`} />
                                <Feed.Extra text content={this.props.post.content} />
                                <Feed.Extra images>
                                    
                                      <img src={this.props.post.img_url} alt={`${user.first_name} ${user.last_name} shared something`} />
                                    
                                </Feed.Extra>
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name='like' color="red" />
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                            
                        </Feed.Event>
                    </Segment>
                    <Segment>
                        {/* <CommentsContainer comments={this.props.comments} floated="left" postId={this.props.post.id} /> */}
                    </Segment>
                </Segment.Group>
            </Segment>       
            
            
        
        );
    }
}

export default Post;