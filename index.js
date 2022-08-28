//select the body element
const body = document.body;
//create a nav element
const nav = document.createElement("nav");
//add the element to the body
body.append(nav);
//creating the navigation list
const navul = document.createElement("ul");
const navli = document.createElement("li");
const navli2 = document.createElement("li");
const navli3 = document.createElement("li");
const leftul = document.createElement("ul");
const leftli = document.createElement("li");
const leftli1 = document.createElement("li");

//adding the ul and li
nav.append(navul);
//the ordered list items
navul.append(navli);
navul.append(navli2);
navul.append(navli3);

//left side nav
nav.append(leftul);
leftul.append(leftli);
leftul.append(leftli1);

leftli.innerText = "Login";
leftli1.innerText = "Register";

nav.style.display = "flex";
nav.style.justifyContent = "space-between";
leftul.style.listStyle = "none";
leftul.style.display = "flex";
leftul.style.gap = "2em";

navli.innerText = "Home";
navli2.innerText = "About Us";
navli3.innerText = "Contact Us";

navli.classList.add("home", "list"); //how classes are added
navli2.classList.add("about", "list");
navli3.classList.add("contact", "list");

nav.style.backgroundColor = "blue";
nav.style.color = "white";
nav.style.padding = "1em";
nav.style.borderRadius = "0.8em";

navul.style.display = "flex";
// navul.style.justifyContent = "space-between";
navul.style.gap = "2em";
navul.style.listStyle = "none";
