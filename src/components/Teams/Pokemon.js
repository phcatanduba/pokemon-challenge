import { useContext } from "react";
import styled from "styled-components";
import ConfimartionOption from "./ConfirmationOption";
import PokemonsContext from "../contexts/PokemonContext";

import { color } from "../utils/colors";

export default function Pokemon({ name, image, types, id }) {
  const { myTeam, setMyTeam } = useContext(PokemonsContext);

  let colorOne, colorTwo;

  //SELECT THE COLOR ACCORDING TO THE TYPE OF POKEMON
  colorOne = color(types[0].type.name);
  colorTwo = color(types[1]?.type.name);

  function handleClick() {
    if (myTeam.length < 6) {
      myTeam.push({
        id,
        name,
        image,
        colors: { colorOne, colorTwo },
      });
      setMyTeam([...myTeam]);
    }
  }

  return (
    <Container
      colorOne={colorOne}
      colorTwo={colorTwo}
      onClick={handleClick}
      id={myTeam.find((pokemon) => {
        return pokemon?.id === id;
      })}
    >
      <div className="id">#{id}</div>
      <div className="avatar">
        <img src={image} alt={name}></img>
      </div>
      <p>{name}</p>
      <div className="type">
        <div className="one"></div>
        <div className="two"></div>
      </div>
      <span>
        <ConfimartionOption color={"#90D861"} />
      </span>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 5px;

  span {
    display: ${(props) => (props.id ? "block" : "none")};
    position: absolute;
    top: 25px;
    left: 25px;
  }

  p {
    color: #333652;
    font-size: 15px;
    font-weight: 700;
    line-height: 11.2px;
    bottom: 20px;
    margin-bottom: 5px;
  }
  .type {
    width: 60px;
    display: flex;
    bottom: 8px;
    .one {
      background-color: ${(props) => props.colorOne};
      height: 2px;
      width: 50%;
    }
    .two {
      height: 2px;
      background-color: ${(props) => props.colorTwo};
      width: 50%;
    }
  }

  .id {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    background-color: #90adc6;
    color: #fff;
    font-weight: bold;
    font-size: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
