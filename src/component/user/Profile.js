import React from 'react'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import DashboardBlocks from './DashboardBlocks';
import EditIcon from '@material-ui/icons/Edit';

function Profile() {

    const { name, image, gender, phone } = isAuthenticated() && isAuthenticated().user;

    return (
        <Base>
            <div className="profile">
                <div className="profile__container">
                    <div className="profile__image" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
                        <button className="editButton"><EditIcon style={{ fontSize: "50px", color: "#fff" }} /></button>
                    </div>

                    <div className="profile__details">
                        <h1>{name}</h1>
                        <h3>Gender : {gender}</h3>
                        <h3>Phone : {phone}</h3>
                    </div>
                </div>
                <DashboardBlocks title="Recently Played" />
            </div>

        </Base>
    )
}

export default Profile
