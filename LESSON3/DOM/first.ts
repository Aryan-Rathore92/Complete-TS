// method1 --> add exclametery sign ( ! ) at the end of selected element for confim that always element will present
var headingElement = document.querySelector("h1")!;
console.log(headingElement.textContent);

// optional chaining being perform automatic
var headingh2 = document.querySelector("h2");
console.log(headingh2?.classList);

var anchorTag = document.querySelector("a");
console.log(anchorTag?.href);

var anchorTagWithClass = document.querySelector(
  ".anchorElem",
)! as HTMLAnchorElement;
console.log(anchorTagWithClass.href);

// If you are accesing dom element with class then it behave like a element not a tag
// If you are accessing dom element with tag then it behave like a dom element
// If you are access element with class then use -> as HTMLAnchorElement
