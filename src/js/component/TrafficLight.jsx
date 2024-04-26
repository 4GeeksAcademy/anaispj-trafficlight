import React, { useState, useEffect } from 'react';

export const TrafficLight = () => {
    const [color, setColor] = useState("");

    let colors = ['red', 'yellow', 'green'];
    
 // Esto era para intentar hacer lo del bonus pero me da que no va a ser posible!
    
    let alternateColor =  
    colors[Math.floor(Math.random() * colors.length)];
    

    // let alternateColor = colors.map((item) => {
    //     Math.random(item);
    // })
    
 
    return (
        <div className='container-fluid d-flex'>
            <div className="traffic-light">
                <div
                    onClick={() => setColor('red')}
                    className={'light red' + (color === 'red' ? ' glow-red' : '')}>
                </div>
                <div
                    onClick={() => setColor('yellow')}
                    className={'light yellow' + (color === 'yellow' ? ' glow-yellow' : '')}>
                </div>
                <div
                    onClick={() => setColor('green')}
                    className={'light green' + (color === 'green' ? ' glow-green' : '')}>
                </div>
            </div>
            <button type="button" className="btn btn-outline-secondary m-3">Alternate</button>
        </div>
    )
}