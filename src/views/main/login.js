
import React,{Component,lazy,Suspense} from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component{
   constructor(){
      super()
      this.state={
         mobile:'',
         userid:''
      }
   }

   submit=()=>{
         var phoneno = /^\d{10}$/
         if(this.state.mobile.match(phoneno)){
               this.props.history.push({
               pathname:"/verification",
               state:{
                        phone:this.state.mobile
                     }})
         }else{
            alert('enter valid number....')
         }
      }
         
   mobileVerification=(e)=>{
      this.setState({mobile:e.target.value})
   }
   
render(){
  
   console.log(this.state.mobile)
     return(
        <>
        <div class="container-fluid">
    	<div class="container">
        	<div class="logo">
            	<img src="images/testlogo.png" alt="polbol"/>
            	<form>
                	<input type="text" placeholder="Mobile number"  value={this.state.mobile} onChange={this.mobileVerification}/>
                    <button type='submit'  onClick={this.submit} >GET OTP</button>
                </form>
                <h3>Don't Have Account?</h3>
                <h4><Link to="/sinup">SIGN UP NOW</Link></h4>
            </div>
        </div>
    </div>
        
    </>
     )
  }
}

