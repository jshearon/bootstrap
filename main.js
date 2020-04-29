const ducks = [
  {
    name: 'Cheese and Quackers',
    color: 'yellow',
    breed: 'Aylesbury',
    size: 'small',
    temperament: 'crabby',
    imageUrl: 'https://2.bp.blogspot.com/-TZxbEQTFyos/V5ebApiesWI/AAAAAAAACNQ/nnlexvEZcE0d0uv1y-CHC9s0Q8gQmhujgCLcB/s600/Aylesbury%2BDuck.jpg',
    gender: 'female',
    age: 2,
    isRubber: true
  },
  {
    name: 'Duck Norris',
    color: 'brown',
    breed: 'Saxony',
    size: 'medium',
    temperament: 'feisty',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Sachsenente%2C_cropped.jpg',
    gender: 'male',
    age: 9,
    isRubber: false
  },
  {
    name: 'Eggbert',
    color: 'spotted',
    breed: 'Magpie',
    size: 'small',
    temperament: 'know-it-all',
    imageUrl: 'https://www.purelypoultry.com/images/Blue%20Magpie-2_01.jpg',
    gender: 'male',
    age: 1,
    isRubber: true
  },
  {
    name: 'Feather Locklear',
    color: 'spotted',
    breed: 'Ancona',
    size: 'small',
    temperament: 'easy going',
    imageUrl: 'https://www.purelypoultry.com/images/ancona-ducklings.jpg',
    gender: 'female',
    age: 5,
    isRubber: false
  },
  {
    name: 'James Pond',
    color: 'black',
    breed: 'Pomeranian',
    size: 'large',
    temperament: 'sneaky',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Pommernente.jpg/1200px-Pommernente.jpg',
    gender: 'male',
    age: 13,
    isRubber: false
  },
  {
    name: 'Wolfgang Duck',
    color: 'white',
    breed: 'Bali',
    size: 'medium',
    temperament: 'refined',
    imageUrl: 'https://www.roysfarm.com/wp-content/uploads/2016/07/Bali-Duck.jpg',
    gender: 'male',
    age: 8,
    isRubber: true
  },
  {
    name: 'Waddles',
    color: 'black',
    breed: 'Cayuga',
    size: 'medium',
    temperament: 'brainy',
    imageUrl: 'https://www.purelypoultry.com/images/cayuga-ducklings.jpg',
    gender: 'female',
    age: 5,
    isRubber: false
  },
  {
    name: 'Sir Quacks A Lot',
    color: 'white',
    breed: 'American Pekin',
    size: 'large',
    temperament: 'free-spirit',
    imageUrl: 'https://knowledgebase.lookseek.com/images/animals/birds/Ducks/American-Pekin-Duck.jpg',
    gender: 'male',
    age: 7,
    isRubber: false
  }
]

const printToDom = (string) => {
  document.querySelector("#ducks").innerHTML  = string;
}

const buildDucks = (array) => {
  let domString = '';
  for (let i=0; i < array.length; i++) {
    domString += `<div class="card duck">
                    <img src="${array[i].imageUrl}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${array[i].name}</h5>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Breed: ${array[i].breed}</li>
                          <li class="list-group-item">Size: ${array[i].size}</li>
                          <li class="list-group-item">Temperament: ${array[i].temperament}</li>
                          <li class="list-group-item">Gender: ${array[i].gender}</li>
                          <li class="list-group-item">Age: ${array[i].age}</li>
                          <li class="list-group-item">${array[i].isRubber ? 'Rubber Ducky' : 'Real Ducky'}</li>
                        </ul>
                      </div>
                  </div>
                  `;
  }
  printToDom(domString);
}

const filters = (event) => {
  const clickedId = event.target.id;
  const filter = event.target.dataset.filter;
  const filteredDucks = [];

  if (clickedId == "all") {
    buildDucks(ducks);
    return
  }
  
  for (let i=0; i < ducks.length; i++) {
    const duck = ducks[i];
    if (filter == 'isRubber' && clickedId == 'rubber' && duck.isRubber === true) {
      filteredDucks.push(duck);
    } else if (filter == 'isRubber' && clickedId == 'not-rubber' && duck.isRubber === false) {
      filteredDucks.push(duck);
    } else if (clickedId == duck[filter]) {
      filteredDucks.push(duck);
    }
  }

  buildDucks(filteredDucks);
}

const listeners = () => {
  const btns = document.getElementsByClassName('btn');
  for (let i = 0; i < btns.length; i++) {
    document.querySelector('#' + btns[i].id).addEventListener('click', filters);
  }
}

init = () => {
  listeners();
  buildDucks(ducks);
}

init();
