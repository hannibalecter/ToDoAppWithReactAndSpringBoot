import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

// import Counter from './components/counter/Counter'
import ToDoApp from './components/todo/ToDoApp'

function App() {
    return ( 
        <div className = "App">

        { /*<Counter />*/ }
        <ToDoApp />

        </div>
    );


}


export default App;