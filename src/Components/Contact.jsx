import React, {useState,useEffect,useRef} from 'react'

const Contact = () => {
    const nameRef =useRef(null);
    const emailRef =useRef(null);
    const messageRef = useRef(null);

    const initialValues = {name1:"",email1:"",message1:""};
    const [formValues,setFormValues] =useState(initialValues );
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);

    const handleChange=(e)=>{
        const { name , value }=e.target;
        setFormValues({...formValues, [name]:value});
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        
        // reset form fields
        e.target.reset();

    };


    // Checking kung mugana ba
    useEffect( () => {
        // console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
            // console.log(formValues);  
          
          
             //console.log(formValues.name1="" + " sasasas");
            // submit the form to getformIO API
           let form = document.forms[1] //assuming only form.  
                
            form.submit();             
            // setFormValues("");  
        }
    },[formErrors]);



    const validate = (values) =>{
        const errors={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.name1 || values.name1.trim().length===0){
            errors.name1="*Name is required";
        }
        if(!values.email1){
            errors.email1="*Email is required";
        }else if(!regex.test(values.email1)){
            errors.email1="*Email is invalid";
        }
        if(!values.message1 || values.message1.trim().length===0){
            errors.message1="*Message is required";
        }
        return errors;
    };

  return (
    <div name="contact" className='w-full pb-10 text-black'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full p-4 mt-24'>
            <div>
                <p className='text-2xl font-bold inline border-b-4 border-pink-300'>Contact</p>
                <p className='text-base my-4'>Send me a message</p>
            </div>
            <div className='w-[100%] max-w-[600px] mx-auto mt-5'>
                {/* <form action="https://getform.io/f/720440f6-73c8-4174-bc0b-cdbc32bc9a54" method="POST"> */}

                <form  onSubmit={handleSubmit}>
                    <input ref={nameRef} className='w-full p-2 mt-2 border-[2px]'  type="text" name="name1" placeholder='Your name' value={formValues.name1} onChange={handleChange}/>
                    <p className='focus:ring-2 focus:ring-blue-600 text-sm text-red-600'>{formErrors.name1}</p>
                    <input ref={emailRef} className='w-full p-2 mt-2 border-[2px]' type="text" name="email1" placeholder='Your email address' value={formValues.email1} onChange={handleChange}/>
                    <p className='text-sm text-red-600'>{formErrors.email1}</p>
                    <textarea ref={messageRef} className='w-full p-2 mt-2 border-[2px] ' name="message1" id="" cols="30" rows="10" placeholder='Your message' value={formValues.message1} onChange={handleChange}></textarea>
                    <p className='text-sm text-red-600'>{formErrors.message1}</p>
                    <button className='py-3 px-16 block bg-blue-700 mt-5 text-gray-200 rounded-lg hover:bg-blue-500' type="submit">Send</button>
                </form>


                <form action="https://getform.io/f/720440f6-73c8-4174-bc0b-cdbc32bc9a54" method='Post'>
                        <input type="hidden" name='name' value={formValues.name1} />
                        <input type="hidden" name='email' value={formValues.email1} />
                        <input type="hidden" name='message' value={formValues.message1}  />          
                </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default Contact