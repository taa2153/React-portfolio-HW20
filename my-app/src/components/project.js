import React from 'react';
import cocktailImage from "../assets/images/CocktailMenu.gif";
import horiseonImage from "../assets/images/Horiseonwebsite.gif";
import cub2bearImage from "../assets/images/CUB2BEAR.gif";
import passwordImage from "../assets/images/password.gif";
import './project.css'



export default function project() {
    

    return (
        <div className='cardsContainer'>
         <ul className="cards">
            <li>
                <a href=" https://taa2153.github.io/horiseon-web-html-css/ " class="card">
                <img src= {horiseonImage} className="card__image" alt="" />
                <div class="card__overlay">
                    <div className="card__header">                    
                  
                    <div className="card__header-text">
                        <h3 className="card__title">Horiseon Website</h3>            
                        <span className="card__status">HTML/CSS</span>
                    </div>
                    </div>
                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>      
            </li>
            <li>
                <a href=" https://amckelvey.github.io/bootcamp-project1/" class="card">
                <img src= {cocktailImage} className="card__image" alt="" />
                <div class="card__overlay">
                    <div className="card__header">                    
                   
                    <div className="card__header-text">
                        <h3 className="card__title">CocktailMenu</h3>            
                        <span className="card__status">HTML/CSS/JS</span>
                    </div>
                    </div>
                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>      
            </li>
            <li>
                <a href="hhttps://taa2153.github.io/module-3// " class="card">
                <img src= {passwordImage} className="card__image" alt="" />
                <div class="card__overlay">
                    <div className="card__header">                    
                    <div className="card__header-text">
                        <h3 className="card__title">Password Generator</h3>            
                        <span className="card__status">HTML/CSS/JS</span>
                    </div>
                    </div>
                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>      
            </li>
            <li>
                <a href="https://cub2bear.herokuapp.com/" class="card">
                <img src= {cub2bearImage} className="card__image" alt="" />
                <div class="card__overlay">
                    <div className="card__header">                    
                    <div className="card__header-text">
                        <h3 className="card__title">Cub2Bear</h3>            
                        <span className="card__status">HTML/CSS/JS/Handlebar</span>
                    </div>
                    </div>
                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>      
            </li>  
            </ul>
    
        </ div>
    )
}