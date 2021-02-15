import React from 'react';
import Info2Styles from './Info2.module.css';

const Info2 = () => {
    return (
        <div className={`${Info2Styles.infoContainer} ${Info2Styles.greenBG}`}>
            <div className={Info2Styles.imageCardContainer}>
                <img className={Info2Styles.cardImage} src={process.env.PUBLIC_URL + "/studyCollage.jpg"} alt="Sholai School Campus"></img>
                <p className={Info2Styles.cardText}>Sholai School follows a different approach to Education, inspired 
                by the teachings of J. Krishnamurti. This involves a focus on creating an atmosphere in which children are 
                encouraged to enjoy learning and to grow to be mature and sensitive individuals. We follow a holistic approach 
                to education, with attention to physical and emotional wellbeing in addition to intellectual development.</p>
            </div>
            <div className={Info2Styles.subTitleText}>
                A different approach to education
            </div>
        </div>
    );
};

export default Info2;