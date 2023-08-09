import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
 
const  fetchSuperHeroes=()=>{
  return axios.get("http://localhost:4000/superheroes")
}


const fetchFriendData=()=>{
  return axios.get('http://localhost:4000/friends')
}

function ParallelQueries() {
  const{data:superHeroes}=useQuery('super-heroes',fetchSuperHeroes)
 const{data:friends}=useQuery('friends',fetchFriendData)
  
  return (
    <div><h1>ParallelQueries</h1></div>
     
  )
}

export default ParallelQueries