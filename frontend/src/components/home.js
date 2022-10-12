import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Item from "./item.jsx";
import './home.css'
import CryptoApeSocialClub from "./CryptoApeSocialClub.png"
import AngryMushroomBros from "./AngryMushroomBros.png"
import Akikuto from "./Akikuto.png"
import BoboCat from "./BoboCat.png"
import PiaoliangJieJie from "./PiaoliangJieJie.png"
import NightBlueSky from "./NightBlueSky.png"
import PuepleBirdLoboratory from "./PuepleBirdLoboratory.png"
import { getItems } from "../actions";


const Home = ()=>{
    // const data0={
    //     "items": [
    //       {
    //         "id": 1,
    //         "title": "Crypto Ape Social Club",
    //         "img":CryptoApeSocialClub,
    //         "price":0.037
    //       },
    //       {
    //         "id": 2,
    //         "title": "Angry Mushroom Bros",
    //         "img":AngryMushroomBros,
    //         "price":0.019
    //       },
    //       {
    //         "id": 3,
    //         "title": "Akikuto",
    //         "img":Akikuto,
    //         "price":0.043
    //       },
    //       {
    //         "id": 4,
    //         "title": "Bobo Cat",
    //         "img":BoboCat,
    //         "price":0.104
    //       },
    //       {
    //         "id": 5,
    //         "title": "Piaoliang JieJie",
    //         "img":PiaoliangJieJie,
    //         "price":0.061
    //       },
    //       {
    //         "id": 6,
    //         "title": "Pueple Bird Loboratory",
    //         "img":PuepleBirdLoboratory,
    //         "price":0.028
    //       }
    //     ]
    // }
    const [data, setData]=useState([])
 
    useEffect(()=>{
      getItems(setData)
    }, [])

    return (
        <div className="home">          
            <Navbar />
            <div className="h-head"><h1 style={{fontWeight:1000,fontSize:'2.5rem'}}>Explore Listings</h1></div>
            <div className="h-container">
                {
                    data.map((item)=>{
                        return (
                            <Item item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;