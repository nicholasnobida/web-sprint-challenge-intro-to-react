// Write your Character component here
import React from 'react';

const Character = props => {
    const {charProps} = props;
    const charObj = Object.values(charProps)
    console.log(charObj)
    return (
        <div>
            <div>
                {/* {charObj.map((item, index) => {
                    <p key={index}>{item.name} is of the {item.species} species.</p>
                })} */}
            </div>
        </div>
    )
}

export default Character;   