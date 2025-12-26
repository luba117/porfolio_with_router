import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-light py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Contact Me</h2>
        <form action="" className="w-75 mx-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="phone"
              className="form-control"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
