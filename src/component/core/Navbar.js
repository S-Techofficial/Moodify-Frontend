import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ImageHelper  from './helper/ImageHelper';
import { isAuthenticated } from '../auth/helper';

function Navbar() {

    const user = isAuthenticated() && isAuthenticated().user;

    return (
        <div className="navbar__container">
            <div className="searchBar__container">
                <SearchOutlinedIcon />
                <input type="text" className="searchBar__input" placeholder="Find your songs here"/>
            </div>
            <ImageHelper element={user} />
        </div>
    )
}

export default Navbar
