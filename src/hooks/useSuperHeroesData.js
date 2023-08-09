import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime:5000,
    //staleTime:3000
    //refetchOnMount:true
    // refetchOnWindowFocus:"true"
    // refetchInterval:2000
    //  refetchIntervalInBackground:true
    //dont fire request by iteself
    // enabled:false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name)
    //   return superHeroNames;
    // },
  });
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};
export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries('super-heroes')
    //   queryClient.setQueriesData("super-heroes", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    onMutate:()=>{},
    onError:()=>{},
    onSettled:()=>{},
  });
};
