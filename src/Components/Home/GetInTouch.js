import React from 'react';
import "./Getintouch.css"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify'
const GetInTouch = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
          "service_9qiwkny",
          "template_7x5zlqr",
          e.target,
          'qMFCBeHXq6bkF3qWr',
          toast.success("Email send"),
        ).then(res => {
          console.log(res);
        }).catch(err => (console.log(err)));
      }
    return (
        <div id='contact' className='get-in-touch container'>
          <ToastContainer></ToastContainer>
            <div className='form-wrapper'>
                <h2 className='text-center text-uppercase fw-bold form-heading pb-4 contact-heading'>Get In <span className='heading-color'>Touch</span></h2>
                <form onSubmit={sendEmail} className='custom-form'>
                    <input type="name" name='name' placeholder='Type your Name'></input> 
                    <input type="email" name='user_email' placeholder='Type your Email'></input> 
                    <textarea name='message' placeholder='Type your mesage here'></textarea>
                    <input type="submit" className='submit-btn' value="SUBMIT"></input>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;