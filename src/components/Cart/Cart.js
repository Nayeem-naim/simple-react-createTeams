import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Cart.css'
import playerData from "../../Fakedata/data.json";
import AddPlayer from '../AddPlayer/AddPlayer';

const Cart = () => {
    const [player, setPlayer] = useState(playerData);
    const [cart,setCart] = useState([])
    // useEffect(()=> {
    //     // setPlayer(player);
    //     console.log(playerData)
    // },[])

    const addPlayer = (player) =>{
        const newCart = [...cart, player]
        setCart(newCart)
    }
    return (
        <div className="cart-container">
            <div className="cart-body">
            <h2> Creat Your dream Team  </h2>
            {
                 player.map(player=> <Player
                     player={player}
                     addPlayer={addPlayer}
                     ></Player>)
            }
            </div>
            <div className="site-cart">
                <AddPlayer cart={cart}></AddPlayer>
            </div>
           
        </div>
    );
};

export default Cart;