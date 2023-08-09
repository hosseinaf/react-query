import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
import { useState } from "react";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  const { mutate: addHero, isLoading:l, isError:ie, error:er } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    addHero(hero);
  };

  // console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        <input
          name=" "
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name=" "
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>fetch heros</button>
      </div>

      <h2>RQSuperHeroes</h2>
      <button onClick={refetch}>refetch</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rqsuper/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};
