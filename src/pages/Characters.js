import React, { useEffect, useState } from "react"
import { getCharacter } from "rickmortyapi"
import CardItem from "../components/CardItem"
import Loader from "../components/Loader"

const getCharacters = async (setCharacters) => {
    const characters = await getCharacter()
    setCharacters(characters.results)
}

const Characters = () => {
    const [characters, setCharacters] = useState(null)
    const characterCards = []

    useEffect(() => {
        getCharacters(setCharacters)
    }, [])

    try {
        characters.forEach((character) => {
            characterCards.push(
                <CardItem
                    key={character.id}
                    title={character.name + " (" + character.species + ")"}
                    text={character.origin.name}
                    footer={character.gender + ", " + character.status}
                    image={character.image}
                    type={"characters"}
                />
            )
        })
    } catch (error) {
        console.log("Fetching characters...")
    }

    return (
        (characters
            ? (<div className="card-bg">{characterCards}</div>)
            : <Loader />
        )
    )
}

export default Characters