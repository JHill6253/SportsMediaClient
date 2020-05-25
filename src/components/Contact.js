import React from 'react';
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = ({contactEmail, contactPara, socialLinks})=>{

    return (
      <div className="contact_container">
        <h1>Get in touch.</h1>
        <p>{contactPara}</p>
        <br></br>
        <a className="email_link" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        <div className="social_links">
          <ul>
            <li>
              <a href={`mailto:${contactEmail}`}>
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaTwitter></FaTwitter>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href={socialLinks[2].url}>
                <FaInstagram></FaInstagram>
              </a>
            </li>
          </ul>
        </div>
      <div>
        <h2> <a href='https://johnhillportfolio.000webhostapp.com/index.html'>This site was made by John Hill</a></h2>
      </div>
      </div>
      
    );
}

export default Contact