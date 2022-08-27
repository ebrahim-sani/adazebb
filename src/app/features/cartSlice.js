import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [{ name: state.name, id: state.id, price: state.price }],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                state.cartItems.push(newItem);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id,
            );

            state.cartItems = nextCartItems;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
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
