import { useState } from "react";
import styled from "styled-components";

export default function Pokemon({ name, image, types, id }) {
  return (
    <Container typeOne={types[0].type.name} typeTwo={types[1]?.type.name}>
      <div className="id">#{id}</div>
      <div className="avatar">
        <img src={image} alt={name}></img>
      </div>
      <p>{name}</p>
      <div className="type">
        <div className="one"></div>
        <div className="two"></div>
      </div>
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
      background-color: ${(props) => {
        if (props.typeOne === "bug") {
          return "#89960B";
        } else if (props.typeOne === "water") {
          return "#5CC1ED";
        } else if (props.typeOne === "fairy") {
          return "#DA93DD";
        } else if (props.typeOne === "ghost") {
          return "#AD6EEC";
        } else if (props.typeOne === "normal") {
          return "#C3C0B8";
        } else if (props.typeOne === "ice") {
          return "#9BDEFB";
        } else if (props.typeOne === "dark") {
          return "#322C26";
        } else if (props.typeOne === "fighting") {
          return "#80311D";
        } else if (props.typeOne === "grass") {
          return "#68BB2B";
        } else if (props.typeOne === "poison") {
          return "#924694";
        } else if (props.typeOne === "flying") {
          return "#5D74D5";
        } else if (props.typeOne === "dragon") {
          return "#6B57D2";
        } else if (props.typeOne === "fire") {
          return "#EC5D35";
        } else if (props.typeOne === "ground") {
          return "#D0B155";
        } else if (props.typeOne === "psychic") {
          return "#DA3063";
        } else if (props.typeOne === "eletric") {
          return "#F4CB38";
        } else if (props.typeOne === "rock") {
          return "#9D853C";
        } else if (props.typeOne === "steel") {
          return "#8F8E9E";
        }
      }};
      height: 2px;
      width: 50%;
    }
    .two {
      height: 2px;
      background-color: ${(props) => {
        if (props.typeTwo === "bug") {
          return "#89960B";
        } else if (props.typeTwo === "water") {
          return "#5CC1ED";
        } else if (props.typeTwo === "fairy") {
          return "#DA93DD";
        } else if (props.typeTwo === "ghost") {
          return "#AD6EEC";
        } else if (props.typeTwo === "normal") {
          return "#C3C0B8";
        } else if (props.typeTwo === "ice") {
          return "#9BDEFB";
        } else if (props.typeTwo === "dark") {
          return "#322C26";
        } else if (props.typeTwo === "fighting") {
          return "#80311D";
        } else if (props.typeTwo === "grass") {
          return "#68BB2B";
        } else if (props.typeTwo === "poison") {
          return "#924694";
        } else if (props.typeTwo === "flying") {
          return "#5D74D5";
        } else if (props.typeTwo === "dragon") {
          return "#6B57D2";
        } else if (props.typeTwo === "fire") {
          return "#EC5D35";
        } else if (props.typeTwo === "ground") {
          return "#D0B155";
        } else if (props.typeTwo === "psychic") {
          return "#DA3063";
        } else if (props.typeTwo === "eletric") {
          return "#F4CB38";
        } else if (props.typeTwo === "rock") {
          return "#9D853C";
        } else if (props.typeTwo === "steel") {
          return "#8F8E9E";
        }
      }};
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
