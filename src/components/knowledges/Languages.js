import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "C", xp:2},
            {id: 2, value: "C++", xp:2},
            {id: 3, value: "Python", xp:2},
            {id: 4, value: "Css", xp:1},
            {id: 5, value: "JavaScript", xp:1.3},
        ],
        frameworks: [
            {id: 1, value: "React", xp:2},
            {id: 2, value: "Sass", xp:2},
            {id: 3, value: "SFML", xp:2},
            {id: 4, value: "NestJS", xp:1.5},
        ]
    }
    render() {
        let{languages, frameworks} = this.state;

        return (
            <div className='languagesLibraries'>
                <ProgressBar
                    languages={languages}
                    className='languagesDisplay'
                    title='Languages'
                />
                <ProgressBar
                    languages={frameworks}
                    className='frameworksDisplay'
                    title='Frameworks & Libraries'
                />
            </div>
        );
    }
}

export default Languages;