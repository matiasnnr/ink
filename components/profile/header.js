import React from 'react'
import PropTypes from 'prop-types'
import Action from './action'

const Header = ({ name, photo }) => {
    return (
        <>
            <div className="w-full h-auto px-4 py-3 bottom-0 flex justify-center items-start">
                <img className="square-full rounded h-24 w-24 mr-2 mt-1 object-cover" src={photo} alt="profile photo" />
                <div className="max-w-xs text-left">
                    <h1 className="font-bold text-2xl leading-none pb-2 text-black">{name}</h1>
                    <p className="font-semibold text-base text-gray-500">@{name} sadsadsad sadsadas  asdsa fsa f saf sa</p>
                </div>
            </div>
            <div className="flex justify-evenly items-center">
                <Action title={'Contactar'} />
                <Action title={'Reservar'} />
            </div>
        </>
    )
}

export default Header

Header.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
}
