export const GB_ADD_TO_CART ='GB_ADD_TO_CART' /*定義action 類別 */
export const GB_REMOVE_FROM_CART='GB_REMOVE_FROM_CART'
export const ADD_NUMBER = 'ADD_NUMBER'
export const SUB_NUMBER = 'SUB_NUMBER'

export function addToCart(good,val){ /*　接收　view 傳送進來的函數及參數 */
    return{
        type:GB_ADD_TO_CART,　// action 類別
        good:good,　//添加的內容 
        val:val
    }
}

export function removeFromCart(id){
    return{
        type:GB_REMOVE_FROM_CART,
        id
    }
}

export function addNumber(number){ /*　接收　view 傳送進來的函數及參數 */
    console.log('addNumber',number);

    return{
        type:ADD_NUMBER,　// action 類別
        number:number
    }
}


export function subNumber(number){ /*　接收　view 傳送進來的函數及參數 */
    console.log('subNumber',number);
    return{
        type:SUB_NUMBER,　// action 類別
        number:number //屬性

    }
}