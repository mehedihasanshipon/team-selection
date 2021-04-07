import React from 'react';
import './Team.css'

const Team = (props) => {     
    const singlePlayer = props.singlePlayer;
    const {name,salary,image} = singlePlayer;
    
    return (
        <div className="d-flex team-player">
            <img src={image} alt=""/>
            <div className ="team-player-info">
                <h4 className = "font"> {name} </h4> 
                <h6 >Salary: <span> {salary}</span> </h6> 
            </div>
        </div>
    );
};

export default Team;