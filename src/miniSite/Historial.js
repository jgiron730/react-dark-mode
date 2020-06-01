import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function Historial({ history }) {

    useEffect(() => {
        history.listen((x) => {
            console.log(x)
            //window.scrollTo(0, 0)
        })

    }, [history])

    return (
        <>
            
        </>
    )
}

export default withRouter(Historial)
