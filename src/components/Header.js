import React from 'react';
import { 
  Link
} from 'react-router-dom';

//this needs to be a class that has state
export default function Header() {
    //state should be user color choice
  return (
    <header>
      <nav>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/yellow">Yellow</Link>
        //link should go to this.state.color
        <Link to="/:color">Pick A Color</Link>
      </nav>
    </header>
  );
}
