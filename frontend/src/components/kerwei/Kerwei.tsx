import TranslatedItem from "./TranslatedItem.tsx";
import '../../assets/css/kerwei/styles.css'

const hour = new Date().getHours();
const min = new Date().getMinutes();
const day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

const eventDate = {
    day: 9,
    month: 8,
    year: 2025
}

const translatedItems = [
    {
        hour: "07", min: "30", romanian: "Primirea oaspeților", german: "Empfang der Gäste"
    },
    {
        hour: "09", min: "00", romanian: "Plecare de la căminul cultural", german: "Abmarsch"
    },
    {
        hour: "11", min: "00", romanian: "Sfânta Liturghie", german: "Heilige Messe"
    },
    {
        hour: "12", min: "30", romanian: "Licitarea pomului de Kirchweih", german: "Versteigerung des Kerweistraußes"
    },
    {
        hour: "13", min: "30", romanian: "Pauza de prânz", german: "Mittagessen"
    },
    {
        hour: "19", min: "00", romanian: "Seara balului", german: "Abendball"
    }
]

function getIndexOfCurrentEvent() {
    if (day == eventDate.day && month == eventDate.month && year == eventDate.year) {
        // Do nothing
    }
    else {
        return -1;
    }

    for (let i = 0; i < translatedItems.length; i++) {
        if (Number(translatedItems[i].hour) < hour ||
            (Number(translatedItems[i].hour) == hour && Number(translatedItems[i].min) < min)) {
            // Do nothing
        }
        else {
            return i-1;
        }
    }

    return -1;
}

function Kerwei() {
    const indexOfCurrentEvent = getIndexOfCurrentEvent();

    return (
        <>
            <div className="body-content">
                <h1>Lowriner Kerwei</h1>
                <TranslatedItem romanian="Sâmbătă, 9 august 2025" german= "Samstag, 9. August 2025" />

                <h2>Program</h2>
                <div className="translated-item-list">
                    {translatedItems.map((item, i) => (
                        <TranslatedItem key={i}
                                        status={i < indexOfCurrentEvent ? "✅" : (
                                            i == indexOfCurrentEvent ? "⌛" : "❌"
                                        )}
                                        title={item.hour + ":" + item.min}
                                        romanian={item.romanian}
                                        german={item.german}></TranslatedItem>
                    ))}
                </div>

                <br/>
                Fotografiile nu sunt momentan valabile, dar vor putea fi descărcate de aici.

            </div>
        </>
    );
}

export default Kerwei;