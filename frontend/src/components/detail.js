import { useState } from "react";
import { useEffect } from "react";
import { getDetail } from "../actions";
import Navbar from "./navbar";
import ape from "./sky.png";
import './detail.css'


const Detail = ({id})=>{
    // const [product, setProduct]=useState({})
    // useEffect(()=>{
    //     getDetail(id).then(res=>{
    //         setProduct(res)
    //     })
    // },[])
    return (
        <div className="detail">
            <Navbar />
            <div className="d-container">
                <div className="d-imgContainer"><img src={ape} className="d-img" /></div>  
                <div className="d-textcontainer">
                    <h1>Title</h1>
                    <div>By <strong>Jess</strong></div>
                    <div>Angry cat is a cultural identity. A clean collection of 10,000 different cats to build an interesting brand and cat-city.</div>
                    <div><strong>Price:</strong> $0.035</div>
                </div>       
            </div>
            
            

        </div>
    )
}

export default Detail;