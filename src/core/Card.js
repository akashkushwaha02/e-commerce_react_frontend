import React from 'react'
import { Redirect } from 'react-router-dom';
import { addItemToCart,removeItemFromCart } from './helper/cartHelper';
import ImageHelper from './helper/ImageHelper';



const isAuthenticated = true

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = true,
}) => {
    
    const cartTitle = product ? product.name : "An alternate text";
    const cartDescription = product ? product.description : "An alernate text"
    const cartPrice = product ? product.price : "An alernate text"

    const addToCart = () => {
      if (isAuthenticated) {
        addItemToCart(product, () => {});
        console.log("Added to cart");
      } else {
        console.log("Login Please!");
      }
    };

    const getAredirect = redirect => {
      if(redirect){
        return <Redirect to="/cart" />
      }
    }

    const showAddToCart = (addToCart) => {
      return (
          addtoCart && (
            <button
              onClick={addToCart}
              className="btn btn-block btn-outline-success mt-2 mb-2">
              Add to Cart
          </button>
          )
      );
    };

    const showRemoveFromCart = removeFromCart => {
      return (
        removeFromCart && (
          <button
          //Todo: need to rectify this error
          onClick={() => {
            removeItemFromCart(product.id)
            console.log("Product has been removed")
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
        )
      )
    }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartDescription}</div>
        <div className="card-body">
            
        <ImageHelper product={product} />

          <p className="lead bg-success font-weight-normal text-wrap">
            {cartTitle}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">Rs. {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;