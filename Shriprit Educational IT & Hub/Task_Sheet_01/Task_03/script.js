$(document).ready(function() {
    $("h1").css("color",  "red");
})
 
$(document).keypress(function(event) {
    $("h1").text(event.key)
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple")
})

// adding and removing elements
$("h1").before("<button>New</button>")
$("h1").after("<button>New</button>")
$("h1").prepend("<button>New</button>")
$("h1").append("<button>New</button>")
 
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
