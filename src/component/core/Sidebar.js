import React, { useEffect, useState } from 'react'
import Logo from './Logo';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import { getCategories, getPlaylists } from './helper/coreapicalls';
import crown from '../../crown.png';
import { isAuthenticated } from '../auth/helper';

function Sidebar() {


    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setCategories(data)
            }
        }).catch(err => console.log(err))
    }

    const loadPlaylists = () => {
        getPlaylists().then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setPlaylists(data)
                console.log(data)
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        loadCategories()
        loadPlaylists()
    },[])

    return (
        <div className="sidebar__container">
            <Logo />
            <div className="title__option">
                <HomeOutlinedIcon />
                <h2>Home</h2>
            </div>
            <div className="title__option">
                <FolderOpenOutlinedIcon />
                <h2>Browse</h2>
            </div>

            <div class="library__option">
                <h3>YOUR LIBRARY</h3>
                {categories.map((category, index) => {
                    return (
                        <li key={index}>{category.name}</li>
                    )
                })}
            </div>

            <div class="library__option">
                <h3>CUSTOM PLAYLISTS</h3>
                {playlists.map((playlist, index) => {
                    return (
                        <li key={index}>{playlist.name}</li>
                    )
                })}
            </div>

            <button className="btn getPremium__button">
                <h3>Get Premium</h3>
                <img src={crown} alt="crown-img" />
            </button>

        </div>
    )
}

export default Sidebar
