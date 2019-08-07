import React from 'react'
import Button from '../../component/Button.jsx'

import {GB_ADD_TO_CART} from './action'

export default class Block extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:0,
            availableVal:this.props.availableVal
        }
        this.addValue=this.addValue.bind(this)
        this.minusValue=this.minusValue.bind(this)
        this.addtoCart=this.addtoCart.bind(this)　// 綁定事件
    }

    addtoCart(){
        let val=this.state.value
        let ava=this.state.availableVal
        ava=ava-val
        if(this.state.value>0){
            let goodName=this.props.title //接收外面title名子
            let takeVal=this.state.value //內部組件變數
            this.props.onAddClick(goodName,takeVal)//傳出事件給父組件
        }

        this.setState({
            value:0,
            availableVal:ava
        })
    }

    addValue(){
        console.log("add")
        let val=this.state.value
        let ava=this.state.availableVal
        if(ava>val){
            val++
        }
        this.setState({
            value:val,
        })
    }

    minusValue(){
        console.log("minus")
        let val=this.state.value
        let ava=this.state.availableVal
        if(val>0){
            val--
        }
        this.setState({
            value:val,
        })
    }

    render() {
      return (
        <div className="card">
            <img src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg" alt="商品圖片"/>
            <div className="card-body">
                <h4 className="cord-text">{this.props.title}</h4>
                <p className="text-secondary">剩餘數量:{this.state.availableVal}</p>
                <p>{this.props.context}</p>
                <label htmlFor="">購買數量:{this.state.value}</label>
                <div className="input-group">
                    <span className="input-group-btn">
                        <Button className="btn btn-success" text="+" action={this.addValue}/>
                        <Button className="btn btn-danger" text="-" action={this.minusValue}/>
                    </span>
                </div>
                <br/>
                <Button className="btn btn-primary" text="加入購物車" action={this.addtoCart}/> {/* view 給 action　動作 */}
            </div>
        </div>
      )
    }
}