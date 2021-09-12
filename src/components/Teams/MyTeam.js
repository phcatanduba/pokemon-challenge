import styled from "styled-components";

import Editable from "./Editable";
import Pokeball from "./Pokeball";
import ConfimartionOption from "./ConfirmationOption";
import DeleteOption from "./DeleteOption";
import { useContext, useState } from "react";
import PokemonsContext from "../contexts/PokemonContext";
import axios from "axios";

export default function MyTeam() {
  const { myTeam, setMyTeam } = useContext(PokemonsContext);
  const [text, setText] = useState("My Team");
  const [clicked, setClicked] = useState(undefined);

  function remove() {
    if (clicked !== undefined) {
      myTeam.splice(clicked - 1, 1);
      setClicked(undefined);
      setMyTeam([...myTeam]);
    }
  }

  function confirm() {
    const body = myTeam;
    body.forEach((pokemon) => (pokemon.teamName = text));
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/`, body);
    promise.then(() => {
      setMyTeam([]);
    });
  }

  return (
    <Container>
      <Editable text={text} setText={setText} />
      <Row>
        <Pokeball
          pokemon={myTeam[0]}
          clicked={clicked}
          setClicked={setClicked}
          id={1}
        />
        <Pokeball
          pokemon={myTeam[1]}
          clicked={clicked}
          setClicked={setClicked}
          id={2}
        />
        <Pokeball
          pokemon={myTeam[2]}
          clicked={clicked}
          setClicked={setClicked}
          id={3}
        />
      </Row>
      <SecondRow>
        <Pokeball
          pokemon={myTeam[3]}
          clicked={clicked}
          setClicked={setClicked}
          id={4}
        />
        <Pokeball
          pokemon={myTeam[4]}
          clicked={clicked}
          setClicked={setClicked}
          id={5}
        />
        <Pokeball
          pokemon={myTeam[5]}
          clicked={clicked}
          setClicked={setClicked}
          id={6}
        />
      </SecondRow>
      <Buttons>
        <DeleteOption
          color={clicked === undefined ? "#EEBFBC" : "#F8635A"}
          remove={remove}
        />
        <ConfimartionOption
          color={myTeam.length === 6 ? "#8FDA58" : "#C7EFAA"}
          confirm={myTeam.length === 6 ? confirm : () => {}}
        />
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
