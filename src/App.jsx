import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"




export function App() {
    const {fact, refreshRandomFact} = useCatFact()
    const {image} = useCatImage({fact})


    const handleClick = async ()=>{
        refreshRandomFact()
    }

    return (
        <main>
            <button onClick={handleClick}>New Fact</button>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={`Image extracted using the first word for ${fact}`} />}
        </main>
    )
}