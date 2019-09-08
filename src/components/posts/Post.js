import React, { Component } from 'react';
import { Feed, Icon, Segment, Image } from 'semantic-ui-react'
import CommentsContainer from '../../containers/CommentsContainer'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
class Post extends Component {

    handleLike = () => {
        const token = localStorage.getItem("jwt")
        const request = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"applicaiton/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                like: {
                    post_id: this.props.post.id
                }
            })
        }

        fetch(`http://localhost:3000/api/v1/likes`, request)
        .then(res => res.json())
        .then(post => this.props.resetAppState())
    }
    
    
    render() {
        if(this.props === undefined) {return null}
        const { post, users, likes, comments, resetAppState } = this.props
        const user = users.find(user => user.id === post.user_id)
        const postLikes = likes.filter(like => {
            return like.post_id === post.id
        })

        
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
                                <Feed.Date content={dayjs(post.created_at).fromNow()}/>
                                <Feed.Summary content={`${user.first_name} ${user.last_name} created a post`} />
                                
                                <Feed.Extra images>
                                    
                                      <img src={post.img_url} alt={`${user.first_name} ${user.last_name} shared something`} />
                                    
                                </Feed.Extra>
                                <Feed.Extra text content={post.content} />
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name='like' color="red" onClick={this.handleLike}/>{postLikes.length}
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                            
                        </Feed.Event>
                    </Segment>
                    <Segment>
                        <CommentsContainer comments={comments} users={users} resetAppState={resetAppState} floated="left" postId={post.id} />
                    </Segment>
                </Segment.Group>
            </Segment>       
            
            
        
        );
    }
}

export default Post;