import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent myphoto">
                    <img src="./media/thiam.jpg" alt="profil" />
                    <h3>Ibrahima Thiam</h3>
                </div>  
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                        <i className="fas fa-balance-scale"></i>
                            <span>Competences</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                        <i className="fas fa-warehouse"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                        <i className="fas fa-user-friends"></i>
                            <span>Team</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/ibrahima-thiam-047b0314b/" target="_blank" rel="noopener noreferrer">  <i className="fab fa-linkedin linkedin"></i> </a>
                    </li>

                    <li>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">  <i className="fab fa-github github"></i> </a>
                    </li>
                    
                    <li>
                        <a href="https://codepen.io/thiam9" target="_blank" rel="noopener noreferrer">  <i className="fab fa-codepen codepen"></i> </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>CopyRigth Ibrahima Thiam</p>
                </div>
            </div>


            </div>
    );
};

export default Navigation;