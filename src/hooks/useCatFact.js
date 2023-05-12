import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"


export const useCatFact = () => {
    const [fact, setFact] = useState()


    //genero un metodo que me actualiza el estado y lo retorno para usarlo fuera. Es mejor que sacar el setFact
    const refreshRandomFact = ()=>{
        getRandomFact().then(newFact => setFact(newFact))
    }
    //Recupera la cita al cargar la pagina
    useEffect(refreshRandomFact, [])

    return {fact, refreshRandomFact}
}