import { Character } from "../models/Characters.js";

const saveCharacters = (req, res) => {

    const characters = req.body;

    characters.forEach(character => {

        createCharacter(character);
    });

    async function createCharacter(character) {

        const {name, image, gender, status, species} = character;

        const user = await Character.create({
            name,
            status,
            gender,
            species,
            image
        });

        console.log(user)
    }
}

const getCharacters = (req, res) => {

    const characters = Character.findAll();
    characters.then(c => {
        return res.send(JSON.stringify(c))
    })
}


export {
    saveCharacters,
    getCharacters
}