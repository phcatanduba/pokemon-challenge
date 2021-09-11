import styled from "styled-components";

export default function Pokemons() {
  return (
    <Container>
      <Title>Choose 6 Pokémons: </Title>
    </Container>
  );
}

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
