import React,{Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
class Header extends Component{


logout=()=>{
    localStorage.clear()
   //this.props.history.push('/')
}

    render(){
        return(
            <div className='nav_routing'>
                <div class="wrapper">
                    <div class="container-fluid top_block">
                        <div class="row">
                            <div class="container">
                                <div class="phone_no">test@gmail.com  |  <strong>0124-2970578</strong></div>
                                <ul class="social_top">
                                    <li ><Link to= "/login">  Sign up/Sign in </Link></li>
                                    <li onClick={this.logout}><Link to= "/">Sign Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div class="container-fluid logo_block">
                    <div class="row">
                        <div class="container">
                            <div class="logo"><NavLink exact  to='/'><img src="images/testlogo.png"  alt=""/></NavLink></div>
                            <a href="javascript:void();" class="mobile_menu">Menu</a>
                                <div class="navigation">
                                    <ul>
                                        <li><NavLink exact  to='/'>Home</NavLink></li>
                                        <li><NavLink to='/about'>who we are</NavLink></li>
                                        <li><NavLink to='/product'>Products</NavLink></li>
                                        <li><NavLink to='/enquiry'>Enquire now</NavLink></li>
                                        <li><NavLink to='/contact'>Contact us</NavLink></li>
                                    </ul>
                                </div> 
                        </div>
                    </div>
                </div>
        </div>
    </div>
        )
    }
}
export default Header