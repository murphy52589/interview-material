import {useEffect, useState} from "react";

interface IPokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    abilities: {
        ability: {
            name: string;
        };
    }[];

}

export default function PokemonSolution() {
    const [pokemon, setPokemon] = useState<string>("");
    const [pokemonData, setPokemonData] = useState<IPokemon[]>([]);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setButtonDisabled(true);
            setIsLoading(true);
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        setError(true);
                    }
                })
                .then((data) => {
                    setPokemonData(data);
                });
        } catch (error) {
            setError(true);
        }
        setButtonDisabled(false);
        setIsLoading(false);
    };

    useEffect(() => {
        //not needed but this is here to console log pokemonData. If you console.log pokemonData at line 27, it will be empty the first time
        if (pokemonData) console.log(pokemonData);
    }, [pokemonData]);

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error;

    return (
        <>
            <div className="form">
                {!buttonDisabled && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder={`Pokemon name`}
                            onChange={(e) => setPokemon(e.target.value)}
                            value={pokemon}
                        />
                        <input type="submit" value="Submit"></input>
                    </form>
                )}
            </div>

            {pokemonData && pokemonData.name && pokemonData.sprites (
                <div className="pokemonResults">
                    <div className="pokemonName">{`pokemon name: ${pokemonData.name}`}</div>
                    <img
                        src={pokemonData.sprites && pokemonData.sprites.front_default}
                        alt="pokemon"
                    />
                    <div>
                        List of abilities below:
                        <ul>
                            {pokemonData.abilities &&
                                pokemonData.abilities.map((ability, index) => {
                                    return <li key={index}>{ability.ability.name}</li>;
                                })}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
