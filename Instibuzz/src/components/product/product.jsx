import React, { useEffect, useState } from "react";
import "./product.css";
import { FaShield, FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";

import { useParams } from "react-router-dom";

import { isExpired, decodeToken } from "react-jwt";
import Card from "./Card";

const Product = () => {
  const [imageUrl, setImageUrl] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState(imageUrl[0]);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(true);
  const [tags,setTags] = useState(['Unisex','100% Cotton','240 GSM','Bio-Washed'])

  useEffect(() => {
    getProductDetails();
   setIsLogin(true);  
  }, []);

  useEffect(() => {
    if (imageUrl.length > 0) {
      setSelectedImage(imageUrl[0]);
    }
  }, [imageUrl]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const [details, setDetails] = React.useState();
  const [quantity, setQuantity] = React.useState("1");
  const [isCart, setIsCart] = React.useState();
//   const navigate = useNavigate();
  const params = useParams();
  const [isLogin, setIsLogin] = React.useState(true);
  const [sizesAvailable, setSizesAvailable] = React.useState([]);

  useEffect(() => {
    if (sizesAvailable) {
      sizesAvailable.forEach((element) => {
        if (element.quantity === 0) {
          document.getElementById(element.size).disabled = true;
        }
      });
    }
  }, [sizesAvailable]);

  useEffect(() => {
    if (isLogin) {
      isProductWishlisted();
    }
  }, [isLogin])

  const selectImage = (type) => {
    setSelectedImage(type);
  };

  const isProductWishlisted = async () => {
    setLoading(true)
    const email = localStorage.getItem("userEmail");
    const token = localStorage.getItem("token");

    let result = await fetch(
        `b`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    result = await result.json();
    console.log(result)

    if (result.status == 404) {
      alert(result.message);
      localStorage.removeItem("userEmail");
    //   navigate("/");
      window.location.reload(); 
    }

    const wishlist = result.products;
    const wishlistId = wishlist.map((product) => {
      return product.product_id;
    })

    let productId = params.id;
    if (wishlistId.includes(productId)) {
      setIsWishlisted(true);
    }
    setLoading(false)
  }

  const getProductDetails = async () => {
    // console.log(params)
    setLoading(true);
    // let result = await fetch(`${process.env.REACT_APP_server_url}/api/v1/products/get-product-details/${params.id}`, {
    // console.log(params)
    let result = await fetch(
      `https://website-server-ijbv.onrender.com/api/v1/products/get-product-details/68d41db2-dd8d-4f82-a520-5da57f250acc`,
      {
        method: "POST",
      }
    );


    result = await result.json();
    setLoading(false);
    console.log(result)
    setName(result.name);
    setPrice(result.price);
    // setSize(result.sizes)
    setImageUrl(result.imageUrl);
    setDetails(result.details);
    setSizesAvailable(result.sizeQuantities);
    // console.log(sizesAvailable);
  };

  const toggleWishlist = async () => {
    setLoading(true)
    if (isLogin) {
      let email = localStorage.getItem("userEmail");
      let token = localStorage.getItem("token");
      const productId = params.id;

      setIsWishlisted(!isWishlisted);

      let result = await fetch(
        ``,
        {
          method: "POST",
          body: JSON.stringify({ email, productId }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      result = await result.json();
      setLoading(false)
      if (result.status === 404) {
        alert(result.message);
        localStorage.removeItem("userEmail");
        // navigate("/");
        window.location.reload();
      }
    } else {
      alert('Login to add products to wishlist');
    }
  }

  const addToCart = async () => {
    let email = localStorage.getItem("userEmail");
    let token = localStorage.getItem("token");
    var selectedSize = document.querySelector('input[name="radios"]:checked');
    if (!selectedSize) {
      alert("Please Select Size");
      return;
    }
    selectedSize = selectedSize.value;
    // console.log(token)
    if (!email) {
      alert("Please Login");
    //   navigate("./login");
    }
    setLoading(true);
    let productId = params.id;
    // console.log(email)
    // console.log(productId)
    let result = await fetch(
      ``,
      {
        method: "POST",
        body: JSON.stringify({ email, productId, quantity, selectedSize }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result = await result.json();
    // console.log(result)
    setLoading(false);
    if (result.status === 404) {
      alert(result.message);
      localStorage.removeItem("userEmail");
    //   navigate("/");
      window.location.reload();
    } else {
      // alert("Product is added to cart Successfully")
      // navigate('/cart')
      // window.location.reload();
    }
    setIsCart(true);
  };

  const changeButton = (e) => {
    setIsCart(false);
  };

  const toLogin = () => {
    // navigate("/login");
  };

  const toUpdate = () => {
    // navigate(`/updateProduct/${params.id}`);
  };

  const toCart = () => {
    // navigate("/cart");
  };

  function imageButton(item, index) {
    // console.log(item)
    return (
      <button onClick={() => selectImage(item)}>
        <img src={item} alt="Product image" class="product-img-button" />
      </button>
    );
  }

  function sizeAvailable(item, index) {
    return <option value={item.size}>{item.size}</option>;
  }

  return (
    <div>
      {
        loading ? <></>:
        <>
          <div className="product-main-container">
            <div className="product-image-container">
              <div className="product-all-images">{imageUrl.map(imageButton)}</div>
              <img src={selectedImage} alt="Image" className="product-display-img" />
            </div>
            <div className="product-product-description">
              <div className="product-product-name">
                <h2>{name}</h2> 
                <span className="sm">Regular T-shirt</span>
                <span className="product-product-rating">4.5<FaStar style={{color:"green"}}/></span>
                <i class={isWishlisted ? "fa fa-heart" : "fa fa-heart-o"} onClick={toggleWishlist}></i>
              </div>
              <div className="product-product-price">
                <h3>₹{price}.00</h3>
                <span className="smm-grey">MRP inclusive of all taxes.</span>
              </div>
              <div className="product-product-size">
                <p className="smm">Select Size</p>
              </div>
              <div className="product-size-input-container">
                <label>
                  <input
                    type="radio"
                    name="radios"
                    value="S"
                    id="S"
                    onClick={(e) => {
                      changeButton(e.target.value);
                    }}
                  />
                  <span>S</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radios"
                    value="M"
                    id="M"
                    onClick={(e) => {
                      changeButton(e.target.value);
                    }}
                  />
                  <span>M</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radios"
                    value="L"
                    id="L"
                    onClick={(e) => {
                      changeButton(e.target.value);
                    }}
                  />
                  <span>L</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radios"
                    value="XL"
                    id="XL"
                    onClick={(e) => {
                      changeButton(e.target.value);
                    }}
                  />
                  <span>XL</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radios"
                    value="2XL"
                    id="2XL"
                    onClick={(e) => {
                      changeButton(e.target.value);
                    }}
                  />
                  <span>2XL</span>
                </label>
              </div>
              
              {isLogin ? (
                isCart ? (
                  <button onClick={toCart} className="product-btn">
                    Go to Cart
                  </button>
                ) : (
                  <div className="product-product-actions">
                  <button className="product-btn" onClick={addToCart}>
                    Add to Bag
                  </button>
                  <button className="product-btn" onClick={()=>{setIsWishlisted(!isWishlisted)}}>
                    <FaHeart style={{color:isWishlisted ? "red" : "grey",fontSize:1.3+"rem"}}/>Wishlist 
                  </button>

                  </div>
                )
              ) : (
                <>
                  <button onClick={toLogin} className="product-btn">
                    Login to Proceed
                  </button>
                </>
              )}

              {isAdmin ? (
                <button onClick={toUpdate} class="product-btn">
                  Update product
                </button>
              ) : (
                <></>
              )}
              <div className="product-product-details product-product-info">
                <h3 className="sm">PRODUCT DESCRIPTION</h3>
                <p>{details}</p>
                <div className="product-product-details-tags">
                  {tags.map(tag=>{
                    return (
                      <span className="tag">{tag}</span>
                    )
                  })}
                </div>
              </div>
              <hr />
              <div className="product-product-details product-shipping-policy">
                <h3 className="sm">SHIPPING POLICY</h3>
                <p className="smm">
                  Your product will be delivered within 15 days of placing the order.
                </p>
              </div>
              <hr />
              <div className="product-product-details product-return-refund-policy">
                <h3 className="sm">EXCHANGE POLICY</h3>
                <p>Easy exchange up to 7 days of delivery.</p>
              </div>

              <div className="product-product-details product-product-illustrations">
                <div className="illustration">
                  <FaLock className="icon"/>
                  <span className="smm-grey">100% SECURE PAYMENTS</span>
                </div>
                <div className="illustration">
                  <PiKeyReturn className="icon"/>
                  <span className="smm-grey">EASY RETURNS AND INSTANT REFUNDS</span>
                </div>
                <div className="illustration">
                  <IoShieldCheckmarkOutline className="icon"/>
                  <span className="smm-grey">100% GENUINE PRODUCTS</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
          

            <div className="product-suggestions-container">
                    <h2 className="heading">Similar to what you see</h2>
                    <div className="cards">
                      <Card image={selectedImage}/>
                      <Card image={selectedImage}/>
                      <Card image={selectedImage}/>
                      <Card image={selectedImage}/>
                      <Card image={selectedImage}/>
                      <Card image={selectedImage}/>
                      <Card image={selectedImage}/>
                      <Card image={selectedImage}/>
                      <Card image={selectedImage}/>
                    </div>
            </div>
        </>
      }
    </div>

  );
};

export default Product;
