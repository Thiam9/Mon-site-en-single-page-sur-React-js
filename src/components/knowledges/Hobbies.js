import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
        <h3>Intérêt</h3>
            <ul>
                <li className="hobby">
                <i className="fas fa-running"></i>
                <span>Course à pied</span>
                </li>
                <li className="hobby">
                <i className="fas fa-film"></i>
                <span>Cinéma</span>
                </li>
                <li className="hobby">
                <i className="fas fa-gamepad"></i>
                <span>Jeux vidéo</span>
                </li>
                <li className="hobby">
                <i className="fas fa-plane"></i>
               <span>voyage</span>
                </li>
                <li className="hobby">
                <i className="fab fa-bitcoin"></i>
               <span>Crypto-monnaies</span>
                </li>
                
            </ul>
        </div>
        
    );
};

export default Hobbies;