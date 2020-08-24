import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
           <div className="home">
            <Navigation />
            <div className = "homeContent">
                <div className ="content">   
                    <h1 className="myName"> Ibrahima Thiam</h1>
                    <h2> Développeur Full stack js / React js</h2>
                    
                    <div className="pdf">
                        <a href ="./media/C-V-Thiam-Ibrahima-2020.pdf" target="_blank">
                           Télécharger CV 
                        </a>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Home;