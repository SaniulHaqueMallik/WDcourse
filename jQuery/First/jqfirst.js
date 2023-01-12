// document.querySelector("h1") is same as ->
// $("h1")  -->in jquery

// in js document.querySelector("button")   -> it will only take the first button or we had to use document.querySelectorAll("button") but in jquesry ->
// $("button")  -> it will take all th button

console.log($("h1").css("font-size"));  //to check or access the values of the style ruleset(only one property) 
$("h1").css("color","green");   //to manupulate style using jQuery (1st property for ruleset and 2nd property for value)

$("h1").addClass("big-title");               //to add a class 
$("h1").removeClass("title");            //to remove a class 

$("h1").addClass("margin-50 padding-50");    //to work  with multiple classes
$("h1").hasClass("margin-50");               // to check if the class is present or not. It returns a boolean value.


//Manupulating Text with JQuery
$("h1").text("Good Bye");
$("h2").text("I'M H2");                 // changes all the H2

//to update Html
$("h1").html("<em>Hey</em>");

//manipulating ATTRIBUTES with JQuery
$("img").attr("src")   // it will return the source
$("a").attr("href", "https://www.yahoo.com")   //to manupulate the value of an attribute. 

$("h1").attr("class")   //its applicable for all html elements

//***************************************
//EventListener with jQuery
$("h1").click(function(){
    $("h1").html("why did you clicked me?")
})
$("button").click(function(){
    $("h1").html("wtf!!!")
})

$("input").keypress(function(event){                      //keypress
    console.log(event.key)
})

$(document).keypress(function(event){                      //keypress
    $("h1").html(event.key)
})

$("h1").on("mouseover", function(){                 // how to use other js event listener 
    $("h1").css("color","purple")
})

//***************************************
//ADDING and REMOVING elemnts using JQuery or creating HTML element
// .before(), .after() , .prepend() , .append()

$("h1").before("<button>Nothing</button>")            //creates button before <H1> tag
$("h1").after("<button>Nothing</button>")            //creates button after <H1> tag 
$("h1").prepend("<button>Nothing</button>")         //creates button just after opening tag of <H1> tag
$("h1").append("<button>Nothing</button>")         //creates button just before the closing of <H1> tag

$("input").remove()                              // removes all input from the current webpage.

//***************************************
//Website Animation With JQuery

//normal toggle
$(".hide").click(function(){
    $("h2").hide()                              //to hide h2 element click the button of that class
})
$(".show").on("click",function(){  
    $("h2").show()                               //to SHOW h2 element click the button of that class                            
})
$(".toggle").on("click",function(){
    $("h2").toggle()                              //to toggle h2 element click the button of that class
})

//fade toggle  ---> to hide , show , toggle using fade animation
$(".fadeout").on("click", function(){              //to fade out h1 element click the button of that class
    $("h1").fadeOut()
})
$(".fadein").on("click", function(){                //to fade in h1 element click the button of that class
    $("h1").fadeIn()
})
$(".fadetoggle").on("click", function(){                //to toggle fade in h1 element click the button of that class
    $("h1").fadeToggle()
})

//slide toggle      ----> to hide , show , toggle using slide animation
$(".slideup").on("click",function(){
    $("h1").slideUp()
})
$(".slidedown").on("click",function(){
    $("h1").slideDown()
})
$(".slidetoggle").on("click",function(){
    $("h1").slideToggle()
})

//ANIMATE  (custom css)----> to hide , show , toggle using custom css
/* Using animate we can mention our css property inside  a curly brackets but we can only css rulesets 
which has a numeric values */
$(".animate").on("click",function(){
    $("h1").animate({opacity: 0.3})
})

// chaning methods   --> methods will go in order

$(".chain").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.4})
})
