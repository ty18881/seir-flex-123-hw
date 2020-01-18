console.log('Script.js is linked');
// This gets loaded first.
const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
  ];

//   3.  this gets loaded third.
  $( () => {
      
    populateData();
    addData("Karolin", "NY");

    removeData("Megatron");
  });

// Function expression.
// 2nd - This gets loaded second.
  const populateData = () => {

    // refactor using Array.forEach()
    for (let i=0; i< data.length; i+=1){
        // console.log(data[i]);
        const $infoContainer = $("<div>").addClass("info-container");
        const $nameDiv = $("<div>").addClass("name").text(data[i].name);
        const $addrDiv = $("<div>").addClass("address").text(data[i].address);

        $infoContainer.append($nameDiv, $addrDiv);
      //   $infoContainer.append($addrDiv);
        $("body").append($infoContainer);
    }
  }

  const addData = (name, address) => {
      data.push({name: name, address: address});
      $("body").empty();
      populateData();
  }

  const removeData = (name) => {
    //   how do you remove a specific item from the array.
    // shift:  removes from the front of the array
    // pop:  removes from the end of the array.
    // Array.splice() + Array.indexOf() combination.
    // filter is also an option.

    // using a callback construct here
    // this line returns array with the name targeted for removed no longer included.
    const filteredArray = data.filter( currElement => currentElement.name != name);
    return filteredArray;
  }