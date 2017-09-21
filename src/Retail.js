import React, { Component } from 'react';
//import CommentList from './CommentList';
//import CommentForm from './CommentForm';
//import Prod from './Proddata';
import './style.css';
var Prod = require('./Proddata.json')

class Retail extends Component {
 render() {
  return (
 <div >
  <h1>{Prod.name}</h1>
  <h1>{Prod.internal.approximatePriceUSD}</h1>
  <img src={Prod.pictures} height="120" alt="Prod logo"></img>
  
  

 
 
 </div>
 )
 }
}

//Retail.defaultProps = { "_id" : "5579b62cdb678e641a1c0299", "name" : "Professional AngularJS", "internal" : { "approximatePriceUSD" : 32 }, "category" : { "_id" : "Web Programming", "parent" : "Non-Fiction", "ancestors" : [ "Books", "Non-Fiction", "Web Programming" ] }, "price" : { "amount" : 32, "currency" : "USD" }, "pictures" : [ "http://i.imgur.com/1ltldCT.png" ], "__v" : 0 }

export default Retail;