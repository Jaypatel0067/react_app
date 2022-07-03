import React from 'react'
import project from '../Projects/project.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from '../Assets/012.jpg'
import Media from '../Assets/media_player.png'
import Portfolio from '../Assets/portfolio.png'
import realtime_chatapp from '../Assets/realtime_chatapp.png'
import Counstruction from '../Assets/Counstruction.png'
import array_visualizer from '../Assets/array_visualizer.png'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  
export default function Project() {
  return (
    <section id='project' className='project'> 
        <h5>Project i have done</h5>  
       <h1>Projects</h1>
       <div className='container'>
       <Carousel  swipeable={true}
  draggable={true}
   
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
 
  autoPlaySpeed={2000}
  keyBoardControl={true}
   >
      <div className='project_slider_img'><a href="https://jaypatel0067.github.io/Media_player/" target="_blank"><img src={Media} width='100%'></img> <h4 className='slider_text'>Media Player</h4> </a></div>
  <div className='project_slider_img'><a href="https://jaypatel0067.github.io/static_website/" target="_blank"><img src={Counstruction} width='100%'></img> <h4 className='slider_text'>Construction website</h4></a> </div>
  <div className='project_slider_img'><a href="https://jaypatel0067.github.io/Algorithm-visualizer/"><img src={array_visualizer} width='100%'></img> <h4 className='slider_text'>Sorting  algorithm visualizer</h4> </a></div>
  <div className='project_slider_img'><a href=""><img src={Img} width='100%'></img> <h4 className='slider_text'>Online Movie Ticket Booking System</h4> </a></div>
  <div className='project_slider_img'><a href=""><img src={realtime_chatapp} width='100%'></img> <h4 className='slider_text'>Real time chat app</h4> </a></div>
  <div className='project_slider_img'><a href=""><img src={Portfolio} width='100%'></img> <h4 className='slider_text'>Portfolio</h4> </a></div>
 
</Carousel></div>
    </section>
  )
}
