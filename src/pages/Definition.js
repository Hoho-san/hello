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

    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                return response.json();
            })
            .then((data) => {
                setWord(data[0].meanings);
            });
    }, []);
    if (notFound_var === true) {
        return (
            <>
                {" "}
                <NotFound />
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
