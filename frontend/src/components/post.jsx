import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {post} from "../actions"
import { TextField } from "@material-ui/core";
import "./post.css"
import Navbar from "./navbar";

const Post = ()=>{
    const [title, setTitle]=useState('')
    const [image, setImage]=useState([])
    const [price, setPrice]=useState('')
    
    const reg = /^-?\d*(\.\d*)?$/;
    const handleSubmit = ()=>{
        let data = new FormData()
        data.append('title',title)
        data.append('image',image)
        data.append('price', price)
        post(data, ()=>{console.log('Success!')}, ()=>{console.log('Fail');
        
    })

    }


    return (
        <div className="post">
            <Navbar/>
            <div className="p-container">
                <div className="p-title">
                    Post My Item on Auctions
                </div>
                <div className="p-formgroup">
                    <label className="p-label">Item Name</label>
                <input className="p-input" type='text' placeholder="Put your item Name" 
                onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="p-formgroup">
                    <label className="p-label">Image</label>
                <input
                        className="p-button"
                        type="file"
                        accept="image/*"
                        id = "image"
                        onChange={(e)=>{setImage(e.target.files[0])}}                   
                    />
                </div>
                <div className="p-formgroup">
                <label className="p-label">Price</label>
                <input className="p-input" type='number' placeholder="Put your item Price"  pattern={reg} onChange={(e)=>{setPrice(e.target.value)}}/>                   
                </div>
                <div class="p-formgroup">
                <label className="p-label">Item Description</label>
                <textarea className="p-input p-textarea" placeholder="Enter your description here..."></textarea>
                 </div>
                 <div className="p-formgroup">
                <button className="p-button p-submit" onClick={handleSubmit}>Submit</button>                  
                </div>


            </div>
        </div>

    )
}

export default Post;