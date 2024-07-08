import React, { useState, useCallback, useReducer } from "react";
import "./BrewerySolution.css";
import { IBreweries } from "./IBreweries";
import { getBreweries } from "./BreweriesSolution.api";

interface State {
  breweryInfo: IBreweries[];
  loading: boolean;
  error: boolean;
  noBreweries: boolean;
}

type Action =
  | { type: "REQUEST_START" }
  | { type: "REQUEST_SUCCESS"; payload: IBreweries[] }
  | { type: "REQUEST_FAILURE" }
  | { type: "NO_BREWERIES_FOUND" };

const initialState: State = {
  breweryInfo: [],
  loading: false,
  error: false,
  noBreweries: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "REQUEST_START":
      return {
        ...state,
        loading: true,
        error: false,
        noBreweries: false,
      };
    case "REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        breweryInfo: action.payload,
        noBreweries: action.payload.length === 0,
      };
    case "REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "NO_BREWERIES_FOUND":
      return {
        ...state,
        loading: false,
        error: false,
        breweryInfo: [],
        noBreweries: true,
      };
    default:
      return state;
  }
}

export default function BrewerySolution() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filters, setFilters] = useState<{ state: string; city: string }>({
    state: "",
    city: "",
  });

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "REQUEST_START" });
    const form = e.target as HTMLFormElement;
    const inputValue = form.elements.namedItem("inputName") as HTMLInputElement;
    getBreweries(inputValue.value)
      .then((response) => {
        if (response && response.length > 0) {
          dispatch({ type: "REQUEST_SUCCESS", payload: response });
        } else {
          dispatch({ type: "NO_BREWERIES_FOUND" });
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "REQUEST_FAILURE" });
      });
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const { breweryInfo, loading, error, noBreweries } = state;

  const filteredBreweries = breweryInfo.filter((brewery) => {
    const filterByState = filters.state
      ? brewery.state.toLowerCase().includes(filters.state.toLowerCase())
      : true;
    const filterByCity = filters.city
      ? brewery.city.toLowerCase().includes(filters.city.toLowerCase())
      : true;
    return filterByState && filterByCity;
  });

  const showBreweryInfo = () => {
    if (loading) return "...loading";
    if (error) return "An error occurred. Refresh and try again.";
    if (noBreweries) return "No breweries found. Please try another search.";

    return (
      <>
        {filteredBreweries.map((brewery) => (
          <div key={brewery.id}>
            <h2>{brewery.name}</h2>
            <p>Type: {brewery.brewery_type}</p>
            <p>
              {brewery.street}, {brewery.city}, {brewery.state},{" "}
              {brewery.postal_code}
            </p>
            <p>{brewery.country}</p>
            <p>Phone number: {brewery.phone}</p>
            <a
              href={brewery.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Search for breweries by city or name</label>
        <input placeholder="type here" name="inputName" />
        <button>Submit</button>
      </form>

      <form>
        <label>Filter by state:</label>
        <select
          name="state"
          value={filters.state}
          onChange={handleFilterChange}
        >
          <option value="">Select a state</option>
          <option value="Kansas">Kansas</option>
          <option value="Arkansas">Arkansas</option>
        </select>
      </form>

      {showBreweryInfo()}
    </>
  );
}
