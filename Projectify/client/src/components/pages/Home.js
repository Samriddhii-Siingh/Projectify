import React from 'react';
import './Home.css';
import homeimg from './assets/home.jpg';

export default function Home() {
  return (

    <div className='home-container'>
      <div className='home-image-container'>
        <img src={homeimg} alt="home_image" />
      </div>
      <div className='home-text-container'>
        <h1 className='home-headline'>PROJECTIFY</h1>
        <p className='home-text-1'>The Ultimate Platform for Project-based Learning.</p>
        <p className='home-text-2'>Choose Your Domain and Enhance Your Problem-Solving Skills with Variety of Projects along with Mentor-Guided Real-Life Application Development.</p>
      </div>
    </div>
  );
}
