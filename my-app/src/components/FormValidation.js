import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const customSubmit = (data) => {
        console.log(data)
        alert("¡Validacion Exitosa!")

    }
    //console.log(watch("prueba"));

    const [colorInput, setColorInput] = useState('#fff7f7')
    useEffect( ()=>{
        let words = watch('prueba')
        if(words === 'react'){setColorInput('#614ad3')}
    })

    return(
        <>
            <h2>FormValidation</h2>

            <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>

                <div className='form-control'>  
                    <label>Name</label>
                    <input type="tex" {...register('name',{ 
                        required:true, 
                        maxLength:6
                    })}/>
                    {errors.name?.type === 'required' && <small className='fail'>campo vacio</small> }
                    {errors.name?.type === 'maxLength' && <small className='fail'>el maximo de caracteres es 6</small> }
                    
                </div>
                <div className='form-control'>  
                    <label>Age</label>
                    <input type="number" {...register('age', {
                        required:true,
                        min:10,
                        max:100
                    })}/>
                    {errors.age?.type === 'required' && <small className='fail'>campo vacio</small> }
                    {errors.age?.type === 'min' && <small className='fail'>la edad minima es de 10 años</small> }
                    {errors.age?.type === 'max' && <small className='fail'>la edad maxima es de 100 años</small> }
                    
                </div>
                <div className='form-control'>  
                    <label>Country</label>
                    <input type="tex" {...register('country', {
                        required: {
                            value:true,
                            message:"Custom Message: Ingrese los datos"
                        }
                    })}/>
                    {errors.country && <small className='fail'>{errors.country.message}</small>}
                </div>

                    <div className='form-control'>
                        <input {...register('prueba')} style={{backgroundColor:colorInput }} />
                    </div>

                <button type='submit'>Send</button>
                
            </form>
        </>
    )
}
export default FormValidation