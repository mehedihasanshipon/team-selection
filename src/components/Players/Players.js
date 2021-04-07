import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Players = (props) => {
  const { name,image,salary,shirtnumber,position,age} = props.player;
  const handleAddClick = props.handleAddClick;
  return (
    <div className="container">
        <div className="player-info d-flex">
              <img src= {image} className="img-fluid" alt="" />
                <div className="player-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name : <span className ="b">{name}</span> </li>
                    <li className="list-group-item">Salary : <span className ="b"><FontAwesomeIcon icon={faDollarSign} /> {salary}</span></li>
                    <li className="list-group-item">Shirt-Number: <span className ="b">{shirtnumber}</span> </li>
                    <li className="list-group-item">Position : <span className ="b">{position}</span> </li>
                    <li className="list-group-item">Age : <span className ="b">{age}</span> </li>
                  </ul>
                  <div className = "text-center pt-3 ">
                    <button  onClick = {() => handleAddClick(props.player)} className="btn btn-danger button "><FontAwesomeIcon icon={faUserPlus} /><span className = "text-center"> Buy Player</span></button>
                  </div>
              </div>
          </div>
    </div>
  );
};

export default Players;
