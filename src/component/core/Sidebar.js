import React, { useEffect, useState } from 'react'
import Logo from './Logo';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import { getCategories, getPlaylists } from './helper/coreapicalls';
import crown from '../../crown.png';
import SidebarOption from './SidebarOption';
import { Link, withRouter } from 'react-router-dom'


const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#000" }
    } else {
        return { color: "gray" }
    }
}



function Sidebar({ history }) {


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
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        loadCategories()
        loadPlaylists()
    }, [])



    return (
        <div className="sidebar__container">
            <Logo />
            <Link style={currentTab(history, "/user/dashboard")} to="/user/dashboard"><SidebarOption Icon={HomeOutlinedIcon} title="Home" /></Link>
            <Link style={currentTab(history, "/browse")} to="/browse"><SidebarOption Icon={FolderOpenOutlinedIcon} title="Browse" /></Link>

            <div class="library__option">
                <h3>YOUR LIBRARY</h3>
                {categories.map(category => (
                    <Link style={currentTab(history, `category/${category.id}`)} to={`/category/${category.id}`}><SidebarOption title={category.name} /></Link>
                ))}
            </div>

            <div class="library__option">
                <h3>CUSTOM PLAYLISTS</h3>
                {playlists.map(playlist => (
                    <Link style={currentTab(history, `playlist/${playlist.id}`)} to={'/playlist/' + playlist.id}><SidebarOption title={playlist.name} /></Link>
                ))}
            </div>

            <button className="btn getPremium__button">
                <h3>Get Premium</h3>
                <img src={crown} alt="crown-img" />
            </button>

        </div>
    )
}

export default withRouter(Sidebar)
