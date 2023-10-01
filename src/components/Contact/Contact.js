import React, { useState, useRef } from "react"
import contact1 from "./contact1.png"
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
   
    const [name,setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const formSubmit = (e) => {
        e.preventDefault()
        alert(`Email Successfully send`)

        emailjs.sendForm('service_krumr3c', 'template_imoo2kj', form.current, 'AmSZ3SimiNTrvN35O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');

    }

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Ihsan Ullah</h1>
                  <p>MERN STACK DEVELOPER</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +923466939213</p>
                  <p>Email: ihsankhan1by1@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                    <a href="https://www.facebook.com/profile.php?id=100008343704066" target="_blank"  without rel="noreferrer" > <i className='fab fa-facebook-f'></i></a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://www.instagram.com/ihsan_mohmand.110/" target='_blank'  without rel="noreferrer" > <i className='fab fa-instagram'></i> </a>
                    </button>
                    <button className='btn_shadow'>
                     <a href="https://twitter.com/Ihsanmohmand17" target="_blank"  without rel="noreferrer" > <i className='fab fa-twitter'></i></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form ref={form} onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='from_name' value={name} onChange={((e) => setName(e.target.value))}  />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={phone} onChange={((e) => setPhone(e.target.value))}  />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={email} onChange={((e) => setEmail(e.target.value))}  />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={subject} onChange={((e) => setSubject(e.target.value))}  />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={message} onChange={((e) => setMessage(e.target.value))}></textarea>
                </div>
                <button  className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
