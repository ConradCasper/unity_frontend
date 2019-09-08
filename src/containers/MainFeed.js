import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'
import Post from '../components/posts/Post'


class MainFeed extends Component {
    
    render() {

        const current_user = JSON.parse(localStorage.getItem("current_user"))
        const current_user_follows = this.props.follows.filter(follow => {
            return follow.follower_id === current_user.id
        })
        const followed_user_posts = this.props.posts.filter(post => {
            
                for (let i = 0; i < current_user_follows.length; i++){
                    if(post.user_id === current_user_follows[i].followee_id){
                        return post
                    } else if(post.user_id === current_user.id){
                        return post
                    }
                }
            
        })
                
        const renderPosts = followed_user_posts.map(post => {
            
            return <Post key={post.id} post={post} users={this.props.users} likes={this.props.likes} comments={this.props.comments} resetAppState={this.props.resetAppState} />
            
        })
            
        return (
           
            <Feed className="MainFeed">
                {renderPosts}
            </Feed>
        );
    }
}

export default MainFeed;
        



        