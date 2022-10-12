import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Hello'
      }
      // Binding in the constructor
      // Best option, recommended in the react documentation
    //   this.clickHandler = this.clickHandler.bind(this)

    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }

    // Class property approach
    // Still a experimental feature for now
    // When the class property approach become a accepted feature it will be the go to approach
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
        // console.log(this)
    }
 
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* You might not want to use because of performance implications */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click3</button> */}
        {/* Similar to approach number one, but this is the easiest way to pass parameters if it's not re-rendering nested children  */}
        {/* <button onClick={() => this.clickHandler()}>Click3</button> */}
        <button onClick={this.clickHandler}>Click3</button>
      </div>
    )
  }
}

export default EventBind