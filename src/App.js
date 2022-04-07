import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login'

function App() {

  return (
    <div className="App">
       <Router>
          <Routes>
          <Route path='*' element={<Login />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
