import React,{Component} from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

class Home extends Component{
    constructor(){
        super()
        this.state={
            Token:'',
            payload:[],
            page:1
        }
    }

    
homepageData() {
    let url = "https://***-***.*******.com/api/v1/posts?page="+this.state.page
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
  this.homepageData()
  },3000)
}

    render(){
        if(this.state.Token){
            return(
                <div>
                    <Header/>
                        <div class="container-fluid">
                            <div class="row">
                            <div id="slides">
                                <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
                                <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
                                <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
                                <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
                            </div>
                            </div>
                    </div>
                    <div class="logo_overlay">
                        <div class="container">
                            <div class="client_logo">
                                <ul>
                                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="container">
                                <ul class="home_banners">
                                    <li><img src="images/test.jpg" alt=""/></li>
                                    <li><img src="images/test.jpg" alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="container">
                                <div class="feat_prod">
                                    <h2>FEATURED PRODUCTS</h2>
                                    <h6>Our Fantastic range of Havels, Eon, ligman & Hager products</h6>
                                </div>
                                <div class="home_products">
                                    <ul>
                                        <li>
                                            <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                            <div class="product_title">test product one</div>
                                            <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                                            <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                        </li>
                                        <li>
                                            <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                            <div class="product_title">test product two</div>
                                            <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                                            <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                        </li>
                                        <li>
                                            <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                            <div class="product_title">test product three</div>
                                            <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                                            <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                        </li>
                                        <li>
                                            <div class="product_img"><img src="images/test.jpg" alt=""/></div>
                                            <div class="product_title">test product four</div>
                                            <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                                            <div class="explore"><a href="#">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
            )
        }else{

        return(
            <div>
                <Header/>
                    <div class="container-fluid">
    	<div class="row">
    	<div id="slides">
            <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
            <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
            <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
            <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
        </div>
        </div>
    </div>
    <div class="logo_overlay">
    	<div class="container">
        	<div class="client_logo">
            	<ul>
                	<li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                    <li><a target="_blank" href="#"><img src="images/test.jpg" alt=""/></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-fluid">
    	<div class="row">
    	<div class="container">
        	<ul class="home_banners">
            	<li><img src="images/test.jpg" alt=""/></li>
                <li><img src="images/test.jpg" alt=""/></li>
            </ul>
        </div>
        </div>
    </div>
    <div class="container-fluid">
    	<div class="row">
    	<div class="container">
        	<div class="feat_prod">
        	<h2>FEATURED PRODUCTS</h2>
            <h6>Our Fantastic range products</h6>
            </div>
            <div class="home_products">
            	<ul>
                	<li>
                    	<div class="product_img"><img src="images/test.jpg" alt=""/></div>
                        <div class="product_title">test product one</div>
                        <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                        <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </li>
                    <li>
                    	<div class="product_img"><img src="images/test.jpg" alt=""/></div>
                        <div class="product_title">test product two</div>
                        <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                        <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </li>
                    <li>
                    	<div class="product_img"><img src="images/test.jpg" alt=""/></div>
                        <div class="product_title">test product three</div>
                        <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                        <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </li>
                    <li>
                    	<div class="product_img"><img src="images/test.jpg" alt=""/></div>
                        <div class="product_title">test product four</div>
                        <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                        <div class="explore"><a href="#">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </li>
                </ul>
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
export default Home