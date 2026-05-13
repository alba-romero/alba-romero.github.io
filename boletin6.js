 contenedor = document.getElementById("contenedor");

const recetas = [
{ id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate,aceite,pan" },
{ id: 2, nombrereceta: "Gachas", ingredientes: "harina,agua,azucar" },
{ id: 3, nombrereceta: "Migas", ingredientes: "pan,ajos,aceite" }
];

contenedor.innerHTML = `
<style>
    #contenedor table {
        width: auto;
        min-width: 600px; /* Un poco más ancha para que luzca más */
        font-size: 1.3rem; /* Texto más grande */
        border-collapse: collapse;
        margin: 40px auto; /* Centra la tabla horizontalmente y da margen arriba/abajo */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Sombra suave para que resalte */
    }
    #contenedor th, #contenedor td {
        padding: 20px; /* Celdas mucho más espaciosas */
        text-align: center; /* Centra el texto dentro de las celdas */
        border: 1px solid #ddd;
    }
    #contenedor th {
        background-color: #222;
        color: white;
    }
</style>

<table>
    <thead>
        <tr class="impar">
            <th>ID</th>
            <th>Nombre Receta</th>
            <th>Ingredientes</th>
        </tr>
    </thead>
    <tbody>
        <tr class="par">
            <td>${recetas[0].id}</td>
            <td>${recetas[0].nombrereceta}</td>
            <td>${recetas[0].ingredientes}</td>
        </tr>
        <tr class="impar">
            <td>${recetas[1].id}</td>
            <td>${recetas[1].nombrereceta}</td>
            <td>${recetas[1].ingredientes}</td>
        </tr>
        <tr class="par">
            <td><strong>${recetas[2].id}</strong></td>
            <td><strong>${recetas[2].nombrereceta}</strong></td>
            <td><strong>${recetas[2].ingredientes}</strong></td>
        </tr>
    </tbody>
</table>
`;

let formulario = document.getElementById("formulario");

formulario.innerHTML = `
<div style="text-align: center; margin-top: 30px; font-family: sans-serif;">
    <form id="form-colores1" style="display: inline-block; background: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
        
        <div style="margin-bottom: 15px; font-size: 1.2rem;">
            <label style="margin-right: 10px;"><b>Filas pares:</b></label>
            <select id="colores-pares" style="padding: 10px; font-size: 1rem; border-radius: 5px;">
                <option value="yellow">Amarillo</option>
                <option value="lightblue">Azul</option>
                <option value="red">Rojo</option>
                <option value="green">Verde</option>
                <option value="orange">Naranja</option>
            </select>
        </div>

        <div style="margin-bottom: 20px; font-size: 1.2rem;">
            <label style="margin-right: 10px;"><b>Filas impares:</b></label>
            <select id="colores-impares" style="padding: 10px; font-size: 1rem; border-radius: 5px;">
                <option value="pink">Rosa</option>
                <option value="purple">Morado</option>
                <option value="gray">Gris</option>
                <option value="white" selected>Blanco</option>
                <option value="brown">Marrón</option>
            </select>
        </div>

        <button type="submit" style="padding: 12px 25px; font-size: 1.1rem; cursor: pointer; background-color: #333; color: white; border: none; border-radius: 5px; transition: 0.3s;">
            Aplicar Cambios
        </button>

    </form>
</div>
`;

let filasPares = document.querySelectorAll(".par");
let filasImpares = document.querySelectorAll(".impar");


let colorParGuardado = localStorage.getItem("colorPares");
let colorImparGuardado = localStorage.getItem("colorImpares");

if(colorParGuardado){

    filasPares.forEach(element => {
        element.style.backgroundColor = colorParGuardado;
    });

}

if(colorImparGuardado){

    filasImpares.forEach(element => {
        element.style.backgroundColor = colorImparGuardado;
    });
  }

let resultadoForm = document.getElementById("form-colores1");

resultadoForm.addEventListener("submit", (e)=>{

    e.preventDefault();

    let coloresPares = document.getElementById("colores-pares").value;
    let coloresImpares = document.getElementById("colores-impares").value;

    localStorage.setItem("colorPares", coloresPares);
    localStorage.setItem("colorImpares", coloresImpares);

    filasPares.forEach(element => {
        element.style.backgroundColor = coloresPares;
    });

    filasImpares.forEach(element => {
        element.style.backgroundColor = coloresImpares;
    });

});
