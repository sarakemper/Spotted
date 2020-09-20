import React, { createContext, useReducer, useEffect } from 'react';
import FormReducer from '../reducers/formreducers';

export const FormContext = createContext()

const FormContextProvider = (props) => {
    const [form, dispatch] = useReducer(FormReducer, [], () => {
        const localData = localStorage.getItem('form')
        return localData ? JSON.parse(localData): []
    })

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(form))
    }, [form])
    
    return ( 
        <FormContext.Provider value= {{form, dispatch}}>
            {props.children}
        </FormContext.Provider>
     );
}
 
export default FormContextProvider;