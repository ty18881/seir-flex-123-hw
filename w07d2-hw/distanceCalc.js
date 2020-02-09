let myLatitude = 40.667766;

let myLongitude = -73.9947;

let radiusOfEarth = 3958.8; // radius in miles.

const calcDistance = (latitude, longitude) => {
    // use Equirectangular Approximation to calculate the approximate distance 
    // between our starting point and this greenspace.   

    // all latitude and longitude values must be in RADIANS.  

    let myLatInRad = myLatitude * (Math.PI/180);
    let latInRad = latitude * (Math.PI/180);

    let myLonInRad = myLongitude * (Math.PI/180);

    let lonInRad = longitude * (Math.PI/180);

    var x = (myLonInRad - lonInRad) * Math.cos((myLatInRad + latInRad)/2);

        console.log(`X = ${x}`);

    var y = (myLatInRad - latInRad);

    console.log(`Y = ${y}`);
    var distance = Math.sqrt(x*x + y*y) * radiusOfEarth;

    console.log(`distance calculated = ${distance}`);
    return distance;
     
}



    calcDistance(40.664706, -73.987554);


