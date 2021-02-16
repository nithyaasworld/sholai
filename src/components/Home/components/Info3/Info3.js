import React from 'react';
import Info3Styles from './Info3.module.css';

const Info3 = () => {
    const backgroundImage = `${process.env.PUBLIC_URL}/TransparentBG3.png`;
    return (
        <div className={Info3Styles.parallax} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={Info3Styles.container + ' ' + Info3Styles.transparentBG}>
                <div className={Info3Styles.card}>
                    <h4>We teach the usual range of academic subjects, but with a fresh appraisal for each subject:
                    <ul>
                        <li>English Language and Literature</li>
                        <li>Mathematics</li>
                        <li>Physics, Chemistry and Biology</li>
                        <li>Hindi and Tamil,</li>
                        <li>Development Studies and Environmental Studies</li>
                        <li>Sociology and Psychology</li>
                        <li>Global Perspectives</li>
                    </ul>
                    </h4>
                </div>
                <div className={Info3Styles.card}>
                    <h4>Children also need hands-on experiences to confirm and support their theoretical knowledge. So we also teach Organic Farming, Food and Nutrition, Woodwork and Practical Engineering.</h4>
                    <h4>To understand themselves and to grow psychologically, young people also benefit from Theatre Workshop, Art, Music and Yoga. On almost every evening, the students and staff play football, badminton or swimming. Some students and staff also do cross-country running. Our focus is on exercising the body without undue stress. We do not encourage competitive sports.</h4>
                </div>
                <div className={Info3Styles.card}>
                    <h4>Our use of Appropriate Technologies (Solar, Micro-hydro and Bio-gas), Water Harvesting practices, Watershed Management and Organic Farming provide the students with an opportunity to learn in these crucial areas of Sustainability and Future Life Skills. Since the students are involved in the use and maintenance of these technologies effortlessly, they have become adept in understanding them. They are also testimony to Sholai School's commitment to integrating and balancing educational and environmental concerns.</h4>
                </div>
            </div>
        </div>
    );
};

export default Info3;