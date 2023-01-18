import './App.css';
import Employee from './components/Employee'

function App() {
  const showEmployees = false;
  return (
    <div className="App">
      {console.log('inside the return')}
      
      {showEmployees ? (
        <>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        </>
       ) : (
        <p>You cannot see the Employees</p>
       )}
    </div>
  );
}

export default App;
