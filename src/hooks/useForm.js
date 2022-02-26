import { useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };
    const handleBlur = (e)=>{
        handleChange(e);
        setErrors(validateForm(form));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(Object.keys(errors).length > 0) return false;
        setLoading(true);
        helpHttp()
            .post(
                "https://formsubmit.co/ajax/d40a7692388bd01c157ae15623671337", 
                {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: form
                }
            )
            .then(res =>{
                setLoading(false);
                setResponse(res);
                setForm(initialForm);
                setTimeout(() => {
                    setResponse(null);
                }, 5000);
            });

    };
    return {
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit
    };
};
