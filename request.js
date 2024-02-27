
function ended() {
    var ren = localStorage.getItem("paul");
    var wen = JSON.parse(ren);
    console.log(wen)
    var table = document.getElementById("myTable");
    var tbody = document.getElementById("requestList")
    console.log(wen.length)

    for (var i = 0; i < wen.length; i++) {
        var row = tbody.insertRow();

        var cell1= row.insertCell() 
        var cell2 = row.insertCell()
        var cell3 = row.insertCell()
        var cell4 = row.insertCell()

        cell1.innerHTML = wen[i].date
        cell2.innerHTML = wen[i].sender
        cell3.innerHTML = wen[i].complaint
        cell4.innerHTML = wen[i].status
        

    }
}