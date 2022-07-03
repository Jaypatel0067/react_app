import React from "react";
import headercss from "./headercss.css";
import resume from "../Assets/Jay Ambaliya_resume.pdf";

export default function header() {
return (
    <section className="header" id="header">
   
    
  
      <div className="conteectinfo" >
        <p>
          <a href="mailto:jayambaliya2405@gmail.com" className="emaillink">
            Jayambaliya2405@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:647-608-3004" className="emaillink">
            +1(647)-608-3004
          </a>
        </p>
      </div>
      
      <p className="headerp">
       Hello I'm
  <span>
    
  <h1 className="text-align-left"> Jay Ambaliya</h1>
  </span>
  &mdash; Full Stack Developer || JavaScript || React.js|| Node.js &mdash;
</p>

      <div className="buttongroup">
        <a href={resume} className="btn download" download>
          Download CV
        </a>
        <a href="#contectus" className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}
