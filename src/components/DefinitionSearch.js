import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
    const [word, setWord] = useState("");
    const navigate = useNavigate();

    return (
        <form
            className="flex justify-center space-x-3 max-w-[300px]"
            onSubmit={() => {
                navigate("/dictionary/" + word);
            }}
        >
            <input
                className="shrink min-w-0 px-2 py-1 rounded"
                placeholder="type a word"
                type="text"
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded">
                Search
            </button>
        </form>
    );
}
