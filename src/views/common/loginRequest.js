import React,{Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import Header from './header'
import Footer from './footer'

class Error404 extends Component{
    render(){
        return(
            <div>
                <h1><NavLink exact  to='/'>please sin-up or sign-in</NavLink></h1>
            </div>
        )
    }
}
export default Error404