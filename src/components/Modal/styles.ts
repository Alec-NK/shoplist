import styled from "styled-components";

export const Background = styled.div`
  @keyframes start_animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  animation: start_animation;
  animation-duration: 0.3s;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
  @keyframes zoom_animation {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  position: relative;
  display: grid;
  grid-template-rows: 20% 60% 20%;
  background-color: white;
  padding: 35px 25px 30px 25px;
  width: 90%;
  max-height: 60%;
  border-radius: 8px;
  animation: zoom_animation;
  animation-duration: 0.4s;
`;

export const Title = styled.div`
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border-radius: 5px;
  color: ${(props) => props.theme.white_gray};
  background-color: ${(props) => props.theme.sea_green};
`;
