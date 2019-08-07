import React from 'react'

export default class Sub extends React.Component{
  constructor(props){
    super(props)
    this.state={
        number:this.props.number, //接收外部變數變成內部變數
        // availableVal:this.props.availableVal
    }
  }
  subNumber = () => { //加1再傳出去
      console.log('減1再傳出去',this.state.number);
      this.setState({
        number:this.state.number-1
      })
      this.props.onSubClick(this.state.number);//傳給父組件處理

  }
    render() {
        // console.log('this.state.number: ',this.state.number);
      return (
        <button onClick={this.subNumber} >SUB</button>
      )
    }
}