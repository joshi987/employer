import React, { useState, useEffect } from 'react';
import employeesData from './employeesData.json';

const Profile = () => {
  const [inputValue, setInputValue] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file or any other API
    setEmployees(employeesData);
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Enter employee name"
        value={inputValue}
        onChange={handleInputChange}
        className="input-emp"
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
  );
};

export default Profile;
