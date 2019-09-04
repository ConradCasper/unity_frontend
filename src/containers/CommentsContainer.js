import React, { Component } from 'react';
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

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