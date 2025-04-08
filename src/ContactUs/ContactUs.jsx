import React, { useRef } from 'react'
import "./ContactUs.css"
import emailjs from '@emailjs/browser'


export const ContactUs = () => {

    const refForm = useRef(); 


const handleSubmit =(event) =>{
    event.preventDefault();
  
    
const servicID="service_osorio";
const templateId ="template_l125qyc";

const apikey ="eQW31DAbxfwZIHu81"

emailjs.sendForm(servicID,templateId,refForm.current, apikey)

.then(result => console.log(result.text))
.catch( error => console.error(error))
    


}

    return (
        <>
        <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
            <h2>Contact Us </h2>
            <p>please fill this form</p>
        </div>
        <fieldset className='field-name'>
        <label className='symbol-required name' htmlFor="">Name</label>
        <input name='user' type="text" placeholder='ejm: esteban' required />
        </fieldset>

        <fieldset className='field-email'>
        <label name="email" className='symbol-required ' >Email</label>
        <input name='email' type="email" placeholder='ejm: Osorio@gmail.com' id='email' required />
        </fieldset>

        <fieldset className='field-menssage'>
        <label className='symbol-required '>Email</label>
        <textarea maxLength={"500"} placeholder='type yout message' name="menssage" id="" cols="30" rows  />
        </fieldset>



            <button className='btn-send'> send</button>
        </form>

        </>
    )
}


export default ContactUs
