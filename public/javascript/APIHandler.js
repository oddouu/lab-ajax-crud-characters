class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
      .get(`http://localhost:8000/characters/`)
      .then(response => {
        console.log('getting all characters', response.data);
      })
      .catch(err => {
        if (err.response.status === 404) {
          const errorDiv = document.createElement('div');
          errorDiv.innerHTML = "Error: bad data";
          document.body.appendChild(errorDiv);
        }
      });

  }

  getOneRegister (characterId) {
    axios
      .get(`http://localhost:8000/characters/${characterId}`)
      .then(response => {
        console.log(`Returning data about charachter ID ${characterId}: `, response.data);
      })
      .catch(err => {
        if (err.response.status === 404) {
          const errorDiv = document.createElement('div');
          errorDiv.innerHTML = "There's no character with ID: " + characterId;
          document.body.appendChild(errorDiv);
        }
      });
  }

  createOneRegister (character) {
    axios
      .post(`http://localhost:8000/characters/`, character)
      .then(response => {
        console.log('New character created: ',response.data);
        // const {
        //   name,
        //   id
        // } = response.data;

        // const newCharacterHTML = `
        //     <li>
        //     <h3>${name}</h3>
        //     <p>${id}</p>
        //     `;

        // document.getElementById('characterList').innerHTML += newCharacterHTML;

        // document.getElementById('createForm').reset();
      })
      .catch(err => console.log(err));
    }

  updateOneRegister (character) {
    axios
      .patch(`http://localhost:8000/characters/${character.id}`, character)
      .then(response => {
        console.log(`charachter ID ${character.id} has been updated:`, response.data);
      })
      .catch(err => {
        if (err.response.status === 404) {
          const errorDiv = document.createElement('div');
          errorDiv.innerHTML = "There's no character with ID: " + characterId;
          document.body.appendChild(errorDiv);
        }
      });
  }

  deleteOneRegister (characterId) {
    axios
      .delete(`http://localhost:8000/characters/${characterId}`)
      .then(response => {
        console.log(`Charachter ID ${characterId} has been deleted:`, response.data);
      })
      .catch(err => {
        if (err.response.status === 404) {
          const errorDiv = document.createElement('div');
          errorDiv.innerHTML = "There's no character with ID: " + characterId;
          document.body.appendChild(errorDiv);
        }
      });

  }
}


