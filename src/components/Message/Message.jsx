import emailjs from '@emailjs/browser'

import mess from './Message.module.css'
import React, { useRef } from 'react'
export const Message = () => {
    const refForm = useRef()

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs
        .sendForm(
            'service_2klnmo2',
            'template_ky6f82s',
            refForm.current,
            'vKHEvLAJcx2lRd1oS'
        )
        .then(
            () => {
                alert('Message Successfully Sent')
                window.location.reload(false)
            },
            () =>{
                alert("Failed to Send the Message, Please Try Again ")
            }
        )

    }
    return(
    <section className = {mess.container}>

        <div className={mess.contactForm}>

            <form ref = {refForm} onSubmit={sendEmail}>
                <ul>
                    <li className = {mess.half}>
                        <input type = "text" name = "name" placeholder="Your Name" required/>
                    </li>
                    <li className = {mess.half}>
                        <input type = "email" name = "email" placeholder="Your Email" required/>
                    </li>
                    <li>
                        <input type = "text" name = "subject" placeholder = "Subject" required />
                    </li>
                    <li>
                        <textarea name = "message" placeHolder = "Message" required />
                    </li>
                    <li>
                        <input type = "submit" className = {mess.flatButton} value = "SEND"/>
                    </li>
                </ul>
            </form>
        </div>
        <div className={mess.text}>
            <h2>Message Me</h2>
            <p>Leave me a note</p>
        </div>
    </section>
    )
}
