import React from 'react';
import { connect } from 'react-redux';
import Button from './component/Button.jsx';
import GoodList from './moudle/goodsSelected/List.jsx';
import GoodBlock from './moudle/goodsBlock/Block.jsx';
import Add from './component/Add.jsx';
import Sub from './component/Sub.jsx';
import { createAction } from 'redux-actions';
import { Link } from 'react-router-dom';
import "babel-polyfill";

import { addToCart,removeFromCart,addNumber,subNumber,PromiseAPI,GetPromiseAPI } from './moudle/goodsBlock/action'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      number:0
    }
  }

  componentDidMount() { //元件已經存在後掛上
    const { dispatch } = this.props
    // dispatch(PromiseAPI()); // 發出同步 Action
    dispatch(GetPromiseAPI()); // 發出異步 Action

  }

  sub = () => { // 減法 
    
    this.props.dispatch(subNumber());//發action
  }

  add = () => { // 加法 

    this.props.dispatch(addNumber());//發action
  }

  render() {
    const {dispatch,cart,ss,APIdata,APIerror}=this.props,　//解構
          {sub,add} =this;
          // console.log('asdasasdasad',APIerror);
          // console.log('numberss',ss); //從store拿出的值
          console.log('APIerror:',APIerror);
          // APIdata.map( (item,index) => {
          //   console.log('asdasdasd',item);
          // });
    const message = APIdata.map( (content,index) => //(當前內容,索引值)
      //   console.log('asdasdasd',item);
    <li  key={index} >
       {content.userId} {content.id} {content.title} 
    </li>
    ); 


    return (
      <div className="container">
      

        <Sub number={this.state.number} onSubClick={this.sub}/>
          {ss}
        <Add number={this.state.number} onAddClick={this.add}/>
        <button> <Link to="/">home</Link> </button>
        <button> <Link to="/Show">Show</Link> </button>
        {/* <button> <Link to="/Add">Add</Link> </button> */}

        <div className="row">
          <div className="col-4">
            <GoodList
              cart={cart}
              onDelClick={id=>dispatch(removeFromCart(id))}
            /> 
          </div>
          <div className="col">
            <GoodBlock title="衛生紙" context="五月花超柔" availableVal='5'
              onAddClick={(good,val)=>dispatch(addToCart(good,val))}/> {/* (good,val)接收數量參數  */}
            <GoodBlock title="黑人牙膏" context="特價中" availableVal='15'
              onAddClick={(good,val)=>dispatch(addToCart(good,val))}/>
          </div>
          <ul>
            { message && message  } {/* T && T */}
            { APIerror && APIerror } {/* F && F */}
          </ul>


          
        </div>

  </div>
    )
  }
}

// 從 store 取值出來
function select(x){　//x接收store傳來的值 綁定一個函數 把store拿出來
//  const {data} = x;

  console.log('從 store 取值出來',x.error); //取store的值
  return { 
           APIerror:x.error,
           cart:x.goods,
           APIdata: x.getdata,//回傳陣列才能map
           ss :x.number //從store讀取number 然後ss會被放入this.props 變成 this.props.ss
        } //現在可以使用 this.props.cart 獲取你在 store .goods 中保存的內容
}
  //select()映射到porps
export default connect(select)(App)//store跟組件綁定 store的cart 會丟入this.props

