import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { isAuthenticated, signout } from '../auth/helper';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';


function Navbar() {

    const user = isAuthenticated() && isAuthenticated().user;
    console.log(window.location.href)



    return (
        <div className="navbar__container">
            <div className="searchBar__container">
                <SearchOutlinedIcon />
                <input type="text" className="searchBar__input" placeholder="Find your songs here" />
            </div>
            <div className="navbar__right">
                <Link to={"/profile/" + user.id} style={{ textDecoration: "none" }} className="profile__image"><Avatar src={user.image} alt={user.name} style={{ backgroundColor: "transparent", color: "#000" }} /></Link>
                {isAuthenticated() && (
                    <li><span onClick={() => { signout() }}><Link to="/">SignOut</Link></span></li>
                )}
                {!isAuthenticated() && (
                    <li><Link to="signin/">SignIn</Link></li>
                )}
            </div>
        </div>
    )
}

export default Navbar
