import { useEffect, useState } from "react"

const cat_prefix_image_url = `https://cataas.com`


export function useCatImage({fact}){
    const [image, setImage] = useState()

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImage(url) //dejo lo minimo necesario, 
            })
    }, [fact])

    return {image: `${cat_prefix_image_url}${image}`}
} //devuelve la url de la imagen