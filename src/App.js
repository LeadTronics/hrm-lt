import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login'
import EmployeeAdd from './Pages/Employee/EmployeeAdd';
import EmployeeList from './Pages/Employee/EmployeeList';
import UpdateEmployee from './Pages/Employee/EmployeeUpdate';

function App() {

  return (
    <div className="App">
      <Suspense>
        <Router>
          <Routes>
            <Route path='*' element={<Login />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/employee-add' element={<EmployeeAdd/>}></Route>
            <Route path='/allemployee' element={<EmployeeList />}></Route>
            <Route path='/update-emp/:id' element={<UpdateEmployee />}></Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
