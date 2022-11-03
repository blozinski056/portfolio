import React from "react";
import emailjs from '@emailjs/browser'

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_zdxf7vt', 'template_2pkxd0h', e.target, 'gBvn5WmiekS0rlgS4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
  }

  function openGithub() {
    window.open("https://github.com/blozinski056", "_blank");
  }

  function openLinkedin() {
    window.open("https://www.linkedin.com/in/bryce-lozinski", "_blank");
  }

  function openResume() {
    window.open("./Bryce Lozinski 2022 Resume.pdf", "_blank");
  }

  return (
    <section className="contact">
      <h1 className="background">CONTACT</h1>
      <div className="contact-container">
        <form className="contact-form reveal" onSubmit={sendEmail} autoComplete="off">
          <h1 className="contact-title">Send a Message</h1>
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
              >
            </textarea>
            <span>Message</span>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>

        <div className="contact-links reveal">
          <img src="./images/github.png" alt="" onClick={openGithub} />
          <img src="./images/linkedin.png" alt="" onClick={openLinkedin} />
          <img src="./images/resume.png" alt="" onClick={openResume} />
        </div>
      </div>
    </section>
  )
}