
import React, {Component, Fragment} from 'react';
import { Link}from 'react-router-dom'
import './Login_v18/css/main.css'
import './Login_v18/css/util.css'
import {registerAction} from '../Redux/Actions/registerActions'
import { register } from './../serviceWorker';

class RegisterForm extends Component {

    constructor(){
        super();

        this.state = {

			

				
					email:"",
					password:""
				

		}

           

        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateState = this.updateState.bind(this)
    }


 handleSubmit(e){    
	e.preventDefault()
	const userDetails = {
		email : this.state.email,
		password : this.state.password
	}
	this.props.createUser(this.state.userDetails);
	this.setState({email:"", password : ""})
 }

updateState(e){
    e.target.name === "email"? this.setState({email:e.target.value}):this.setState({password:e.target.value})
}
    


    render(){
        return(
            <Fragment>
                <body style={{backgroundColor: "#666666"}}>
	
	<div class="limiter">
		<div class="container-login100">
        
			<div class="wrap-login100">
				<form class="login100-form validate-form" onSubmit={this.handleSubmit}>
                   
					<span class="login100-form-title p-b-43">
						Register 
					</span>
					
					
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" onChange={this.updateState}></input>
						<span class="focus-input100"></span>
						<span class="label-input100">Email</span>
					</div>
					
					
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass" onChange = {this.updateState}></input>
						<span class="focus-input100"></span>
						<span class="label-input100">Password</span>
					</div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
							<label class="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a  class="txt1">
								Forgot Password?
							</a>
						</div>
                       
					</div>
			

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
                        
							Register
                            
						</button>
                        <input type="submit" value = "heuy"/>
					</div>
                
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							or sign up usings
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
                   
				

				<div class="login100-more" style={{backgroundImage: "url('images/bg-01.jpg')"}}>
				</div>
                </form>
			</div>
		</div>
        </div>
	</body>
	
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
	  // createTodo : (title) => dispatch(createTodoFunction(title)),
	  createUser : (userDetails) => dispatch(registerAction.create(userDetails)),
	}
  }
  
  export default connect(null,mapDispatchToProps)(Todo);