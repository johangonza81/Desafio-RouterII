import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card,Button } from "react-bootstrap";

export const Personajes = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };
    fetchPokemonDetails();
  }, [id]);

  const goBack = () => {
    navigate("/pokemons");
  };

  return (
    <div>
    {pokemon && (
      
        <div>
        <Card className="card">
            <h2>POKEMON</h2>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Img variant="top" src={pokemon.sprites.front_default} />
            <Card.Body>
              
              <Card.Text>
              </Card.Text>
                <h4>Habilidad: {pokemon.abilities[0].ability.name} </h4>
              
            </Card.Body>
          </Card>
          </div>
          )}
          <Button className="btn" variant="primary" onClick={goBack}>Regresar</Button>
          </div>
);}