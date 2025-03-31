


document.getElementById("form1").addEventListener("submit", formSubmit);

function formSubmit(event){
    document.getElementById("tulostus").innerText = ""
    let luku = document.getElementById("maara").value
    if ((!isNaN(parseFloat(luku)) && isFinite(luku)) == false || luku.length == 0){
        document.getElementById("tulostus").innerText = "syöttö ei ole luku"
    }
    event.preventDefault()
}