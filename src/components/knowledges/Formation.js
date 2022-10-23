import React from 'react';

const Formation = () => {
    return (
        <div className='formations'>
            <h3>Formations</h3>
            <ul>
                <li className='Bac'>
                    <i className='fas fa-child'></i>
                    <span>Baccalauréat Scientifique Science de L'ingénieur</span>
                    <h4>Lycée Jaufré Rudel à Blaye</h4>
                </li>
                <li className='Supérieur'>
                    <i className="fas fa-school"></i>
                    <span>Expert en Technologies de l'information à Epitech (titre RNCP niveau 1, en 3ème année)</span>
                    <h4>Projets C++ + Graphiques:</h4>
                    <h5>- Jeux de type Arcade
                        - Jeu de type Bomberman
                    </h5>
                    <h4>Projet Python:</h4>
                    <h5>- Algorithmes de tri</h5>
                    <h4>Projet C:</h4>
                    <h5>- Simulation d'un champ de bataille en temps réel</h5>
                </li>
            </ul>
        </div>
    );
};

export default Formation;