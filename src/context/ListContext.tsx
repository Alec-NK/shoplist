import { createContext, useState } from "react";

import { AddProductProps, ProductType } from "../types/products";

type ListContextProps = {
  products: ProductType[];
  totalPrice: number;
  AddProduct: (product: AddProductProps) => void;
};

type ListProviderProps = {
  children: React.ReactNode;
};

export const ListContext = createContext({} as ListContextProps);

export const ListProvider = ({ children }: ListProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const AddProduct = (product: AddProductProps) => {
    const new_product = {
      title: product.product_name,
      price: Number(product.price),
      quantity: Number(product.quantity),
      category: product.category,
    };

    products.push(new_product);
    const new_list = products;
    localStorage.setItem("products", JSON.stringify(new_list));
    setProducts(new_list);

    let price = 0;
    new_list.forEach((prod) => {
      price += prod.price;
    });
    setTotalPrice(price);
  };

  return (
    <ListContext.Provider value={{ products, totalPrice, AddProduct }}>
      {children}
    </ListContext.Provider>
  );
};
