import React, { Component } from 'react';
//import CommentList from './CommentList';
//import CommentForm from './CommentForm';
//import Prod from './Proddata';
import './style.css';
var Prod = require('./Proddata.json')

class Retail extends Component {
 render() {
  return (
  <div className="product-details">
    <div className="crumbs">
      <div className="crumb" >
        <a >
          {Prod.category.ancestor}
        </a>
        <div className="divider" >
          /
        </div>
      </div>
    </div>
    <div className="product-details-content">
      <div className="image-left">
        <img src={Prod.pictures} alt="pro"/>
      </div>
      <div className="details-right">
        <h1>{Prod.name}</h1>
        <div>{Prod.displayPrice}</div>
        <div className="cart-button" >
          <i className="fa fa-cart-plus"></i>
          Add
        </div>
      </div>
      <div ></div>
    </div>
  </div>

  
  

 
 
 
 )
 }
}

//Retail.defaultProps = { "_id" : "5579b62cdb678e641a1c0299", "name" : "Professional AngularJS", "internal" : { "approximatePriceUSD" : 32 }, "category" : { "_id" : "Web Programming", "parent" : "Non-Fiction", "ancestors" : [ "Books", "Non-Fiction", "Web Programming" ] }, "price" : { "amount" : 32, "currency" : "USD" }, "pictures" : [ "http://i.imgur.com/1ltldCT.png" ], "__v" : 0 }

export default Retail;