import React, { useState } from 'react'

export default function Timeline() {

    const [current,setCurrent] = useState(0)

    const [steps,setSteps] = useState([
        {
            title:"Order Placed",
            status:"done",
            date:"24 May 2024"
        },
        {
            title:"Dispatched",
            status:"done",
            date:"24 May 2024"
        },
        {
            title:"Delivered",
            status:"no",
            date:"24 May 2024"
        },
       
    ])
  return (
    <div className='timeline'>
        {steps.map((step,index)=>{
            return (
                <>
                <div className='step'>
                    <div className='circle' style={{background:current >= index ? "green" : "grey"}}></div>
                    <div className='text-title sm-text'>{step.title}</div>
                    <div className='text smm-grey'>{step.date}</div>
                </div>
                { index != steps.length-1 && <div className='line' style={{background:current > index ? "green" : "grey"}}></div>}
                </>
            )
        })}
    </div>
  )
}
