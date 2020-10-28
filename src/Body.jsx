import React from 'react'
import Slider from './Slider'
import './Body.css'
import CardList from './CardList'
import Facker from 'faker'

const Body = () =>{
    return <div>
        <Slider 
            slider = {Facker.image.nightlife()}
        />
        <CardList />

    </div>
}

export default Body