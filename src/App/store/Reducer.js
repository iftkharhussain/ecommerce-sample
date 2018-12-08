const Reducer = (state, action) => {
    
    console.log(action);
    if (action.type === 'AUTH') {
        return {
            ...state,
            auth: action.auth
        }
    }
    if (action.type === 'QUERY') {
        return {
            ...state,
            query: action.query
        }
    }

    if (action.type === 'products') {
        return {
            ...state,
            products: action.data
        }
    }

    if (action.type === 'cart') {
        return {
            ...state,
            cart: state.cart.concat(action.data)
        };
    }

    if (action.type === 'cart_remove_item') {
        let newCart = state.cart.filter((item) =>  action.data !== item)
        return {
            ...state,
            cart: newCart
        };
    }


    

    return state;
}


export default Reducer;