// import logo from './logo.svg'
import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import Counter2 from './components/Counter2'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Counter2 render={ (count, incrementCount) => (
      <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>)}>
      </Counter2>

      <Counter2 render={ (count, incrementCount) => (
      <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>)}>
      </Counter2>

        {/* <ClickCounterTwo></ClickCounterTwo>
        <HoverCounterTwo></HoverCounterTwo>
        <User render={(isLoggedIn) => isLoggedIn ? "SANJEEV" : "GUEST"}></User> */}

        {/* <ClickCounter name="Sanjeev"></ClickCounter>
        <HoverCounter></HoverCounter> */}

        {/* <ErrorBoundary>
        <Hero heroName='Batman'></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Superman'></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Joker'></Hero>
      </ErrorBoundary> */}

        {/* <PortalDemo></PortalDemo> */}
        {/* <FRParentInput></FRParentInput> */}
        {/* <FocusInput></FocusInput> */}
        {/* <RefsDemo></RefsDemo> */}
        {/* <ParentComp></ParentComp> */}
        {/* <Table></Table> */}
        {/* <FragmentDemo></FragmentDemo> */}
        {/* <LifecycleA></LifecycleA> */}
        {/* <Form></Form> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <Inline></Inline> */}
        {/* <Stylesheet primary={true}></Stylesheet> */}
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick></ClassClick> */}
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
    )
  }
}

export default App
