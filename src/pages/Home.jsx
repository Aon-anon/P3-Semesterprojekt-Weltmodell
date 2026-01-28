import React from 'react';
import { NavigationMenu } from "radix-ui";
import EmblaCarousel from '../components/EmblaCarouselWithout/EmblaCarousel.jsx';
import './home.css';
import '../components/EmblaCarouselWithout/embla.css';
import Youtube from '../assets/youtube.svg';
import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Home() {
  return (
    <div className="home-page">
        {/* The Home Page of Weltmodell is a scroller, the tool a seperate page, which I won't be coding as a part of this semster, therefore linking to the Figma Klickdummy instead */}

        {/* Navbar linking to different 5 sections in the scroller on the left and to the Tool Page on the right */}
        <NavigationMenu.Root className='navbar'>
            <NavigationMenu.List className='nav-list'>

                <NavigationMenu.Item className='nav-item'>
                    <NavigationMenu.Link href='#start'>
                        Start
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className='nav-item'>
                    <NavigationMenu.Link href='#weltmodell'>
                        Weltmodell
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className='nav-item'>
                    <NavigationMenu.Link href='#mitwirken'>
                        Mitwirkende
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className='nav-item'>
                    <NavigationMenu.Link href='#hintergrund'>
                        Hintergrund
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className='nav-item'>
                    <NavigationMenu.Link href='#workshop'>
                        Workshop
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                

            </NavigationMenu.List>
            <NavigationMenu.List className='nav-list'>
                <NavigationMenu.Item className='nav-item'>
                    <NavigationMenu.Link href='https://www.figma.com/proto/o986kbjMzKObptJd6ThiEa/Untitled?node-id=141-1499&t=QKkl1qIcJGfBSGGw-1&scaling=min-zoom&content-scaling=fixed&page-id=141%3A1497&starting-point-node-id=141%3A1499' >
                        Mitmachen
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>

        </NavigationMenu.Root>


        {/* HEADER with Title "Weltmodell Kollektiv-Mobilität" and subtitle "Mitfahren, Mitgestalten" */}
        <header id="start">
            <h1>Weltmodell <br /> Kollektiv-Mobilität</h1>
            <h2>Mitfahren, Mitgestalten</h2>
        </header>

        {/* ANIMATION */}
        {/* later adding a scroll animation of the Box coming into view and the header getting smaller */}
        {/* interactive visualization of the different possible tags of the Box */}
        {/* then the scroll animation continues with zooming out and building the vehicle around the Box
        zooming even farther and displaying the vehicle on a card with example tags */}

        {/* WELTMODELL */}    
        {/* example image of the Board of vehicles sorted by tags given by users */}
        <div id="weltmodell">
            <img
                src={`https://picsum.photos/900/600?v=999`}
                alt="Beispielbild des Weltmodells"
            />
        </div>
        {/* transforming the Board on scroll smaller in the middle */}
        
        {/* MITWIRKENDE */}
        {/* Text to each side of the Board about Weltmodell */}
        <div id="mitwirken">
            <div className="text-section">
                <p>
                    Das Weltmodell Kollektiv-Mobilität ist ein partizipatives Projekt, das darauf abzielt, die Mobilität der Zukunft durch gemeinschaftliches Engagement und kreative Gestaltung zu revolutionieren. 
                    Nutzer*innen sind eingeladen, ihre eigenen Fahrzeugmodelle zu entwerfen und hochzuladen, um eine vielfältige Sammlung von Ideen und Konzepten zu schaffen.
                </p>
                <p>
                    Durch die Nutzung von Tags können die Modelle kategorisiert und leicht zugänglich gemacht werden, was die Zusammenarbeit und den Austausch von Ideen fördert. 
                    Das Projekt zielt darauf ab, eine Plattform zu bieten, auf der Menschen ihre Visionen für nachhaltige und innovative Mobilitätslösungen teilen können.
                </p>
            </div>
            {/* a Map of the world with markers on all places from which a user uploaded a vehicle */}
            <img
                src={`https://picsum.photos/900/350?v=666`}
                alt="Weltkarte mit Mitwirkenden"
            />
        </div>
        
        {/* HINTERGRUND */}
        {/* 3 Cards: "Die Geschichte", "Das Tool", "Das Team" with information texts */}
        <div id="hintergrund">
            <div className="card">
                <h3>Die Geschichte</h3>
                <p>Informationen zur Entstehung des Projekts.</p>
            </div>
            <div className="card">
                <h3>Das Tool</h3>
                <p>Beschreibung des Tools zur Erstellung und Verwaltung der Fahrzeugmodelle.</p>
            </div>
            <div className="card">
                <h3>Das Team</h3>
                <p>Vorstellung des Teams hinter dem Projekt.</p>
            </div>
        </div>
        
        {/* WORKSHOP */}
        {/* Card "Der Workshop" on the left and a Card with the Video of the Workshop on the right */}
        <div id="workshop">
            <div className='overview'>
                <div className="card">
                    <h3>Der Workshop</h3>
                    <p>Details zum Workshop, der Zusammenarbeit mit dem Futurium und dem Ablauf vor Ort.</p>
                </div>
                <div className="video-card">
                    {/* Video about the Workshop, hosted locally in the assets folder */}
                    <video width="100%" height="100%" controls>
                        <source src="/assets/workshop_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        {/* Card Carousel with pictures of the lego models on the left, a text about the group and a photo of them on the right */}
            <div className="carousel">
                {/* Implement a simple carousel here */}
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                <div className="group-info">
                    <p>Informationen über die Gruppe, die am Workshop teilgenommen hat.</p>
                    <p className='groupnames'>Mika, Robin & Alex</p>
                    <img
                        src={`https://picsum.photos/150/150?v=333`}
                        alt="Foto der Workshop-Gruppe"
                    />
                </div>
            </div>
        </div>

        {/* Footer with links to Imprint, Privacy Policy, Contact and Social Media opening in a new tab */}
        <footer>
            <NavigationMenu.Root>
                <NavigationMenu.List>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link href='/imprint' target="_blank">
                            Imprint
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link href='/privacy' target="_blank">
                            Privacy Policy
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link href='/contact' target="_blank">
                            Contact
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                </NavigationMenu.List>
                <NavigationMenu.List className='social'>

                    {/* Social Media links to Youtube, Instagram and Linkedin with the icons from lucide */}
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href='https://www.youtube.com/@weltmodellkollektivmobilitaet' target="_blank" className='youtube'>
                            <img src={Youtube} alt="YouTube" />
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link href='https://www.instagram.com/weltmodell_kollektiv_mobilitaet/' target="_blank" className='insta'>
                            <img src={Instagram} alt="Instagram" />
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link href='https://www.linkedin.com/company/weltmodell-kollektiv-mobilit%C3%A4t/' target="_blank" className='linkedin'>
                            <img src={Linkedin} alt="LinkedIn" />
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                </NavigationMenu.List>

            </NavigationMenu.Root>
        </footer>

    </div>
  );
}

export default Home;