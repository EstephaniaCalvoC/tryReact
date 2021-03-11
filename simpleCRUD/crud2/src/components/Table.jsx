import React, { useState } from 'react';
import AddTeacherForm from "./AddTeacherForm"

function Table(props) {
	const [adding, setAdding] = useState(false);
  return (
    <div className="container">
        <div className="TableHeader">
            <p>Manage <b>Teachers</b></p>
            <button 
				className="buttonAdd"
				onClick={()=>{setAdding(true)}}
			>
                <i className="uil uil-create-dashboard"></i>
            </button>
        </div>
        <div className="TableBody">
            <table>
                <thead>
                    <tr>
                        <th scope="col"><b>Name</b></th>
                        <th scope="col"><b>Action</b></th>
                    </tr>
                </thead>
                <tbody>
                    {props.teachers.length > 0 ? (
                        props.teachers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td>{teacher.name}</td>
                                <td>
                                    <button>
                                        <i className="uil uil-eye"></i>
                                    </button>
                                    <button>
                                        <i className="uil uil-pen"></i>
                                    </button>
                                    <button onClick={()=> {props.deleteTeacher(teacher.id)}}>
                                        <i className="uil uil-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2}>No teachers</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
		  {
			  adding ? (<AddTeacherForm 
							setAdding={setAdding}
							addTeacher={props.addTeacher}
						/>) : (null)
		  }
      </div>);
}

export default Table;