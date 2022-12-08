import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from "../components/NotFound";

export default function Definition() {
    // ✅ State is initialized to an empty array
    const [word, setWord] = useState([]);
    const navigate = useNavigate();
    const [notFound_var, setNotFound] = useState(false);
    let { search } = useParams();
    const [error, setError] = useState();

    useEffect(() => {
        // const url = "https://jsdbfkjsdgfuisdjkcvbwuiagfjbdvjvgbaliwg";
        const url = "https://httpstat.us/500";
        //      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
        fetch(url)
            .then((response) => {
                console.log(response.status);
                if (response.status === 404) {
                    setNotFound(true);
                } else if (response.status === 401) {
                    navigate("/login");
                } else if (response.status === 500) {
                    setError(true);
                }
                if (!response.ok) {
                    setError(true);
                    throw new Error("something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                setWord(data[0].meanings);
            })
            .catch((e) => {
                console.log(e.message);
            });
    });
    if (notFound_var === true) {
        return (
            <>
                {" "}
                <NotFound />
                <Link to="/dictionary">Search Another</Link>
            </>
        );
    }
    if (error === true) {
        return (
            <>
                <p>something went wrong, try again</p>
                <Link to="/dictionary">Search Another</Link>
            </>
        );
    }
    return (
        <>
            {word ? (
                <>
                    <h1>Definition: {search}</h1>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech} {": "}
                                {meaning.definitions[0].definition}
                            </p>
                        );
                    })}
                </>
            ) : null}
        </>
    );
}
