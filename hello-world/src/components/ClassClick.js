import React, { Component } from 'react'

class ClassClick extends Component {
    // clickHandler() {
    //     console.log("Click the button");
    // }
    clickHandler = () => {console.log("Click the button")};
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click 2</button>
      </div>
    )
  }
}

export default ClassClick;