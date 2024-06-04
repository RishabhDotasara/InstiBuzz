import React from 'react'
import './Shop.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// // import LoadingPage from './LoadingPage';
// import Banner from '../assets/Shop-Banner.jpg'
// import mobileBanner from '../assets/Shop-mobile-banner.jpg'
// // import { Helmet } from 'react-helmet';


// import Avg_IITian_1 from '../assets/boy back avg iitm-min-min.jpg';
// import Take_Lite_1 from '../assets/boy front take lite-min-min.jpg';
// import Boss_Baby_1 from '../assets/pair back front-min-min.jpg';

// import White_IITM_1 from '../assets/girl back-min-min.jpg';
// import Green_IITM_1 from '../assets/girl front green iitm-min-min.jpg';
// import Entre_Flame_1 from '../assets/boy back-min-min.jpg';
import ima from "../assets/dummy.jpg"

function Shop() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
        // const scrollToTop = () => {
        // }
    }, []);
    const [ourProducts, setOurProducts] = useState([]);
    // const [loading, setLoading] = useState(false)
    // const navigate = useNavigate();

    const productPage = async (productId, index) => {
        // navigate(`/product/${productId}`);
        console.log("Product Id: ", productId, "Index: ", index);
    };
    const [image, setImage] = useState(ima);  
    const [loading, setLoading] = useState(true);  
    
    const products = [
        {product_id:2213,imageUrl:[image,"bcd"],name:"Avg Iitian",style:"regular",price:400},
        {product_id:1525,imageUrl:[image,"bcd"],name:"Take Lite",style:"regular",price:400},
        {product_id:1276,imageUrl:[image,"bcd"],name:"InstiBuzz Hoodie",style:"regular",price:400},
        {product_id:1727,imageUrl:[image,"bcd"],name:"Nike",style:"regular",price:400},
        {product_id:17628,imageUrl:[image,"bcd"],name:"Innovation",style:"regular",price:400},
        {product_id:12549,imageUrl:[image,"bcd"],name:"White IITian",style:"regular",price:400},
        {product_id:1330,imageUrl:[image,"bcd"],name:"Hellooo",style:"regular",price:400},
    ]


    const [activeProducts, setActiveProducts] = useState(ourProducts);

    useEffect(() => {
        setActiveProducts(products);
    }, []);


    function e(item, index) {
        const productId = item.product_id;
        return (

            <div className="shop-product-div">
                <button
                    className="shop-product-card"
                    onClick={() => productPage(item.product_id, index)}
                >
                    
                    {!loading && <img src={item.imageUrl[0]} className='image' alt="Product" />}
                    {loading && <div className='image loader'></div>}

                   
                    <div className="shop-product-name">
                        {!loading && <h2 className='h2-name'>{item.name}</h2>}
                        {loading && <h2 className='h2-name loader'></h2>}
                    </div>
                    <hr />
                    <div className='shop-product-style'>
                        {!loading && <p className='product-style'>{(item.style === 'regular') ? "Regular T-Shirts" : "Oversized T-Shirts"}</p>}
                        {loading && <p className='product-style loader'></p>}
                    </div>
                    <div className="shop-product-price">
                        {!loading && <h3 className='price'>₹{item.price}</h3>}
                        {loading && <h3 className='price loader'></h3>}
                    </div>
                </button>
            </div>
        );
    }

    return (
        <>

        <div className='shop'>
            {
                // loading ? <LoadingPage /> :
                    <div>
                        <button onClick={()=>{setLoading(!loading)}}>Click</button>
                        <div className="shop-page-info">
                            <div className="shop-page-banner">
                                {!loading && <img src={image} alt='Banner for advertising on Shop page' className='ban-img'/>}
                                {loading && <div className='ban-img loader'></div>}
                            </div>
                            <div className="shop-page-banner-mobile">
                                {!loading && <img src={image} alt='Banner for advertsing on Shop page' className='ban-img-mob'/>}
                                {loading && <div className='ban-img-mob'></div>}

                            </div>
                        </div>
                        <div className="shop-navigation-container">
                            <div className="shop-navigation">

                                <p className='shop-count'><span style={{ color: 'black' }}>Our Products</span> - {activeProducts.length}</p>
                            </div>
                        </div>
                        <div className="shop-container">

                            <div className="shop-products-display">{activeProducts.map(e)}</div>
                        </div>
                    </div>
            }
        </div>
</>


    )


}


export default Shop