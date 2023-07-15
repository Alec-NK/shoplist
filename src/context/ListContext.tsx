import { createContext, useState, useEffect } from "react";

import { AddProductProps, ProductType } from "../types/products";

type ListContextProps = {
    products: ProductType[];
    totalPrice: number;
    AddProduct: (product: AddProductProps) => void;
    // getProducts: () => Array<ProductType>;
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

        const updated_products = [...products, new_product];
        localStorage.setItem("products", JSON.stringify(updated_products));

        getProducts();
    };

    const getProducts = () => {
        const prod_storage = localStorage.getItem("products");
        const products_list: Array<ProductType> = prod_storage
            ? JSON.parse(prod_storage)
            : [];
        setProducts(products_list);

        const updated_total = products_list.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
        setTotalPrice(updated_total);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ListContext.Provider value={{ products, totalPrice, AddProduct }}>
            {children}
        </ListContext.Provider>
    );
};
