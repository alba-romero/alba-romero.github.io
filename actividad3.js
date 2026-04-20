// Actividad 1
const boton1 = document.getElementById("boton1");
const formulario1 = document.getElementById("contenedor-act1");
const respuesta1 = document.getElementById("respuesta-act1");
boton1.addEventListener("click", ()=>{
    formulario1.innerHTML= 
    `<form id="mi-formulario">
     <label for="p1">Nombre:</label>
     <input type="text" id="p1" name="nombre">
     <label for="p2">Edad</label>
     <input type="number" id="p2" name="edad">
    <button type="submit">Enviar datos</button>
        </form>`;
        const formulario = document.getElementById("mi-formulario");
        formulario.addEventListener("submit", (e)=>{
            e.preventDefault();
            actividad1();
        });
});

function actividad1(){
    const nombre = document.getElementById("p1").value;
    const edad = document.getElementById("p2").value;
    let mayoria = 0;
    if (Number(edad) >= 18) {
        mayoria = "mayor";
    }else{
        mayoria = "menor"
    }

   respuesta1.innerHTML=`
    <p>${nombre} tiene ${edad} años y es ${mayoria} de edad</p>
    `;
}

// ACTIVIDAD 2


const contenedor2 = document.getElementById("contenedor-act2")
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", ()=>{
    contenedor2.innerHTML = `
    <form id="formulario-numeros">
    <label for="numeros">Número (máx 30):</label>
    <input type="number" id="numeros30" name="numeros" min="1" max="30">
    <button type="submit">Enviar datos</button>
    </form>
    `;
    const formNumeros = document.getElementById("formulario-numeros");
    formNumeros.addEventListener("submit", (e)=>{
        e.preventDefault();
        actividad2();
    });
});

function actividad2(){
    const num = document.getElementById("numeros30").value;
    const respuesta2 = document.getElementById("respuesta-act2");
    let esPar;
    if (Number(num)%2===0) {
        esPar = `El número ${num} es divisible entre dos`;
    } else {
        esPar = `El número ${num} no es divisible entre dos`;
    }
    respuesta2.style.backgroundColor = "black";
    respuesta2.innerHTML=`
    <p style="color: white;">${esPar}</p>
    `;
}

// ACTIVIDAD 3

const boton3 = document.getElementById("boton3");
const contenedor3 = document.getElementById("contenedor-act3");

boton3.addEventListener("click", () => {
    contenedor3.innerHTML= `
    <form id="formulario-3">
    <label for="est">Número de estación del año:</label>
    <input type="number" id="estaciones3" name="est" min="1" max="4">
    <button type="submit">Enviar</button>
    </form>
    `;
    const formulario3 = document.getElementById("formulario-3");
    formulario3.addEventListener("submit", (e) => {
        e.preventDefault();
        actividad3();
    });
});

function actividad3(){
    let estacion = ["Invierno", "Primavera", "Verano", "Otoño"];
    const opcionEstacion = document.getElementById("estaciones3").value;
    const respuesta3 = document.getElementById("respuesta-act3");
    let respuestaAct3;
    switch (Number(opcionEstacion)) {

        case 1:
            respuestaAct3 = estacion[0];
            break;
        case 2: 
           respuestaAct3 = estacion[1];
           break;
           case 3: 
           respuestaAct3 = estacion[2];
           break;
           case 4:
            respuestaAct3 = estacion[3];
            break;
    }
    respuesta3.innerHTML= `
    <p><strong>La estación es ${respuestaAct3}</strong></p>
    `;
}

// ACTIVIDAD 4

const boton4 = document.getElementById("boton4");
const contenedor4 = document.getElementById("contenedor-act4");
boton4.addEventListener("click", ()=>{
contenedor4.innerHTML = `
<form id="formulario4">
<label for="meses">Introduce un mes del año:</label>
<input type="text" id="meses4" name="meses">
<button type="submit">Enviar</button>
</form>
`;
const formulario4 = document.getElementById("formulario4");
formulario4.addEventListener("submit", (e) => {
    e.preventDefault();
    actividad4();
});
});

