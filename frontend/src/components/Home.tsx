import github from "../assets/img/social/github.png"
import linkedin from "../assets/img/social/linkedin.png"
import instagram from "../assets/img/social/instagram.png"
import facebook from "../assets/img/social/facebook.png"

import Markdown from "react-markdown";
import {useEffect, useState} from "react";

function Home() {
    const [markdown, setMarkdown] = useState("Loading...");

    useEffect(() => {
        fetch("https://bwxor.com/api/pages/index")
            .then((response) => response.json())
            .then((data) => data.content)
            .then((text) => setMarkdown(text))
            .catch((error) => console.error(error));
    }, []);

    const result = <Markdown>{markdown}</Markdown>;

    return (
        <>
            <div className="split">
                <div className="split-left">
                    {result}
                </div>
                <div className="split-right">
                    <h2 className="hidden-for-mobile">Social Media</h2>
                    <div className="social-group">
                        <div className="social-group-item">
                            <a href="https://github.com/mateasmario/">
                                <button className="button"><img src={github} width="24" height="24"/> <span className="hidden-for-mobile">Follow on GitHub</span>
                                </button>
                            </a>
                        </div>
                        <div className="social-group-item">
                            <a href="https://www.linkedin.com/in/mario-matea%C8%99-b31628209/">
                                <button className="button"><img src={linkedin} width="24" height="24"/><span className="hidden-for-mobile">Connect on LinkedIn</span>
                                </button>
                            </a>
                        </div>
                        <div className="social-group-item">
                            <a href="https://www.instagram.com/mario.mateas/">
                                <button className="button"><img src={instagram} width="24" height="24"/><span className="hidden-for-mobile">Follow on Instagram</span>
                                </button>
                            </a>
                        </div>
                        <div className="social-group-item">
                            <a href="https://www.facebook.com/mateasmario">
                                <button className="button"><img src={facebook} width="24" height="24"/><span className="hidden-for-mobile">Befriend on Facebook</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
