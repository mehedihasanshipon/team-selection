import { useEffect, useState } from 'react';
import fakedata from './fakedata/data.json'
import Players from './components/Players/Players';
import Team from './components/Team/Team';
import './App.css'
import Header from './components/Header/Header';

function App() {
  // state for All players
  const [players,setPlayer] = useState([]);
  // state for Single players
  const [singlePlayers,setSinglePlayer] = useState([]);
  // Fetch fake data from json
  useEffect(() => {
    setPlayer(fakedata);
  },[])

  // Add button function
  const handleAddClick = (player)=> {
      if(singlePlayers.indexOf(player) === -1){
        const newPlayer = [...singlePlayers,player];
        setSinglePlayer(newPlayer)
      }
  }
  // Total budget count
  const totalSalary = singlePlayers.reduce((sum,player) => sum + player.salary ,0);
  return (
     <div>
       {/* Header Component */}
      <Header />
      <div className="container mt-5">
      <div className = "row g-5">
        {/* Players information component */}
        
          <div className = "col-md-8 divider">
            <h4 className = "text-center">All Players</h4>
                {
                  players.map(player => <Players handleAddClick = {handleAddClick} player = {player} key={player.id} /> )
                }
        </div>
        {/* End Players information component */}
         {/* Selected Players information and budget component */}
        
          <div className = "col-md-3">
          <h3 className="text-center counter">Barcelona Squad</h3>
            <div className = "mt-5 count-section">
              <h4>Player added : <span className = "counter">{singlePlayers.length}</span></h4>
              <h4>Total Budget :  <span className = "counter">{totalSalary}</span></h4>
            </div>
            <h5 className='text-center mt-3'>Squad list</h5>
            {
              singlePlayers.map(singlePlayer => <Team singlePlayer = {singlePlayer} key={singlePlayer.id} /> )
            }
          </div>
          {/* End Selected Players information and budget component */}
      </div>
    </div>
    </div>
  );
}

export default App;
