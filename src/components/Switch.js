import React, { useState } from 'react';
import './Switch.css';

function Switch(){
    const [switchOption, setSwitch] = useState(false);

    function switchOn(){
        setSwitch(true);
    }
    function switchOff(){
        setSwitch(false);
    }
    const text = switchOption ? "On" : "Off";
    const cssClass = switchOption ? "Switch Switch---on" : "Switch Switch---off"

    return (
        <div className="Switch-Container">
            <div className={cssClass}>
            <h3><strong>Switch</strong></h3>
            <p>{text}</p>
            <p>
                <button onClick={switchOn} className="switch-button">On</button>
                <button onClick={switchOff} className="switch-button">Off</button>
            </p>
        </div>
        </div>

    );
}

export default Switch;