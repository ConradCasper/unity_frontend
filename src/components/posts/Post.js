import React, { Component } from 'react';
import { Feed, Icon, Segment, Image } from 'semantic-ui-react'
import CommentsContainer from '../../containers/CommentsContainer'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

class Post extends Component {

    handleLike = () => {
        const likedOrNot = this.props.likes.find(like => {
            return like.user_id === this.props.current_user.id
        })
        console.log("inside of if in handleLike", likedOrNot)
        if (likedOrNot === undefined){
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

            fetch(`https://damp-tundra-82698.herokuapp.com/api/v1/likes`, request)
            .then(res => res.json())
            .then(post => this.props.resetAppState())
        } else {
            console.log("inside of else in handleLike", likedOrNot.id )
            const token = localStorage.getItem("jwt")
            const request = {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            fetch(`https://damp-tundra-82698.herokuapp.com/api/v1/likes/${likedOrNot.id}`, request)
            .then(res => res.json())
            .then(like => this.props.resetAppState())
        }
    }
    
    
    render() {
        if(this.props === undefined) {return null}
        const { post, users, likes, comments, resetAppState, current_user } = this.props
        const user = users.find(user => user.id === post.user_id)
        const postLikes = likes.filter(like => {
            return like.post_id === post.id
        })

        
        dayjs.extend(relativeTime)
        return (
            <Segment inverted>
                <Segment.Group>
                    <Segment inverted>
                        <Feed.Event>
                            <Feed.Label>
                                <Image avatar src={user.avatar} size="small" />
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Date content={dayjs(post.created_at).fromNow()}/>
                                <Feed.Summary content={`${user.first_name} ${user.last_name} created a post`} />
                                
                                <Feed.Extra images>
                                    
                                      <Image src={post.img_url} size="large" centered alt={`${user.first_name} ${user.last_name} shared something`} />
                                    
                                </Feed.Extra>
                                <Feed.Extra text content={post.content} />
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name='like' color="red" size="large" onClick={this.handleLike}/>{postLikes.length}
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                            
                        </Feed.Event>
                    </Segment>
                    <Segment inverted>
                        <CommentsContainer comments={comments} current_user={current_user} users={users} resetAppState={resetAppState}  postId={post.id} />
                    </Segment>
                </Segment.Group>
            </Segment>       
            
            
        
        );
    }
}

export default Post;