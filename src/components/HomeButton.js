import React from 'react'

const HomeButton = ({ homeClick }) => {
    return (
        <aside>
            <button onClick={homeClick}>Home</button>
        </aside>
    )
}

export default HomeButton