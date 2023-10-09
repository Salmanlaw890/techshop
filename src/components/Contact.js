import React from 'react'
import './contact.css'
import { useState } from 'react'

export default function Contact() {
    const [user, setUser] = useState({
        name: '', email: '', subject: '', message: ''
    })


    //function
    const data = (e) => {
        let values = e.target.value
        let names = e.target.name
        setUser({ ...user, [names]: values })
    }
    //send data function
    const send = async (e) => {
        const { name, email, subject, message } = user;
        e.preventDefault();
        const option = {
            method: 'POST',
            header: {
                'Contact-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, subject, message
            })
        }
        const send = await fetch('https://react-ecommerce-contact-28458-default-rtdb.firebaseio.com/message.json', option)
        if (send) {
            alert('Message sent successfully')
        } else {
            alert('error occoured message sent failed')
        }
    }
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="form">
                        <h2># contact us</h2>
                        <div className="post">
                            {/* box name */}
                            <div className="box">
                                <div className="lable">
                                    <h4>Name</h4>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder='Name' value={user.name} name='name' onChange={data} />
                                </div>
                            </div>
                            {/* box email*/}
                            <div className="box">
                                <div className="lable">
                                    <h4>Email</h4>
                                </div>
                                <div className="input">
                                    <input type="email" placeholder='Email' value={user.email} name='email' onChange={data} />
                                </div>
                            </div>
                            {/* box subject*/}
                            <div className="box">
                                <div className="lable">
                                    <h4>Subject</h4>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder='Subject' value={user.subject} name='subject' onChange={data} />
                                </div>
                            </div>
                            {/* box message*/}
                            <div className="box">
                                <div className="lable">
                                    <h4>Message</h4>
                                </div>
                                <div className="input">
                                    <textarea placeholder='Message !' cols="28" rows='3' value={user.message} name="message" onChange={data} ></textarea>
                                </div>
                            </div>
                            <button onClick={send} type='submit'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