function actividad4(){
const respuesta4 = document.getElementById("respuesta-act4");
let mes = document.getElementById("meses4").value;
mes = mes.toLowerCase();
respuesta4.style.backgroundColor = "red";
let estacion;
switch (mes) {
    case "enero":
        case "febrero":
        case "marzo":
         estacion = "invierno"
        break;
        case "abril":
            case "mayo":
                case "junio":
                    estacion = "primavera";
                    break;
                    case "julio":
                        case "agosto":
                            case "septiembre": 
                            estacion = "verano";
                            break;
                            case "octubre":
                                case "noviembre":
                                    case "diciembre":
                                        estacion = "otoño";
 
    default: estacion = "valor incorrecto";
        break;
}
respuesta4.innerHTML = `
<p style= "color: yellow;">La estación a la que corresponde el mes ${mes} es ${estacion}</p>
`;
}

// ACTIVIDAD 5
const boton5 = document.getElementById("boton5");
const contenedor5 = document.getElementById("contenedor-act5");

boton5.addEventListener("click", () => {
    contenedor5.innerHTML = `
    <form id="formulario-5">
    <label for="meses">Introduce un mes</label>
    <input type="text" id="estaciones5" name="meses">
    <button type="submit">Enviar</button>
    </form>
    `;

    const formulario5 = document.getElementById("formulario-5");
    
   formulario5.addEventListener("submit", (e) => {
        e.preventDefault();
        actividad5();
    });
});

function actividad5(){
    const respuesta5 = document.getElementById("respuesta-act5");
    let mes = document.getElementById("estaciones5").value;
    mes = mes.toLowerCase();
    respuesta5.style.backgroundColor = "red";
    let estacion;
    if (mes === "enero" || mes === "febrero" || mes === "marzo") {
        estacion = "invierno";
    } else {
        if (mes === "abril" || mes=== "mayo" || mes=== "junio") {
            estacion = "primavera";
        } else {
            if (mes === "julio" || mes=== "agosto" || mes=== "septiembre") {
                estacion = "verano";
            } else {
                if (mes === "octubre" || mes==="noviembre" || mes==="diciembre") {
                    estacion = "otoño";
                } else {
                    estacion = "valor incorrecto";
                }
            }
        }
    }
    respuesta5.innerHTML= `
    <p style= "color: yellow;">El mes ${mes} corresponde a la estación ${estacion}</p>
`;
}

// ACTIVIDAD 6

 const boton6 = document.getElementById("boton6");
 const contenedor6 = document.getElementById("contenedor-act6");
 boton6.addEventListener("click", ()=> {
contenedor6.innerHTML = `
<form id="formulario-6">
<label for="persona">Nombre:</label>
<input type="text" id="persona-act6" name="persona">
<label for="cantidad">Cantidad:</label>
<input type="number" id="cantidad-act6" name="cantidad" min="0">
<button type="submit">Enviar</button>
</form>
`;
const formulario6 = document.getElementById("formulario-6");
formulario6.addEventListener("submit", (e) => {
    e.preventDefault();
    actividad6();
});
 });

 function actividad6(){
    const respuesta6 = document.getElementById("respuesta-act6");
    let persona = document.getElementById("persona-act6").value;
    let cantidad = document.getElementById("cantidad-act6").value;
    console.log(cantidad);
    let iva;
    if (cantidad >= 5000) {
        iva = 10;
    } else {
        if (cantidad < 5000 && cantidad > 3000) {
            iva = 15;
        } else {
            if (cantidad<=3000) {
                iva = 21;
        
            }
        }
    }
    cantidad = Number(cantidad);
    cantidad = cantidad + cantidad*(iva/100);
    respuesta6.innerHTML = `
    <p>${persona} tiene que pagar ${cantidad}</p>
    `;
 }

 //ACTIVIDAD 7

 const boton7 = document.getElementById("boton7");
 const contenedor7 = document.getElementById("contenedor-act7");
 
 boton7.addEventListener("click", () => {
    contenedor7.innerHTML = `
    <form id="formulario7">
    <label for="persona">Nombre</label>
    <input type="text" id="persona7" name="persona">
    <label for="provincias">Provincia Andaluza</label>
    <select name="provincias" id="provinciasact7">
    <option value="co">Córdoba</option>
    <option value="se">Sevilla</option>
    <option value="ja">Jaén</option>
    <option value="al">Almería</option>
    <option value="ma">Málaga</option>
    <option value="hu">Huelva</option>
    <option value="gr">Granada</option>
    <option value="ca">Cádiz</option>
    </select>
    <label for="pueblo">Pueblo</label>
    <input type="text" id="pueblo7" name="pueblo">
    <button type="submit">Enviar</button>
    </form>
    `;
    const formulario7 = document.getElementById("formulario7");
    formulario7.addEventListener("submit", (e) =>{
        e.preventDefault();
        actividad7();
    });
 });

