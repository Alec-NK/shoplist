import { useRef, useState, useContext } from "react";
import { Formik, FormikProps, Field } from "formik";
import { Input, NumberInput, NumberInputField, Select } from "@chakra-ui/react";

import { Modal } from "../../../../components/Modal";
import { ListContext } from "../../../../context/ListContext";

import { categories } from "../../../../utils/categories";

import {
  ContentModal,
  FooterModal,
  InputContainer,
  Label,
  Row,
} from "./styles";

type RegisterModalProps = {
  setIsOpen: () => void;
};

type FormikValues = {
  product_name: string;
  price: string;
  quantity: string;
  category: string;
};

const RegisterModal = ({ setIsOpen }: RegisterModalProps) => {
  const formRef = useRef<FormikProps<FormikValues>>(null);
  const { AddProduct } = useContext(ListContext);

  const initial = {
    product_name: "",
    price: "",
    quantity: "",
    category: "",
  };

  const handleSubmit = () => {
    if (formRef.current) {
      formRef?.current.handleSubmit();
    }
  };

  const Submit = () => {
    if (formRef.current) {
      const values = formRef.current.values;

      AddProduct(values);
    }
  };

  return (
    <Modal title="Cadastrar Produto">
      <Formik innerRef={formRef} initialValues={initial} onSubmit={Submit}>
        <ContentModal>
          <Row>
            <InputContainer>
              <Label>Nome do produto</Label>
              <Field name="product_name">
                {({ field, form }: any) => (
                  <Input {...field} placeholder="Ex: Laranja" />
                )}
              </Field>
            </InputContainer>
          </Row>
          <Row double>
            <InputContainer>
              <Label>Preço (R$)</Label>
              <Field name="price">
                {({ field, form }: any) => (
                  <NumberInput style={{ marginRight: "10px" }}>
                    <NumberInputField {...field} placeholder="00.00" />
                  </NumberInput>
                )}
              </Field>
            </InputContainer>
            <InputContainer>
              <Label>Quantidade</Label>
              <Field name="quantity">
                {({ field, form }: any) => (
                  <NumberInput>
                    <NumberInputField {...field} placeholder="0" />
                  </NumberInput>
                )}
              </Field>
            </InputContainer>
          </Row>
          <Row>
            <InputContainer>
              <Label>Categoria</Label>
              <Field name="category">
                {({ field, form }: any) => (
                  <Select {...field} placeholder="Selecione uma categoria">
                    {categories.map((category, index) => {
                      return (
                        <option key={index} value={category.value}>
                          {category.text}
                        </option>
                      );
                    })}
                  </Select>
                )}
              </Field>
            </InputContainer>
          </Row>
        </ContentModal>
      </Formik>
      <FooterModal>
        <button
          className="btn_cancel"
          style={{ marginRight: "10px" }}
          onClick={setIsOpen}
        >
          CANCELAR
        </button>
        <button type="button" onClick={handleSubmit} className="btn_register">
          CADASTRAR
        </button>
      </FooterModal>
    </Modal>
  );
};

export default RegisterModal;
