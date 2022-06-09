import React from 'react';
import "./Getintouch.css"
import emailjs from "emailjs-com"
const GetInTouch = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
    
          "service_9qiwkny",
          "template_7x5zlqr",
          e.target,
          'qMFCBeHXq6bkF3qWr'
        ).then(res => {
          console.log(res);
        }).catch(err => (console.log(err)));
      }
    return (
        <div className='get-in-touch container'>
            <div className='form-wrapper'>
                <h2 className='text-center text-uppercase fw-bold form-heading pb-4'>Get In Touch</h2>
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