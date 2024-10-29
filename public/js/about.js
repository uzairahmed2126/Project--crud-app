const body = document.querySelector("body");
const div = createElement("div", "main-container");
function createElement(elementName, idName) {
  const createElement = document.createElement(elementName);
  createElement.id = idName;
  createElement.innerHTML = "<h1>I'm ABOUT Page</h1>";
  body.append(createElement);
}
