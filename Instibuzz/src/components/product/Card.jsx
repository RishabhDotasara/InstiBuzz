import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa6'

export default function Card(props) {
  return (
    <div className='card'>
        <div className="image">
            <img src={props.image} alt="" />
            <FaHeart className='heart'/>
        </div>
        <div className="info">
            <div className="name">
                <h2>White IITM</h2>
                <span className="card-rating sm">4.5<FaStar style={{color:"green"}}/></span>
            </div>
            <div className="desc">
                <div className='sm' style={{marginTop:5+"px"}}>Regular T-Shirt</div>
                <span>
                    <span style={{width:"fit-content",fontWeight:"bold",fontSize:1.2+"rem",marginRight:5+"px"}}>$399.00</span>
                    <span className='smm'>Inc. of all taxes</span>
                </span>
            </div>
        </div>
    </div>
  )
}
