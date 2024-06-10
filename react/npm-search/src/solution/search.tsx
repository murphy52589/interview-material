import React, { useState } from "react";
import { fetchPackages } from "./search.api";
import "./search.css";

export interface NpmPackage {
    name: string;
    description: string;
    html_url: string;

}

export default function NpmSearchSolution() {
    const [searchInput, setSearchInput] = useState<string>("");
    const [packages, setPackages] = useState<NpmPackage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
                {packages.map((packageInfo: NpmPackage, index) => (
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
