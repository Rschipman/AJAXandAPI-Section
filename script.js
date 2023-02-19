const req = new XMLHttpRequest();

req.onload = function () {
  console.log("It Loaded!");
  const data = JSON.parse(this.responseText);
  console.log(`${data.name}, ${data.height}cm`);
};

req.onerror = function () {
  console.log("ERROR!!");
  console.log(this);
};
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();

// "https://swapi.dev/api/people/1/"
