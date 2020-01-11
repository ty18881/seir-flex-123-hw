// Jan 4, 2020 Morning / Afternoon Lab Work.
// 1.  Create a function that takes a parameter and logs it.


const secondFunct = ()=> {
    console.log("hi");
}
const takesParam = (inputString, callback) => {
console.log(`My Input String is:  ${inputString}`);
callback();
}

// takesParam("Hello World", secondFunct);




// secondFunct();

// Invoke the first function, passing in the second function as a parameter

// takesParam(secondFunct);

// alter first function so it invokes it's parameter
// const takesParam = (keyWord) => {
//     // console.log(`My Input String is:  ${inputString}`);
//     keyWord();
//     }

// takesParam(secondFunct);

/*
const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi');
*/

/*
const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

foo(bar, 'hi');

const baz = (param) => {
    console.log(param.toUpperCase());
}

foo(baz, 'hello');
*/

// Electric Mixer

const electricMixer = (attachment) => {
    // console.log(`This is the mixer now: ${attachment}`);
    console.log("This mixer is now: "+ attachment());
}

// electricMixer("Ice Cream Maker");

// electricMixer(() => {
//     return "spiralizing";
// });

const spiralizer = () => {
    return "spiralizing";
  }
  
//   electricMixer(spiralizer);
/*
  const slicerDicer = () => {
    return "slicin' and dicin'";
  }
  */

//   electricMixer(spiralizer);
//   electricMixer(slicerDicer);
/*
  setTimeout(() => {
      console.log('hi');
  }, 2000);

  let num = 0;
  setInterval( () => {
    num +=1;  
    console.log(`This is num: ${num}`);
  }, 1000)
*/

// LECTURE: Callbacks
  // array looping methods: forEach, map, filter, reduce

  let students = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// filter for males
const isMale = (student) => student.sex === 'M'

// filter for females

const isFemale = (student) => student.sex === 'F';

const filterGender = (studentArr, callback) => {
  let newStudentArr = []
  for(let i = 0; i < studentArr.length; i += 1){
    if(callback(studentArr[i])) {
      newStudentArr.push(studentArr[i])
    }
  }
  return newStudentArr
}

// console.log(filterGender(students, isMale));


// console.log(filterGender(students, isFemale));
  

// User Story:  
// User needs to filter the array based upon a single grade.

const matchesGrade = (student, grade) => student.grade === grade;


const filterGrade = (studentArr, grade, callback) => {
    let newStudentArr = []
    
    for(let i = 0; i < studentArr.length; i += 1){
      if(callback(studentArr[i], grade)) {
        newStudentArr.push(studentArr[i])
      }
    }
    return newStudentArr
  }

  console.log(filterGrade(students, 13, matchesGrade));
