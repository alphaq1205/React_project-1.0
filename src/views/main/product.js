import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import Header from '../common/header'
import Footer from '../common/footer'
import LoginReq from '../common/loginRequest'


class Product extends Component{
    constructor(){
        super()
        this.state={
            Token:'',
            payload:[],
            searchText:'product',
        }
    }

    componentWillMount=()=>{
        let storageValue=localStorage.getItem('token')
        this.setState({Token:storageValue})
      }

  
      productData() {
        let url = "https://***-***.********.com/api/v1/user/search/on?on=" + this.state.searchText;
      fetch(url,{method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': this.state.Token,
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({payload:responseJson.payload})
         // console.log('this is the data==>'+JSON.stringify(responseJson.payload))
          }).catch((error) => {console.error(error)})
       
    }
    
    componentDidMount=()=>{
      setInterval(() => {
      this.productData()
      },3000)
    }

    render(){
        if(!this.state.Token){
            return(
                <>
                 <Header/>
                   <LoginReq/>
                    <Footer/>
                </>
            )
        }else{
        return(
           
            <div>
                <Header/>
                     <div class="container-fluid">
   		<div class="row">
        	<img src="images/product_banner.jpg"  alt=""/>
        </div>
   </div>
   <div class="container-fluid">
   		<div class="row">
        	<div class="container">
            	<div class="content_page">



                	<div class="left_area">
                    	<div class="product_range">Range</div>
                    	<ul>


                        <li><a href="pdf/eon_price_list.pdf">PRODUCT CATEGORY ONE</a></li>
                                <li><a href="#">PRODUCT CATEGORY TWO</a></li>
                                <li><a href="#">PRODUCT CATEGORY THREE</a></li>
                                <li><a href="#">PRODUCT CATEGORY FOUR</a></li>
                                <li><a href="#">PRODUCT CATEGORY FIVE</a></li>
                               
                            
                            
                        </ul>
                    </div>





                    <div class="right_area">
                        <div class="product_logo">PRODUCT CATEGORY ONE</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="#">Product list Download</a></div>
                        <div class="product_logo">PRODUCT CATEGORY TWO</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="#">Product list Download</a></div>
                         <div class="product_logo">PRODUCT CATEGORY THREE</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="#">Product list Download</a></div>
                        <div class="product_logo">PRODUCT CATEGORY FOUR</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="#">Product list Download</a></div>
                                                <div class="product_logo">PRODUCT CATEGORY FIVE</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                    <div class="product_title">TEST PRODUCT</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="#">Product list Download</a></div>
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
}
export default Product