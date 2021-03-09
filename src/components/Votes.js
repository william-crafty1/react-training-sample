import React from 'react';
import './Votes.css';

function Votes(){

    return (
        <div className="Vote-container">
            <div className="Votes">
                <div className="Flavor">
                    <h6>Chocolate</h6>
                    <p>0</p>
                </div>
                <div className="Flavor">
                <h6>Vanilla</h6>
                    <p>0</p>
                </div>
                <div className="Flavor">
                <h6>Mint</h6>
                    <p>0</p>
                </div>
                <div className="Flavor-vote-buttons">
                    <button>Chocolate</button>
                    <button>Vanilla</button>
                    <button>Mint</button>
                </div>
            </div>
        </div>

    );
}

export default Votes;