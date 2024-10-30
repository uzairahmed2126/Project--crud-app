const key = document.getElementById("key");
const data = require("../../server/dataFiles/usersData.json");
const value = document.getElementById("value");
key.innerHTML = data.filter((item) => item["username"]);
value.innerHTML = data.filter((item) => item["password"]);
