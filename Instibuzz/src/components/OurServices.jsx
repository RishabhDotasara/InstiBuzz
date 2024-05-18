import React from 'react'
import "./services.css"
import dummy from "./assets/dummy.jpg"

export default function OurServices() {
  return (
    <div className='ourServices-container'>
      <div className="services-description-cont">
        <h1 className='heading'>Know More About Our Services</h1>
        <div className="card">
            <div className="thumbnail">
                <img src={dummy} alt="Image" />
                <span>234 Kingsway Road</span>
            </div>
            
            <div className="desc">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla rem soluta reiciendis illum perferendis quasi vero sapiente assumenda magnam.</p>
               
            </div>
        </div>
        <div className="card">
            <div className="thumbnail">
                
                <span>234 Kingsway Road</span>
            </div>
            <div className="desc">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla rem soluta reiciendis illum perferendis quasi vero sapiente assumenda magnam.</p>
               
                <img src={dummy} alt="Image" />
            </div>
            
        </div>
        <div className="card">
            <div className="thumbnail">
                <img src={dummy} alt="Image" />
                <span>234 Kingsway Road</span>
            </div>
            
            <div className="desc">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla rem soluta reiciendis illum perferendis quasi vero sapiente assumenda magnam.</p>
               
            </div>
        </div>
        
       
      </div>
      <div className="connect-cont">
        <div className="heading">
            <span>CONNECT</span>
            <h1>Get Started With Us!</h1>
        </div>
        <div className="graphics-cont">
            <div className="card-holder">
                <div className="card"></div>
            </div>
            <div className="card-holder">
                <div className="card"></div>
            </div>
            <div className="card-holder">
                <div className="card"></div>
            </div>
            <div className="card-holder">
                <div className="card"></div>
            </div>
            
        </div>
      </div>
      <div className="order-cont">
        <h1>Get Your First Order Now!</h1>
        <button>Get Started</button>
      </div>
    </div>
  )
}
