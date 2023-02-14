import { InputLeftElement } from "@chakra-ui/input";
import { InputGroup, Input } from "@chakra-ui/react";
import { useState } from "react";

import { FaTrash, FaWineBottle } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

import {
  AddProductButton,
  Header,
  Icon,
  ListContainer,
  MobileContainer,
  PageButton,
  ProductCard,
  ProductInfos,
  Products,
  SearchInput,
  Title,
} from "./styles";

const lista = [
  {
    title: "Queijo Cheddar",
    quantity: "x1",
  },
  {
    title: "Alface",
    quantity: "x1",
  },
  {
    title: "Tomate",
    quantity: "x3",
  },
  {
    title: "Ketchup",
    quantity: "x1",
  },
  {
    title: "Maionese",
    quantity: "x1",
  },
  {
    title: "Queijo",
    quantity: "x2",
  },
  {
    title: "Pão",
    quantity: "x10",
  },
];

const ShoppingList = () => {
  const [isChecklistActive, setIsChecklistActive] = useState(true);
  const [isCalculatorActive, setIsCalculatorActive] = useState(false);

  const toggleChecklistPage = () => {
    setIsChecklistActive(true);
    setIsCalculatorActive(false);
  };

  const toggleCalculatorPage = () => {
    setIsChecklistActive(false);
    setIsCalculatorActive(true);
  };

  // const SearchItems = (array, search) => {
  //   const textFormatted = search.toLowerCase().replace(/[\u0300-\u036f]/g, "");
  //   const items = array.filter((product) => {
  //     const prod = product.toLowerCase().replace(/[\u0300-\u036f]/g, "");
  //     return prod.includes(textFormatted);
  //   });

  //   return items;
  // };

  return isChecklistActive ? (
    <MobileContainer>
      <Header>
        <div className="buttons">
          <PageButton
            active={isChecklistActive}
            onClick={toggleChecklistPage}
            style={{ marginRight: "15px" }}
          >
            Checklist
          </PageButton>
          <PageButton
            active={isCalculatorActive}
            onClick={toggleCalculatorPage}
          >
            Calculadora
          </PageButton>
        </div>
        <Title>Nome da Lista</Title>
        {/* <div className="total">10</div> */}
      </Header>
      <SearchInput>
        {/* <input type="search" placeholder="Procure o nome do produto" /> */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<IoMdSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Procure o nome do produto" />
        </InputGroup>
      </SearchInput>
      <ListContainer>
        <div className="title">Lista de Compras</div>
        <Products>
          {lista.map((item) => {
            return (
              <ProductCard>
                <Icon>
                  <FaWineBottle />
                </Icon>
                <ProductInfos>
                  <div className="name">{item.title}</div>
                  <div className="qtd">{item.quantity}</div>
                </ProductInfos>
                {/* <button>
                  <FaTrash />
                </button> */}
              </ProductCard>
            );
          })}
        </Products>
        <AddProductButton>
          <FiPlusCircle className="button_icon" />
          <div>ADICIONAR PRODUTO</div>
        </AddProductButton>
      </ListContainer>
    </MobileContainer>
  ) : (
    <MobileContainer>
      <Header>
        <div className="buttons">
          <PageButton
            active={isChecklistActive}
            onClick={toggleChecklistPage}
            style={{ marginRight: "15px" }}
          >
            Checklist
          </PageButton>
          <PageButton
            active={isCalculatorActive}
            onClick={toggleCalculatorPage}
          >
            Calculadora
          </PageButton>
        </div>
        <Title>Nome da Lista</Title>
      </Header>
    </MobileContainer>
  );
};

export default ShoppingList;
