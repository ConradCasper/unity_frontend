import React, { Component } from 'react';
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

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
        .then(comment => this.props.addCommentToPost(this.state.post_id, comment))



        this.setState({...this.state, content: ''})

    }
    render() {
        const sortedComments = this.props.comments.sort((a, b) => b.id - a.id)
        const comments = sortedComments.map(comment => {
            return (
            <Segment key={comment.id}>
                <Comment>
                    <Comment.Avatar src={comment.user.avatar}/>
                    <Comment.Content>
                        <Comment.Author as="a">{`${comment.user.first_name} ${comment.user.last_name}`}</Comment.Author>
                        <Comment.Metadata>
                            <div>{dayjs(comment.created_at).fromNow()}</div>
                        </Comment.Metadata>
                        <Comment.Text>{comment.content}</Comment.Text>
                    </Comment.Content>
                </Comment>
            </Segment>
            )
        })
        
        

        dayjs.extend(relativeTime)
        return (
            <Segment padded="very">
                <Comment.Group>
                    <Header as="h3" dividing>
                        Comments
                    </Header>
                    {comments}
                    <Form reply onSubmit={this.handleOnSubmit}>
                        <Form.TextArea value={this.state.content} name="content" onChange={this.handleOnChange}/>
                        <Button content='Add Comment' labelPosition='left' icon='edit' color="orange" type="submit"/>
                    </Form>
                </Comment.Group>
            </Segment>
        );
    }
}

export default CommentsContainer;