import React from 'react'
import { connect } from 'react-redux'
import Button from './component/Button.jsx'
import GoodList from './moudle/goodsSelected/List.jsx'
import GoodBlock from './moudle/goodsBlock/Block.jsx'

import { addToCart,removeFromCart } from './moudle/goodsBlock/action'

class App extends React.Component{
  render() {
    const {dispatch,cart}=this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <GoodList
              cart={cart}
              onDelClick={id=>dispatch(removeFromCart(id))}
            /> 
          </div>
          <div className="col">
            <GoodBlock title="衛生紙" context="五月花超柔" availableVal='5'
              onAddClick={(good,val)=>dispatch(addToCart(good,val))}/>
            <GoodBlock title="黑人牙膏" context="特價中" availableVal='15'
              onAddClick={(good,val)=>dispatch(addToCart(good,val))}/>
          </div>
        </div>


  </div>
    )
  }
}

// 取值出來
function select(state){
  return { cart:state.goods }
}
                     //select()映射到porps
export default connect(select)(App)

