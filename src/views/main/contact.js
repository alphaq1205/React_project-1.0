import React,{Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import Header from '../common/header'
import Footer from '../common/footer'

class Contact extends Component{
    constructor(){
        super()
        this.state={
            Token:'',
            payload:[],
            page:1
        }
    }

    componentWillMount=()=>{
        let storageValue=localStorage.getItem('token')
        this.setState({Token:storageValue})
      }
    render(){
       
        return(
            <div>
                <Header/>
                   <div class="container-fluid">
   		<div class="row">
        	<img src="images/contact_us.jpg"  alt=""/>
        </div>
   </div>
   <div class="container-fluid">
   		<div class="row">
        	<div class="container">
            	<div class="content_page">
                    <div class="contact_left">
                        <h3>TEST</h3>
                        <p>Gurugram Haryana-122017</p>
                        <p>Landline:- 0123-456789</p>
                        <p>Mobile:- 123456789, 987654321</p>
                        <p>Email Address:-test@gmail.com</p>
                    </div>
                    <div class="contact_right">
                    
                    </div>
                </div>
            </div>
        </div>
   </div>
<Footer/>
            </div>
        )
        
    }
}
export default Contact