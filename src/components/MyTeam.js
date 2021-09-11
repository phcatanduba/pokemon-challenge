import styled from "styled-components";

import Editable from "./Editable";
import Pokeball from "./Pokeball";
import ConfimartionOption from "./ConfirmationOption";
import DeleteOption from "./DeleteOption";

export default function MyTeam() {
  return (
    <Container>
      <Editable />
      <Row>
        <Pokeball />
        <Pokeball />
        <Pokeball />
      </Row>
      <SecondRow>
        <Pokeball />
        <Pokeball />
        <Pokeball />
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
  margin-left: 15px;
  svg {
    margin-right: 32px;
  }
`;

const SecondRow = styled.div`
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