function actividad7(){
    const respuesta7 = document.getElementById("respuesta-act7");
    const pueblo = document.getElementById("pueblo7").value;
    const persona = document.getElementById("persona7").value;
    let provincia = document.getElementById("provinciasact7").value;
    let gentilicio;
    switch (provincia) {
        case "co":
            gentilicio = "cordobés";
            break;
        case "al":
            gentilicio = "almeriense";
            break;
            case "ca":
                gentilicio = "gaditano";
                break;
                case "se":
                    gentilicio = "sevillano";
                    break; 
                    case "gr":
                        gentilicio = "granadino";
                        break; 
                        case "ma": 
                        gentilicio = "malagueño";
                        break; 
                        case "ja":
                            gentilicio = "jienense";
                        break;
                        case "hu":
                            gentilicio = "onubense";
            break;
    }
    respuesta7.innerHTML= `
    <p>${persona} es ${gentilicio} de ${pueblo}</p>
    `;
}

//ACTIVIDAD 8
const boton8 = document.getElementById("boton8");
const contenedor8 = document.getElementById("contenedor-act8");
const respuesta8 = document.getElementById("respuesta-act8");
boton8.addEventListener("click", () =>{
    contenedor8.innerHTML = `
    <form id="formulario8">
    <label for="millas">Millas a Km</label>
    <input type="number" id="millas-act8" name="millas">
    <label for="kilometros">Km a millas</label>
    <input type="number" id="km-act8" name="kilometros">
    <button type="submit">Enviar</button>
    </form> 
    `;
    const formulario8 = document.getElementById("formulario8");
    formulario8.addEventListener("submit", (e) => {
        e.preventDefault();
        actividad8();
    });
});

function actividad8(){
    const respuesta8 = document.getElementById("respuesta-act8");
    let millasAKm = document.getElementById("millas-act8").value;
    let kmAMillas = document.getElementById("km-act8").value;
    millasAKm = Number(millasAKm);
    kmAMillas = Number(kmAMillas);
    if (kmAMillas === null) {
        respuesta8.innerHTML = `<p>${millasAKm} millas son ${Math.round(millasAKm*1.60934)} kilómetros</p>`;
    } else {
        respuesta8.innerHTML = `<p>${kmAMillas} kilómetros son ${(kmAMillas/1.60934).toFixed(2)} millas</p>`;
    }
}

// ACTIVIDAD 9
const contenedor9 = document.getElementById("contenedor-act9");
const boton9 = document.getElementById("boton9");
boton9.addEventListener("click", () => {
    contenedor9.innerHTML = `
    <form id="formulario9">
    <label for="cadena">Introduce un texto:</label>
    <input type="text" id="cadena-act9" name="cadena">
    <button type="submit">Enviar</button>
    </form>
    `;
    const formulario9 = document.getElementById("formulario9");
    formulario9.addEventListener("submit", (e) =>{
        e.preventDefault();
        actividad9();
    });
});

function actividad9(){
    const respuesta9 = document.getElementById("respuesta-act9");
    let cadena = document.getElementById("cadena-act9").value;
    cadena = cadena.split("");
    respuesta9.innerHTML= `
    <p>La palabra introducida tiene ${cadena.length} caracteres</p>
    `;
}

//ACTIVIDAD 10
const boton10 = document.getElementById("boton10");
const contenedor10 = document.getElementById("contenedor-act10");
boton10.addEventListener("click", () => {
    contenedor10.innerHTML = `
    <form id="formulario10">
    <label for="cadena1">Primer texto:</label>
    <input type="text" id="cadena1-act10" name="cadena1">
    <label for="cadena2">Segundo texto:</label>
    <input type="text" id="cadena2-act10" name="cadena2">
    <button type="submit">Enviar</button>
    </form>
    `;
    const formulario10 = document.getElementById("formulario10");
    formulario10.addEventListener("submit", (e) =>{
        e.preventDefault();
        actividad10();
    });
});

