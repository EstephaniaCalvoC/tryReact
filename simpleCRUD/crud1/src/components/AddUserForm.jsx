import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    // State
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data, e) => {
        // console.log(data)
        props.addUser(data)
        // Clean input boxes
        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: {value:true, message: 'Campo Requerido'}
                })
            } />
            <div>
                {errors?.name?.message}
            </div>
            <label>UserName</label>
            <input type="text" name="username" ref={
                register({
                    required: {value:true, message:"Mandatory"}
                })
            } />
            <div>
                {errors?.username?.message}
            </div>
            <button>Add new user </button>
        </form>
    );
}

export default AddUserForm;