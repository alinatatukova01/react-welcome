import React from "react";

// class Togler extends React.Component{
// constructor(props){
//     super(props);
// }

// statusHandler(){
//     this.props.changeParentState();
// }
//     render(){
//         return(
//             <button onClick={() => this.statusHandler()}>{this.props.btnText}</button>
//         )
//     }
// }

function Togler(props) {
  const statusHandler = () => {
    props.changeParentState();
  };
  return <button onClick={() => statusHandler()}>{props.btnText}</button>;
}

export default Togler;
