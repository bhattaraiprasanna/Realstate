import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';

import "./Hero.css"
import CountUp from 'react-countup';
const Hero = () => {
  return (
    <section className="hero-wrap">
        <div className="paddings innerWidth flexCenter hero-container ">
{/*left side*/}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        DISCOVER <br/>MOST SUITABLE <br/>PROPERTY
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="flexCenter search-bar">
                    <FaLocationArrow color="var(--blue)" size={25} />

                    <input type='text'/>
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp className='count' start={8800} end={9000} duration={5}/>
                            <span className='orange'>++</span><br/>
                            Premium Products
                        </span>
                    </div>

               
                    <div className="flexColStart stat">
                        <span>
                            <CountUp className='count' start={1950} end={2000} duration={5}/>
                            <span className='orange'>++</span><br/>
                            Happy Customer
                        </span>
                    </div>
              

                    <div className="flexColStart stat">
                        <span>
                            <CountUp className='count' end={28} />
                            <span className='orange'>+</span><br/>
                            Awards
                        </span>
                    </div>
                </div>
            </div>

{/*right side*/}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
