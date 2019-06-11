import React from 'react';
//importing images
import one from "./images/about/one.jpg"
import two from "./images/about/two.jpg"
import three from "./images/about/three.jpg"

//importing info images
import info_1 from "./images/info/info_1.jpg"
import info_2 from "./images/info/info_2.jpg"
import info_3 from "./images/info/info_3.jpg"
import info_4 from "./images/info/info_4.jpg"

import './css/App.css';


const Header = ()=>(
    <header className="header">
        <div className="container">
            <div className="header__inner">
                {/*<div className="header__logotype">*/}

                {/*</div>*/}
                <div className="header__logo">
                    <h3 className="header__logo-first">Dart</h3>
                    <h3 className="header__logo-second">service manager</h3>
                </div>

                <nav className="nav">
                    <a className="nav__link" href="#">Home</a>
                    <a className="nav__link" href="#">Service</a>
                    <a className="nav__link" href="#">Extension</a>
                    <a className="nav__link" href="#">Pricing</a>
                    <a className="nav__link" href="#">Help</a>
                </nav>

                <a className="btn btn__sign-up" href="#">sign up</a>
            </div>

        </div>
    </header>
);

const Intro=()=>(
    <div className="intro">
        <div className="container">
            <div className="intro__inner">
                <div>
                    <h1 className="intro__title">lorem Ipsum<br/>
                        Dolor sit amet</h1>
                    <p className="intro__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamc
                    </p>
                    <button className="btn intro__btn" href="#">Buy now</button>
                    <button className="btn intro__btn" href="#">Try for free</button>
                </div>
                <div className="intro__video">
                    <div className="descr__video">
                        <button className="btn__video"/>
                        <div className="sign__video">
                            watch the video
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const FirstSection=()=>(
    <div className="section">
        <div className="container">
            <div className="section__header">
                <h2 className="section__title">Easy & Useful</h2>
                <h3 className="section__subtitle">Project Management Tool</h3>
                <div className="section__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>
            </div>

            <div className="about">
                <div className="about__item">
                    <div className="about__img">
                        <img src={one} alt=""/>
                    </div>
                    <h3 className="about__title">
                        Title Goes Here
                    </h3>
                    <div className="about__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                </div>
                <div className="about__item">
                    <div className="about__img">
                        <img src={two} alt=""/>
                    </div>
                    <h3 className="about__title">
                        Title Goes Here
                    </h3>
                    <div className="about__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="about__item">
                    <div className="about__img">
                        <img src={three} alt=""/>
                    </div>
                    <h3 className="about__title">
                        Title Goes Here
                    </h3>
                    <div className="about__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section__btn">
                <a className="btn__get-started" href={"#"}>Get Started</a>
            </div>
        </div>
        <div className="info">
            <div className="info__item">
                <div className="info__item-one">
                    {/*<div className="info__img">*/}
                    {/*    <img src={info_1} alt={""}/>*/}
                    {/*</div>*/}
                    <div className="info__titles">
                        <h4 className="info__title">12000+</h4>
                        <h4 className="info__title">Business</h4>
                    </div>
                </div>
            </div>
            <div className="info__item">
                <div className="info__item-two">
                    {/*<div className="info__img">*/}
                    {/*    <img src={info_2} alt={""}/>*/}
                    {/*</div>*/}
                    <div className="info__titles">
                        <h4 className="info__title">60000+
                        </h4>
                        <h4 className="info__title">Downloads</h4>
                    </div>
                </div>
            </div>
            <div className="info__item">
                <div className="info__item-three">
                    {/*<div className="info__img">*/}
                    {/*    <img src={info_3} alt={""}/>*/}
                    {/*</div>*/}
                    <div className="info__titles">
                        <h4 className="info__title">30000+
                        </h4>
                        <h4 className="info__title"> Free Installs</h4>
                    </div>
                </div>
            </div>
            <div className="info__item">
                <div className="info__item-four">
                    {/*<div className="info__img">*/}
                    {/*    <img src={info_4} alt={""}/>*/}
                    {/*</div>*/}
                    <div className="info__titles">
                        <h4 className="info__title">40000+
                        </h4>
                        <h4 className="info__title">Pro Users</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

const SecondSection=()=> (
        <div className="section">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">Contact Us</h2>
                    <div className="section__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna</p>
                    </div>
                </div>
                <div className="contacts__inputs">
                    <div className="contacts__form">
                        {/*<div className="contacts__form-box">*/}
                        <input className="contacts__form-input" placeholder="First Name"/>
                        {/*</div>*/}
                        <input className="contacts__form-input" placeholder="Last Name"/>
                    </div>
                    <div className="contacts__form">
                        <input className="contacts__form-input" placeholder="Email"/>
                        <input className="contacts__form-input" placeholder="Phone"/>
                    </div>
                    <div>
                        <textarea className="contacts__form-large" placeholder="Message"/>
                    </div>
                    <div className="contacts__send">
                        <label className="contacts__checkbox">
                            <input type="checkbox"/>
                            <div className="contacts__label">subscribe to the newsletter</div>
                        </label>
                        <div className="contacts__button">
                            <a className="btn__send" href="#">Send</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

const Footer=()=>(
    <div className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="header__logo">
                    <h3 className="header__logo-first">Dart</h3>
                    <h3 className="header__logo-second">service manager</h3>
                </div>

                <nav className="nav">
                    <a className="footer__nav__link" href="#">Home</a>
                    <a className="footer__nav__link" href="#">Service</a>
                    <a className="footer__nav__link" href="#">Extension</a>
                    <a className="footer__nav__link" href="#">Pricing</a>
                    <a className="footer__nav__link" href="#">Help</a>
                </nav>
            </div>
            <div className="footer__inner">
                <div className="footer__links">
                    <div className="footer__link">Privecy Policy</div>
                    <div className="footer__link">About us</div>
                    <div className="footer__link">About us</div>
                </div>
            </div>
        </div>
    </div>
);

export default ()=> {
    return (
        <div className="App">
            <Header/>
            <Intro/>
            <FirstSection/>
            <SecondSection/>
            <Footer/>
        </div>
    );
}

