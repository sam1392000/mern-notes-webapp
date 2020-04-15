import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom"
import ExercisesList from './components/ExercisesList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'
import './App.css'
import AppNavbar from './components/AppNavbar';
function App() {
  return (
    <Router>
      <div className='App'>
          <AppNavbar/>  
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />

      </div>
    </Router>
  );
}

export default App;
