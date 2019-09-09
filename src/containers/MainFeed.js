import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'
import Post from '../components/posts/Post'
import ErrorBoundary from '../components/ErrorBoundary'


class MainFeed extends Component {

    
    
    render() {
        if(this.props === undefined) { return null }
        // check
        const { likes, comments, users, posts, follows, resetAppState } = this.props
        // check
        const current_user = JSON.parse(localStorage.getItem("current_user"))
        // check
        const current_user_follows = follows.filter(follow => follow.follower_id === current_user.id) 
        // works now
        const current_user_posts = [] 
        const followed_user_posts = []

        posts.forEach(post => {
            if(post.user_id === current_user.id){
                current_user_posts.push(post)
            }
        })

        posts.forEach(post => {
            current_user_follows.forEach(follow =>{
                if(post.user_id === follow.followee_id){
                    followed_user_posts.push(post)
                }
            }) 
        })

        const wholeFeed = [...current_user_posts, ...followed_user_posts]
        const sortedFeed = wholeFeed.sort( (a, b) => {
            return b.id - a.id
        })
        
        const renderPosts = sortedFeed.map(post => {
            
            return <ErrorBoundary><Post key={post.id} post={post} users={users} likes={likes} comments={comments} resetAppState={resetAppState} /></ErrorBoundary>
            
        })
            
        return (
           <ErrorBoundary>
                <Feed className="MainFeed">
                    {renderPosts}
                </Feed>
            </ErrorBoundary>
        );
    }
}

export default MainFeed;



        
        

            
        
            
                   
               
        

        
            
            
                    
                    
                    
                    
                
                
        



        