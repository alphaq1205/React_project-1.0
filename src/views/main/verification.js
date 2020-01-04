import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Verify extends Component{
    constructor(){
        super()
        this.state={
            otp:'',
            userid:'',
            mobile:'',
            Token:'',
            Data:''
        }
    }
    componentWillMount=()=>{
       
//         console.log('aaaaaaaa'+ this.props.location.state.phone)
         this.setState({mobile:this.props.location.state})
        
    }
    componentDidMount=()=>{
       // console.log('here is mobile no.==>  '+this.state.mobile.phone)
        fetch('https://***-***.********.com/api/v1/user/login/',{
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
              phone:this.state.mobile.phone,
        }),
          })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status == 1) {
              this.setState({userid:responseJson.payload._id})
                console.log('this is userid you are looking for==>    '+responseJson.payload._id)
              } else{
                console.log('error arived in login details')
              }
       }).catch((error) =>{
            console.log(error);
        })
    }

    otpVerification=(e)=>{
        this.setState({otp:e.target.value})
        let token
        //console.log('this is userid>>>>>==> '+typeof(this.state.otp))
        let url = "https://***-***.********.com/api/v1//user/"+this.state.userid+"/verify-otp?otp="+this.state.otp
        fetch(url)
          .then((response) => {
                    token = response.headers.get('x-auth')
                return response.json()
                    })
          .then((responseJson) => {
              this.setState({Token:token})
                if (responseJson.status == 1) {
                    let data = {
                      id: responseJson.payload._id,
                      age : responseJson.payload.dateOfBirth,
                      firstName: responseJson.payload.firstName,
                      lastName:responseJson.payload.lastName,
                      userName: responseJson.payload.userName,
                      phone: responseJson.payload.phone,
                      role  : responseJson.payload.role,
                      avatar : responseJson.payload.avatar, 
                      token : "Bearer "+ token,
                    }
                    localStorage.setItem('token', data.token)
                    this.props.history.push('/')
                //      console.log('this is the data==>'+JSON.stringify(data))
                      
            }
           
      }).then(()=>{
        let storageValue=localStorage.getItem('token')
          if(storageValue==true){
              this.props.history.push('/')
              console.log('storage value present==> '+storageValue)
          }
      }).catch((error) => {
            console.log('something went wrong please try again')
           //this.props.history.push('/sinup')
          })
     }


    render(){
        console.log(this.state.otp)
        return(
            <div class="container-fluid">
              <div class="container">
                  <div class="logo">
                      <img src="images/testlogo.png" alt="polbol"/>
                      <form>
                          <input type="text" placeholder="otp" value={this.state.otp} onChange={this.otpVerification}/>
                            <Link to="/"> 
                                <button onClick={this.submit}>RESEND OTP</button>
                          </Link>
                      </form>
                        <h3>Don't Have Account?</h3>
                        <h4><Link to="/sinup">SIGN UP NOW</Link></h4>
                </div>
            </div>
        </div>
        )
    }
}