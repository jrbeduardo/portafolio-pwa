import { useForm } from '../hooks/useForm';
import { Loader } from './Loader';
import { Message } from './Message';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
};

const validationsForm = ({name, email, subject, comments})=>{
    let errors ={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    if(!name.trim()){
       errors.name = "El campo nombre es requerido.";
    }else if(!regexName.test(name.trim())){
        errors.name = "El campo nombre debe contener sólo letras o espacios en blanco.";
    }
    if(!email.trim()){
        errors.email = "El campo email es requerido.";
    }else if(!regexEmail.test(email.trim())){
        errors.email = "El email no es válido";
    }
    if(!subject.trim()){
        errors.subject = "El asunto es requerido.";
    }
    if(!comments.trim()){
        errors.comments = "El comentario es requerido.";
    }else if(!regexComments.test(comments.trim())){
        errors.comments= "El comentario no debe exceder los 255 caracteres.";
    }
    return errors;
};

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}
export const ContactForm = () => {
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} 
        = useForm(initialForm, validationsForm);
    return (
          <div className='w-screen flex flex-col font-raleway justify-center items-center'>
            <div className='md:w-full w-5/6 p-10 shadow-xl bg-gray-50'>
            <h2 className='text-4xl text-center font-semibold'>Escríbeme 📭</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    className='w-full border-2 border-gray-600 rounded py-1 shadow-lg mt-5'
                    type="text" 
                    name="name" 
                    placeholder="Escribe tu nombre" 
                    onBlur={handleBlur}
                    onChange ={handleChange}
                    value ={form.name}
                    required
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
                <input 
                    type="email" 
                    name="email" 
                    className='w-full border-2 border-gray-600 rounded py-1 shadow-lg mt-5'
                    placeholder="Escribe tu email" 
                    onBlur={handleBlur}
                    onChange ={handleChange}
                    value ={form.email}
                    required
                />
                {errors.email && <p style={styles}>{errors.email}</p>}
                <input 
                    type="text" 
                    name="subject"
                    className='w-full border-2 border-gray-600 rounded py-1 shadow-lg mt-5' 
                    placeholder="Asunto a tratar" 
                    onBlur={handleBlur}
                    onChange ={handleChange}
                    value ={form.subject}
                    required
                />
                {errors.subject && <p style={styles}>{errors.subject}</p>}
                <textarea
                    className='w-full border-2 border-gray-600 rounded py-1 shadow-lg mt-5'
                    name="comments" 
                    col= "50"
                    rows="5"
                    placeholder='Escribe tus comentarios'
                    onBlur={handleBlur}
                    onChange ={handleChange}
                    value ={form.comments}
                    required
                ></textarea>
                {errors.comments && <p style={styles}>{errors.comments}</p>}
                 <input 
                    type="submit" 
                    value = "enviar"
                    className='bg-tomato text-2xl rounded text-white px-5 py-1 mb-5 mt-5'
                />
            </form>
            {loading && <Loader/>}
            {response && <Message msg={response.message} bgColor="#68a042"/>}
        </div>
    </div>
    );
};