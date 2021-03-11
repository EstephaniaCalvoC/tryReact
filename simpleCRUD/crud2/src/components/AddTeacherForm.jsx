import React from 'react'
import { useForm } from 'react-hook-form'

const AddTeacherForm = (props) => {

    // State
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data, e) => {
        // console.log(data)
        props.addTeacher(data)
        // Clean input boxes
        e.target.reset();
    }
    return (
		<form className="AddTeacherForm" onSubmit={handleSubmit(onSubmit)}>
			<div className="Inputs">
				<label>Name</label>
				<input type="text" name="name" ref={
					register({
						required: {value:true, message: '* Obligatory'}
					})
				} />
				<div className="ErrorMessage">
					{errors?.name?.message}
				</div>
			</div>
			<div className="Confirm">
                <button className="Ok">
					<i className="uil uil-check"></i>
				</button>
                <button
					className="Cancel"
					onClick={()=>{props.setAdding(false)}}
				>
					<i className="uil uil-times"></i>
				</button>
            </div>
        </form>
    );
}

export default AddTeacherForm;
