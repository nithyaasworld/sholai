import React from 'react';
import Info1Styles from './Info1.module.css';

const Info1 = () => {
    return (
        <div>
            <h1 className={Info1Styles.subHeaderText}>What is Sholai School, CLOAAT?</h1>
            <div className={Info1Styles.infoContainer}>
                <div className={Info1Styles.subTitleText}>
                    A Green School
                </div>
                <div className={Info1Styles.imageCardContainer}>
                    <img className={Info1Styles.cardImage} src={process.env.PUBLIC_URL + "/campus.png"} alt="Sholai School Campus"></img>
                    <p className={Info1Styles.cardText}>Sholai School campus is spread over 35 acres amongst a coffee estate having fruit trees and pepper 
                            vines and is bisected by a brook. It is set within the 100 acre grounds of the Centre for Learning, 
                            Organic Agriculture and Appropriate Technology (CLOAAT) which is entirely self-sufficient in energy and
                            practises, as much as possible, living sustainably and in harmony with its natural environment. 
                            The climate at 3,800 feet altitude is pleasant and cool all year round. Just 3 kms away from the
                            campus is virgin rainforest, where there are common sightings of Elephant, Gaur and other Wild Animals.</p>
                </div>
            </div>
        </div>
    );
};

export default Info1;