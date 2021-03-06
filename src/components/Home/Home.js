import React from 'react';
import Info1 from './components/Info1/Info1';
import Info2 from './components/Info2/Info2';
import Info3 from './components/Info3/Info3';
import Info4 from './components/Info4/Info4';
import homeStyles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={`${homeStyles.flexContainer} ${homeStyles.homeBG}`}>
                <p className={homeStyles.homeText}> The School where Children learn, grow and prosper along with the nature </p>
                <iframe src="https://www.youtube.com/embed/EjE5N_1XC3o" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img className={homeStyles.wavyLine} src={process.env.PUBLIC_URL + "/wavyLine.svg"} alt="wavy line separator"></img>
            <Info1 />
            <Info2 />
            <Info3 />
            <Info4 />
        </>
    );
};

export default Home;