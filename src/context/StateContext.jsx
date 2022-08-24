import React, { createContext, useContext, useState } from "react";

// import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    const addToCart = (product, quantity) => {
        const checkProductInCart = cartItems.find(
            (item) => item.id === product.id,
        );

        setTotalPrice((prev) => prev + product.price * quantity);
        setTotalQuantities((prev) => prev + quantity);

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity,
                    };
                }
            });
            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        // toast add success
    };

    const removeItemFromCart = (product) => {
        foundProduct = cartItems.find((item) => item.id === product.id);
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setTotalPrice(
            (prev) => prev - foundProduct.price * foundProduct.quantity,
        );
        setTotalQuantities((prev) => prev - foundProduct.quantity);
        // toast remove prod
        setCartItems(newCartItems);
    };

    let index;
    let foundProduct;
    const increaseItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item.id === id);
        index = cartItems.find((product) => product.id === product.id);

        const newCartItems = cartItems.filter((item) => item.id !== id);

        if (value === "increment") {
            let updatedCartItem = [
                ...newCartItems,
                { ...foundProduct, quantity: foundProduct.quantity + 1 },
            ];
            setCartItems(updatedCartItem);
            setTotalQuantities((prev) => prev + 1);
            setTotalPrice((prev) => prev + foundProduct.price);
        }

        if (value === "decrement") {
            if (foundProduct.quantity > 1) {
                let updatedCartItems = [
                    ...newCartItems,
                    { ...foundProduct, quantity: foundProduct - 1 },
                ];
                setCartItems(updatedCartItems);
                setTotalQuantities((prev) => prev - 1);
                setTotalPrice((prev) => prev - foundProduct.price);
            }
        }

        const incQty = () => {
            setQty((prev) => prev + 1);
        };

        const decQty = () => {
            setQty((prev) => {
                if (prev - 1 < 1) return 1;
                return prev - 1;
            });
        };
    };

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                removeItemFromCart,
                incQty,
                increaseItemQuantity,
                addToCart,
                qty,
                setCartItems,
                setTotalQuantities,
                setTotalPrice,
                totalPrice,
                setTotalPrice,
                increaseItemQuantity,
                cartItems,
                decQty,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
