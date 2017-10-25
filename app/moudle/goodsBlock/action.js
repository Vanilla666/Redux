export const GB_ADD_TO_CART ='GB_ADD_TO_CART'
export const GB_REMOVE_FROM_CART='GB_REMOVE_FROM_CART'

export function addToCart(good,val){
    return{
        type:GB_ADD_TO_CART,
        good,
        val:val
    }
}

export function removeFromCart(id){
    return{
        type:GB_REMOVE_FROM_CART,
        id
    }
}