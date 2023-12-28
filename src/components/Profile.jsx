import React from 'react'
import './Profile.css'

function Profile() {
  const [inputValue, setInputValue] = useState('');
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Arjun', dob: '16-11-2000', role: 'Software Engineer' },
    { id: 2, name: 'Mahesh', dob: '15-11-2000', role: 'Web Engineer' },
    // Add more employees as needed
  ]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className='div-conatiner1'>
    <input
      type="text"
      placeholder="Enter employee name"
      value={inputValue}
      onChange={handleInputChange}
      className="input-emp" // Add the class name here
    />
    {filteredEmployees.map((employee) => (
      <div key={employee.id}>
        <p>EMP ID: {employee.id}</p>
        <p>Name: {employee.name}</p>
        <p>DOB: {employee.dob}</p>
        <p>Role: {employee.role}</p>
        <hr />
      </div>
    ))}
  </div>
 
  )
}

export default Profile