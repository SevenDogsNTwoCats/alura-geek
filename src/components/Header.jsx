import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";

const Header = () => {

    const currentPath = window.location.pathname
    const screenWidth = window.innerWidth


    const [searchBarState, setsearchBarState] = useState(false)


    const viewSearchInput = ({loginButton, searchButton}) => {
        setsearchBarState(!searchBarState)
    }




    return <div className="header-container">
        <a href="/"><img src="./img/Logo.png" alt="" className="logo-header" /></a>
        {(!searchBarState && currentPath == '/' ) && <a href="/login" id='login-button' className="login-button button">
            <span>Login</span>
        </a>}
        <div className="search-bar-container">
            {searchBarState && <input id='seacrh-input' type="text" placeholder='Buscar una seccion' className="input-search" />}
            {(currentPath == '/') && <BsSearch className='button-search button' onClick={viewSearchInput} />}
        </div>
    </div>
}

export default Header