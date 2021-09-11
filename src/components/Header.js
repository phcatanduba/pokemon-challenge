import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header({ text }) {
  const path = text === "TEAMS" ? "/create" : "/";
  return (
    <Container>
      <div>
        <Link to={path}>{text}</Link>
      </div>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 110px;
  background-color: #90adc6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 800;
  line-height: 48px;

  div {
    border-top: 1px solid #fff;
    width: 80%;
    text-align: center;
  }
`;
