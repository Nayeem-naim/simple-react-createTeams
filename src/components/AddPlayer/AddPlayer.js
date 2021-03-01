import React from 'react';
import './AddPlayer.css'
const AddPlayer = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, player) => total + player.salary, 0);
    return (
        <div className="container">
            <h3>Selected  Player</h3>
            <p>Add Player :- {cart.length}</p>


            <div className="player-select">
                <h3>Selected Player Name List</h3>
                {
                    cart.map(ply => <h4>{ply.name}</h4>)
                }
            </div>
            <div className="cost-info">
                <h3>Total cost</h3>
                <p>Total Cost = {total}</p>
            </div>

        </div>
    );
};

export default AddPlayer;