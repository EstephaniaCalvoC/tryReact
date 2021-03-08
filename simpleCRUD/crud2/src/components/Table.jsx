import React from "react";
import AddUserForm from "./AddTeacherForm"

function Table(props) {
  return (
    <div className="container">
        <div className="TableHeader">
            <p>Manage <b>Teachers</b></p>
            <button className="buttonAdd">
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
                    <AddUserForm />
                </tbody>
            </table>
        </div>
      </div>);
}

export default Table;