function actividad10(){
    let cadena1 = document.getElementById("cadena1-act10").value;
    let cadena2 = document.getElementById("cadena2-act10").value;
    let longitud1 = cadena1.split("").length;
    let longitud2 = cadena2.split("").length;
    if (longitud1 > longitud2) {
        alert(`La cadena ${cadena1} es mayor que la cadena ${cadena2}`);
    } 
    if (longitud1 === longitud2) {
        alert("Las cadenas tienen la misma longitud.");
    }
    if (longitud2 > longitud1) {
        alert(`La cadena ${cadena2} es mayor que la cadena ${cadena1}`);
    }
    }

    // ACTIVIDAD 11
    const boton11 = document.getElementById("boton11");
    const contenedor11 = document.getElementById("contenedor-act11");
    boton11.addEventListener("click", () => {
        contenedor11.innerHTML = `
        <form id="formulario11">
        <label for="numeros">Introduce un número</label>
        <input type="number" id="numeros11" name="numeros">
        <button type="submit">Enviar</button>
        </form>
        `;
        const formulario11 = document.getElementById("formulario11");
        formulario11.addEventListener("submit", (e) =>{
            e.preventDefault();
            actividad11();
        });
    });

    function actividad11(){
        const respuesta11 = document.getElementById("respuesta-act11");
       let num = document.getElementById("numeros11").value;
        num = Number(num);
        for (let index = 0; index <= num; index++) {
                respuesta11.innerHTML += `
                ${num} + ${index} = ${num+index}
                <br>
                `;
                
            
            
        }
    }
        
    // ACTIVIDAD 12
    const boton12 = document.getElementById("boton12");
    const respuesta12 = document.getElementById("respuesta-act12");
    const recetas = [
{ id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate,aceite,pan" },
{ id: 2, nombrereceta: "Gachas", ingredientes: "harina,agua,azucar" },
{ id: 3, nombrereceta: "Migas", ingredientes: "pan,ajos,aceite" }
];

    boton12.addEventListener("click", ()=>{
        respuesta12.innerHTML = `
        <table border="1" style="border-collapse: collapse;">
  <tr style="background-color: darkblue; color: white">
    <th>ID</th>
    <th>Nombre Receta</th>
    <th>Ingredientes</th>
  </tr>
  <tr style="background-color: white;">
    <td>${recetas[0].id}</td>
    <td>${recetas[0].nombrereceta}</td>
    <td>${recetas[0].ingredientes}</td>
  </tr>
  <tr style="background-color: gray;">
    <td>${recetas[1].id}</td>
    <td>${recetas[1].nombrereceta}</td>
    <td>${recetas[1].ingredientes}</td>
  </tr>
  <tr style="background-color: aqua;">
    <td><strong>${recetas[2].id}</strong></td>
    <td><strong>${recetas[2].nombrereceta}</strong></td>
    <td><strong>${recetas[2].ingredientes}</strong></td>
  </tr>
</table>
        `;
    });
    
 // ACTIVIDAD 13

const boton13 = document.getElementById("boton13");
boton13.addEventListener("click", () =>{
    window.location.href = "tesoro.html";
});

// ACTIVIDAD 14

const boton14 = document.getElementById("boton14");
boton14.addEventListener("click", () =>{
    window.location.href = "calculadora.html";
});

// ACTIVIDAD 15
const boton15 = document.getElementById("boton15");
const contenedor15 = document.getElementById("contenedor-act15");
let miMapa = new Map();
boton15.addEventListener("click", ()=>{
    contenedor15.innerHTML = `
    <form id="formulario15">
        <label>Nombre:</label>
        <input type="text" id="formulario15nombre" required>
        <label>DNI:</label>
        <input type="text" id="formulario15dni" required>
        <button type="submit">Enviar</button>
        <button type="button" id="agenda">Agenda completa</button>
    </form>
    `;

    const formulario15 = document.getElementById("formulario15");

    formulario15.addEventListener("submit", (e) =>{
        e.preventDefault();

        let dni = document.getElementById("formulario15dni").value;
        let nombre = document.getElementById("formulario15nombre").value;

        miMapa.set(dni, nombre);
    });

    const agenda = document.getElementById("agenda");
    const respuesta15 = document.getElementById("respuesta-act15");

    agenda.addEventListener("click", ()=>{
        respuesta15.innerHTML = "";
        miMapa.forEach((valor, clave)=>{
            respuesta15.innerHTML += `<p>${valor}, ${clave}</p>`;
        });
    });
});