import React, { Component } from 'react';
import { Search, Grid, Card, Container, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
class SearchUsers extends Component {
    render() {
        const { users } = this.props
        const renderUsers = users.map(user => {
            return (
                
                <Card key={user.id} color='teal' style={{ "marginRight":"10px", "marginLeft":"10px" }}>
                    <Link to={`/user/${user.id}`} key={user.id}>
                    <Image src={user.avatar}  />
                    </Link>
                    <Card.Content>
                        <Card.Header>{`${user.first_name} ${user.last_name}`}</Card.Header>
                        <Card.Meta>
                            Joined in 2019
                        </Card.Meta>
                        <Card.Description>
                            {user.bio}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                                22 Friends
                    </Card.Content>
                
                </Card>
                
            )
        })
                        
                        
        return (
            <Container fluid style={{ "marginTop":"6.5em", "width": "400em", "paddingLeft":"45px" }} textAlign="center" >
                <Grid>
                    {renderUsers}
                </Grid>
            </Container>
        );
    }
}

export default SearchUsers;