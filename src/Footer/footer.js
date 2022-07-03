import React from 'react'
import Footer from '../Footer/fotter.css'
import { FaHome } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaServicestack } from 'react-icons/fa';
import { FaSketch } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

 
export default function footer() {
  return (
    <section>
       <div className='footermain'>
        <div className='container'>
          <div className='title'>
          <h4>Copyright   &copy;  Jay Ambaliya {new Date().getFullYear()}</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
