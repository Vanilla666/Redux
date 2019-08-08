import {
        START_GET_API_PROMISE, //測試promsieAPI抓取資料
        GET_API_PROMISE,
        GB_ADD_TO_CART,
        GB_REMOVE_FROM_CART,
        ADD_NUMBER,//加法事件
        SUB_NUMBER,//減法事件
} from './action.js'　//引入從action

const initSta = { //reducer 處理好後放入  store\
    getdata:[], //API資料放在陣列
    goods:[],
    idCounter:0,
    number:0
};

var reducer = function(state=initSta, action){　// state初始值是 initSta設定的 action是從Action拿過來的
    // console.log('userReducer was called with state', state, 'and action', action)

    // state是上面的物件(initSta)
    switch(action.type){

        case START_GET_API_PROMISE:
        return{ //改變好後存回store
            ...state,　//批量復值 展開目前紀錄 此紀錄可被新紀錄覆蓋 
        }
        case GET_API_PROMISE:
        return{ //改變好後存回store
            ...state,　//批量復值 展開目前紀錄 此紀錄可被新紀錄覆蓋 
            getdata:action.data //拿物件(action)data 給到view頁面時 x.getdata.data 的形式 先reducer在action
        }
        case GB_ADD_TO_CART :
            return{ //改變好後存回store
                ...state,　//批量復值 展開目前紀錄 此紀錄可被新紀錄覆蓋 
                goods:[
                    ...state.goods,　 //批量復值 把父元素goods全部拿來看
                    { name:action.good, val:action.val, id:state.idCounter+1 } //改變屬性值
                ],
                idCounter:state.idCounter+1
            }
        case GB_REMOVE_FROM_CART:
            return {
                ...state,
                goods: state.goods.filter((good) => good.id !== action.id)
            }
        case ADD_NUMBER:
        return{
            ...state,//批量復值 展開目前紀錄 此紀錄可被新紀錄覆蓋 
            number:state.number+1//上面的值+1 上面的物件(number)
        }
        case SUB_NUMBER:
        return{
            ...state,
            number:state.number-1//上面的值-1 
        }
        default:
            return state;
    }
}

export default reducer　//預設輸出　
