import { useState } from "react";
import { useEffect } from "react";
import { getDetail } from "../actions";
import Navbar from "./navbar";
import ape from "./sky.png";
import './detail.css'
import { useParams } from "react-router-dom";


const Detail = (props)=>{
    const {id}=useParams()
    const [item, setItem]=useState(null)
    useEffect(()=>{getDetail(id,setItem)},[])
    return (
        <div className="detail">
            <Navbar />
            {
                item && <div className="d-container">
                            <div className="d-imgContainer"><img src={item.image} className="d-img" /></div>  
                            <div className="d-textcontainer">
                                <h1>{item.title}</h1>
                                <div>By <strong>{item.user}</strong></div>
                                <div>{item.description}</div>
                                <div><strong>Price:</strong> {item.price}</div>
                            </div>       
                        </div>
            }
            
        </div>
    )
}

export default Detail;