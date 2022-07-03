import React from 'react'
import Education from '../Education/Education.css'
import { FaUniversity } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";

export default function service() {
  return (
    <section id='Education'>
      <h5>Courses and certification i've Done!</h5>
      <h1>Education & Certification</h1>

      <div className='container'>
        <div className='card_edyy'>
      <div className='row'>
        <div className='main_card'>
        <div className='btn_main'>
            <div className='circle'><div className='red'></div><div className='Yellow'></div><div className='green'></div>
             </div>
        </div>
        <div className='main_edu'>
          <div className='row_card'>
            <h4><FaUniversity/> Computer System Technician</h4>
            <h5>Loyalist College, Toronto</h5>
            <h6>-2021 to 2022</h6>
          </div>
          <div className='row_card'>
            <h4><FaUniversity/> Computer Engineering</h4>
            <h5>Uka Tarsadiya University, India</h5>
            <h6>-2015 to 2019</h6>
          </div>
        </div>
      </div>
      </div>
      <div className='row'>
        <div className='main_card'>
        <div className='btn_main'>
            <div className='circle'><div className='red'></div><div className='Yellow'></div><div className='green'></div>
             </div>
        </div>
        <div className='main_edu'>
          <div className='row_card'>
            <h4><FaCertificate/> Front-End Web UI Frameworks and Tools: Bootstrap 4</h4>
            <h5>Coursera</h5>
            <h6>2022</h6>
          </div>
          <div className='row_card'>
            <h4><FaCertificate/> Building RESTful APIs with Node.js and Express</h4>
            <h5>LinkedIn</h5>
            <h6>2022</h6>
          </div>
          <div className='row_card'>
            <h4><FaCertificate/> Introduction to Cybersecurity</h4>
            <h5>Cisco</h5>
            <h6>2022</h6>
          </div>
          <div className='row_card'>
            <h4><FaCertificate/> Introduction to AWS for Non-Engineers: 1 & 3 Cloud Concepts </h4>
            <h5>LinkedIn</h5>
            <h6>2022</h6>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </section>
  )
}
