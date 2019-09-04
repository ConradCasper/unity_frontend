import React, { Component } from 'react';
import { Form, TextArea, Image, Segment, Button } from 'semantic-ui-react';

class PostForm extends Component {
    render() {
        return (
            <Segment>
            <Segment.Group>
                <Segment.Group horizontal>
                    <Segment>
                        <Image src='http://sap-certification.info/img/default-avatar.jpg' avatar size='tiny' />
                        <h4>Conrad Casper</h4>
                    </Segment>
                    <Segment>
                        <Form>
                            <TextArea placeholder="What's going on in your world today?"/>
                            <Button type="submit" style={{ "marginTop": "2em" }}>Make a New Post</Button>
                        </Form>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
            </Segment>
        );
    }
}

export default PostForm;