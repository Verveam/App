
import React, {useRef} from 'react';

import img1 from './../img/1.jpg';
import img2 from './../img/2.jpg';
import img3 from './../img/3.jpg';
import img4 from './../img/4.jpg';
import { ReactComponent as FlechaIzquierda } from './../img/iconmonstr-angel-left-thin.svg';
import { ReactComponent as FlechaDerecha } from './../img/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components';






const Home = () => {

    const slideshow = useRef(null);

    const siguiente = () => {
        if(slideshow.current.children.length > 0){
            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = `300ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () =>{
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = 'translateX(0)';
                slideshow.current.appendChild(primerElemento);
                slideshow.current.removeEventListener('transitionend', transicion);
            }

            slideshow.current.addEventListener('transitionend', transicion);
        }
    }
    
    const anterior = () => {
        console.log('Anterior');
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            
            slideshow.current.style.transition = 'none';

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }

    }

    return(
        
        <ContenedorPrincipal>
            <Titulo>PRODUCTOS DESTACADOS</Titulo>
            
            <ContenedorSlideshow ref={slideshow}>
            <Slide>
                    <a href="">
                        <img src={img1} alt=""/>
                    </a>
                    <TextoSlide colorFondo="navy" colorTexto="white">
                        <p>15% de descuento</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="">
                        <img src={img2} alt=""/>
                    </a>
                    <TextoSlide>
                        <p>15% de descuento</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="">
                        <img src={img3} alt=""/>
                    </a>
                    <TextoSlide>
                        <p>15% de descuento</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="">
                        <img src={img4} alt=""/>
                    </a>
                    <TextoSlide>
                        <p>15% de descuento</p>
                    </TextoSlide>
                </Slide>
            </ContenedorSlideshow>
            <p className='container'><B>¡HOLA!  Le damos la bienvenida es este pequeño emprendimiento iniciado no hace mucho, por que queremos ofrecerles el mejor servicio tanto en su domicilio como en nuestro local.</B></p>
            <Controles>
                <Boton onClick={anterior}>
                    <FlechaIzquierda/>
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <FlechaDerecha/>
                </Boton>
            </Controles>
            
        </ContenedorPrincipal>
    
    )
    
    
}

const B = styled.b`
    font-size: 25px;

`;


const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: upprcase;
    margin-bottom: 10px;

`;
const ContenedorPrincipal = styled.div`
    position: relative;
    

`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width:100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    max-height: 500px;
    position: relative;
    img {
        width: 80%;
        vertical-alingn: top;
    }

`;

const TextoSlide = styled.div`
    
    background: rgba(0,0,0,.5);
    color: #fff;
    text-align: center;
    width: 80%;
    margin-left: 10%;
    position:absolute;
    bottom: 0;

    @media screen and (max-width: 700px) {
        position: relative;
        background: #000;
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%; 
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    
    height: 400px;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    width: 5%;
    margin-left: 10%;
    margin-right: 10%;
    
    
    /*&:hover {
        background: rgba(0,0,0, .2);
        path {
            fill: #fff;
        }*/
    }

    path {
        filter:${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff )' : 'drop-shadow(2px 0px 0px #fff )'};
    }

    ${props => props.derecho ? 'right:0' : 'left: 0'}
`;


export default Home