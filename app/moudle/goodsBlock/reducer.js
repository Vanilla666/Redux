import { GB_ADD_TO_CART,GB_REMOVE_FROM_CART } from './action.js'

const initSta = {
    goods:[],
    idCounter:0
};

var reducer = function(state=initSta, action){
    console.log('userReducer was called with state', state, 'and action', action)

    
    // switch(action.type){
    //     case GB_ADD_TO_CART :
    //         return {
    //             ...state,
    //             good:action.good
    //         }
    //     default:
    //         return state;
    // }

    switch(action.type){
        case GB_ADD_TO_CART :
            return{
                ...state,
                goods:[
                    ...state.goods,
                    { name:action.good, val:action.val, id:state.idCounter+1 }
                ],
                idCounter:state.idCounter+1
            }
        case GB_REMOVE_FROM_CART:
            return {
                ...state,
                goods: state.goods.filter((good) => good.id !== action.id)
            }
        default:
            return state;
    }
}

export default reducer
