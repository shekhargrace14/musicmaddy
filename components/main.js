fetch("./components/main.html")
.then(response=>response.text())
.then(data=>
    document.querySelector("main").innerHTML= data 
)