import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "react-bootstrap";

import Pokemon from "./Pokemon";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  function getPokemons(pokemonsList) {
    const array = [...pokemons];

    pokemonsList.forEach(async (pokemon) => {
      const item = await axios.get(pokemon.url);
      array.push(item.data);
    });
    setTimeout(() => {
      setPokemons(
        array.sort((a, b) => {
          if (a.id < b.id) return -1;
          else return 1;
        })
      );
    }, 1250);
  }

  function getUrls() {
    const promise = axios.get(url);
    promise.then((res) => {
      setUrl(res.data.next);
      getPokemons(res.data.results);
    });
  }

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <>
      {pokemons.length !== 0 ? (
        <Container>
          <Title>Choose 6 Pokémons: </Title>
          <InfiniteScroll
            height={390}
            style={{ display: "flex", width: "94%", flexWrap: "wrap" }}
            dataLength={pokemons.length}
            hasMore={true}
            next={getUrls}
            loader={
              <Load>
                <Spinner animation="border" style={{ color: "blue" }} />
              </Load>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {pokemons.map((pokemon) => {
              return (
                <Pokemon
                  key={pokemon.id}
                  name={pokemon.name}
                  id={pokemon.id}
                  types={pokemon.types}
                  image={pokemon.sprites.front_default}
                >
                  {pokemon.name}
                </Pokemon>
              );
            })}
          </InfiniteScroll>
        </Container>
      ) : (
        <Load>
          <Spinner animation="border" style={{ color: "blue" }} />
        </Load>
      )}
    </>
  );
}

const Load = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`;

const Title = styled.div`
  color: #333652;
  font-size: 13px;
  font-weight: 800;
  line-height: 48px;
`;
