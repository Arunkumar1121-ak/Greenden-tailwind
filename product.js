//selecting sidenav,mside

var mside = document.getElementById("mside")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

mside.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//product search funtionality



var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {

    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {

        var productname = productlist[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"

        }
        else {
            productlist[count].style.display = "block"
        }
    }
})