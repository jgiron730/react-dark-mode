import React, { useEffect,useRef } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { LugarStyle,SubNav } from './componentes/StyleComp'
import datosLugares from './datosLugares'

import { FaAngleRight } from "react-icons/fa";

import nohay from './imgs/no.jpg'

function Lugar(p) {
    const { idLugar } = useParams()
    const { lugares } = datosLugares;
    const nota = useRef(null)

    useEffect(() => {
       // console.log(lugares)
       console.log( Object.keys(lugares))
        if ((lugares[idLugar]) === undefined) {
            nota.current.innerHTML = "<p>Pagina no encontrada</p>";
        } else {
            nota.current.innerHTML = lugares[idLugar].nota;
        }
        
        window.scrollTo(0, 0)
        p.setRegresar(true)
        return () => {
            p.setRegresar(false)
            window.scrollTo(0, 0)
        }
    }, [idLugar,lugares])

    const mover: Varianst = {
        inicial: { opacity: 0, x: -50 },
        animar: {
            opacity: 1, x: 0,
            transition: {
                duration: .5,
                ease: [0.45, 0, 0.55, 1]
            }
        },
        exit: {
            opacity: 0, x: -50,
            transition: {
                duration: .5,
                ease: [0.45, 0, 0.55, 1]
            }
        }
    }


    return (
        <LugarStyle key="2" initial={'inicial'} animate={'animar'} exit={'exit'} variants={mover} >
            <div className="photo">
                <img src={(lugares[idLugar]) === undefined ? nohay : lugares[idLugar].foto} alt='m' />
            </div>
            <h1>{(lugares[idLugar]) == undefined ? ':(' : lugares[idLugar].lugar}</h1>
            
            <div></div>

            <div ref={nota}>  </div>
            <div>
                <SubNav>
                    { Object.keys(lugares).map(x=>
                        <motion.li key={x}  whileHover={{x: 10,transition: { duration: .3 } }}><FaAngleRight/>
                            <NavLink activeClassName="aqui" to={`/lugar/${x}`}>{lugares[x].lugar}</NavLink>
                        </motion.li>
                    ) }
                </SubNav>
            </div>
        </LugarStyle>

    )
}

export default Lugar
