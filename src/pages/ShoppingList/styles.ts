import styled from "styled-components";

type PageButtonProps = {
  active: boolean;
};

export const MobileContainer = styled.div`
  display: grid;
  grid-template-rows: 25vh 5vh 70vh;
  height: 100vh;
  font-family: "Manrope", sans-serif;
  padding: 0 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  .buttons {
    display: flex;
    justify-content: center;
  }

  /* .total {
    padding: 20px 5px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.white_gray};
  } */
`;

export const PageButton = styled.button<PageButtonProps>`
  width: 50%;
  padding: 8px;
  margin-top: 30px;
  border-radius: 8px;
  font-weight: 600;
  outline: none;
  color: ${(props) => (props.active ? "#f4f4f4" : "black")};
  background-color: ${(props) =>
    props.active ? props.theme.sea_green : props.theme.white_gray};
`;

export const Title = styled.div`
  margin-top: 50px;
  font-weight: bold;
  font-size: 26px;
`;

export const SearchInput = styled.div`
  /* padding: 0px 20px; */

  input {
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.white_gray};
    font-family: "Manrope", sans-serif;
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
    font-weight: 700;
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
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border-radius: 5px;
  background-color: gray;
`;

export const ProductInfos = styled.div`
  /* display: flex;
  flex-direction: row; */
  margin-left: 20px;
`;

export const AddProductButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 15px;
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
