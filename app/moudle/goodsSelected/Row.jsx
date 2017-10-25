import React from 'react'
import Button from '../../component/Button.jsx'

export default class Row extends React.Component{
    constructor(props){
        super(props)
        this.removeGood=this.removeGood.bind(this)
    }

    removeGood(){
        console.log("del")
        this.props.onDelClick(this.props.id)
        // console.log(this.props.onDelClick)
    }

    render(){
        return(
            <li>
                {"品名:"+this.props.name}
                <br/>
                {"數量:"+this.props.value}
                <br/>
                <Button className="btn btn-danger btn-sm"  text="刪除" action={this.removeGood} />
            </li>
        )
    }
}