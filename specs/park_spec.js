const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 100, []);
    dino1 = ('t-rex', 'carnivore', 50);
    dino2 = ('velociraptor', 'carnivore', 60);
    dino3 = ('velociraptor', 'carnivore', 30);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino1);
    const actual = park.numberOfDino();
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.removeDino(dino1);
    const actual = park.numberOfDino();
    assert.deepStrictEqual(actual, 1);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.mostVisited();
    assert.deepStrictEqual(actual, dino2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    const actual = park.findBySpecies('velociraptor');
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.removeDino(dino1);
    const actual = park.removeBySpecies();
    asert.deepStrictEqual(actual, 2);
  });

});
