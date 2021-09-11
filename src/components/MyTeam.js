import styled from "styled-components";

import Editable from "./Editable";
import Pokeball from "./Pokeball";
import ConfimartionOption from "./ConfirmationOption";
import DeleteOption from "./DeleteOption";
import { useContext } from "react";
import PokemonsContext from "./contexts/PokemonContext";

export default function MyTeam() {
  const { myTeam } = useContext(PokemonsContext);
  console.log(myTeam);
  return (
    <Container>
      <Editable />
      <Row>
        <Pokeball pokemon={myTeam} />
        <Pokeball pokemon={myTeam} />
        <Pokeball pokemon={myTeam} />
      </Row>
      <SecondRow>
        <Pokeball pokemon={myTeam} />
        <Pokeball pokemon={myTeam} />
        <Pokeball pokemon={myTeam} />
      </SecondRow>
      <Buttons>
        <DeleteOption color={"#EEBFBC"} />
        <ConfimartionOption color={"#C7EFAA"} />
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`;

const Row = styled.div`
  display: flex;
  margin-left: 15px;
  svg {
    margin-right: 32px;
  }
`;

const SecondRow = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 35px;
  svg {
    margin-right: 32px;
  }
`;

const Buttons = styled.div`
  width: 92%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  svg {
    margin-right: 15px;
  }
`;
