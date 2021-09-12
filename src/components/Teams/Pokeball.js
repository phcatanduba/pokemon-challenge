import styled from "styled-components";

export default function Pokeball({
  pokemon,
  clicked,
  setClicked,
  id,
  boolean,
}) {
  function handleClick() {
    if (id === clicked) {
      setClicked(undefined);
    } else if (pokemon) {
      setClicked(id);
    }
  }
  return (
    <Container id={id} clicked={clicked}>
      <span onClick={boolean === false ? handleClick : () => {}}></span>
      <div></div>
      <svg
        width="69"
        height="69"
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2293 37.3271C14.3347 37.3271 17.4401 37.3893 20.5411 37.296C21.754 37.2605 22.3182 37.6159 22.7624 38.7888C24.8327 44.2399 29.422 47.4298 34.9265 47.4076C40.4132 47.3853 45.1313 44.1111 47.095 38.7532C47.5081 37.6248 47.988 37.296 49.1164 37.3049C55.0296 37.3538 60.9428 37.3671 66.8515 37.296C68.2599 37.2783 68.5931 37.6203 68.3754 39.0509C65.7897 56.2174 51.8042 68.608 34.58 68.9234C17.951 69.2255 3.48124 57.1814 0.313616 40.397C-0.263932 37.3271 -0.263931 37.3271 2.80596 37.3271C5.60928 37.3227 8.4215 37.3271 11.2293 37.3271Z"
          fill={pokemon?.colors?.colorTwo || pokemon?.colorTwo || "white"}
        />
        <path
          d="M11.2959 31.6494C8.41262 31.6494 5.52933 31.6494 2.64603 31.6494C-0.206167 31.6494 -0.286135 31.6317 0.273641 28.8594C3.09918 14.8917 11.2515 5.44653 24.9083 1.38593C44.9358 -4.5717 65.7498 9.36053 68.3976 30.0989C68.5398 31.214 68.4109 31.6894 67.1226 31.6761C61.0628 31.6183 54.9985 31.6272 48.9343 31.6716C47.8414 31.6805 47.4771 31.254 47.0994 30.2678C45.0025 24.7766 40.4532 21.5646 34.9754 21.5557C29.3732 21.5468 24.9527 24.7011 22.7536 30.4055C22.3626 31.4184 21.8562 31.6983 20.8299 31.6761C17.6534 31.6094 14.4724 31.6494 11.2959 31.6494Z"
          fill={pokemon?.colors?.colorOne || pokemon?.colorOne || "white"}
        />
      </svg>
      <img src={pokemon?.image} alt={pokemon?.name}></img>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;

  span {
    z-index: 3;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: -5px;
  }

  div {
    display: ${(props) =>
      props.clicked === undefined
        ? "none"
        : props.clicked === props.id
        ? "none"
        : "block"};
    background: #c4c4c4;
    mix-blend-mode: saturation;
    opacity: 0.85;
    z-index: 2;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: -5px;
  }

  img {
    position: absolute;
    z-index: 1;
    height: 80px;
    top: -5px;
    left: -5px;
  }
`;
