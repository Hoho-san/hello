import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Definition() {
    // ✅ State is initialized to an empty array
    const [word, setWord] = useState([]);

    console.log("hello" + useParams());
    let { search } = useParams();

    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
            });
    }, []);
    return (
        <>
            <h1>Definition: {search}</h1>
            {word
                ? word.map((meaning) => {
                      return (
                          <p key={uuidv4()}>
                              {meaning.partOfSpeech} {": "}
                              {meaning.definitions[0].definition}
                          </p>
                      );
                  })
                : null}
        </>
    );
}
