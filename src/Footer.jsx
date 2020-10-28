import React from 'react'
import Newsletter from './Newsletter'
import Connect from './Connect'
import './Footer.css'
function Footer(props) {
    return <div className='footer'>
        <Newsletter />
        <Connect />
    </div>

}

export default Footer