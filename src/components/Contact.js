import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zdxf7vt",
        "template_2pkxd0h",
        e.target,
        "gBvn5WmiekS0rlgS4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  function openGithub() {
    window.open("https://github.com/blozinski056", "_blank");
  }

  function openLinkedin() {
    window.open("https://www.linkedin.com/in/bryce-lozinski", "_blank");
  }

  function openResume() {
    window.open("/Bryce Lozinski Resume.pdf", "_blank");
  }

  window.addEventListener("scroll", revealContact);

  function revealContact() {
    const bottom = document
      .querySelector(".contact-container")
      .getBoundingClientRect().bottom;

    if (bottom <= window.innerHeight) {
      const elms = document.querySelectorAll(".hidden");

      elms.forEach((elm) => {
        elm.classList.add("reveal");
      });
    }
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <form className="contact-form" onSubmit={sendEmail} autoComplete="off">
          <h1 className="contact-title hidden">Send a Message</h1>
          <div className="input name hidden">
            <input type="text" required="required" name="name" />
            <span>Name</span>
          </div>
          <div className="input email hidden">
            <input type="text" required="required" name="email" />
            <span>Email</span>
          </div>
          <div className="input message hidden">
            <textarea required="required" name="message"></textarea>
            <span>Message</span>
          </div>
          <div className="submit hidden">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="contact-links">
          <img
            className="link-github hidden"
            src="/images/github.png"
            alt=""
            onClick={openGithub}
          />
          <img
            className="link-linkedin hidden"
            src="/images/linkedin.png"
            alt=""
            onClick={openLinkedin}
          />
          <img
            className="link-resume hidden"
            src="/images/resume.png"
            alt=""
            onClick={openResume}
          />
        </div>
      </div>
    </section>
  );
}
