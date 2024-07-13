import React from 'react';
import './homePage.scss';
import SearchBar from '../../components/searchBar/searchBar';

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>
          Great Tutorial , the way you teach CSS and all react stuff  is so amazing ,  honestly your way of teaching and the way you start page layout design and then add responsiveness is totally fantastic , not anyone has such quality that you have , please keep sharing such stuff more.
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
  
    </div>
  )
}

export default HomePage