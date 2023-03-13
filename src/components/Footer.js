import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    // <!-- Footer --/>
    <footer class="text-center text-lg-start text-white footer-copywright  ">
      {/* <!-- Section: Social media --> */}
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* <!-- Left --//> */}
        <div class="me-2 mt-4 d-none d-lg-block">
          Get connected with us on social networks:
        </div>

        <div className="footer-icons">
          <div className="social-icons">
            <a
              href="https://github.com/Bl4ckSlayer"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/amirul-islam-tajbid/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/ai.tajbid/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillFacebook />
            </a>
          </div>
        </div>

        {/* <!-- Right --> */}
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div class="row mt-3">
            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i> Amirul Islam
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" class="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Laravel
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" class="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Help
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> 36 Chondonpura, Chawkbazer,
                Chittagong
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                amirulislamtajbid@gmail.com.com
              </p>
              <p>
                <i class="fas fa-phone me-3"></i> + 01 778 120 603
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div class="text-center p-4">
        <a class="text-reset fw-bold" href="/">
          Copyright &copy; {year} : Amirul Islam Tajbid
        </a>
      </div>
    </footer>
  );
}

export default Footer;
