import styled from "styled-components";

type RowProps = {
  double?: boolean;
};

export const ContentModal = styled.div`
  margin: 15px 0 30px 0;
  font-family: "Montserrat", sans-serif;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;

  input {
    box-shadow: none;
    margin-bottom: 15px;
  }

  input:focus,
  select:focus {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.sea_green};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const FooterModal = styled.div`
  button {
    width: 48%;
    padding: 5px;
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    color: #f4f4f4;
  }

  .btn_cancel {
    background-color: ${(props) => props.theme.gray};
  }

  .btn_register {
    background-color: ${(props) => props.theme.sea_green};
  }
`;
