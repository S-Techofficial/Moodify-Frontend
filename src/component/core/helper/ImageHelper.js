import React from 'react'

export const ImageHelper = ({ element }) => {
    const imageURL = element ? element.image : 'https://images.unsplash.com/photo-1502447533750-9860c1269ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    return (
        <div className="profile">
            <img className="profile__image" src={imageURL} alt="profile" />
        </div>
    )
}

export default ImageHelper;