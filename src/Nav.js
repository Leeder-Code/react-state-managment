import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {

    const [movies] = useContext(MovieContext)

    return ( 
        <nav className="Nav">
            <h3>Mati</h3>
    <p>Lista filmów {movies.length}</p>
        </nav>
     );
}
 
export default Nav;