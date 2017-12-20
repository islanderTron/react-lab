import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { setInterval, clearInterval } from 'timers';
import Person from './Person/Person'; // import Person.js from Person/Person.js

class App extends Component {
  state = {
    persons: [
      {name: 'Paul'},
      {name: 'Riva'},
      {name: 'Mike'}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName},
        {name: 'Lala'},
        {name: 'asdf'}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Tada"},
        {name: event.target.value},
        {name: 'asdf'}
      ]
    });
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons:!doesShow});
     console.log(!doesShow);
  }
  
  render() {
    // Inline style
    const style = {
      background: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    let persons = null;

    if(this.state.showPersons === true ) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        {/* <button className="switch_name" onClick={this.switchNameHandler}>Switch Name</button> */}
        {/* There are two ways to do bind */}
        {/* 
          Binding method
          <button className="switch_name" onClick={this.switchNameHandler.bind(this, 'Test')}>Switch Name</button> 
          
          Arror function
          <button className="switch_name" onClick={()=> this.switchNameHandler("Test")}>Switch Name</button>
        */}

        <button
          style={style}
          className="switch_name" 
          onClick={this.togglePersonsHandler}>Switch Name
        </button>

        {persons}

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

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