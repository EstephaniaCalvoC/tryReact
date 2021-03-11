import React, { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
// import UserTable from './components/UserTable';
// import AddUserForm from './components/AddUserForm';
// import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // Data
  const teachersData = [
    { id: uuidv4(), name: 'Alejandra Rivera'},
    { id: uuidv4(), name: 'Jorge Sandoval'},
    { id: uuidv4(), name: 'Cristina Bueno'},
    { id: uuidv4(), name: 'd1'},
    { id: uuidv4(), name: 'd2'},
    { id: uuidv4(), name: 'd3'}
  ]

  // State
  const [teachers, setTeachers] = useState(teachersData)

  // Add teacher
  const addTeacher = (teacher) => {
    teacher.id = uuidv4()
    setTeachers([...teachers, teacher])
	  console.log(teachers)
  }

  // Delete user
  const deleteTeacher = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id))
  }

  // Edit user
  const [editing, setEditing] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState({id:null, name:''});
  const editRow = (teacher) => {
    setEditing(true);
    setCurrentTeacher({
      id: teacher.id, name: teacher.name
    })
  }
  const updateTeacher = (id, newData) => {
    setEditing(false);
    setTeachers(teachers.map(teacher => (teacher.id) === id ? newData : teacher))
  }
  
  return (
    <>
    <Header />
    <div>
      <Table 
      teachers = {teachers}
      deleteTeacher = {deleteTeacher}
      addTeacher = {addTeacher}
      />
    </div>
    </>
  );
}

export default App;
