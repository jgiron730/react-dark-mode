import React,{useEffect} from 'react'
import { motion } from "framer-motion"
import { Fotos, Separador } from './componentes/StyleComp'
import { FaSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import cerroVerde from './imgs/cerro-verde.jpg'
import pital from './imgs/pital.jpg'
import boqueron from './imgs/boqueron.jpg'

import coatepeque from './imgs/coatepeque.jpg'
import costaSol from './imgs/costa-sol.jpg'
import sunzal from './imgs/sunzal.jpg'



function Lugares() {

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
            window.scrollTo(0, 0)
        }
    }, [])

    const mover: Varianst = {
        inicial: { opacity: 0,x:-50 },
        animar: {
            opacity: 1,x:0,
            transition: {
                duration: .5,
                ease: [0.45, 0, 0.55, 1]
            }
        },
        exit: {
            opacity: 0, x:50,
            transition: {
                duration: .5,
                ease: [0.45, 0, 0.55, 1],
            }
        }
    }

    return (


        <motion.div key="2" initial={'inicial'} animate={'animar'} exit={'exit'} variants={mover} >

            <Fotos>
                <div className="foto">
                    <h2>Montaña</h2>
                    <p>El Salvador, posee una variedad de lugares en lo alto de las montañas, donde puedes disfrutar de un excelente clima, vistas impresionantes y por supuesto de aire fresco. </p>
                </div>

                <Link to='/lugar/el-pital' className="foto">
                    <div>
                        <h3>El Pital</h3>
                        <img src={pital} alt='m' />
                    </div>
                </Link>

                <Link to='/lugar/el-cerro-verde' className="foto">
                    <div>
                        <h3>El Cerro Verde</h3>
                        <img src={cerroVerde} alt='m' />
                    </div>
                </Link>
                <Link to='/lugar/el-boqueron' className="foto">
                    <div>
                        <h3>El Boquerón</h3>
                        <img src={boqueron} alt='m' />
                    </div>
                </Link>
            </Fotos>

            <Separador>
                <FaSlash />
            </Separador>

            <Fotos>
                <div className="foto">
                    <h2>Mar</h2>
                    <p>El Salvador mantiene un clima tropical la gran parte del año, por lo siempre es un buen momento de para tomar un bronceado o disfrutar de las olas y descansar.</p>
                </div>
                <Link to='/lugar/coatepeque' className="foto">
                    <div>
                        <h3>Lago Coatepeque</h3>
                        <img src={coatepeque} alt='m' />
                    </div>
                </Link>
                <Link to='/lugar/costa-del-sol' className="foto">
                    <div>
                        <h3>Costa del Sol</h3>
                        <img src={costaSol} alt='m' />
                    </div>
                </Link>
                <Link to='/lugar/playa-el-sunzal' className="foto">
                    <div>
                        <h3>Playa El Sunzal</h3>
                        <img src={sunzal} alt='m' />
                    </div>
                </Link>
            </Fotos>
        </motion.div>

    )
}

export default Lugares
