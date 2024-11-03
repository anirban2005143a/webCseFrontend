import React from 'react'

const Alert = (props) => {
    
    return (
        <div id='alert'>
            <div className={`alert alert-${props.type} z-50 font-medium`} role="alert">
                {props.message}
            </div>
        </div>
    )
}

export default Alert