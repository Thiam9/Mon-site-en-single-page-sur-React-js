import React, { Component } from 'react'

export default class Project extends Component {
    state = {
        showInfo: false 
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }


 
    render() {
        let { info, picture } = this.props.item;

        return (
            <div className="project">
               
                <img src={picture} alt="" onClick={this.handleInfo} />
                <span className="infos" onClick={this.handleInfo}>
                    
                </span>
                {/* le modal d'appartion */}
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                {/* <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                    </div>
                                </div> */}

                                <p className="text">{info}</p>
                                <button type="button" className="btn btn-primary return" onClick={this.handleInfo}>Fermer</button>
{/* 
                                <div className="button return" onClick={this.handleInfo}>
                                    retourner
                               </div> */}
                            </div>
                        </div>  
                    )
                }
            </div>
        );
    }
}
