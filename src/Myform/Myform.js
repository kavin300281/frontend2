import React from "react";
import './Myform.css';
import axios from "axios"

class Myform extends React.Component{
    constructor(props){
        super(props);
        this.state ={firstname:'username',lastname:''};

        
    }
    getInput=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        
        console.log(this.state,'usernme');
    }
    getphone=(event)=>{
        this.setState({phone:event.target.value});
        console.log(this.state,'usernme');
    }
    handlesubmit=(event)=>{
        var form  = {};
        event.preventDefault();
     
        form["firstname"]= this.state.firstname;
        form["lastname"]= this.state.lastname;
       // alert('form submitted '+this.state.firstname+this.state.lastname)
        axios({
            method: 'post',
            url: 'http://localhost:8080/newuser',
            data: form,
           headers: {'Content-Type': 'application/json' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
         console.log(form);
    }

    render(){
        
        return (
            <div>
                <h3>Enter  Student details </h3>
                <form onSubmit={this.handlesubmit}>
                <input type='text' name='firstname' placeholder="First name" 
                onChange={this.getInput} className='input-field'/>
                <br/>
                <input type='text'  name='lastname' placeholder="Last name"  onChange={this.getInput} className='input-field'></input>
                <br/>
                {/* <textarea name='description' onChange={this.getInput}/> */}
                <br/>
                <input type='submit' name="submit" className='button-field'/>
                </form>
                
            </div>);
    }
}
 
export default Myform;