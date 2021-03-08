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
        <tr>
            <td>
                <form className="AddTeacherForm" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" ref={
                            register({
                                required: {value:true, message: 'Campo Requerido'}
                            })
                        } />
                        <div>
                            {errors?.name?.message}
                        </div>
                    </div>
                </form>
            </td>
            <td>
                <button>+</button>
                <button>x</button>
            </td>
        </tr>
    );
}

export default AddUserForm;
