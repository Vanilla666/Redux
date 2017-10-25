import React from 'react'
import GoodRow from './Row.jsx'

class List extends React.Component{
    render() {
      
      return (
        <div>
            <h1>已選購商品</h1>
          <ul>
            
            {this.props.cart.map((inCart,index)=>
              <GoodRow key={index} name={inCart.name} value={inCart.val} id={inCart.id} onDelClick={this.props.onDelClick} />
            )}
              
          </ul>
        </div>
      )
    }
}

export default List