import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Cart.css'
import playerData from "../../Fakedata/data.json";
import AddPlayer from '../AddPlayer/AddPlayer';


const Cart = () => {
 const [player, setPlayer] = useState([]);
  useEffect(()=>{
     setPlayer(playerData)
  },[])
    const [cart, setCart] = useState([])

    const addPlayer = (player) => {
        const newCart = [...cart, player]
        setCart(newCart)
    }
    return (
        <div className="cart-container">
            <div className="cart-body">
                <h2> Creat Your dream Team  </h2>
                {
                    player.map(player => <Player
                        player={player}
                        addPlayer={addPlayer}
                        key={player.id}
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