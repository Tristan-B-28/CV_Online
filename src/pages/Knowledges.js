import React from 'react';
import Experience from '../components/knowledges/Experience';
import Formation from '../components/knowledges/Formation';
import Languages from '../components/knowledges/Languages';
import OtherSkills from '../components/knowledges/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation />
            <div className='knowledgesContent'>
                <Languages />
                <Experience />
                <Formation />
                <OtherSkills />
            </div>
        </div>
    );
};

export default Knowledges;