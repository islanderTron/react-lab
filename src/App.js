import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { setInterval, clearInterval } from 'timers';
import Person from './Person/Person'; // import Person.js from Person/Person.js

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
    // return React.createElement('div', {className:'App'}, '',
    //   React.createElement('h1', null, 'Hi I\'m a React App!')
    // );``
  }
}

// class HelloMessage extends Component { 
//   render() {
//     return (
//       <div>
//         Hello {this.props.message}
//       </div>
//     );
//   }
// }

// const element = <h1>testing</h1>;

// ReactDOM.render(
//   <HelloMessage message= {element} />, document.getElementById('test')
// );

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('asdf')
// );

// function tick() {
//   const element = (
//     <div>
//       <p>It is {new Date().toLocaleTimeString()}</p>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('time'));
// }
// setInterval(tick,1000);

class Test extends Component {
  state = {
    persons: [
      {name: 'Paul'},
      {name: 'Riva'},
      {name: 'Mike'}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'O'},
        {name: 'Lala'},
        {name: 'asdf'}
      ]
    })
  }

  render() {
      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>It's really working!</p>
              <button className="switch_name" onClick={this.switchNameHandler}>Switch Name</button>
              
              <Person 
                name={this.state.persons[0].name}>
                {/* This is props.children which will pass down to Person.js - instance function */}
                My hobbies: programming!
                </Person>
              
              <Person 
                name={this.state.persons[1].name}/>
              
              <Person 
                name={this.state.persons[2].name}/>
          </div>
      )
  };
}

ReactDOM.render(
  <Test />,
  document.getElementById('test')
);

// Without JSX - I don't like this. 
// const element = React.createElement(
//   'div',
//   {className:'container'},
//   'Hello world'
// );

// let x = function () {
//   return "Hello world";
// }

// x;
// console.log(x);
// console.log(element);

// ReactDOM.render(<Test/>, document.getElementById('asdf'));

// Class components should always call the base construtor with props
class PracticeState extends Component {
  // Class constructor - special method for creating and initalizing an obj created with a class. Only 1 special method with the name "contructor" in a class. 
  constructor(props){
    super(props);
    // State is similar to props, but it is private and fully controlled by the component.
    this.state = {date: new Date()};
  }
  // Adding Lifecycle methods to a class

  // Set up a timer whenever the Clock is rendered to the DOM for the first time.
  // Hook run after the component output has been rendered to the DOM.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000 );
  }

  // Clear that timer whenver the DOM produced by the Clock is removed.
  componentDidUnMount() {
    clearInterval(this.timerID);
  }

  // To schedule updates to the component local state
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <PracticeState />,
  document.getElementById('time')
);

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log("The link was clicked.");
//   }

//   return (
//     <a href="#" className="button" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// ReactDOM.render(
//   <ActionLink />,
//   document.getElementById('button')
// );

// Define a component using an ES6 common pattern is for an event handler to be a method on the class
class Toggle extends Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('button')
);

export default App;