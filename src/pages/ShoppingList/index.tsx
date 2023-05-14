import { useState } from "react";
import { InputLeftElement } from "@chakra-ui/input";
import { InputGroup, Input } from "@chakra-ui/react";

import { Modal } from "../../components/Modal";

import { FaTrash, FaWineBottle } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

import {
  AddProductButton,
  BackBtn,
  ContentModal,
  FooterModal,
  Header,
  HeaderModal,
  Icon,
  ListContainer,
  MobileContainer,
  ProductCard,
  ProductInfos,
  Products,
  SearchInput,
  Title,
  TotalScore,
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
  const [isModalMobileOpen, setIsModalMobileOpen] = useState(false);

  // const SearchItems = (array, search) => {
  //   const textFormatted = search.toLowerCase().replace(/[\u0300-\u036f]/g, "");
  //   const items = array.filter((product) => {
  //     const prod = product.toLowerCase().replace(/[\u0300-\u036f]/g, "");
  //     return prod.includes(textFormatted);
  //   });

  //   return items;
  // };

  const toggleModal = () => {
    console.log("teste");
    setIsModalMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <MobileContainer>
        <Header>
          <BackBtn>
            <MdArrowBackIosNew />
            <span className="back_title">Voltar</span>
          </BackBtn>
          <Title>Nome da Lista</Title>
          {/* <div className="total">10</div> */}
        </Header>
        <TotalScore>
          <div className="title_total">Total da compra</div>
          <div className="score">R$ 300,00</div>
          <button className="btn_details">
            <span>Ver detalhes</span>
            <span>{">"}</span>
          </button>
        </TotalScore>
        {/* <SearchInput>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<IoMdSearch color="gray.300" />}
            />
            <Input type="text" placeholder="Procure o nome do produto" />
          </InputGroup>
        </SearchInput> */}
        <ListContainer>
          <div className="title">Lista de Compras</div>
          <Products>
            {lista.map((item) => {
              return (
                <div className="lista">
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
                </div>
              );
            })}
          </Products>
          <AddProductButton onClick={toggleModal}>
            <FiPlusCircle className="button_icon" />
            <div>ADICIONAR PRODUTO</div>
          </AddProductButton>
        </ListContainer>
      </MobileContainer>

      {/* {isModalMobileOpen && (
        <Modal>
          <HeaderModal>
            <div className="title_modal">Cadastrar Produto</div>
          </HeaderModal>
          <ContentModal>
            <input type="text" placeholder="Testando" />
            <input type="text" placeholder="Testando" />
            <input type="text" placeholder="Testando" />
          </ContentModal>
          <FooterModal>
            <button style={{ marginRight: "10px" }}>Cancelar</button>
            <button>Cadastrar</button>
          </FooterModal>
        </Modal>
      )} */}
    </>
  );
};

export default ShoppingList;
