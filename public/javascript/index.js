const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const characterId = document.getElementsByName('character-id')[0].value;
    console.log(characterId);
    charactersAPI.getOneRegister(characterId);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const characterId = document.getElementsByName('character-id-delete')[0].value;
    console.log(characterId);
    charactersAPI.deleteOneRegister(characterId);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const character = {
      id: document.getElementsByName('chr-id')[0].value,
      name: document.getElementsByName('name')[1].value,
      occupation: document.getElementsByName('occupation')[1].value,
      weapon: document.getElementsByName('weapon')[1].value,
      cartoon: document.getElementsByName('cartoon')[1].checked
    };
    charactersAPI.updateOneRegister(character);
    document.getElementById('edit-character-form').reset();
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const character = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      weapon: document.getElementsByName('weapon')[0].value,
      cartoon: document.getElementsByName('cartoon')[0].checked
    };
    charactersAPI.createOneRegister(character);
    document.getElementById('new-character-form').reset();
  });
});