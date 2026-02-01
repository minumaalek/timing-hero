import React from 'react'

function SmallCard({ children, title }) {
    return (
        <div className="w-3/4 md:w-1/6 h-5/6 flex flex-col items-center justify-center shadow-light">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default SmallCard