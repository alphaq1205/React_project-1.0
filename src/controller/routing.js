import React,{Component} from 'react'
import {Route,BrowserRouter,Switch,} from 'react-router-dom'

const Home = React.lazy(() => import('../views/main/home'))
const Login = React.lazy(() => import('../views/main/login'))
const LoginReq = React.lazy(() => import('../views/common/loginRequest'))
const Verification = React.lazy(() => import('../views/main/verification'))
const About = React.lazy(() => import('../views/main/about'))
const Product = React.lazy(() => import('../views/main/product'))
const Contact = React.lazy(() => import('../views/main/contact'))
const Enquiry = React.lazy(() => import('../views/main/enquiry'))
const Error404 = React.lazy(() => import('../views/common/error'))

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>

class Routing extends Component{
    render(){
        return(
                <BrowserRouter>
                    <React.Suspense fallback={loading()}>
                        <Switch>
                
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/loginReq' component={LoginReq}/>
                            <Route exact path='/verification' component={Verification}/>
                            <Route path='/about' component={About}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/contact' component={Contact}/>
                            <Route path='/enquiry' component={Enquiry}/>
                            <Route  component={Error404}/>
                        </Switch>
                    </React.Suspense>
            </BrowserRouter>
        )
    }

}
export default Routing