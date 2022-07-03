import React from 'react'
import { useState } from 'react';

import navbarcss from './navbarcss.css'
import { FaHome } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaServicestack } from 'react-icons/fa';
import { FaSketch } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

export default function Navbar() {
  
  const [activeNav, setActiveNav] = useState('#header')

 
 console.log(activeNav)

  return (
   <div className='navbar'>
     <div className='navcontainer'>
       <a href='#header' onClick={()=>setActiveNav('#header')} className={`navitem ${activeNav === '#header' ? "active" : ""}`}  ><FaHome  /></a>
       <a href='#about' onClick={()=>setActiveNav('#about')} className={`navitem ${activeNav === '#about' ? "active" : ""}`}   ><FaUserAlt/></a>
       <a href='#Skill' onClick={()=>setActiveNav('#Skill')} className={`navitem ${activeNav === '#Skill' ? "active" : ""}`} ><FaServicestack/></a>
       <a href='#Education' onClick={()=>setActiveNav('#Education')} className={`navitem ${activeNav === '#Education' ? "active" : ""}`} ><FaSketch/></a>
       
       <a href='#contectus' onClick={()=>setActiveNav('#contectus')} className={`navitem ${activeNav === '#contectus' ? "active" : ""}`} ><FaRegEnvelope/></a>
     </div>

     </div>
  )
}
