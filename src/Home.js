import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="car1">
      <h1 className="label1">SALE SALE SALE SALE SALE SALE</h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-yellow-audi-caraudicars-961524670899johme.png&f=1&nofb=1&ipt=df8a80044efb966d049d345a620df50b96f2822e878f1678e2142dd1aecb32e5&ipo=images" alt="car1" className="car1__pic"/>
    
      </div>
      <div className="car2">
      <h1 className="label1">DECEMBER</h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FCar-PNG.png&f=1&nofb=1&ipt=5410dd7777d0bc866faf6509d410c08f9841db77505a65e97b4ae8aaca021186&ipo=images" alt="car1" className="car1__pic"/>
    
      </div>

      <div className="car3">
      <h1 className="label1 label3">SPECIAL <span className="offer">OFFERS</span></h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-black-mclaren-570s-gt4-sports-carcarvehicletransportmclarensports-car-961524643995s7kcd.png&f=1&nofb=1&ipt=7c8bb5437dec0e5796f1e35b63a7574f91fa282e9d51fecbf20eb32686f2165e&ipo=images" alt="car1" className="car1__pic"/>
    
      </div>

      <div className="car4">
      <h1 className="label1 label3">SPECIAL <span className="offer">Discount</span></h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fblue-race-car-png-this-high-quality-free-png-image-without-any-background-is-about-car-ferrari-vehicle-2396.png&f=1&nofb=1&ipt=daa78717e5a7ad67ac3bbfe40dad9daed61171b9f305cc89ac5e61fe4dbf1244&ipo=images" alt="car1" className="car1__pic"/>
    
      </div>
      <div className="services">
        <div className="customer__service">
        <h1 className="label1 cs__label">Customer Service</h1>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive-core-image-service.vivialplatform.net%2Fimages%2F248477%2Forig%2Fdepositphotos_228020620_l-2015_2_cropped.7Jt802ZOU.jpg&f=1&nofb=1&ipt=d28f48c0d2420f9f1871869b345def56836e1ad080424c9320ba916b29496efa&ipo=images" alt="customer__service" className="cs__pic"/>
        </div>
        <div className="container cs__container">
            <h2>CAR<span className="it">it</span>ON </h2>
            
            <input type="text" className="login__input" placeholder="Email"/>
            <br/><br/>
            <input type="text" className="login__input text__input" placeholder="Message"/>
            <br/><br/>
           <button className="login__button">Send</button>
           <p>--------------  Login with --------------</p>
           <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgoogle%2Fgoogle_PNG19635.png&f=1&nofb=1&ipt=1acecd5dcee48f08958649daa22e19fc6d76b1bc74e0e295c2af1a73248ec49e&ipo=images" alt="google" className="logo"/>
           <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG80.png&f=1&nofb=1&ipt=6ef0aca8a10bd6b8b58f1e9a2a89fc8fed7a5fd5e4a5a4307762aacdb0f1c476&ipo=images" alt="github" className="logo__github" />
           <p>Don't have an Account? <a href="https://www.google.com/account" className="link">Sign up</a></p>
           <p>Created By: Christian Barbosa</p>
           <p className="sub__label">BSIT - Student</p>
        </div>
    </div>
    </div>
  )
}

export default Home;
