import {useRef, useState} from "react";
import {FFmpeg} from "@ffmpeg/ffmpeg";
import {fetchFile, toBlobURL} from "@ffmpeg/util";

function AudioEssentials() {
    const [file, setFile] = useState<File|null>(null);
    const [from, setFrom] = useState("mp3");
    const [to, setTo] = useState("mp3");
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const ffmpegRef = useRef(new FFmpeg());


    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files != null) {
            setFile(event.target.files[0]);
        }
    }

    const handleChangeFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFrom(event.target.value);
    }

    const handleChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTo(event.target.value);
    }

    const transcode = async (from: string, to: string) => {
        const ffmpeg = ffmpegRef.current;
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.10/dist/esm'
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });

        const inputFile = "input." + from;
        const outputFile = "output." + to;

        console.log(file);

        if (!file) {
            setLoading(false);
            setError(true);
            return;
        }

        try {
            await ffmpeg.writeFile(inputFile, await fetchFile(file));
            await ffmpeg.exec(['-i', inputFile, outputFile]);
            const data = await ffmpeg.readFile(outputFile) as Uint8Array;

            // Create a Blob from the Uint8Array returned by ffmpeg
            const blob = new Blob([data.buffer], {type: 'application/octet-stream'});

            // Create a temporary URL for the Blob
            const url = URL.createObjectURL(blob);

            // Create a temporary <a> element to trigger the download
            const a = document.createElement('a');
            a.href = url;
            a.download = outputFile; // Set the filename for download
            document.body.appendChild(a);
            a.click();

            // Clean up
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch {
            setError(true);
        }
    }

    const handleConvert = () => {
        setDone(false);
        setLoading(true);
        setError(false);
        transcode(from, to).then(() => {
            setLoading(false);
            setDone(true);
        });
    }

    return (
        <>
            <div className="app-box">
                <div className="app-input-group app-limit-width">
                    <div className="app-input-group-items">
                        <div className="app-input-group-item">
                            <h2 className="text-title">AudioEssentials</h2>
                            <input type="file" id="file" accept=".mp3,.mp4,.wav,.aac,.m4a,.ogg,.flac,.wma,.mkv"
                                   onChange={handleChangeFile}/>
                        </div>
                        <div className="app-input-group-item">
                            <div className="audioessentials-select-group">
                                <div className="audioessentials-select-group-item">
                                    From
                                </div>
                                <div className="audioessentials-select-group-item">
                                    <select id="from" onChange={handleChangeFrom}>
                                        <option value="mp3">mp3</option>
                                        <option value="mp4">mp4</option>
                                        <option value="wav">wav</option>
                                        <option value="aac">aac</option>
                                        <option value="m4a">m4a</option>
                                        <option value="ogg">ogg</option>
                                        <option value="flac">flac</option>
                                        <option value="wma">wma</option>
                                        <option value="mkv">mkv</option>
                                    </select>
                                </div>
                                <div className="audioessentials-select-group-item">
                                    to
                                </div>
                                <div className="audioessentials-select-group-item">
                                    <select id="to" onChange={handleChangeTo}>
                                        <option value="mp3">mp3</option>
                                        <option value="mp4">mp4</option>
                                        <option value="wav">wav</option>
                                        <option value="aac">aac</option>
                                        <option value="m4a">m4a</option>
                                        <option value="ogg">ogg</option>
                                        <option value="flac">flac</option>
                                        <option value="wma">wma</option>
                                        <option value="mkv">mkv</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-input-group-buttons">
                        <button className="button button-gray button-full-width" onClick={handleConvert}>Convert
                        </button>
                    </div>
                    {loading ?
                    <>
                        Converting...
                    </>
                    :
                        error ?
                            <>
                                There was an error trying to convert your audio file.
                            </>
                            :
                                done ?
                                <>
                                    Your file has been converted successfully.
                                </>
                    :
                    <>
                    </>}
                </div>
            </div>
        </>
    );
}

export default AudioEssentials;