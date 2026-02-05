import React from 'react';
import { useState, useEffect } from 'react';
import { NavigationMenu } from "radix-ui";
import { Footprints, Bike, Car, Bus, Sailboat, Plane, CableCar, Scooter, Box, X } from 'lucide-react';
import Board from '../components/Board/Board.jsx';
import { Maximize, Earth, Map, Zap, Users, Timer } from 'lucide-react';
import EmblaCarousel from '../components/EmblaCarouselWithout/EmblaCarousel.jsx';
import './home.css';
import '../components/EmblaCarouselWithout/embla.css';
import { Separator, Popover } from "radix-ui";

const figmaUrl =
  'https://www.figma.com/proto/o986kbjMzKObptJd6ThiEa/Untitled?node-id=141-1499&t=W4OxEt10S9FsnVdI-1&scaling=contain&content-scaling=fixed&page-id=141%3A1497&starting-point-node-id=141%3A1499';


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Home() {

    const [activeSection, setActiveSection] = useState("start");

    useEffect(() => {
        const ids = ["start", "weltmodell-board", "workshop"];
        const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                // entries fire in batches; pick the one that is intersecting and closest to top
                const intersecting = entries.filter((e) => e.isIntersecting);
                if (!intersecting.length) return;

                // choose the one whose top is closest to the top of viewport (smallest abs value)
                const best = intersecting.sort(
                    (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
                )[0];

                setActiveSection(best.target.id);
            },
        {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

    const [board, setBoard] = useState(1)

    const [leaveOpen, setLeaveOpen] = useState(false);

  return (
    <>
    {/* Navbar linking to different 5 sections in the scroller on the left and to the Tool Page on the right */}
        <NavigationMenu.Root className='navbar'>
            <NavigationMenu.List className='nav-list'>

                <NavigationMenu.Item className={`nav-item ${activeSection === "start" ? "is-active" : ""}`} >
                    <NavigationMenu.Link href='#start'>
                        Weltmodell
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className={`nav-item ${activeSection === "weltmodell-board" ? "is-active" : ""}`} >
                    <NavigationMenu.Link href='#weltmodell-board'>
                        Sammlung
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className={`nav-item ${activeSection === "workshop" ? "is-active" : ""}`} >
                    <NavigationMenu.Link href='#workshop'>
                        Workshop
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                

            </NavigationMenu.List>
            <NavigationMenu.List className='nav-list'>
                <NavigationMenu.Item className='nav-button'>
                    <NavigationMenu.Link className='btn-primary' href={figmaUrl} target='_blank' rel='noopener noreferrer' onClick={(e) => { e.preventDefault(); setLeaveOpen(true); }} >
                        Mitmachen
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>

        </NavigationMenu.Root>

        {leaveOpen && (
        <div className="leave-overlay" onClick={() => setLeaveOpen(false)}>
          <div className="leave-modal" onClick={(e) => e.stopPropagation()}>
            <h4>Du verlässt jetzt diese Seite</h4>
            <p>
              Der Prototyp öffnet sich in Figma in einem neuen Tab. Falls du nichts siehst,
              nutze im Figma-Viewer oben rechts die Optionen wie <b>Fit width</b> oder <b>Fullscreen</b>.
            </p>

            <div className="leave-actions">
              <button className="btn-secondary" onClick={() => setLeaveOpen(false)}>
                Abbrechen
              </button>

              <a
                className="btn-primary"
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setLeaveOpen(false)}
              >
                Weiter zu Figma
              </a>
            </div>
          </div>
        </div>
      )}

    <div className="home-page">
        {/* The Home Page of Weltmodell is a scroller, the tool a seperate page, which I won't be coding as a part of this semster, therefore linking to the Figma Klickdummy instead */}

        


        {/* HEADER with Title "Weltmodell Kollektiv-Mobilität" and subtitle "Mitfahren, Mitgestalten" */}
        <section id='start' className="scroll-section">
            <div className='intro'>
                <p>Wie wollen wir uns fortbewegen?</p>
                <div className='row'>
                    <Footprints color='#14B9B2' size={32} aria-label='Footprints Icon' className='inspo-icon' />
                    <Bike color='#71F2ED' size={32} aria-label='Bike Icon' className='inspo-icon' />
                    <Car color='#14B9B2' size={32} aria-label='Car Icon' className='inspo-icon' />
                    <Bus color='#71F2ED' size={32} aria-label='Bus Icon' className='inspo-icon' />
                    <Sailboat color='#14B9B2' size={32} aria-label='Sailboat Icon' className='inspo-icon' />
                    <Plane color='#71F2ED' size={32} aria-label='Plane Icon' className='inspo-icon' />
                    <CableCar color='#14B9B2' size={32} aria-label='CableCar Icon' className='inspo-icon' />
                    <Scooter color='#71F2ED' size={32} aria-label='Scooter Icon' className='inspo-icon' />
                    <Box color='#FF4CED' size={32} aria-label='Box Icon' className='inspo-icon' />
                </div>
            </div>
            
            <header id="header">
                <img className='logo' src='/Logo11.png' alt='Logo' />
            </header>
        </section>

        {/* WELTMODELL */}    
        <section id="weltmodell-board" className="scroll-section">
            <div className='section'>
                {/* section with info text on the left and a video trailer of the Tool on the right */}
                <div className='card'>
                    <h3>Mobilität der Zukunft</h3>
                    <p className='paragraph'>Straßen voller Autos und alle hupen grimmig. Leitbilder der Mobilität brauchen neuen Fahrtwind. Weltmodell will einen Rahmen schaffen um neue Arten der Mobilität zu diskutieren, um Zukunfts-visionen von denjenigen sammeln, die täglich damit umgehen, den Nutzern. Mit dem Weltmodell Tool kann man verschiedene Ebenen eines Verkehrsmittels der Zukunft gestalten, von der Sitzanordnung bis zum Gehäuße. Alle Modelle werden gesammelt und nach von den Erstellern gegebenen Tags sortiert, für eine große Übersicht.</p>
                </div>
                <video width="100%" height="100%" controls className='card-video'>
                    <source src="/placeholder.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* example image of the Board of vehicles sorted by tags given by users */}
            <div className='board'>
                <Board boardClass={`board-0${board}`} />
                <div className='board-controls'>
                    <div className={`board-control ${board === 1 ? "is-active" : ""}`} onClick={() => setBoard(1)} >
                        <Maximize aria-label='sort by zones' className='board-control-icon' />
                        <p>Zonen</p>
                    </div>
                    <div className={`board-control ${board === 2 ? "is-active" : ""}`} onClick={() => setBoard(2)} >
                        <Box aria-label='sort by seats' className='board-control-icon' />
                        <p>Sitze</p>
                    </div>
                    <div className={`board-control ${board === 3 ? "is-active" : ""}`} onClick={() => setBoard(3)} >
                        <Earth aria-label='sort by version of the future' className='board-control-icon' />
                        <p>Zukunftsstil</p>
                    </div>
                    <div className={`board-control ${board === 4 ? "is-active" : ""}`} onClick={() => setBoard(4)} >
                        <Map aria-label='sort by terrain' className='board-control-icon' />
                        <p>Gelände</p>
                    </div>
                    <div className={`board-control ${board === 5 ? "is-active" : ""}`} onClick={() => setBoard(5)} >
                        <Zap aria-label='sort by energy source' className='board-control-icon' />
                        <p>Antrieb</p>
                    </div>
                    <div className={`board-control ${board === 6 ? "is-active" : ""}`} onClick={() => setBoard(6)} >
                        <Users aria-label='sort by target group' className='board-control-icon' />
                        <p>Nutzer</p>
                    </div>
                </div>
                
            </div>
        </section>
        
        {/* WORKSHOP */}
        <section id="workshop" className="scroll-section">
            {/* info text on the left and a Video of the Workshop on the right */}
            <div className='section'>
                <div className="card">
                    <h3>Workshop Weltmodell x Futurium</h3>
                    <p className='paragraph'>Weltmodell ist von den gleichen Machern, die mit dem Futurium den Workshop Kollektiv Mobilität umgesetzt haben.Der Workshop war ein interaktives Erlebnis, bei dem Teilnehmer*innen ihre eigenen Fahrzeugmodelle aus LEGO gestaltet haben. Die Veranstaltung fand im Rahmen des Open Lab  im Futurium statt und bot einen inspirierenden Raum für Innovation und Austausch.<br/>Vor Ort worden Busabteile umgestellt, neu gestaltet und passend an die jeweiligen Gruppen ein neues Modell der Kollektiv-Mobilität konzipiert.</p>
                </div>
                <div className="card-video">
                    <div className="video-embed">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/UicY_ad6K4o"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>

            {/* Card Carousel with pictures of the lego models on the left, a text about the group and a photo of them on the right */}
            <div className="carousel">
                {/* Implement a simple carousel here */}
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </section>
    </div>

    {/* Footer with links to Imprint, Privacy Policy, Contact and Social Media opening in a new tab */}
        <footer>
            <Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />
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
                    

                    	<Popover.Root>
                            <Popover.Trigger asChild className='social-button'>
                                <button type="button" className="social-button" aria-label="YouTube">
                                    <img src='/youtube.svg' alt="YouTube" className='social-icon' />
                                </button>
                            </Popover.Trigger>
                            <Popover.Portal>
                                <Popover.Content className='PopoverContent' sideOffset={5}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                        <p className="Text" style={{ marginBottom: 10 }}>
                                            Der Weltmodell Youtube Kanal ist noch in Bearbeitung :p
                                        </p>
                                    </div>
                                    <Popover.Close className="PopoverClose" aria-label="Close" >
                                        <X size={18} />
                                    </Popover.Close>
                                    <Popover.Arrow className="PopoverArrow" />
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>

                        <Popover.Root>
                            <Popover.Trigger asChild className='social-button'>
                                <button type="button" className="social-button" aria-label="Instagram">
                                    <img src='/instagram.svg' alt="Instagram" className='social-icon' />
                                </button>
                            </Popover.Trigger>
                            <Popover.Portal>
                                <Popover.Content className='PopoverContent' sideOffset={5}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                        <p className="Text" style={{ marginBottom: 10 }}>
                                            Der Weltmodell Instagram Kanal ist noch in Bearbeitung :p
                                        </p>
                                    </div>
                                    <Popover.Close className="PopoverClose" aria-label="Close" >
                                        <X size={18} />
                                    </Popover.Close>
                                    <Popover.Arrow className="PopoverArrow" />
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>

                        <Popover.Root>
                            <Popover.Trigger asChild className='social-button'>
                                <button type="button" className="social-button" aria-label="Linkedin">
                                    <img src='/linkedin.svg' alt="Linkedin" className='social-icon' />
                                </button>
                            </Popover.Trigger>
                            <Popover.Portal>
                                <Popover.Content className='PopoverContent' sideOffset={5}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                        <p className="Text" style={{ marginBottom: 10 }}>
                                            Der Weltmodell Linkedin Kanal ist noch in Bearbeitung :p
                                        </p>
                                    </div>
                                    <Popover.Close className="PopoverClose" aria-label="Close" >
                                        <X size={18} />
                                    </Popover.Close>
                                    <Popover.Arrow className="PopoverArrow" />
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>

                </NavigationMenu.List>

            </NavigationMenu.Root>
        </footer>
    </>
  );
}

export default Home;