import React, { useState } from 'react'
import './Subscribe.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useForm from '../../util/useForm'
AOS.init()
function Subscribe() {
    const initialState = {email: ''}
    const submit = () => {
        console.log(inputs);
    }
    const { changeHandler, submitHandler, inputs } = useForm(submit, initialState)
    return (
        <div className='subscribe-container'>
            <h1>Let's build a meaningful community</h1>
            <p>Subscribe our weekly messages</p>
            <form method='POST' action='/action' onSubmit={submitHandler}>
                <input className="sub-mail"  data-aos="zoom-in-down" data-aos-delay='500' type="email" name="email" id="email" placeholder="Type Your Email" value={inputs.email} onChange={changeHandler} required />
                <input className="sub-submit" type="submit" value="Submit"  data-aos="zoom-in-up" data-aos-delay='1000' />
            </form>
        </div>
    )
}

export default Subscribe
