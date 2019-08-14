import React from 'react'
import { Link } from 'react-router-dom';
export default class Show extends React.Component{
  constructor(props){
    super(props)
    this.state={
       
    }
  }

    render() {
        // console.log('this.state.number: ',this.state.number);
      return (
        <div>
            Show Text
          <button> <Link to="/">home</Link> </button>
          {/* <button> <Link to="/Add">Add</Link> </button> */}
        </div>
      )
    }
}