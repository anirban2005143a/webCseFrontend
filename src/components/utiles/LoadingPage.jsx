import React from 'react'

const LoadingPage = () => {
    return (
        <div id='loading' className=' fixed w-[100vw] h-[100vh] flex justify-center items-center'>
            <div className="spinner-border font-semibold text-blue-800 w-20 h-20" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
}

export default LoadingPage