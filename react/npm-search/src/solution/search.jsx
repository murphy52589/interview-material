import React, { useState } from "react";
import { fetchPackages } from "./search.api.js";
import "./search.css";

export default function Search() {
    const [searchInput, setSearchInput] = useState("");
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetchPackages(searchInput)
            .then((packageResults) => {
                setPackages(packageResults);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const showError = () => {
        return <p className="error">Error fetching packages</p>;
    };

    const renderPackages = () => {
        return (
            <ul>
                {packages.map((packageInfo, index) => (
                    <li key={index}>
                        <a href={packageInfo.html_url}>
                            <h2>{packageInfo.name}</h2>
                        </a>
                        <p>{packageInfo.description}</p>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <p>Search NPM packages</p>
                <input
                    className="search-input"
                    type="text"
                    name="search"
                    onChange={handleSearchInput}
                />
                <button type="submit">Search</button>
            </form>
            {!isLoading && !error && renderPackages()}
            {error && showError()}
        </>
    );
}
