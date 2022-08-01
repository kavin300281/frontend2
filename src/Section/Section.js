import React from "react";
import Myform from '../Myform/Myform'; 
import Myform1 from '../Myform1/Myform1'; 
import '../Myform/Myform.css';
class Section extends React.Component{
constructor(props){
    super(props);{
     
        this.state={
            statusof:false
        }

    }
}
change=()=>{
    if (this.state.statusof){
        this.setState({statusof:false})
    }
    else{
        this.setState({statusof:true})
    }
}
render(){
    return (
            
        <div>
        {/* {this.state.statusof ? <Mymessage name='user'/> :<Helloworld name='kavin'/>} */}
        
        <div>{this.state.statusof ? <Myform1/>: <Myform/> }</div>

        <button type='button' onClick={this.change} className='button1-field' >{this.state.statusof ? 'Navigate to student Field':'Navigate to Book Field'}</button>
        </div>
        
    )
             

    
}
}

export default Section