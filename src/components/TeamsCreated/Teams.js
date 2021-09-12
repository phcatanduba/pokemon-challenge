import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Pokeball from "../Teams/Pokeball";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/`);
    promise.then((res) => {
      setTeams(res.data);
    });
  }, []);
  return (
    <>
      {teams.map((team) => {
        return (
          <Container>
            <Text>{team[0].teamName}</Text>
            <Row>
              <Pokeball pokemon={team[0]} boolean={true} />
              <Pokeball pokemon={team[1]} boolean={true} />
              <Pokeball pokemon={team[2]} boolean={true} />
            </Row>
            <SecondRow>
              <Pokeball pokemon={team[3]} boolean={true} />
              <Pokeball pokemon={team[4]} boolean={true} />
              <Pokeball pokemon={team[5]} boolean={true} />
            </SecondRow>
          </Container>
        );
      })}
    </>
  );
}

const Text = styled.span`
  color: #333652;
  font-size: 13px;
  font-weight: 800;
  line-height: 48px;
  margin-right: 5px;
`;

const Container = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  padding-bottom: 30px;
  width: 80%;
  border-bottom: 1px solid #333652;
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
