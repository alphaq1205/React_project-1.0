import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class Footer extends Component{
    render(){
        return(
            <div>
                <div class="container-fluid footer_block">
                    <div class="row">
                        <div class="container">
                            <div class="bottom_links">
                                <h3>Info Pages</h3>
                                <ul>
                                    <li><NavLink exact  to='/'>Home</NavLink></li>
                                    <li><NavLink to='/about'>who we are</NavLink></li>
                                    <li><NavLink to='/product'>Products</NavLink></li>
                                    <li><NavLink to='/enquiry'>Enquire now</NavLink></li>
                                    <li><NavLink to='/contact'>Contact us</NavLink></li>
                                </ul>
                            </div>
                            <div class="bottom_links">
                                <h3>Product Range</h3>
                                <ul>
                                    <li><NavLink to='/product'>product one</NavLink></li>
                                    <li><NavLink to='/product'>product two</NavLink></li>
                                    <li><NavLink to='/product'>product three</NavLink></li>
                                    <li><NavLink to='/product'>product four</NavLink></li>
                                </ul>
                            </div>
                            <div class="bottom_links">
                                <h3>Brands</h3>
                                <ul>
                                    <li><a href="#">test brand one</a></li>
                                    <li><a href="#">test brand two</a></li>
                                    <li><a href="#">test brand three</a></li>
                                    <li><a href="#">test brand four</a></li>
                                    <li><a href="#">test brand five</a></li>
                                    <li><a href="#">test brand six</a></li>
                                </ul>
                            </div>
                            <div class="bottom_links">
                                <h3>Contact us</h3>
                                <ul>
                                    <li><i class="fa fa-phone-square" aria-hidden="true"></i> test@gmail.com</li>
                                    <li class="phone"><i class="fa fa-envelope-o" aria-hidden="true"></i> 0123-456789</li>
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i> Gurgaon Haryana</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="container-fluid copyright_block">
                        <div class="row">
                            <div class="container">
                                <div class="copyright">All  @ Copyright reserved to test</div>
                                <ul class="social_top">
                                    <li><a href="#" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                    </div>
            </div>
        </div>
        )
    }
}
export default Footer