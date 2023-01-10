// DOCUMENT OBJECT MODEL

var heading =  document.firstElementChild.lastElementChild.firstElementChild

// here documents means the whole html
// the first firstElementChild means HTML tag
// the 2nd lastElementChild means body tag
// the 3rd firstElementChild means h1 tag as it it 1st mentioned in the html flow. 

heading.innerHTML = "Good Bye"
heading.style.color = "green"

document.querySelector("input").click();

document.getElementsByTagName('li')[2].style.color = "red"