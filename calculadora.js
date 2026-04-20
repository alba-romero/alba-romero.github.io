const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".botones");
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        if (boton.id === "borrar") {
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "DEL") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR") {
                pantalla.textContent = "0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0,-1);
        }
        return;
        }
        let texto = pantalla.textContent;
        let textoTraducido = texto.replace(/x/g, "*").replace(/÷/g, "/");
        if (boton.id === "igual") {
            try{
            pantalla.textContent = eval(textoTraducido);
            }catch{
                pantalla.textContent="ERROR";
            }
            return;
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
            pantalla.textContent = botonApretado;
        } else {
           pantalla.textContent += botonApretado; 
        }
    })
})
