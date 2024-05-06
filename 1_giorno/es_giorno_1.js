class User {
    constructor(_firstName, _lastName, _age, _location) {

      this.firstName = _firstName
      this.lastName = _lastName
      this.age = _age
      this.location = _location
    }

    comparazioneeEtà(y) {
        if (this.age > y.age) {
            return `${this.firstName} è più vecchio di ${y.firstName}`;
        } else if (this.age < y.age) {
            return `${this.firstName} è più giovane di ${y.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${y.firstName}`;
        }

    }

}

let x = new User('Mario','Rossi','20','Italia');
let y = new User('Luigi','Bianchi','25','Brasile');

console.log (x.comparazioneeEtà(y));

//////////////////////////////////////////////////////////

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
}

const petForm = document.getElementById('petForm');
const petList = document.getElementById('petList');

petForm.addEventListener('submit', function(event) {
    event.preventDefault(); //azzera l'evento di base e fa quello nuovo

    const petName = document.getElementById('petName').value; //.value fa settare il nuovo valore
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const pet = new Pet(petName, ownerName, species, breed);

    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;

    petList.appendChild(listItem); //aggiunge un nuovo nodo

    petForm.reset();
});