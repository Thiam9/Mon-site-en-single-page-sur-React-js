import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages: [
            {id:1, value:"Javascript", xp:1.9},
            {id:2, value:"CSS3", xp:1.7},
            {id:3, value:"HTML", xp:2},
            {id:4, value:"Node JS", xp:1.7},
            {id:5, value:"Mongo DB", xp:1.7}
        ],

        frameworks: [
            {id: 1, value:"React", xp:1.9},
            {id: 2, value:"Express JS", xp:1.9},
            {id: 3, value:"Bootstrap", xp:2},
            {id: 4, value:"Sass", xp:1.8},
            {id: 5, value:"Material UI", xp:1.4}
        ]
    }
    render() {
// Equivaut a this.state.language ou this.state.framework
        let {languages, frameworks} = this.state;

        return (
              <div className="languagesFrameworks">
                 <ProgressBar 
                     languages={languages}
                     className="languagesDisplay"
                     title="languages"
                 />
                 <ProgressBar
                 languages={frameworks}
                 title="frameworks & bibliothéque"
                 className="frameworksDisplay"
                  />
              </div>  
            
        );
    }
}
