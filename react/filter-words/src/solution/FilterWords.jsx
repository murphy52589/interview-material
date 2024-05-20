import {words} from "../words.js";
import { useState } from "react";

export default function  FilterWords() {
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!filterWords(query)) alert("no match");
        else {
            const filteredWords = filterWords(query);
            console.log(filteredWords);
        }
    };

    function filterWords() {
        // if query doesn't contain an asterisk, see if word matches anything in the array
        if (!query.includes("*")) {
            return words.filter((word) => word === query);
        }
        // if query contains an asterisk
        else if (query.includes("*")) {
            return words.filter((word) => {
                if (query.startsWith("*")) return word.endsWith(query.substring(1));
                else if (query.endsWith("*"))
                    return word.startsWith(query.substring(0, query.length - 1));
                else if (query.startsWith("*") && query.endsWith("*"))
                    return word.includes(query.substring(1, query.length - 1));
                // case where asterisk is in the middle of the word - TODO
                else if (!word.startsWith("*") && !word.endsWith("*")) {
                    console.log("you got here");
                    return word.includes(query.substring(1, query.length - 1));
                }
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Word:
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
