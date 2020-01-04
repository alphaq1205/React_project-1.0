import React,{Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import Header from '../common/header'
import Footer from '../common/footer'

class About extends Component{
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
      		  <img src="images/who_we_are.jpg"  alt=""/>
        </div>
   </div>
   <div class="container-fluid">
   		<div class="row">
        	<div class="container">
            	<div class="content_page">
                <h4>ABOUT OURSELVES</h4>
                	 <p>A company, abbreviated as co., is a legal entity made up of an association of people, be they natural, legal, or a mixture of both, for carrying on a commercial or industrial enterprise. Company members share a common purpose, and unite to focus their various talents and organize their collectively available skills or resources to achieve specific, declared goals. Companies take various forms, such as:

voluntary associations, which may include nonprofit organizations
business entities with an aim of gaining a profit
financial entities and banks
A company or association of persons can be created at law as a legal person so that the company in itself can accept limited liability for civil responsibility and taxation incurred as members perform (or fail to discharge) their duty within the publicly declared "birth certificate" or published policy.

Companies as legal persons may associate and register themselves collectively as other companies – often known as a corporate group. When a company closes, it may need a "death certificate" to avoid further legal obligations.
</p> 
<p>One can define a company as an "artificial person", invisible, intangible, created by or under law,[1] with a discrete legal personality, perpetual succession, and a common seal.[citation needed] Except for some senior positions, companies remain unaffected by the death, insanity, or insolvency of an individual member.</p>

                </div>
            </div>
        </div>
   </div>
<Footer/>
            </div>
        )
        
    }
}
export default About