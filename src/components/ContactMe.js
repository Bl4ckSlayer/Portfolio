import React from "react";
import emailjs from "emailjs-com";
import msgimg from "../Assets/message.png";
import { AiOutlineDownload } from "react-icons/ai";
import Tilt from "react-parallax-tilt";

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k62q4u5",
        "ContactWithAmirul",
        e.target,
        "Y-LQG3Mm-b9KKfIGh"
      )
      .then(
        (result) => {
          alert(
            "Your Message has been successfully sent. I will contact you Soon."
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <h2 style={{ color: "white", marginTop: "60px" }}>Contact Me</h2>
      <div className="d-lg-flex md-lg-flex">
        <form
          onSubmit={sendEmail}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto mb-3">
              <input
                type="submit"
                className="btn btn-primary"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
        <div
          className=" mx-auto my-auto"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Tilt>
            <img
              src={msgimg}
              className="img-fluid w-75 rounded rounded-circle"
              alt="avatar"
            />
          </Tilt>
          {/* <img src={msgimg} alt="" className="img-fluid w-75" /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
