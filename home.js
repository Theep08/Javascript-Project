

$("li").addEventListener("mouseenter", function(){
    $(this).setAttribute("style", "font-size: 13px")
})

$("li").addEventListener("mouseleave", function(){
    $(this).setAttribute("style", "font-size: 11px")
})

$("h1").addEventListener("mouseenter", function(){
    $(this).setAttribute("style", "color: blue")
})

$("h1").addEventListener("mouseleave", function(){
    $(this).setAttribute("style", "color: black")
})