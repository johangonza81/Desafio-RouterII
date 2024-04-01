
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonList = async () => {
      try{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      if(!response.ok){
        throw new Error('Error al obtener la lista de Pokemon ')
      }
      const data = await response.json();
      setPokemonList(data.results);
    }catch (error) {
      console.error(error);
      setPokemonList({ error: "Error al obtener la lista de Pokémon" });
    }
    };
    fetchPokemonList();
  }, []);

  const irAPersonaje = () => {
    navigate(`/personajes/${selectedPokemon}`);
  };

  return (
    <div>
      <h1>Selecciona un Pokémon</h1>
      <div className="card2">
      <select
        value={selectedPokemon}
        onChange={(e) => setSelectedPokemon(e.target.value)}
      >
        <option value="">Selecciona un Pokémon</option>
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button className="btn2" onClick={irAPersonaje} variant="primary">Buscar</button>
      </div>
    </div>
  );
};