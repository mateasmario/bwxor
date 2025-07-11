import architecture from "../assets/img/architecture.png"
import github from "../assets/img/social/github.png"
import linkedin from "../assets/img/social/linkedin.png"
import ieee from "../assets/img/social/ieee.png"
import instagram from "../assets/img/social/instagram.png"
import facebook from "../assets/img/social/facebook.png"
import youtube from "../assets/img/social/youtube.png"
import mail from "../assets/img/social/mail.png"
import {Link} from "react-router-dom";
import AppBox from "./app/AppBox.tsx";

const applications = [
    {
        "title": "PDF Editor",
        "description": "Provides options to split, merge, or convert images into PDF files.",
        "url": "/apps/pdf",
        "category": "Utility"
    },
    {
        "title": "Spy",
        "description": "Spy game with custom words.",
        "url": "/apps/spy",
        "category": "Game"
    },
    {
        "title": "Randomizer",
        "description": "Various ways to get random output based on your input.",
        "url": "/apps/randomizer",
        "category": "Utility",
    },
    {
        "title": "Would you Rather?",
        "description": "Dummy 'Would you Rather' game with AI-generated questions.",
        "url": "/apps/wouldyourather",
        "category": "Game"
    }
]

function Home() {
    return (
        <>
            <div className="home-items">
                <div className="home-banner">
                    <div className="home-banner-left">
                        <h1>Hi there.</h1>
                        <p>I am a computer engineer from Romania and this is my website dedicated to knowledge sharing,
                            built on React and Spring Boot. I plan to make it more dynamic as days go by, but unfortunately I don't have enough time to
                            do it in a single attempt.<br/>
                            The website also resembles my journey through learning frontend development, as I was always focusing on the backend part. Feel free to take a look over my blog posts and personal projects. Some might be really
                            helpful! You can contact me through the social buttons below.
                        </p>
                    </div>
                    <div className="home-banner-right">
                        <div className="button-group button-group-banner">
                            <div className="button-group-item">
                                <Link to="/projects">
                                    <button className="button button-full-width">View my personal projects</button>
                                </Link>
                            </div>
                            <div className="button-group-item">
                                <Link to="/docu">
                                    <button className="button button-full-width">See my technical blog posts</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="split">
                    <div className="split-left">
                        <h2>General Architecture of my Website</h2>
                        <div className="center">
                            <img src={architecture}/>
                        </div>
                    </div>
                    <div className="split-right">
                        <h2 className="hidden-for-mobile">Social Media</h2>
                        <div className="button-group button-group-social">
                            <div className="button-group-item">
                                <a href="https://github.com/mateasmario/">
                                    <button className="button button-full-width button-social"><img src={github} width="24" height="24"/>
                                        <span
                                            className="hidden-for-mobile">Follow on GitHub</span>
                                    </button>
                                </a>
                            </div>
                            <div className="button-group-item">
                                <a href="https://www.linkedin.com/in/mario-matea%C8%99-b31628209/">
                                    <button className="button button-full-width button-social"><img src={linkedin} width="24"
                                                                                  height="24"/><span
                                        className="hidden-for-mobile">Connect on LinkedIn</span>
                                    </button>
                                </a>
                            </div>
                            <div className="button-group-item">
                                <a href="https://ieeexplore.ieee.org/author/523355528908544">
                                    <button className="button button-full-width button-social"><img src={ieee} width="24"
                                                                                  height="24"/><span
                                        className="hidden-for-mobile">View my publications</span>
                                    </button>
                                </a>
                            </div>
                            <div className="button-group-item">
                                <a href="https://www.instagram.com/mario.mateas/">
                                    <button className="button button-full-width button-social"><img src={instagram} width="24"
                                                                                  height="24"/><span
                                        className="hidden-for-mobile">Follow on Instagram</span>
                                    </button>
                                </a>
                            </div>
                            <div className="button-group-item">
                                <a href="https://www.facebook.com/mateasmario">
                                    <button className="button button-full-width button-social"><img src={facebook} width="24"
                                                                                  height="24"/><span
                                        className="hidden-for-mobile">Befriend on Facebook</span>
                                    </button>
                                </a>
                            </div>
                            <div className="button-group-item">
                                <a href="https://www.youtube.com/@mmateas">
                                    <button className="button button-full-width button-social"><img src={youtube} width="24"
                                                                                  height="24"/><span
                                        className="hidden-for-mobile">Subscribe on YouTube</span>
                                    </button>
                                </a>
                            </div>
                            <div className="button-group-item">
                                <a href="mailto:mario@bwxor.com">
                                    <button className="button button-full-width button-social"><img src={mail} width="24"
                                                                                  height="24"/><span
                                        className="hidden-for-mobile">Contact me via E-Mail</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Applications</h2>
                    <div className="apps">
                        {applications.map((application) => <AppBox title={application.title} url={application.url} description={application.description} category={application.category} />)}
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default Home;
