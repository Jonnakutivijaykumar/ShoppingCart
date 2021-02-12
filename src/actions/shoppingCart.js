
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const GET_SELECTED_PRODUCTS = 'GET_SELECTED_PRODUCTS'

export const changeQuantity = (id, value) => ({
    type: CHANGE_QUANTITY,
    id,
    value
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    id,
});

export const getSelectedProducts = () => ({
    type: GET_SELECTED_PRODUCTS,
})