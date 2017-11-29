import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { setInterval } from 'timers';
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
    // );
  }
}

class HelloMessage extends Component { 
  render() {
    return (
      <div>
        Hello {this.props.message}
      </div>
    );
  }
}

// const element = <h1>testing</h1>;

// ReactDOM.render(
//   <HelloMessage message= {element} />, document.getElementById('test')
// );

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('asdf')
);

function tick() {
  const element = (
    <div>
      <p>It is {new Date().toLocaleTimeString()}</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById('time'));
}
setInterval(tick,1000);

class Test extends Component {
  state = {
    persons: [
      {name: 'Paul'},
      {name: 'Riva'},
      {name: 'Mike'}
    ]
  }

  render() {
      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>It's really working!</p>
              <button>Switch Name</button>
              <Person name={this.state.persons[0].name}>My hobbies: programming!</Person>
              <Person name={this.state.persons[1].name}/>
              <Person name={this.state.persons[2].name}/>
          </div>
      )
  };
}

ReactDOM.render(<Test/>, document.getElementById('asdf'));
export default App;