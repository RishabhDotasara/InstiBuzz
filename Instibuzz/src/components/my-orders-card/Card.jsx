import React, { useState } from 'react'
import "./card.css"
import Timeline from './Timeline'

export default function Card() {

    //both these can be passed from props to the card.
    const [tshirt,setTshirt] = useState({
        name:"White IITM",
        style:"Regular T-shirt",
        size:"S",
        qty:1,
        price:50
    })

    const [user,setUser] = useState({
        name:"Ritika Sahni",
        address:"House No. 94, Near Village Metro Station, Nellutla City, Sector 30, Deot Wada, North East Delhi, Delhi, Pincode-199222",
        mobile:"1234567891"
    })

  return (
    <div className='container'>
      <div className="orders-card">
            <div className="block user-info ">
                <h3>{user.name}</h3>
                <p className='sm-text'>{user.address}</p>
                <span className='sm-text'>Mobile: <span style={{fontWeight:500}}>{user.mobile}</span></span>
            </div>
            <div className="block product-info">
                <div className="info ">
                    <img src="https://firebasestorage.googleapis.com/v0/b/instibuzz-2f91b.appspot.com/o/images%2FBoy%20Back%20(10).jpgd225be20-48c1-4737-9c73-740a5927b3d2?alt=media&token=43f4961d-cab1-4358-8832-b80a9c5dcc0b" alt="image" />
                    <div className='sub-block'>
                        <h2>{tshirt.name}</h2>
                        <p className='sm-text'>{tshirt.style}</p>
                        <div style={{marginTop:10+"px"}}>

                        <span className='sm-text' style={{marginRight:10+"px"}}>Size: {tshirt.size}</span>
                        <span className='sm-text'>Qty: {tshirt.qty}</span>
                        </div>
                    </div>
                </div>
                <div className="price"><h2>${tshirt.price}</h2><span className='smm-text'>Inclusive of all taxes.</span></div>
            </div>
            <div className="delivery-info block">
                <Timeline/>
            </div>
      </div>
    </div>
  )
}
