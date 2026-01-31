import React from 'react'

function BigCard({ icon, title, details }) {
    return (
        <div className="h-60 w-64 blue1 flex flex-col items-center gap-1">
            <div className=" w-20 h-20 blue2 m-8 rounded-full flex items-center justify-center">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>
                {details}
            </p>
        </div>
    )
}

export default BigCard