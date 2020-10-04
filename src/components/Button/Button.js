import React from 'react'
import './Button.scss'

function Button(props) {
    return (
        <button className={props.style}>
            { props.value }
        </button>
    )
}

export default Button
