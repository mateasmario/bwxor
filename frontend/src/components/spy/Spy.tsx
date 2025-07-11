import {useEffect, useState} from "react";

function Spy() {
    const [started, setStarted] = useState(false);
    const [words, setWords] = useState<string[]>([]);
    const [noPlayers, setNoPlayers] = useState(2)
    const [revealed, setRevealed] = useState(false);
    const [revealedWord, setRevealedWord] = useState("");
    const [spyIndex, setSpyIndex] = useState(0);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [selectedWord, setSelectedWord] = useState("");
    const [timerStarted, setTimerStarted] = useState(false);
    const [seconds, setSeconds] = useState(240);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSliderChange = (event) => {
        setNoPlayers(parseInt(event.target.value));
    }

    const handleGameStarted = (event) => {
        setStarted(true);

        const wordsElement = document.getElementById("words");

        const words = wordsElement != null && wordsElement.value != null ? wordsElement.value.split('\n') : ["None"];
        setWords(words);

        setSpyIndex(getRandomInt(0, noPlayers - 1));
        setCurrPlayerIndex(0);

        const selectedWordIndex = getRandomInt(0, words.length - 1);
        setSelectedWord(words[selectedWordIndex]);
    }

    const handleRevealCard = (event) => {
        if (currPlayerIndex == spyIndex) {
            setRevealedWord("Spy");
        } else {
            setRevealedWord(selectedWord);
        }

        setRevealed(true);
    }

    const handleNextPlayer = (event) => {
        setCurrPlayerIndex(currPlayerIndex + 1);
        setRevealed(false);

        if (currPlayerIndex == noPlayers - 1) {
            setTimerStarted(true);
        }
    }

    const handleRestart = (event) => {
        setStarted(false);
        setRevealed(false);
        setTimerStarted(false);
    }

    useEffect(() => {
        let interval;

        if (timerStarted) {
            interval = setInterval(() => {
                setSeconds((prevTime) => {
                    return prevTime > 0 ? prevTime - 1 : 0
                });
            }, 1000);
        }
        else {
            setSeconds(240);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timerStarted]);

    return (
        <>
            <div className="spy-box">
                {
                    timerStarted ?
                        <>
                            <div className="spy-timer">
                                <div className="spy-timer-seconds">
                                    {seconds}
                                </div>
                                <div className="spy-timer-item">
                                    Try to find the spy.
                                </div>
                                <div className="spy-timer-item">
                                    <button className="button button-gray button-full-width"
                                            onClick={handleRestart}>Restart
                                    </button>
                                </div>
                            </div>
                        </>
                        :
                        started ?
                            <>
                                {
                                    revealed ?
                                        <>
                                            <div className="spy-player-card">
                                                <div className="spy-player-card-item">
                                                    <h2>Player {currPlayerIndex}</h2>
                                                </div>
                                                <div className="spy-player-card-item">
                                                    <p>{revealedWord}</p>
                                                </div>
                                                <div className="spy-player-card-item">
                                                    <button className="button button-gray button-full-width "
                                                            onClick={handleNextPlayer}>Next player
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="spy-player-card">
                                                <div className="spy-player-card-item">
                                                    <h2>Player {currPlayerIndex}</h2>
                                                </div>
                                                <div className="spy-player-card-item">
                                                    <p>Click to reveal word</p>
                                                </div>
                                                <div className="spy-player-card-item">
                                                    <button className="button button-gray button-full-width"
                                                            onClick={handleRevealCard}>Reveal card
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                }
                            </>
                            :
                            <>
                                <div className="spy-input-group">
                                    <div className="spy-input-group-items">
                                        <div className="spy-input-group-item">
                                            <h2 className="text-title">Wordlist</h2>
                                            <p>Every separate word should be delimited by a newline.</p>
                                        </div>
                                        <div className="spy-input-group-item">
                                            <textarea id="words" className="spy-textarea"></textarea>
                                        </div>
                                        <div className="spy-input-group-item">
                                            <h2 className="text-title">Number of players: {noPlayers}</h2>
                                            <input type="range" value={noPlayers} min="2" max="10"
                                                   className="spy-slider"
                                                   onChange={handleSliderChange}/>
                                        </div>
                                    </div>
                                    <div className="spy-input-group-buttons">
                                        <button className="button button-gray button-full-width"
                                                onClick={handleGameStarted}>Start
                                        </button>
                                    </div>
                                </div>
                            </>
                }

            </div>
        </>
    );
}

export default Spy;