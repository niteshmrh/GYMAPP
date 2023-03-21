import React from 'react';
import Header from './Header';
import "./Hero.css";
import heart from "../assets/heart.png"
import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import calories from "../assets/calories.png"


function Hero(props) {
    return (
        <div>
            <div className='hero'>
                <div className="hero-left">
                    <Header/>
                    <div className='the-best-ad'>
                        <div></div>
                        <span>The Best Fitness Club in the Town</span>
                    </div>
                    <div className='hero-text'>
                        <div>
                            <span className='stroke-text'>Shape</span>
                            <span> Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div>
                            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                        </div>
                    </div>
                    <div className='figure'>
                        <div className='figure-out'>
                            <span>+140</span>
                            <span>EXPERT COACHES</span>
                        </div>
                        <div className='figure-out'>
                            <span>+987</span>
                            <span>MEMBERS JOINED</span>
                        </div>
                        <div className='figure-out'>
                            <span>+50</span>
                            <span>FITNESS PROGRAMS</span>
                        </div>
                    </div>
                    <div className='hero-button'>
                        <button className='btn'>Get Started</button>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
                <div className='hero-right'>
                    <button className='btn'>Join Now</button>
                    <div className='heart-rate'>
                        <img src={heart} alt=""/>
                        <span>Heart Rate</span>
                        <span> 116 bpm </span>
                    </div>
                    <img src={hero_image} alt="" className='hero-image'/>
                    <img src={hero_image_back} alt="" className='hero-image-back'/>

                    <div className='calories'>
                        <img src={calories} alt="" />
                        <div>
                            <span>calories burned</span>
                            <span>220 kcal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;