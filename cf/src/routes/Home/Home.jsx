import React, { useEffect } from 'react'
import './Home.css'
import gsap from 'gsap'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  useEffect(()=>{
    gsap.fromTo(".home-top,.home-bottom",{backgroundPositionX:0},{backgroundPositionX:"100vw",duration:10,ease:"none",repeat:Infinity})
  },[])
  return (
    <div className='home-wrapper'>
      <div className='home-top'></div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet!</p>
        <Link to={"/menu"}>

        <img src='/start-journey-btn.png' alt='start-journey' style={{width:"394px",height:"95px"}} />
        </Link>
      </div>
      <div className='home-bottom'></div>
    </div>
  )
}

export default Home