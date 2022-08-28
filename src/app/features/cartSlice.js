import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        addToCart(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id,
            );

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    quantity: state.cartItems[existingIndex].quantity + 1,
                };
                toast.info("Increased product quantity", {
                    position: "top-left",
                });
            } else {
                let tempProductItem = { ...action.payload, quantity: 1 };
                state.cartItems.push(tempProductItem);
                toast.success("Product added to cart", {
                    position: "top-left",
                });
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id,
                    );

                    state.cartItems = nextCartItems;

                    toast.error("Product removed from cart", {
                        position: "top-left",
                    });
                }
                localStorage.setItem("cart", JSON.stringify(state.cartItems));
                return state;
            });
        },
        increaseQty(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id,
            );

            if (state.cartItems[itemIndex].quantity >= 1) {
                state.cartItems[itemIndex].quantity += 1;
            } else if (state.cartItems[itemIndex].quantity === 1) {
                const nextCartIndex = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id,
                );
                state.cartItems = nextCartIndex;
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        decreaseQty(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id,
            );

            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            } else if (state.cartItems[itemIndex].quantity === 1) {
                const nextCartIndex = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id,
                );
                state.cartItems = nextCartIndex;
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                },
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});

export const { addToCart, removeFromCart, getTotal, decreaseQty, increaseQty } =
    cartSlice.actions;

export default cartSlice.reducer;
