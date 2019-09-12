import React, { Component } from 'react';
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
// doesn't seem to need access to current user
class CommentsContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            post_id: props.postId,
            content: ''
        }
    }

    handleOnChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const comment = this.state
        const token = localStorage.getItem("jwt")
        const request = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify({
                comment: comment
            })
        }
        fetch(`http://localhost:3000/api/v1/comments`, request)
        .then(res => res.json())
        .then(comment => this.props.resetAppState())



        this.setState({...this.state, content: ''})

    }


    handleDelete = commentId => {
        const token = localStorage.getItem("jwt")
        const request = {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        fetch(`http://localhost:3000/api/v1/comments/${commentId}`, request)
        .then(res => res.json())
        .then(comment => this.props.resetAppState())
    }





    render() {
        const { users, comments, postId, current_user } = this.props
        const postComments = comments.filter(comment => {
          return  comment.post_id === postId
        })
        
        const userComments = []

        postComments.forEach(comment => {
            
            for (let i = 0; i < users.length; i++){
                if(comment.user_id === users[i].id){
                    userComments.push(
                        <Segment key={comment.id}>
                            <Comment>
                                <Comment.Avatar src={users[i].avatar}/>
                                <Comment.Content>
                                    <Comment.Author color="white" as="a">{`${users[i].first_name} ${users[i].last_name}`}</Comment.Author>
                                    <Comment.Metadata color="white">
                                        <div>{dayjs(comment.created_at).fromNow()}</div>
                                    </Comment.Metadata>
                                    <Comment.Text color="white">{comment.content}</Comment.Text>
                                    {(current_user.id === comment.user_id) ? 
                                        <Comment.Actions>
                                            <Comment.Action onClick={this.handleDelete(comment.id)}>Delete</Comment.Action>
                                        </Comment.Actions>
                                        :
                                        null
                                    }
                                    
                                </Comment.Content>
                            </Comment>
                        </Segment>
                    )
                }
            }
        
        })
            
            
        
        

        dayjs.extend(relativeTime)
        return (
            <Segment padded="very" inverted>
                <Comment.Group>
                    <Header as="h3" dividing inverted>
                        Comments
                    </Header>
                    {userComments}
                    <Form reply onSubmit={this.handleOnSubmit}>
                        <Form.TextArea value={this.state.content} name="content" placeholder="Speak your mind..." onChange={this.handleOnChange}/>
                        <Button content='Add Comment' labelPosition='left' icon='edit' color="orange" type="submit"/>
                    </Form>
                </Comment.Group>
            </Segment>
        );
    }
}

export default CommentsContainer;