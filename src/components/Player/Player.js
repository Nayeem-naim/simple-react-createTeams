import React from 'react';
import {  } from "./Player.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props);
    const{name, email, salary ,img} = props.player;
    return (
        <div className="player-container">

            <div className="player-img">
                <img src={img} alt=""/>
            </div>

            <div className="player-body">
                <h3>Player Name :- {name}</h3>
                <p><small>Email:-{email}</small></p>
                <p>Salary:-{salary}</p>
                <button onClick={()=> props.addPlayer(props.player)}> <FontAwesomeIcon icon={faUserPlus} />Add Player</button>
            </div>
            
            
        </div>
    );
};

export default Player;