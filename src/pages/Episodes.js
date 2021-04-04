import React, { useEffect, useState } from "react"
import { getEpisode } from "rickmortyapi"
import CardItem from "../components/CardItem"
import Loader from "../components/Loader"

const getEpisodes = async (setEpisodes) => {
    const episodes = await getEpisode()
    setEpisodes(episodes.results)
}

const Episodes = () => {
    const [episodes, setEpisodes] = useState(null)
    const episodeCards = []

    useEffect(() => {
        getEpisodes(setEpisodes)
    }, [])

    try {
        episodes.forEach((episode) => {
            episodeCards.push(
                <CardItem
                    key={episode.id}
                    title={episode.episode + " | " + episode.name}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor at risus."}
                    footer={episode.air_date}
                    characters={episode.characters}
                    type={"episodes"}
                />
            )
        })
    } catch (error) {
        console.log("Fetching episodes...")
    }

    return (
        (episodes
            ? (<div className="card-bg">{episodeCards}</div>)
            : <Loader />
        )
    )
}

export default Episodes