const charactersApi = new CharactersApiHandler()

showCurrentCharacters()

// Creación nuevo personaje
document.querySelector('#newCharacterForm').onsubmit = e => {
    e.preventDefault()

    const inputs = document.querySelectorAll('#newCharacterForm input')

    const myCharacter = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    charactersApi
        .createCharacter(myCharacter)
        .then(() => showCurrentCharacters())
        .catch(err => console.log('Hubo un error!', err))
}


// Obtener la información de un personaje para la edición
document.querySelector('#getCharacterForm').onsubmit = e => {
    e.preventDefault()

    const characterId = document.querySelector('#getCharacterForm input').value

    charactersApi
        .getOneCharacter(characterId)
        .then(response => {
            const inputs = document.querySelectorAll('#editCharacterForm input')
            inputs[0].value = response.data.name
            inputs[1].value = response.data.occupation
            inputs[2].value = response.data.weapon
        })
        .catch(err => console.log('Hubo un error!', err))
}


// Editar personaje
document.querySelector('#editCharacterForm').onsubmit = e => {
    e.preventDefault()

    const characterId = document.querySelector('#getCharacterForm input').value

    const inputs = document.querySelectorAll('#editCharacterForm input')

    const myCharacterToEdit = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    charactersApi
        .editCharacter(characterId, myCharacterToEdit)
        .then(() => {
            document.querySelector('#editCharacterForm').reset()
            showCurrentCharacters()
        })
        .catch(err => console.log('Hubo un error!', err))
}


// Actualizar la lista de personajes
function showCurrentCharacters() {

    charactersApi
        .getAllCharacters()
        .then(allCharacters => {
            let text = ''
            allCharacters.data.forEach(elm => text += `<li>${elm.name} (${elm.occupation})</li>`)
            document.querySelector('#currentCharacters').innerHTML = text
        })
        .catch(err => console.log('Hubo un error!', err))
}