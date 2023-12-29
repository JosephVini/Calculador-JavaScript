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
    if (!res.value) {
        res.value = ""
    }

    if (valueDeEntrada === "Backspace") {
        res.value = res.value.slice(0, -1)
    } else {
        res.value += valueDeEntrada
    }
}

// Calcula o resultado
function calculate(value) {
    const calculateValue = eval(value || null)
    if (isNaN(calculateValue)) {
        res.value = "Não é possivel dividir zero por zero"
    } else {
        res.value = calculateValue
    }
}

// Usando keydown
document.addEventListener("keydown", (event) => {
    const teclas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "-", "+", "Enter", "Backspace"]
    if (teclas.includes(event.key)) {
        liveScreen(event.key)
        if (event.key === "Enter") {
            calculate(res.value.replace("Enter", ""))
        }
    }
})