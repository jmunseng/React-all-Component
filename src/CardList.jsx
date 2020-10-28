import React from 'react'
// import './CardList.css'
import Card from './Card'

import staffList from './staffList'


// function cardComponent(staff, i) {
//     return (<Card
//         key={staff.key}
//         avatar={staff.avatar}
//         name={staff.name}
//         position={staff.position}
//     />)
// }
const CardList = () => {
    return (
        <div className="row">
            {staffList.map( (staff ) => 
                 <Card
                    key={staff.key}
                    avatar={staff.avatar}
                    name={staff.name}
                    position={staff.position}
                />
            )}
        </div>

    )
}
export default CardList