const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

function getNames(param) {
  let names = param.map((item) => item.name);
  return names;
}

console.log(getNames(persons));

function getHeights(param) {
  let heights = param.map((item) => item.height);
  return heights;
}

console.log(getHeights(persons));

function getArray(param) {
  let arr1 = param.map((item) => item.name);
  let arr2 = param.map((item) => item.height);
  let totalArr = arr1.concat(arr2);
  let emptyArr = [];
  emptyArr = totalArr;
  return emptyArr;
}

console.log(getArray(persons));

function getFirstName(param) {
  let firstNames = param.map((item) => item.name.split(" ")[0]);
  return firstNames;
}

console.log(getFirstName(persons));

console.log("🔽----- ----- ----- ----- ----- ----- ----- ----- -----🔽");

function getMassThan(param) {
  let massThan = param.map((item) => item.mass > 100);
  return massThan;
}

console.log(getMassThan(persons));

function getHeightLess(param) {
  let heightLess = param.map((item) => item.height < 200);
  return heightLess;
}

console.log(getHeightLess(persons));

function getMale(param) {
  let male = param.map((item) => item.gender == "male");
  return male;
}

console.log(getMale(persons));

function getFemale(param) {
  let female = param.map((item) => item.gender == "female");
  return female;
}

console.log(getFemale(persons));

console.log("🔽----- ----- ----- ----- ----- ----- ----- ----- -----🔽");

function sortbyName(param) {
  let sortName = param.map((item) => item.name.split(" ")[0]);
  return sortName.sort();
}

console.log(sortbyName(persons));

function sortbyMass(param) {
  let sortMass = param.sort((x, y) => y.mass - x.mass);
  return sortMass;
}

console.log(sortbyMass(persons));

function sortbyHeight(param) {
  let sortHeight = param.sort((x, y) => y.height - x.height);
  return sortHeight;
}

console.log(sortbyHeight(persons));

function sortbyGender(param) {
  let sortGender = param.map((item) => item.gender);
  return sortGender.sort();
}

console.log(sortbyGender(persons));

console.log("🔽----- ----- ----- ----- ----- ----- ----- ----- -----🔽");

function everyEyes(param) {
  let everyBlue = param.every((item) => item.eye_color == "blue");
  return everyBlue;
}

console.log(everyEyes(persons));

function everyMassThan(param) {
  let everyMass = param.every((item) => item.mass > 40);
  return everyMass;
}

console.log(everyMassThan(persons));

function everyHeightLess(param) {
  let everyHeight = param.every((item) => item.height < 200);
  return everyHeight;
}

console.log(everyHeightLess(persons));

function everyMale(param) {
  let everyCharacter = param.every((item) => item.gender == "male");
  return everyCharacter;
}

console.log(everyMale(persons));

console.log("🔽----- ----- ----- ----- ----- ----- ----- ----- -----🔽");

function someMale(param) {
  let someCharacter = param.some((item) => item.gender == "male");
  return someCharacter;
}

console.log(someMale(persons));

function someEyes(param) {
  let someBlue = param.some((item) => item.eye_color == "blue");
  return someBlue;
}

console.log(someEyes(persons));

function someHeightThan(param) {
  let someHeight = param.some((item) => item.height > 210);
  return someHeight;
}

console.log(someHeightThan(persons));

function someMassThan(param) {
  let someMass = param.some((item) => item.mass < 50);
  return someMass;
}

console.log(someMassThan(persons));
