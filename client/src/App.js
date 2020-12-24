import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      message: <>Edit <code>src/App.js</code> and save to reload.</>
    }
  }

  componentDidMount() {
    let thisComponent = this;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        thisComponent.setState({message: JSON.parse(this.responseText).message})
      }
    }
    xhttp.open("GET", "/users", true);
    xhttp.send()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.message}
          </p>
          <a
            className="App-link"
            href="/user"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
