import React from 'react'
import '../Style/Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form action="#" method="post">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="aman@example.com"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />

                    <button type="submit">Login</button>
                </form>

                <p className="signup-text">
                    Dont have an account? <a href="#">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login
