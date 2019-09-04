import React, { Component } from 'react';
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react'

class CommentsContainer extends Component {
    render() {
        const comments = this.props.comments.map(comment => {
            return (
            <Segment key={comment.id}>
                <Comment>
                    <Comment.Avatar src={comment.user.avatar}/>
                    <Comment.Content>
                        <Comment.Author as="a">{`${comment.user.first_name} ${comment.user.last_name}`}</Comment.Author>
                        <Comment.Metadata>
                            <div>{comment.created_at}</div>
                        </Comment.Metadata>
                        <Comment.Text>{comment.content}</Comment.Text>
                    </Comment.Content>
                </Comment>
            </Segment>
            )
        })
        return (
            <Segment padded="very">
                <Comment.Group>
                    <Header as="h3" dividing>
                        Comments
                    </Header>
                    {comments}
                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Comment' labelPosition='left' icon='edit' color="orange"/>
                    </Form>
                </Comment.Group>
            </Segment>
        );
    }
}

export default CommentsContainer;