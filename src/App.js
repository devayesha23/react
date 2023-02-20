import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './Pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './Pages/Customers';
import Dictionary from './Pages/Dictionary';
import Definition from './Pages/Definition';
import NotFound from './components/NotFound';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path= "/dictionary"element={<Dictionary/>}/>
        <Route path= "/definition"element={<Definition/>}/>
        <Route path= "/404"element={<NotFound/>}/>
        <Route path= "*"element={<NotFound/>}/>
        <Route path= "/dictionary/:search"
        element={<Definition/>}
        />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
