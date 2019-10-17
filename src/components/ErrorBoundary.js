import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state ={
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
        
    render() {
        if (this.state.hasError){
            return <h1  style={{"color":"red"}}> Oops! Something went wrong. You may need to logout and log back in to fix the issue.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;


