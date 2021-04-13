import React from 'react'

function LoginSection(props) {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount,
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
                <p className="errorMsg">{emailError}</p>
                <label htmlFor="">Password</label>
                <input type="password" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button>Sign In</button>
                            <p>Don't have an account ?<span onClick={() => setHasAccount(!hasAccount)}> Sign Up </span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Have an account <span> Sign in </span></p>
                        </>
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default LoginSection
