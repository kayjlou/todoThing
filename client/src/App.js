import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form'
import ToDoList from "./components/ToDoList";

class App extends React.Component {

  state = {
    toDos : [
      "walk dog"
    ], 
    completed: [],
    item: 'hi'

  }
  render () {
    return (
      <>

      </>
      
    )
  }
}

export default App;
