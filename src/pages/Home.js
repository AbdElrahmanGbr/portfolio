import {Link} from 'react-router-dom';
import HeroImg from '../assets/homepage/mobile/image-homepage-hero.jpg';
import HeroImgTablet from '../assets/homepage/tablet/image-homepage-hero.jpg';
import HeroImgDesktop from '../assets/homepage/desktop/image-homepage-hero.jpg';
import AboutImg from '../assets/homepage/mobile/image-homepage-profile.jpg';
import AboutImgTablet from '../assets/homepage/tablet/image-homepage-profile.jpg';
import AboutImgDesktop from '../assets/homepage/desktop/image-homepage-profile.jpg';
import StyleButton from '../assets/icons/down-arrows.svg';
import TalkComponent from '../components/TalkComponent/TalkComponent';


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
                            <h1 className="text-4xl ">
                                Hey, I’m Alex Spencer and I love building beautiful websites
                            </h1>
                            <div className="flex justify-start w-1/2 absolute bottom-0 left-0">
                                <img src={StyleButton} alt="Style button" className="bg-[#1D3445] p-3"/>
                                <div className="bg-[#203A4C]">
                                    <p>ABOUT ME</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col tablet:hidden">
                            <h1 className="text-4xl">
                                Hey, I’m Alex Spencer and I love building beautiful websites
                            </h1>
                            <div className="flex justify-start w-1/2 mt-3">
                                <img src={StyleButton} alt="Style button" className="bg-[#1D3445] p-3"/>
                                <div className="bg-[#203A4C]">
                                    <p>ABOUT ME</p>
                                </div>
                            </div>
                        </div>
                    </picture>
                </div>
            </section>

            <section>
                <div className="flex flex-col justify-between mt-10 tablet:flex-row">
                    <picture className="min-w-fit">
                        <source srcSet={AboutImgDesktop} media="(min-width: 1024px)"/>
                        <source srcSet={AboutImgTablet} media="(min-width: 768px)"/>
                        <img src={AboutImg} alt="My profile"/>
                    </picture>
                    <div className="self-center max-w-sm">
                        <div className="border"></div>
                        <div className="about-content-text">
                            <h2 className="middle-title">About Me</h2>
                            <p className="text">
                                I’m a junior front-end developer looking for a new role in an exciting company. I focus
                                on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
                                When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are
                                required. I’m based in London, UK, but I’m happy working remotely and have experience in
                                remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature
                                whether that’s going for a walk, run or cycling. I’d love you to check out my work.
                            </p>
                            <Link className="button button-white" to="/">GO TO PORTFOLIO</Link>
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