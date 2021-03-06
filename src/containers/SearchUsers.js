import React, { Component } from 'react';
import { Input, Grid, Card, Container, Image, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
class SearchUsers extends Component {
    constructor(props){
        super(props)
        this.state ={
            users: props.users,
            filter: ''
        }
    }

    handleFilter = e => {
        this.setState({
            filter: e.target.value
        })
    }



    render() {
        const { users, follows } = this.props
        const filteredUsers = users.filter(user => {
            return user.first_name.toLowerCase().startsWith(this.state.filter.toLowerCase())
        })
        const renderUsers = filteredUsers.map(user => {
            const following = follows.filter(follow => follow.follower_id === user.id)
            

            const followers = follows.filter(follow => follow.followee_id === user.id)
            return (
                
                <Card key={user.id} color='teal' style={{ "marginRight":"10px", "marginLeft":"10px" }}>
                    <Link to={`/user/${user.id}`} key={user.id}>
                    <Image src={user.avatar}  />
                    </Link>
                    <Card.Content>
                        <Card.Header>{`${user.first_name} ${user.last_name}`}</Card.Header>
                        <Card.Meta>
                            Joined {dayjs(user.created_at).fromNow()}
                        </Card.Meta>
                        <Card.Description>
                            {user.bio}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='users' iconPosition="left"/>
                                following: {following.length} | followers: {followers.length}
                    </Card.Content>
                
                </Card>
                
            )
        })
                        
        dayjs.extend(relativeTime)           
        return (
            <Container fluid style={{ "marginTop":"6.5em", "width": "400em", "paddingLeft":"45px" }} textAlign="center" >
                
                <Grid>
                    <Grid.Row>
                        <Segment inverted circular style={{ "width":"600px", "left":"550px", "marginTop":"50px", "marginBottom":"100px"}}>
                            <Input icon="users" name="filter" value={this.state.filter} onChange={this.handleFilter} iconPosition="left" placeholder="Search Users..." style={{ "width":"400px" }} />
                        </Segment>
                    </Grid.Row>
                    <Grid.Row>
                        {renderUsers}
                    </Grid.Row>
                </Grid>
            </Container>
        );
                    
                        
                
    }
}

export default SearchUsers;