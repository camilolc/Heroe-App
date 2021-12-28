import React, { useMemo } from "react";

import queryString from "query-string";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  //Si es undefined se setea como un string vacio
  const { q = "" } = queryString.parse(location.search);

  const [{ search }, handleInputChange] = useForm({
    search: q,
  });
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              typeof="text"
              placeholder="find your herp"
              className="form-control"
              onChange={handleInputChange}
              value={search}
              name="search"
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn m1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">there's no hero with {q}</div>
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
