import React, { useState } from "react"
import { Modal, Figure, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap"
import Loader from "./Loader"

const Popup = (props) => {
    const { characters } = props

    const [keyword, setKeyword] = useState(null)
    const [sortingBy, setSortingBy] = useState(null)

    try {
        if (keyword) {
            var figures = characters.filter(figure => {
                return figure.name.toLowerCase().includes(keyword.toLowerCase())
            })
        } else figures = characters

        if (sortingBy === 'asc') {
            figures.sort((a, b) => {
                let nameA = a.name.toUpperCase()
                let nameB = b.name.toUpperCase()

                if (nameA < nameB) {
                    return -1
                } else if (nameA > nameB) {
                    return 1
                } else return 0
            })
        } else if (sortingBy === 'desc') {
            figures.sort((a, b) => {
                let nameA = a.name.toUpperCase()
                let nameB = b.name.toUpperCase()

                if (nameA < nameB) {
                    return 1
                } else if (nameA > nameB) {
                    return -1
                } else return 0
            })
        }
    } catch (error) {
        console.error("Loading popup...")
    }

    return (
        <Modal {...props} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Characters</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup>
                    <FormControl
                        placeholder="Search"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <DropdownButton
                        title="Sort"
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        id="input-group-dropdown-2"
                    >
                        <Dropdown.Item onClick={() => setSortingBy("asc")}>Sort by A-Z</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortingBy("desc")}>Sort by Z-A</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
                {
                    characters
                        ? (
                            figures.map((figure) => {
                                return (
                                    <Figure key={figure.id}>
                                        <Figure.Image
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src={figure.image}
                                        />
                                        <Figure.Caption>
                                            {figure.name}
                                        </Figure.Caption>
                                    </Figure>
                                )
                            })
                        )
                        : <Loader />
                }
            </Modal.Body>
        </Modal >
    )
}

export default Popup