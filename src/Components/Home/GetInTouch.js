import React from 'react';
import "./Getintouch.css"
const GetInTouch = () => {
    return (
        <div className='get-in-touch container'>
            <div className='form-wrapper'>
                <h2 className='text-center text-uppercase fw-bold form-heading pb-4'>Get In Touch</h2>
                <form className='custom-form'>
                    <input type="email" placeholder='Type your Email'></input> 
                    <textarea placeholder='Type your mesage here'></textarea>
                    <input type="submit" className='submit-btn' value="SUBMIT"></input>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;