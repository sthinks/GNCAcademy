import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";

const Header = () => {
    return (
        <div className="container mx-auto py-8 max-sm:py-4">
            <div className='max-sm:flex max-sm:justify-center'>
                <Link to="/">
                    <img src={Logo} width={150} />
                </Link>
            </div>
        </div>
    )
}

export default Header