//selecting sidenav,mside

var mside = document.getElementById("mside")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

mside.addEventListener("click", function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

