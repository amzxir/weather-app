import React from 'react';

export default function Body() {
    return (
        <div className="body">
            <div className="img-center">
                <img src="/image/day.png" alt="" />
            </div>
            <div className="content mt-4">
                <p className="name-city">thunderstorm</p>
                <p className="degree">24°</p>
            </div>
        </div>
    )
}
