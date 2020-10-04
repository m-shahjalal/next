import React from 'react'
import './Login.scss'
import useForm from '../../util/useForm'
import { GoogleLogin } from 'react-google-login';


function Login() {
    const initialState = { name: '', email: '', password: '' }
    const submit = () => {
        console.log(inputs);
    }
    const { changeHandler, submitHandler, inputs } = useForm(submit, initialState)

    const responseGoogle = (response) => {
        console.log(response);
      }
      
    return (
        <div>
            <div className="login">
                <form action="/login" method="POST" className="login-form" onSubmit={submitHandler}>
                    <h1>Join our the biggest family today</h1>
                    <div className="login-container">
                        <div className="login-name">
                            <input type="text" name="name" className="name-col" id="name" placeholder="Type your name" value={inputs.name} onChange={changeHandler} required />
                        </div>
                        <div className="login-email">
                            <input type="email" name="email" id="email" className="email-col" placeholder='Give your em@il here' value={inputs.email} onChange={changeHandler} required />
                        </div>
                        <div className="password">
                            <input type="password" name="password" id="password" className="password-col" placeholder="Type strong password" value={inputs.password} onChange={changeHandler} required />
                        </div>
                        <div className="login-submit">
                            <input type="submit" value="submit" className="login-button" />
                        </div>
                    </div>
                </form>

                <GoogleLogin
                    clientId="560328294312-qkq8nd3quqggopjpvumr78ag4nkedbf5.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />

            </div>
        </div>
    )
}

export default Login
