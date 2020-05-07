const express = require("express");
const animals = express.Router();
const Animal = require("../models/animal.js");

// INDEX route
animals.get("/", (req, res) => {
  Animal.find({}, (err, foundAnimals) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundAnimals);
  });
});

// CREATE route
animals.post("/", (req, res) => {
  Animal.create(req.body, (error, createdAnimal) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdAnimal); //  .json() will send proper headers in response so client knows it's json coming back
  });
});

animals.delete("/:id", (req, res) => {
  Animal.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedAnimal);
  });
});

animals.put("/:id", (req, res) => {
  Animal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedAnimal) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedAnimal);
    }
  );
});

module.exports = animals;
