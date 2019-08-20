const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDino = function (dino) {
  this.dinosaurs.push(dino);
};

Park.prototype.numberOfDino = function () {
  return this.dinosaurs.length;
};

Park.prototype.removeDino = function (critter) {
  for (let dino of this.dinosaurs) {
    if (dino.species === critter){
      dino.pop();
    }
  }
};

Park.prototype.mostVisited = function () {
  popular = this.dinosaurs[0];
  for(let dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > popular.guestsAttractedPerDay) {
      popular = dino;
    }
  }
  return popular;
}

Park.prototype.findBySpecies = function (name) {
  const foundDinos = [];
  //iterate through array
  for (let dino of this.dinosaurs) {
    // if species matches push to the new array
    if (dino.species === name) {
      foundDinos.push(name);
    }
  }
  //return the number of dinosaurs added to the new array
  return foundDinos.length;
}

Park.prototype.removeBySpecies = function (species) {
  //iterate through array
  for (let dino of this.dinosaurs) {
    //if dino matched the named species
    if (dino.species === species) {
      //remove from array
      removeDino();
    }
  }
  //return the length of the array after named is removed
  return this.dinosaurs.length;
};

module.exports = Park;
