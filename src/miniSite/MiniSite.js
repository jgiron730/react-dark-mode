import React, { useState, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import { Sitio, Nav, themeDark, themeLight, GlobalStyle, MiHeader, Footer } from './componentes/StyleComp'

import './StyleMinisite.scss';

import { FaSun, FaRegMoon, FaCamera, FaArrowLeft, FaGenderless } from "react-icons/fa";

import Lugares from './Lugares';
import Lugar from './Lugar';
import Historial from './Historial';
import Page404 from './Page404';

function MiniSite() {
    const intersectionRef = useRef(null);
    const intersectionMenu = useRef(null);
    const menuPadre = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0
    });

    const [tema, setTema] = useState(window.localStorage.getItem('miTema') || 'claro')
    const [regresar, setRegresar] = useState(false)

    useEffect(() => {
        window.localStorage.setItem('miTema', tema);

        if (intersection && intersection.isIntersecting) {
            intersectionMenu.current.style.position = 'relative'
            intersectionMenu.current.style.top='0';
            intersectionMenu.current.style.alignItems='start';
        }
        else {
            intersectionMenu.current.style.position = 'fixed';
            intersectionMenu.current.style.width = (menuPadre.current.offsetWidth+2) + 'px';
            intersectionMenu.current.style.top='0px';
            intersectionMenu.current.style.alignItems='center';
        }
    }, [tema, intersection])

    
    useEffect(() => {        
        window.addEventListener('resize', function () {            
            intersectionMenu.current.style.width = (menuPadre.current.offsetWidth+2) + 'px';
        });
        return () => {
            window.removeEventListener('resize');
        }
    }, [])



    return (
        <>
            <ThemeProvider theme={tema === 'claro' ? themeLight : themeDark}>
                <GlobalStyle />

                <MiHeader ref={intersectionRef}>
                    <FaCamera />
                    <h1>El Salvador</h1>
                </MiHeader>
                <Sitio>
                    <Router>
                        <Historial />
                        <Nav ref={menuPadre} >
                            <div ref={intersectionMenu} >
                                {regresar ? <Link to='/'><FaArrowLeft /></Link> : <FaGenderless />}
                                {tema === 'claro' ? <FaRegMoon onClick={() => setTema('oscuro')} /> : <FaSun onClick={() => setTema('claro')} />}
                            </div>
                        </Nav>
                        <Route
                            render={({ location }) => (
                                <AnimatePresence exitBeforeEnter initial={false}>
                                    <Switch location={location} key={location.pathname}>
                                        <Route exact path="/">
                                            <Lugares />
                                        </Route>
                                        <Route path="/lugar/:idLugar">
                                            <Lugar setRegresar={setRegresar} />
                                        </Route>
                                        <Router path="*">
                                            <Page404/>
                                        </Router> 
                                    </Switch>
                                </AnimatePresence>
                            )}
                        />
                    </Router>


                </Sitio>
                <Footer>
                    El Salvador. 2020.
                </Footer>
            </ThemeProvider>
        </>
    )
}

export default MiniSite
