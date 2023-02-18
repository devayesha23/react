import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  const [role, setRole] = useState('GIS Analyst');
  const [employees, setEmployees] = useState(
    [
      { id: 1,
        name: 'Ayesha', 
      role: 'Web Developer', 
      img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    { id: 2,
      name: 'John', 
      role: 'Front end Developer', 
      img: 'https://images.pexels.com/photos/694438/pexels-photo-694438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Caleb', 
      role: 'Back end Developer', 
      img: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    { id: 4,
      name: 'Elsa', 
      role: 'Engineer', 
      img: 'https://images.pexels.com/photos/3610877/pexels-photo-3610877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    ]);

    function updateEmployee(id, newName, newRole){
      const updatedEmployees = employees.map((employee)=>{
        if (id == employee.id){

        return {...employee, name: newName, role: newRole};
        }
        return employee;
      });
      setEmployees(updatedEmployees);
    }
    
    function newEmployee(name, role, img) {
      const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img,
      };
      setEmployees( [...employees, newEmployee]

      )
    }

  const showEmployees = true;
  return (
    <div className="App">
      {
      console.log('inside the return') }
      
      {showEmployees ? (
        <>
        <input type= 'text' onChange={(e) =>{
          setRole(e.target.value);
        }}/>
        <div 
        className= "flex flex-wrap justify-center">
       {employees.map((employee) => {
        const editEmployee = (
        <EditEmployee id={employee.id} 
        name={employee.name} 
        role={employee.role} 
        updateEmployee={employee.updateEmployee}/>
       );
        return (
          <Employee
          key= {employee.id}
          id= {employee.id}
          name= {employee.name}
          role= {employee.role}
          img= {employee.img}
          editEmployee={editEmployee}
          />
        );
       })}
        </div>
        <AddEmployee newEmployee = {newEmployee}/>
        </>
       ) : (
        <p>You cannot see the Employees</p>
       )}
    </div>
  );
}

export default App;
