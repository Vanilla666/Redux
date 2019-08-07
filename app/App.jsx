import React from 'react'
import { connect } from 'react-redux'
import Button from './component/Button.jsx'
import GoodList from './moudle/goodsSelected/List.jsx'
import GoodBlock from './moudle/goodsBlock/Block.jsx'
import Add from './component/Add.jsx'
import Sub from './component/Sub.jsx'


import { addToCart,removeFromCart,addNumber,subNumber } from './moudle/goodsBlock/action'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      number:0
    }
  }

  sub = (k) => { // 減法
    console.log('k',k);
    // const {dispatch}=this.props　//解構

    // this.state.number;
  //  this.setState({
  //     number:this.state.number-1
  //  });
    // console.log('---',this.state.number);
    this.props.dispatch(subNumber(this.state.number));
  }

  add = (k) => { // 加法 從子組件傳入的參數
    console.log('k',k);
  //   this.setState({
  //     number:this.state.number+1
  //  });
    // console.log('+++',this.state.number);
    this.props.dispatch(addNumber(k));
  }

  render() {
    const {dispatch,cart,ss}=this.props,　//解構
          {sub,add} =this;
    // console.log(`印出　props: ${JSON.stringify(this.props)} `);　//印出　props
    return (
      <div className="container">
        <Sub number={this.state.number} onSubClick={this.sub}/>
          {ss}
        <Add number={this.state.number} onAddClick={this.add}/>

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


          
        </div>

  </div>
    )
  }
}

// 從 store 取值出來
function select(x){　//x接收store傳來的值 綁定一個函數 把store拿出來
  console.log('從 store 取值出來',x); //cart 可以自己命名
  return { cart:x.goods,
           ss :x.number //從store讀取number 然後ss會被放入this.props 變成 this.props.ss
        } //現在可以使用 this.props.cart 獲取你在 store .goods 中保存的內容
}
  //select()映射到porps
export default connect(select)(App)//store跟組件綁定 store的cart 會丟入this.props

