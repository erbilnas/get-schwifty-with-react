import React, { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import Popup from "../components/Popup"
import axios from "axios"

const getCharacterDetails = (characters) => {
    const characterDetails = []

    characters.forEach((character) => {
        axios.get(character)
            .then((response) => {
                characterDetails.push(
                    response.data
                )
            })
    })

    return characterDetails
}

const CardItem = (props) => {
    const { title, text, key, type, image, characters, footer } = props

    const [showPopup, setShowPopup] = useState(false)
    const [figures, setFigures] = useState(undefined)

    useEffect(() => {
        if (type === 'episodes') setFigures(getCharacterDetails(characters))
    }, [])

    return (
        <Card className="card-item" bg="dark" text="white">
            {image ? (<Card.Img variant="top" src={image} />) : null}
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {text}
                    {showPopup
                        ? (
                            <Popup
                                id={key}
                                show={showPopup}
                                onHide={() => setShowPopup(false)}
                                characters={figures}
                            />
                        )
                        : null
                    }
                </Card.Text>
                {type === 'episodes' ? <Button variant="light" onClick={() => setShowPopup(true)}>Show Characters</Button> : null}
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{footer}</small>
            </Card.Footer>
        </Card>
    )
}

export default CardItem