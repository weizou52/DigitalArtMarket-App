import ape from "./sky.png"
import "./item.css"
import { useState } from "react";
import {buy} from '../actions'
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout"
import { useEffect } from "react";
import axios from "axios";
import { createRef } from "react";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';



function Item({item}){
    const history = useHistory()
    const [loading, setLoading]=useState(false)
    const myrefrence=createRef()
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const publicKey='pk_test_51L7WF3CZN6gSvltzE15wWD4mdx3smWiuLBQlr0KZlQT6CrFZoOgMFpUD9nTldON0fNr5ZxHb8tzoa4R5yG45wb8d00KMP7RteU'
    const handleCheckout = (token)=>{

        axios.post("/order/checkout/", {token:token},{headers:{Authorization: 'JWT '+ localStorage.getItem('JWT')}}).then(
            res=>{console.log('Success!')}
        ).catch(e=>{
            if(e.response.status===401){
                history.push("/login")
            }
        })
    }

    return (
    <div className="i-container">
        <img src={item.img} alt="" className="i-image" onClick={()=>{history.push(`/item/${item.id}`)}}/>
        <div className="i-dis">
            <div style ={{ fontWeight:900}}> 
            {item.title}
            </div>
            
            <div style ={{ fontWeight:800}} className="i-price">
                <div style={{fontWeight:100,paddingRight:5,fontSize:'0.8rem'}}>Price: </div>
                <CurrencyExchangeIcon fontSize="small"/>  
                <div>  {item.price}</div>
            </div>  
        </div>
        
        <StripeCheckout token={handleCheckout} billingAddress 
            shippingAddress  stripeKey={publicKey} className="buy">
                <div style={{fontWeight:100,paddingBottom:10,paddingLeft:10,fontSize:'0.8rem', color:'grey'}}>Ends in a day </div>
                <div style={{color:"white"}} ref={myrefrence} ></div>
        </StripeCheckout>
        <div className="buy"  onClick = {()=>{
                setLoading(true) 
                myrefrence.current.click() 
                setLoading(false) 
            }}>{!loading?<div>buy</div>:<div className="loading"></div>}
        </div>
    
                
    </div>
    )
}

export default Item;