import React from 'react';
import homeStyles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={homeStyles.flexContainer}>
                <p className={homeStyles.homeText}> The school where kids learn, grow and prosper along with the nature </p>
                <iframe src="https://www.youtube.com/embed/EjE5N_1XC3o" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img className={homeStyles.wavyLine} src={process.env.PUBLIC_URL + "/wavyLine.svg"} alt="wavy line separator"></img>
        </>

    );
};

export default Home;