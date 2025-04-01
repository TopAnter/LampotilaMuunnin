


document.getElementById("form1").addEventListener("submit", formSubmit);

function formSubmit(event){
    document.getElementById("tulostus").innerText = ""
    document.getElementById("ilmoitus").innerText = ""
    let luku = document.getElementById("maara").value
    let valittu = document.getElementById("yksikko").value
    let valittu2 = document.querySelector('input[name="desimaalit"]:checked')
    let lopullinenLuku = 0
    if ((!isNaN(parseFloat(luku)) && isFinite(luku)) == false || luku.length == 0){
        document.getElementById("tulostus").innerText = "syöttö ei ole luku"
        event.preventDefault()
        return
    }
    if (!valittu2){
        document.getElementById("tulostus").innerText = "desimaaleja ei valittu"
        event.preventDefault()
        return
    }
    
    if (valittu == "CTOF"){
        lopullinenLuku = (luku * 9/5) + 32
        lopullinenLuku = lopullinenLuku.toFixed(valittu2.value)
        document.getElementById("tulostus").innerText = lopullinenLuku + " Fahrenheit"
        if (lopullinenLuku < -459.7){
            document.getElementById("ilmoitus").innerText = "lämpötila on alle absoluuttisen nollapisteen"
        }
    } else if (valittu == "FTOC"){
        lopullinenLuku = (luku - 32) * 5/9
        lopullinenLuku = lopullinenLuku.toFixed(valittu2.value)
        document.getElementById("tulostus").innerText = lopullinenLuku + " Celcius"
        if (lopullinenLuku < -273.15){
            document.getElementById("ilmoitus").innerText = "lämpötila on alle absoluuttisen nollapisteen"
        }
    }
    
    
    event.preventDefault()
}