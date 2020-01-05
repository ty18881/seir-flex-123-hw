/** SECTION 2: Combining Datatypes */

/** 1.  CrayonBox object */

const crayonBox = {
    brand: "Crayola",
    size:  64,
    colors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
}

console.log(crayonBox.colors[2]);

/** 2.  Bottle Object - nested objects */

const bottle = {
    size: "20oz",
    material: "plastic",
    cap: {material: "plastic", color: "white"}
}

console.log(bottle.cap.color);

/** 3.  Create an array called receipt that has at least one object in it.
 *  The inner objects should be items that have a name and a price. Log one of the properties of that inner object. */

 const receipt = {
     date: "1/4/2020",
     time: "14:05",
     store: 144,
     itemsPurchased: [
         { name: "milk",
         price: 4.29},
         { name: "bread",
         price: 2.50 },
         { name: "eggs",
         price: 3.75},
         {name: "cheese",
        price: 4.50}]
 }

 console.log(receipt.itemsPurchased[1].name)

 /** 4.  Create an array called apartmentBuilding that has an array as one of its elements, 
  * the inner array should be the names of the tenants. Log one of the elements of the inner array. */

  const apartmentBuilding = [
      "Brooklyn",
      ["Ramos", "Powell", "Roman", "Schneider"]
  ]

  console.log(apartmentBuilding[1][1])

  

 