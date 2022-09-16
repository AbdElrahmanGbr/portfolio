import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import HeroImg from '../assets/homepage/mobile/image-homepage-hero@2x.jpg';
import HeroImgTablet from '../assets/homepage/tablet/image-homepage-hero@2x.jpg';
import HeroImgDesktop from '../assets/homepage/desktop/image-homepage-hero@2x.jpg';
import AboutImg from '../assets/homepage/mobile/image-homepage-profile@2x.jpg';
import AboutImgTablet from '../assets/homepage/tablet/image-homepage-profile@2x.jpg';
import AboutImgDesktop from '../assets/homepage/desktop/image-homepage-profile@2x.jpg';
import StyleButton from '../assets/icons/down-arrows.svg';
import TalkComponent from '../components/TalkComponent';


const Home = () => {
    return (
        <main className="m-auto w-full flex flex-col justify-center">
            <section>
                <div>
                    <picture className="relative">
                        <source srcSet={HeroImgDesktop} media="(min-width: 1024px)"/>
                        <source srcSet={HeroImgTablet} media="(min-width: 768px)"/>
                        <img src={HeroImg} alt="Website in creation" className="w-full"/>
                        <div
                            className="tablet:block hidden absolute bottom-0 left-0 bg-white h-80 max-w-md pt-14 pr-14">
                            <h1 className="text-4xl middle-title">
                                Hey, I’m Alex Spencer and I love building beautiful websites
                            </h1>
                            <HashLink smooth to="#about" className="group aboutMeContainer">
                                    <img src={StyleButton} alt="Style button" className="aboutMeBtn group-hover:bg-[#56A292]"/>
                                    <p className="px-7 group-hover:bg-formBtnBg-notDisabled-hover group-hover:italic">
                                        ABOUT ME
                                </p>
                            </HashLink>
                        </div>

                        <div className="flex flex-col tablet:hidden">
                            <h1 className="text-4xl middle-title">
                                Hey, I’m Alex Spencer and I love building beautiful websites
                            </h1>
                            <div className="group aboutMeContainer">
                                <img src={StyleButton} alt="Style button" className="aboutMeBtn group-hover:bg-[#56A292]"/>
                                <p className="px-7 group-hover:bg-formBtnBg-notDisabled-hover group-hover:italic">
                                    ABOUT ME
                                </p>
                            </div>
                        </div>
                    </picture>
                </div>
            </section>

            <section id="about">
                <div className="flex flex-col justify-between mt-10 tablet:flex-row">
                    <picture className="w-full tablet:w-1/2 md:w-full max-h-[540px]">
                        <source srcSet={AboutImgDesktop} media="(min-width: 1024px)"/>
                        <source srcSet={AboutImgTablet} media="(min-width: 768px)"/>
                        <img className="max-h-[540px] min-w-[300px]" src={AboutImg} alt="My profile"/>
                    </picture>
                    <div className="self-center max-w-sm text-blue-magenta">
                        <div className="border mb-11"></div>
                        <div className="about-content-text my-10">
                            <h2 className="middle-title">About Me</h2>
                            <p className="leading-8 my-5">
                                I’m a junior front-end developer looking for a new role in an exciting company. I focus
                                on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
                                When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are
                                required. I’m based in London, UK, but I’m happy working remotely and have experience in
                                remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature
                                whether that’s going for a walk, run or cycling. I’d love you to check out my work.
                            </p>
                            <Link className="portfolioBtn" to="/portfolio">GO TO PORTFOLIO</Link>
                        </div>
                        <div className="border"></div>
                    </div>
                </div>
            </section>
            <TalkComponent/>
        </main>
    );
}

export default Home;