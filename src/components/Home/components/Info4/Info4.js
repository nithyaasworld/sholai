import React from 'react';
import Info4Styles from './Info4.module.css';

const Info4 = () => {
    return (
        <div className={Info4Styles.container}>
            <div className={Info4Styles.highlights}>
                <h2>Some highlights of the school are-</h2>
                <p>100 acre campus situated in beautiful natural surroundings close to the Reserve Forest</p>
                <p>We are a Centre for the University of Cambridge International Examinations (IN 499) doing IGCSE ('O' levels) and 'A' levels</p>
                <p>Our students, ranging in age from 7 to 20 years, come from all over India: from Kanyakumari to Ladakh and some come from abroad</p>
                <p>Quality residential facilities for students aged 7-20 years</p>
                <p>Inspired by J. Krishnamurti. Hence we emphasise self-awareness and right relationships between the teachers and students</p>
                <p>A Student to Teacher ratio of 5:1</p>
                <p>18 kilometres from Kodaikanal</p>
            </div>
            <img className={Info4Styles.wavyLine} src={process.env.PUBLIC_URL + "/wavyLine2.svg"} alt="wavy line separator"></img>            
        </div>
    );
};

export default Info4;