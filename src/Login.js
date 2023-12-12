import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login">
        <div className="container">
            <h2>CAR<span className="it">it</span>ON </h2>
            
            <input type="text" className="login__input" placeholder="Email"/>
            <br/><br/>
            <input type="password" className="login__input" placeholder="Password"/>
            <br/><br/>
           <button className="login__button">Login</button>
           <p>--------------  Login with --------------</p>
           <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgoogle%2Fgoogle_PNG19635.png&f=1&nofb=1&ipt=1acecd5dcee48f08958649daa22e19fc6d76b1bc74e0e295c2af1a73248ec49e&ipo=images" alt="google" className="logo"/>
           <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG80.png&f=1&nofb=1&ipt=6ef0aca8a10bd6b8b58f1e9a2a89fc8fed7a5fd5e4a5a4307762aacdb0f1c476&ipo=images" alt="github" className="logo__github" />
           <p>Don't have an Account? <a href="https://www.google.com/account" className="link">Sign up</a></p>
        </div>
    </div>
  );
}

export default Login;
