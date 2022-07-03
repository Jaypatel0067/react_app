import React from 'react'
import About from '../About/about.css'
import Img from '../Assets/about_img.png'
import {FaUsers} from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {FaPhp,FaReact,FaHtml5,FaCss3Alt,FaBootstrap,FaCuttlefish,FaMicrosoft,FaWindows,FaGithubSquare,FaNetworkWired,FaLinux} from 'react-icons/fa';
import {DiVisualstudio,DiMaterializecss,DiJavascript,DiNodejsSmall,DiJava,DiJqueryLogo,DiCisco,DiSublime,DiAndroid} from 'react-icons/di';





export default function about() {
  return (
    <section id='about'>
       <h5>Somthing about me</h5>
     <h1>About Me</h1>
      <div className='container'>
      <article className='about_card'>
              <ul className='about_ul'>
                <li>Proven working knowledge of Full-stack development, methodologies, programming languages, web development strategy, and test automation abilities to write code easily and most preferably along with quick learning skills.</li>
                <li>Strong knowledge of Data Structures and Algorithms, Object-Oriented and procedural concepts, CI/CD concepts, core web principles (REST, SOAP), and understanding of various hardware.</li>
                <li>Familiar with Software Development Life Cycle (SDLC).</li>
                <li>Database Management Systems: MySQL, Microsoft SQL Server, Access, MongoDB, CouchDB, Oracle.</li>
               
        
              </ul> 
              
            </article>
        <div className='aboutMe'>
        <div className="App">
     <Tabs className="Tabs">
       <TabList>
         <Tab>Web Frameworks</Tab>
         
         <Tab>Programing Languages</Tab>
         <Tab>Networking</Tab>
         <Tab>Version Control</Tab>
         <Tab>Operating Systems</Tab>
       </TabList>
<TabPanel>
  <div className='skillrow'>
         <div className='skillbox'>
           <FaHtml5 className='skillicon'/>
            
           <p>HTML</p>
         </div>
         <div className='skillbox'>
           <FaCss3Alt className='skillicon'/>
           <p>Css</p>
         </div>
         <div className='skillbox'>
           <DiJavascript className='skillicon'/>
           <p>Javascript</p>
         </div>
         <div className='skillbox'>
           <DiJqueryLogo className='skillicon'/>
           <p>Jquery</p>
         </div>
         <div className='skillbox'>
           <FaHtml5 className='skillicon'/>
           <p>Ajax</p>
         </div>
         <div className='skillbox'>
           <FaReact className='skillicon'/>
           <p>React</p>
         </div>
         <div className='skillbox'>
           <DiNodejsSmall className='skillicon'/>
           <p>Node.js</p>
         </div>
         <div className='skillbox'>
           <FaPhp className='skillicon'/>
           <p>PHP</p>
         </div>
         <div className='skillbox'>
           <FaBootstrap className='skillicon'/>
           <p>Bootstrap </p>
         </div>
         <div className='skillbox'>
           <DiMaterializecss className='skillicon'/>
           <p>Tailwind</p>
         </div>
         </div>
       </TabPanel>
       <TabPanel>
       <div className='skillrow'>
         <div className='skillbox'>
           <FaCuttlefish className='skillicon'/>
           <p>C</p>
         </div>
         <div className='skillbox'>
           <DiJava className='skillicon'/>
           <p>Java</p>
         </div>
         <div className='skillbox'>
           <DiVisualstudio className='skillicon'/>
           <p>vb.net</p>
         </div>
         </div>
       </TabPanel>
       <TabPanel>
       <div className='skillrow'>
       <div className='skillbox'>
           <FaNetworkWired className='skillicon'/>
           <p>  Knowledge of basic protocols</p>
         </div>
         <div className='skillbox'>
           <FaNetworkWired className='skillicon'/>
           <p> routing protocols such<br></br> as TCP/IP, UDP, DHCP</p>
         </div>
         <div className='skillbox'>
           <DiCisco className='skillicon'/>
           <p>Wireshark </p>
         </div>
         <div className='skillbox'>
           <DiCisco className='skillicon'/>
           <p> Cisco Packet Tracer</p>
         </div>
         </div>
       </TabPanel>
       <TabPanel> <div className='skillrow'>
       <div className='skillbox'>
           <FaGithubSquare className='skillicon'/>
           <p>Git</p>
         </div></div>
       </TabPanel>
       <TabPanel>
       <div className='skillrow'>
       <div className='skillbox'>
           <FaLinux className='skillicon'/>
           <p>Linux</p>
         </div>
         <div className='skillbox'>
           <FaWindows className='skillicon'/>
           <p>Windows</p>
         </div>
         <div className='skillbox'>
           <FaMicrosoft className='skillicon'/>
           <p> Microsoft Office</p>
         </div>
         <div className='skillbox'>
           <DiAndroid className='skillicon'/>
           <p>Android Studio</p>
         </div>
         <div className='skillbox'>
           <DiVisualstudio className='skillicon'/>
           <p>  Visual Studio 2019</p>
         </div>
         <div className='skillbox'>
           <DiVisualstudio className='skillicon'/>
           <p> Visual studio code</p>
         </div>
         
         <div className='skillbox'>
           <DiSublime className='skillicon'/>
           <p> Sublime Text</p>
         </div>
         </div>
       </TabPanel>
     </Tabs>
   </div>
       
  
      </div>
      </div>
    </section>
  )
}
