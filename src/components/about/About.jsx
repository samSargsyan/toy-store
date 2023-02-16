import React from "react";
import "./about.scss";
import toy from '../../assets/images/toyMaker.jpg'

const About = () => {
    return(
        <div className="aboutDiv">
            <img src={toy} width="500px" height=""/>
            <div className='aboutDescription'>
                <span>About 1.6 billion toys are made in a year.</span>
                <span>The insides of the toys are made with a soft cotton that is long lasting and very comftorable. </span>
                <span>In our Toy factory we have over 200+ workers. Each one of the workers have one job that they mainly focus on.</span>
                <p>Each of our toys will hve different types of names, styles and birthday dates. Our workers have at least 3 years worth of training.</p>

            </div>
        </div>
    )
}
export default About;