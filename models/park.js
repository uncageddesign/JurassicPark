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

Park.prototype.removeDino = function () {
  
};

module.exports = Park;
