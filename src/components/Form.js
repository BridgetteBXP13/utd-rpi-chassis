import React from 'react'
import {useForm} from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


export const Form = () =>{
    
    /*example for email and age would be like: yup.string().email().required(), or for age 
    yup.number().positive().integer().min(18).required()
    */
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        i1: yup.string(),
        i2: yup.string(),
        i3: yup.string()
        
    });

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    /* this is just a console log to make sure data is being inputted, i believe "data" is the object that actually holds all the data and is what
    we are going to need to pass to Flask, */
    const onSubmit = (data) => {
        console.log(data);
    };
    
/*age = number */
  return (
    <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-container">

                <p>Name:</p>
                <input type='text' placeholder='Name..' className='input' {...register("name")} />
                <p>{errors.name?.message}</p>

                <p>Enter Coordinates:</p>
                <input type='text' placeholder='E12..'   className='input' {...register("i1")} />
                <p>{errors.i1?.message}</p>

                <input type='text' placeholder='B4..'   className='input' {...register("i2")} />
                <p>{errors.i2?.message}</p>

                <input type='text' placeholder='D7..'   className='input' {...register("i3")} />
                <p>{errors.i3?.message}</p>

                <input type='submit' className='sub' />
                
            </div>

        </form>
    </div>
  )
}

export default Form