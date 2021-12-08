import React from 'react'
import PropTypes from 'prop-types'
import UserProfileDropdown from './userProfileDropdown'

const Navigation = ({ name, photo }) => {
    return (
        <div className="w-full h-16 flex justify-evenly items-center border-b-2 border-gray-200">
            <div className="w-full max-w-screen-lg h-full flex justify-between items-center bg-gray-200 px-5">
                <div className="text-gray-700 text-center flex items-center align-items
                    cursor-pointer">
                    <h1 className="flex justify-center w-full font-bold text-2xl">
                        Tattoo Ink
                    </h1>
                </div>
                <UserProfileDropdown name={name} photo={photo} />
            </div>
        </div>
    )
}

export default Navigation

Navigation.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
}