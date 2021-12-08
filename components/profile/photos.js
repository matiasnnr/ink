import React from 'react'
import PropTypes from 'prop-types'

const Photos = ({ photo }) => {
    return (
        <div className="px-2">
            <h2 className="font-bold text-lg pb-1">Últimos trabajos</h2>
            <div className="w-full grid grid-cols-3 grid-flow-row gap-2 justify-items-center">
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
                <img className="h-32 w-full object-cover" src={photo} alt="profile photo" />
            </div>
        </div>
    )
}

export default Photos

Photos.propTypes = {
    photo: PropTypes.string.isRequired,
}