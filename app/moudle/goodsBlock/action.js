import Axios from 'axios';
export const GB_ADD_TO_CART ='GB_ADD_TO_CART' /*定義action 類別 */
export const GB_REMOVE_FROM_CART='GB_REMOVE_FROM_CART'
export const ADD_NUMBER = 'ADD_NUMBER'
export const SUB_NUMBER = 'SUB_NUMBER'
export const START_GET_API_PROMISE = 'START_GET_API_PROMISE'
export const GET_API_PROMISE = 'GET_API_PROMISE'
// Promise

export function PromiseAPI(){ /*　接收　view 傳送進來的函數及參數 */
    console.log('START_GET_API_PROMISE');
    
    return{
        type:START_GET_API_PROMISE,　// action 類別
        // number:number //屬性
    }
}


// export const getVideoDetail = ({id})=>async (dispatch)=>{//打開新介面在拿以前的值

export const GetPromiseAPI = () => async (dispatch) => {//打開新介面在拿以前的值

        let APIdata = [] ; 
        const res = await Axios.get('http://jsonplaceholder.typicode.com/todos').then(
            // res => console.log('res',res)
        );//打API拿值 
        console.log('fetch:',res)
        res.data.map( (item, index, array) =>{ //
            if(item.id<20){ //迭代20筆資料
                console.log('item',item);
                APIdata.push(item); //裝進陣列堆疊 物件
                // console.log('iteasdasdasm',data);
            }
        })
        console.log('iteasdasdasm',APIdata);
       
		await dispatch(
            {type: GET_API_PROMISE, data: APIdata} //把action給到reducer
        );//更新值並且到reducer更新
		
};


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


