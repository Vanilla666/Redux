import React from 'react'

export default class Button extends React.Component{
  constructor(props){
    super(props)
    this.action = this.action.bind(this);
  }
  action(e){
    // console.log(this.props.action)
    const {props} = this,{action = ()=>{}} = props;
    action()
  }
    render() {
      return (
        <button className={this.props.className} onClick={this.action}>{this.props.text}</button>
      )
    }
}