// DOCUMENT OBJECT MODEL

var heading =  document.firstElementChild.lastElementChild.firstElementChild

// here documents means the whole html
// the first firstElementChild means HTML tag
// the 2nd lastElementChild means body tag
// the 3rd firstElementChild means h1 tag as it it 1st mentioned in the html flow. 

heading.textContent = "Good"
heading.innerHTML  = "<em>Good Bye</em>"
heading.style.color = "green"

// SELECTORS

document.querySelector("input").click();

document.getElementsByTagName('li')[2].style.color = "red"

document.getElementsByClassName("btn")[0].style.color = "blue"

document.getElementById("bing").innerHTML = "not supported"

document.querySelector("ul li a").style.fontSize = "5vw"

document.querySelector("li a").style.backgroundColor = "yellow" 

// OTHERS AND BEST OPTIONS
document.querySelector("li#bing") /* BEST OPTION */

document.querySelector("ul li a")

document.querySelectorAll("ul li")[2]


// ADDING CLASS

document.querySelector("button").classList

document.querySelector("button").classList.add("invisible");          /*adds a class to button*/

document.querySelector("button").classList.remove("invisible");      /*removes a class to button*/

document.querySelector("button").classList.toggle("invisible");      /*toggle a class to button*/

// task

document.querySelector("h1").classList.add("huge");

// Manipulating HTML Element attribites

document.querySelector("a")
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");

