import React from 'react';

import './styles.css';

import Logo from '../img/Logo.svg'
import Img from '../img/Img.svg'
import Profile from '../img/Profile.jpg'

function Home () {

  return (
   <>

    <header>
      <div className="center">
          <img src={Logo} alt="Logo"/>

          <a href="#menu" class="menu">
            <i class="fa fa-bars"></i>
          </a>

          <nav>
              <a href="#home">Home</a>
              <a href="#about">Sobre</a>
              <a href="#tech">Portifólio</a>
              <a href="#blog">Blog</a>
              <a href="#contatos">Contatos</a>
          </nav>
      </div>
    </header>
    
    <div class="banner">
      <div class="center">
        <div class="banner-text">
          <p>Olá, eu sou</p>
          <h1>Antonio Carlos</h1>
          <p>Desenvolvedor Full-Stack</p>    

          <div class="banner-links">
            <a href="https://bit.ly/Fale_comigo_wp" class="banner-btn">
              Fale comigo
              <i class="fa fa-comment"></i>
            </a>
          
          </div>
        </div>
        <img src={Img} alt=""/>
        </div>
      </div>
    
    <div id="about" class="about">
      <div class="center">
        <img src={Profile} alt=""/>

        <div class="about-text">
          <h1>Sobre mim</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium, velit quis cum blanditiis totam enim mollitia expedita repudiandae ullam facere nemo voluptatibus? Aut, sapiente cumque. Qui rem quia magnam?</p>

          <ul>
            <li>
              <i class="fa fa-check"></i>
                React
            </li>
            <li>
              <i class="fa fa-check"> </i>
                React Native
            </li>

            <li>
              <i class="fa fa-check"></i>
                NodeJS
            </li>
          </ul>
        </div>
      </div>
    </div>

     

    <section id="tech" class="tech">
    <div class="center">
      <h2>Portifólio</h2>
      <h3>Meu potifólio</h3>

     
      <div class="tech-list">
        <div class="tech-wrapper">
            <a href='https://github.com/limaantonio/Be-the-Hero' class="tech-item">
            <h4><img src='https://ik.imagekit.io/dtx0soiaky/logo_x9RH0SYSi.svg'alt=""/>Be the Hero</h4>
            <img src='https://github.com/limaantonio/Be-the-Hero/blob/master/github/bth.gif?raw=true'alt=""/>
             <p>O Be The Hero é um projeto Full-Stack que foi criado durante a SemanaOmniStack 11 com o objetivo de ampliar nossos conhecimentos sobre o React, React Native e NodeJS.</p>
            <div class="tech-info">
              <div>
                <i class="fa fa-code-branch"></i>
               <span><strong>1</strong>forks</span>
              </div>
              <div>
                <i class="fa fa-star"></i>
                <span><strong>2 </strong>stars</span>
              </div>
            </div>
          </a> 
        </div>

        

        <div class="tech-wrapper">
            <a href='https://github.com/limaantonio/Ecoleta' class="tech-item">
            <h4><img src='https://raw.githubusercontent.com/limaantonio/Ecoleta/5906b02b47bd5b1b24274115177e10630b9722df/github/Logo.svg'alt=""/>Ecoleta</h4>
            <img class="gif" src='https://github.com/limaantonio/Ecoleta/blob/master/github/web.gif?raw=true' alt=""/>
             <p>O Ecoleta é uma aplicação Full-Stack desenvolvida durante a Next Level Week 1.0. Um treinamento realizado pela Rocketseat e que acontece durante o período uma semana.</p>
            <div class="tech-info">
              <div>
                <i class="fa fa-code-branch"></i>
               <span><strong>1</strong>forks</span>
              </div>
              <div>
                <i class="fa fa-star"></i>
                <span><strong>2 </strong>stars</span>
              </div>
            </div>
          </a> 
        </div>

        <div class="tech-wrapper">
            <a href='https://github.com/limaantonio/Ecoleta' class="tech-item">
            <h4><img src='https://raw.githubusercontent.com/limaantonio/Ecoleta/5906b02b47bd5b1b24274115177e10630b9722df/github/Logo.svg'alt=""/>Ecoleta</h4>
            <img class="gif" src='https://github.com/limaantonio/Ecoleta/blob/master/github/web.gif?raw=true' alt=""/>
             <p>O Ecoleta é uma aplicação Full-Stack desenvolvida durante a Next Level Week 1.0. Um treinamento realizado pela Rocketseat e que acontece durante o período uma semana.</p>
            <div class="tech-info">
              <div>
                <i class="fa fa-code-branch"></i>
               <span><strong>1</strong>forks</span>
              </div>
              <div>
                <i class="fa fa-star"></i>
                <span><strong>2 </strong>stars</span>
              </div>
            </div>
          </a> 
        </div>

        <div class="tech-wrapper">
            <a href='https://github.com/limaantonio/Ecoleta' class="tech-item">
            <h4><img src='https://raw.githubusercontent.com/limaantonio/Ecoleta/5906b02b47bd5b1b24274115177e10630b9722df/github/Logo.svg'alt=""/>Ecoleta</h4>
            <img class="gif" src='https://github.com/limaantonio/Ecoleta/blob/master/github/web.gif?raw=true' alt=""/>
             <p>O Ecoleta é uma aplicação Full-Stack desenvolvida durante a Next Level Week 1.0. Um treinamento realizado pela Rocketseat e que acontece durante o período uma semana.</p>
            <div class="tech-info">
              <div>
                <i class="fa fa-code-branch"></i>
               <span><strong>1</strong>forks</span>
              </div>
              <div>
                <i class="fa fa-star"></i>
                <span><strong>2 </strong>stars</span>
              </div>
            </div>
          </a> 
        </div>
      </div>
      
    </div>
  </section>
  
   </>
  )
}

export default Home;