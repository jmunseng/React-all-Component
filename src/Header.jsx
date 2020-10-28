import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Signin from './Signin'
import Facker from 'faker'

import './Header.css'

const Header = () =>{
    return <div className='header'>
        <Logo 
            url = 'ICrowdTask'
        />
        <Menu 
            m1 = 'How it works'
            m2 = 'Requesters'
            m3 = 'Workers'
            m4 = 'Pricing'
            m5 = 'About'
        />
        <Signin 
        />
    </div>
}

export default Header