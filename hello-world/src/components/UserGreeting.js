import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

  render() {

   return (
    this.state.isLoggedIn && <div>Welcome Sanjeev!</div>
   )

    // Conditional operators approach (ternary operators)
    // You would want to follow this approach most of the time

    // return (
    //     this.state.isLoggedIn ? (
    //     <div>Welcome Sanjeev!</div>):
    //     (<div>Welcome Guest!</div>)
    // )

    // Element variables approach
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Sanjeev!</div>
    // } else {
    //     message = <div>Welcome Guest!</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>Welcome Sanjeev!</div>
    //     )
    // } else {
    //     return (
    //         <div>Welcome Guest!</div>
    //     )
    // }
    // return (
    //     <div>
    //         <div>Welcome Sanjeev!</div>
    //         <div>Welcome Guest!</div>
    //     </div>
    // )
  }
}

export default UserGreeting