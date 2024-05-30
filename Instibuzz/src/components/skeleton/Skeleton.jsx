import React, { useEffect, useRef, useState } from 'react'
import './skeleton.css'

export default function skeleton() {
    const [loading, setLoading] = useState(true);
    const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";
    const Content = useRef(null);



  return (
    <div className='card'>
        <div className='skeleton'>

            <img src={!loading ? "https://th.bing.com/th?id=OIP.vj5_esNw-rT_zTqbB0KEXQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" : ""} alt="" />
        </div>
      <div className="content" ref={Content}>
        {loading ? (
            <>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
            </>
            
        ):(
            <p>{content}</p>
        )}
        
      </div>
      <button onClick={()=>{setLoading(false)}}>Load</button>
    </div>
  )
}
