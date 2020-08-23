
import React, {Component, Fragment} from 'react';
import './Login_v18/css/main.css'
import './Login_v18/css/util.css'
import {Link} from 'react-router-dom'

class LoginForm extends Component {
    render(){
        return(
            <Fragment>
                <body style={{backgroundColor: "#666666"}}>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-43">
						Login to continue
					</span>
					
					
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email"></input>
						<span class="focus-input100"></span>
						<span class="label-input100">Email</span>
					</div>
					
					
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass"></input>
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
			

					<div class="container-login100-form-btn" style={{width:"300px", marginLeft:"80px"}}>
						<button class="login100-form-btn">
							Login
						</button>
					</div>

                    <div class="container-login100-form-btn" id="registerButton" style={{marginTop:"40px"}} >
                        <Link to="/register">
						<button class="login100-form-btn">
							New User? Register Here
						</button>
                        </Link>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							or sign up using
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

export default LoginForm
