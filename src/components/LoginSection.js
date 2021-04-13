import React from 'react'

function LoginSection(props) {
    const { email, password, setPassword, handleLogin, handleSignup, hasAccount,
        setHasAccount, emailError, passwordError } = props;
    return (
        <div className="login__section">
            <div className="login__container">
                <label htmlFor="">Username</label>
                <input type="text" 
                        autoFocust
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
    )
}

export default LoginSection
