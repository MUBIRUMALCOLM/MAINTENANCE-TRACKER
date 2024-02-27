var jake = []

function accept(){
    localStorage.getItem("user")
    console.log(localStorage.getItem("user")
    )
    var requestInput = document.getElementById("request").value
    console.log(requestInput)
    var kenn = {date:new Date(), sender:"malcolm", complaint:requestInput, status:"new"}
    console.log(kenn)
    jake.push(kenn)
    if (requestInput){
        localStorage.setItem("paul", JSON.stringify(jake))
        document.getElementById("request").value = ""
        document.getElementById("wind").innerHTML = "your request has been submitted"
        document.getElementById("wind").style.color = "green"

    }

    else{
        document.getElementById("wind").innerHTML = "PLEASE SUBMIT SOMETHING IN THE TEXT AREA"
        document.getElementById("wind").style.color = "red"
    }

}