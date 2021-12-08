import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Photos from './photos'

const Profile = ({ name }) => {
    return (
        <div>
            <Header name={name} photo="https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg" />
            <Photos photo="https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg" />
        </div>
    )
}

export default Profile

Profile.propTypes = {
    name: PropTypes.string.isRequired,
}
