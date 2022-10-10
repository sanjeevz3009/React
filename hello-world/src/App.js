// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

class App extends Component {
  render () {
    return (
      <div className="App">
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      {/* <Counter /> */}
      {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman"></Greet>
          <p>This is children props</p>
        <Greet name="Clark" heroName="Superman"></Greet>
          <button>Action</button> */}
        {/* <Greet name="Diana" heroName="Wonder women"></Greet> */}
        {/* <Welcome name="Bruce" heroName="Batman"/> */}
        {/* <Welcome name="Clark" heroName="Superman"/> */}
        {/* <Welcome name="Diana" heroName="Wonder women"/> */}
        {/* <Hello></Hello> */}
      </div>
    );
  }
}

export default App;
