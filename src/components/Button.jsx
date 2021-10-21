import React from 'react'
import '../styles/button.scss'

import addIcon from '../images/add.svg'

function Button({ type }) {
    return (
        <div className={`button add-${type}`}>
            <img src={addIcon} alt="add task" />
        </div>
    )
}

export default Button
