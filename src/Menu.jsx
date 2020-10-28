import React from 'react'

const Menu = (props) =>{
    return <div className='menu' >
        <ul>
            <li>{props.m1}</li>
            <li>{props.m2}</li>
            <li>{props.m3} </li>
            <li> {props.m4}</li>
            <li>{props.m5} </li>
        </ul>
    </div>
}

export default Menu