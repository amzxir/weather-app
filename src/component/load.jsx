import React from 'react';

export default function Load() {
    return (
        <div className="application" style={{ display:"flex" , alignItems:"center" }}>
            <div style={{ padding: "1rem" }}>
                <div className="img-center">
                    <img src="image/waiting.png" width={100} height={100} alt="" />
                </div>
                <p style={{ marginTop:"1rem" , fontFamily:"system-ui" , lineHeight:"25px" }}>Wait for a few moments, if your exact location is not determined, turn on your vpn breaker</p>
            </div>
        </div>
    )
}
