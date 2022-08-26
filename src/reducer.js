export const initialState = {
    cart: [],
};
const getTotalPrice = (cart) =>
    cart
        ?.reduce((amount, item) => item.unitPrice * item.quantity + amount, 0)
        .toFixed(2);

const getTotalItems = (cart) =>
    cart?.reduce((total, item) => item.quantity + total, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const itemIndex = state.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id,
            );
            let newCart = [...state.cart];
            if (itemIndex >= 0) {
                newCart[itemIndex].quantity += 1;
            } else {
                newCart = [...state.cart, action.item];
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart,
            };
        }

        case "REMOVE_FROM_CART": {
            const itemIndex = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id,
            );
            let newCart = [...state.cart];
            if (itemIndex >= 0) {
                if (newCart[itemIndex].quantity > 1) {
                    newCart[itemIndex].quantity -= 1;
                } else {
                    newCart.splice(itemIndex, 1);
                }
            } else {
                console.warn("Item Not Found");
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart,
            };
        }

        case "REMOVE_ALL_ITEMS": {
            const itemIndex = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id,
            );
            let newCart = [...state.cart];
            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            } else {
                console.warn("Item Not Found");
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart,
            };
        }

        default:
            return state;
    }
};

export default reducer;
export { getTotalPrice, getTotalItems };
