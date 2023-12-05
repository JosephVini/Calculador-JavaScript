const ligthTheme = "css/light.css";
const darkTheme = "css/dark.css";
const res = document.getElementById("result")

// Muda o tema
function changeTheme() {
    const theme = document.getElementById("theme");
    if (theme.getAttribute("href") === ligthTheme) {
        theme.setAttribute("href", darkTheme)
    } else {
        theme.setAttribute("href", ligthTheme)
    }
}

// Manipula o display do resultado
function liveScreen(valueDeEntrada) {
    if(!res.value) {
        res.value = ""
    }
    res.value += valueDeEntrada
}

// Calcula o resultado
function calculate(value) {
    const calculateValue = eval(value || null)
    if(isNaN(calculateValue)) {
        res.value = "Não é possivel dividir zero por zero"
    } else {
        res.value = calculateValue
    }
}

/*
 Fazer o keydow 
 manipulação do teclado
*/