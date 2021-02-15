import React from 'react';
import Info1 from './components/Info1/Info1';
import Info2 from './components/Info2/Info2';
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
            <Info1 />
            <Info2 />
        </>
    );
};

export default Home;