import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Card id="1" name="Jane Doe" email="jane.doe@gmail.com" />
      </div>
    );
  }
}

export default App;
