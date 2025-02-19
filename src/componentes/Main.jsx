import React from "react";


const Main = () => {
    return(
        <div className="main"> 
            <div className="flex">
                <div className="main__text">
                    <h1>Olá, me chamo Athams</h1>
                    <p>Desenvolvedor FullStack</p>
                </div>
                <div className="main__button">
                    <button><a href="">visite profile</a></button>
                    <button><a href="">Get in Touch</a></button>
                </div>
            </div>
        </div>
    );
};

export default Main;