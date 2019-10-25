import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './containers/Home'
import Profile from './components/current_user/Profile'
import SearchUsers from './containers/SearchUsers'
import  UserProfile  from './components/user/Profile'
import './index.css'


class App extends Component{
  constructor(){
    super()
    this.state = {
      current_user: null,
      posts: [],
      comments: [],
      likes: [],
      users: [],
      follows: []
    }
  }

  controller = new AbortController()


  resetAppState = () => {
    this.fetchComments()
    this.fetchFollows()
    this.fetchLikes()
    this.fetchPosts()
    this.fetchUsers()
  }

  login = user => {
    this.setState({
      current_user: user
    })
    this.resetAppState()
  }

  logout = () => {
    this.setState({
      ...this.state, current_user: null
    })
    this.props.history.push("/welcome")
    this.resetAppState()
    localStorage.clear()
  }

  resetCurrentUser = user => {
    
      this.setState({
        ...this.state, current_user: user
      })
    

  }


  fetchPosts = () => {
    fetch(`https://damp-tundra-82698.herokuapp.com/api/v1/posts`, { signal: this.controller.signal })
    .then(res => res.json())
    // .then(data => console.log(data.posts))
    .then(data => this.setState({posts: data.posts}))
  }

  fetchComments = () => {
    fetch(`https://damp-tundra-82698.herokuapp.com/api/v1/comments`, { signal: this.controller.signal })
    .then(res => res.json())
    // .then(data => console.log(data.comments))
    .then(data => this.setState({comments: data.comments}))
  }

  fetchLikes = () => {
    fetch(`https://damp-tundra-82698.herokuapp.com/api/v1/likes`, { signal: this.controller.signal })
    .then(res => res.json())
    // .then(data => console.log(data.likes))
    .then(data => this.setState({likes: data.likes}))
  }

  fetchUsers = () => {
    fetch(`https://damp-tundra-82698.herokuapp.com/api/v1/users`, { signal: this.controller.signal })
    .then(res => res.json())
    // .then(data => console.log(data.users))
    .then(data => this.setState({users: data.users}))
  }

  fetchFollows = () => {
    fetch(`https://damp-tundra-82698.herokuapp.com/api/v1/follows`, { signal: this.controller.signal })
    .then(res => res.json())
    // .then(data => console.log(data.follows))
    .then(data => this.setState({follows: data.follows}))
  }


  componentDidMount(){
    this.resetAppState()
  }

  componentWillUnmount(){
    this.controller.abort()
  }




 showUser = id => {
   let u =  this.state.users.filter(user => (user.id === Number(id)))
   return u[0]
  }
  

  

  


  render(){
    return (
      <div className="App" >
          <NavBar login={this.login} logout={this.logout} current_user={this.state.current_user}/>
              <Switch>
                  <Route exact path="/welcome" render={() => ( this.state.current_user === null ? (<SignUp login={this.login} />)  : (<Redirect to="/profile"/>) )}/>
                  <Route exact path='/home' render={ () => (<Home posts={this.state.posts} current_user={this.state.current_user} follows={this.state.follows} comments={this.state.comments} likes={this.state.likes} users={this.state.users}  resetAppState={this.resetAppState}/>)} />
                  <Route exact path='/profile' render={ () => (<Profile posts={this.state.posts} current_user={this.state.current_user} resetCurrentUser={this.resetCurrentUser} follows={this.state.follows} comments={this.state.comments} likes={this.state.likes} users={this.state.users}  resetAppState={this.resetAppState}/>)} />) } />
                  <Route exact path='/search' render={ () => (<SearchUsers users={this.state.users} />) } />
                  <Route exact path='/user/:id' render={({ match }) => {
                    return <UserProfile user={this.showUser(match.params.id)} current_user={this.state.current_user}  users={this.state.users} follows={this.state.follows} posts={this.state.posts} comments={this.state.comments} likes={this.state.likes} resetAppState={this.resetAppState} />
                  }} />
              </Switch>
              <Footer />
      </div>
    );
  }
}
      


export default withRouter(App);
          
          
          
          
          
          
          
          
          
          
          
        