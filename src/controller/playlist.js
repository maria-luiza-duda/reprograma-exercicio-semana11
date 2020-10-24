const movies = require("../models/musics.json")
const fs = require("fs")

const getAllMusics = (req, res) => {
    console.log(req.url)
    res.status(200).send(musics)
}

const createMusic = (req, res) => {
    const { id, title, artist, duration, genre, launchYear, album, language, favorited } = req.body
    musics.push({ id, title, artist, duration, genre, launchYear, album, language, favorited })
    fs.writeFile("./src/models/musics.json", JSON.stringify(musics), 'utf8', function (err) { 
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const musicFound = musics.find(music => music.id == id) 
            res.status(200).send(musicFound)
        }
    })
}

module.exports = {
    getAllMusics,
    createMusic
}