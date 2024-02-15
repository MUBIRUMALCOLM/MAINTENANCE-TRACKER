var jake = []

function accept(){
    localStorage.getItem("user")
    console.log(localStorage.getItem("user")
    )
    var requestInput = document.getElementById("request")
    var kenn = {sender:"malcolm", complaint:requestInput, status:"new"}
    jake.push(kenn)
    localStorage.setItem("paul", JSON.stringify(jake))
}