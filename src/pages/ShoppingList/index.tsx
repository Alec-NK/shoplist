import { useState, useContext, useEffect } from "react";
import { InputLeftElement } from "@chakra-ui/input";
import { InputGroup, Input } from "@chakra-ui/react";

import RegisterModal from "./Modals/RegisterModal";
import { ListContext } from "../../context/ListContext";

import { FaRegTrashAlt, FaWineBottle } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

import { formatNumberToBRLCurrency } from "../../utils/format-currency";

import {
    AddProductButton,
    BackBtn,
    Header,
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
    const { totalPrice, products } = useContext(ListContext);

    // const SearchItems = (array, search) => {
    //   const textFormatted = search.toLowerCase().replace(/[\u0300-\u036f]/g, "");
    //   const items = array.filter((product) => {
    //     const prod = product.toLowerCase().replace(/[\u0300-\u036f]/g, "");
    //     return prod.includes(textFormatted);
    //   });

    //   return items;
    // };

    const toggleModal = () => {
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
                    <div className="score">
                        {formatNumberToBRLCurrency(totalPrice)}
                    </div>
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
                        {products.map((item) => {
                            return (
                                <ProductCard>
                                    <Icon>
                                        <FaWineBottle />
                                    </Icon>
                                    <ProductInfos>
                                        <div>
                                            <div className="item_title">
                                                {item.title}
                                            </div>
                                            <div className="price">
                                                {formatNumberToBRLCurrency(
                                                    item.price
                                                )}
                                            </div>
                                        </div>
                                        <span className="qtd">
                                            {item.quantity}
                                        </span>
                                    </ProductInfos>
                                    <button className="btn_delete">
                                        <FaRegTrashAlt />
                                    </button>
                                </ProductCard>
                            );
                        })}
                    </Products>
                    <AddProductButton onClick={toggleModal}>
                        <FiPlusCircle className="button_icon" />
                        <div>ADICIONAR PRODUTO</div>
                    </AddProductButton>
                </ListContainer>
            </MobileContainer>

            {isModalMobileOpen && <RegisterModal setIsOpen={toggleModal} />}
        </>
    );
};

export default ShoppingList;
