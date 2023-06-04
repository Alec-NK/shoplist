import styled from "styled-components";

export const MobileContainer = styled.div`
  display: grid;
  grid-template-rows: 35vh 65vh;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  padding: 0 20px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0,
    rgba(255, 255, 255, 1) 75%,
    ${(props) => props.theme.green} 75%
  );
`;

export const BackBtn = styled.button`
  position: absolute;
  top: 3%;
  left: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Roboto", sans-serif;

  .back_title {
    margin-left: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white_gray};

  /* .total {
    padding: 20px 5px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.white_gray};
  } */
`;

export const Title = styled.div`
  margin-top: 22%;

  font-weight: bold;
  font-size: 26px;
`;

export const TotalScore = styled.div`
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 16vh;
  padding: 15px;
  border-radius: 6px 6px 0 0;
  color: ${(props) => props.theme.white_gray};
  background-color: ${(props) => props.theme.dark_sea_green};

  .title_total {
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
  }

  .score {
    font-weight: 600;
    font-size: 35px;
  }

  .btn_details {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100.1%;
    height: 40px;
    padding: 15px;
    font-weight: 600;
    border-radius: 0 0 6px 6px;
    background-color: ${(props) => props.theme.sea_green};
  }
`;

export const SearchInput = styled.div`
  /* padding: 0px 20px; */

  input {
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.white_gray};

    font-size: 15px;

    &:focus {
      box-shadow: none;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 10px 20px; */

  .title {
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0 10px 0;
  }
`;

export const Products = styled.div`
  width: 100%;
  height: 72%;
  /* border: 1px solid black; */
  overflow: auto;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* border: 1px solid red; */
  background-color: #bfbfbf;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 16px;
  background-color: ${(props) => props.theme.light_gray};

  .btn_delete {
    margin-left: 45px;
    font-size: 20px;
    color: ${(props) => props.theme.red};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.gray};
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  width: 60%;

  .item_title {
    font-weight: 600;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export const AddProductButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.sea_green};
  color: #f4f4f4;
  transition: 0.2s;

  .button_icon {
    margin-right: 5px;
    font-size: 20px;
  }

  > div {
    font-size: 15px;
  }

  &:hover {
    background-color: ${(props) => props.theme.dark_sea_green};
    transition: 0.2s;
  }
`;
