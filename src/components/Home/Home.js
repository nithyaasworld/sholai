import React from 'react';
import homeStyles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={`${homeStyles.flexContainer} ${homeStyles.homeBG}`}>
                <p className={homeStyles.homeText}> The School where kids learn, grow and prosper along with the nature </p>
                <iframe src="https://www.youtube.com/embed/EjE5N_1XC3o" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img className={homeStyles.wavyLine} src={process.env.PUBLIC_URL + "/wavyLine.svg"} alt="wavy line separator"></img>
            <div className={homeStyles.introCard}>
                <h1 className={homeStyles.subHeaderText}>What is Sholai School, CLOAAT?</h1>
                <div className={[homeStyles.flexContainer, homeStyles.twoCardsContainer].join(' ')}>
                    <p className={homeStyles.twoCardsText}>Sholai School campus is spread over 35 acres amongst a coffee estate having fruit trees and pepper 
                        vines and is bisected by a brook. It is set within the 100 acre grounds of the Centre for Learning, 
                        Organic Agriculture and Appropriate Technology (CLOAAT) which is entirely self-sufficient in energy and
                        practises, as much as possible, living sustainably and in harmony with its natural environment. 
                        The climate at 3,800 feet altitude is pleasant and cool all year round. Just 3 kms away from the
                        campus is virgin rainforest, where there are common sightings of Elephant, Gaur and other Wild Animals.</p>
                    <img className={homeStyles.twoCardsImage} src={process.env.PUBLIC_URL + "/campus.png"} alt="Sholai School Campus"></img>
                </div>

                <div className={[homeStyles.flexContainer, homeStyles.twoCardsContainer].join(' ')}>
                    <img className={homeStyles.twoCardsImage} src={process.env.PUBLIC_URL + "/bridgeCloserView.png"} alt="Bridge built by Sholai School Students"></img>
                    <p className={homeStyles.twoCardsText}>Sholai School follows a different approach to Education, inspired by the teachings
                     of J. Krishnamurti. This involves a focus on creating an atmosphere in which children are encouraged to enjoy learning 
                     and to grow to be mature and sensitive individuals. We follow a holistic approach to education, with attention to 
                     physical and emotional wellbeing in addition to intellectual development.</p>
                </div>
            </div>
            <div>
            </div>
    </>

    );
};

export default Home;