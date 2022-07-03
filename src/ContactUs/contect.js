import React from 'react'
import Contect from '../ContactUs/contect.css'
import emailjs from 'emailjs-com';

export default function contect() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_9eaho1h', 'template_wmtfxuo', e.target, '8xMYkpHqiTUcpmwOh')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    
    <section id="contectus">
       <h5>Get in touch </h5>
      <h1>Contact Me</h1>
      <div  className='footerbg'>
     
      <div className='footerbgg'>
        <div className='container'>
          <div className='contact_card'>
            <div className='row'>
              <h1>Toronto, On</h1>
              <h3>8 Mosque Crescent, Etobicoke, ON M9V 4J2</h3>
<br></br> 
              <h3>Jayambaliya2405@gmail.com</h3>
                 <h3>+1(647)-608-3004</h3>
            </div>
            <div className='row'>
              <form className="contact-form" onSubmit={sendEmail}>
                
                  <div className='formelement'>
                    <input type='text'   placeholder='Name'  name="from_name"/>
                    <input type='Email' name="from_email"  placeholder='Email'/>
                  </div>
                  <div className='formelement'>
                    <input type='text' name="subject" placeholder='Subject' name="user_email"/>
                    
                  </div>
                  <div className='formelement'>
                    <textarea name="message" rows='5' placeholder='Message'></textarea>
                
                  </div>
                  <div className='formelement'>
                  <button type='submit' className='btn'>Contect Me</button>
                
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div></div>
    </section>
  )
}
