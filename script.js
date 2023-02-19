// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log("It Loaded!");
//   const data = JSON.parse(this.responseText);
//   console.log(`${data.name}, ${data.height}cm`);
// };

// req.onerror = function () {
//   console.log("ERROR!!");
//   console.log(this);
// };
// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

// "https://swapi.dev/api/people/1/"

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Resolved", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("Error!", e);
//   });

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!", e);
  }
};

loadStarWarsPeople();
