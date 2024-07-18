import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height="140"
        image={pokemon.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {pokemon.type}
        </Typography>
      </CardContent>
    </Card>
  );
};

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/pokemon');
        setPokemons(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the pokemons:', error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {pokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PokemonList;
