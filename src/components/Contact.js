import React from "react";
import emailjs from '@emailjs/browser'

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdxf7vt', 'template_2pkxd0h', e.target, 'gBvn5WmiekS0rlgS4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
  };

  return (
    <section className="contact">
      <h1 className="background about">CONTACT</h1>

      <form className="contact-container" onSubmit={sendEmail} autoComplete="off">
        <h1 className="contact-title">Send Message</h1>
        <div className="input name">
          <input type="text" required="required" name="name"/>
          <span>Name</span>
        </div>
        <div className="input email">
          <input type="text" required="required" name="email"/>
          <span>Email</span>
        </div>
        <div className="input message">
          <textarea 
            required="required" 
            name="message"
            onInput="this."
            >
          </textarea>
          <span>Message</span>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="contact-links">

      </div>
    </section>
  )
}