

//Variable que contiene el Formulario HTML para ingresar la cantidad de equipos
var form_ingreso_cantiad_equipos = 
`<form id="ingreso_cantiad_equipos">
    <div class="form-group">
      <label>Seleccionar la cantidad de equipos que van a participar</label>
      <select class="form-control" name="cantidadEquipos" id="cantidadEquipos">
        <option>Seleccionar cantidad de equipos</option>
        <option value="4">4 Equipos</option>
        <option value="6">6 Equipos</option>
        <option value="8">8 Equipos</option>
        <option value="10">10 Equipos</option>
      </select>
    </div>
    <div class="form-group">
      <button onclick="myFunction()" class="btn btn-primary">Submit</button>
    </div>
</form>`;


/* 

IF ----   Si la KEY equipos no esta definida imprime nuevamente el formulario
ELSE ---- Si la KEY esta definida, pasa el JSON a un ARRAY y lo recorre
          imprimiento los INPUT para ingresar los nombres de los equipos

*/

if (localStorage.getItem("equipos") === null) {
    let $whatIsDOM = document.getElementById("equipos");
    $whatIsDOM.innerHTML = form_ingreso_cantiad_equipos;
}else{

    /* 

    */
    
    let $whatIsDOM = document.getElementById("equipos");
    let textEquipo = "";
    //let equipoJson = [];
    let arrayEquipos = JSON.parse(localStorage.getItem("equipos"));

    /*
    
    Este for recoge el nombre de los equipos, si tiene nombre, despliega el INPUT desabilitado mostrando el nombre que tiene el equipo en esa ubicacion
    pero si no tiene nombre despliega el INPUT para que se lo ingresen

    */

    for (let i = 0; i < JSON.parse(localStorage.getItem("equipos")).length; i++) {

        if(localStorage.getItem(arrayEquipos[i]) == "null"){
            textEquipo = textEquipo + `
            <div class="form-group col-12">
            <label>Equipo ${[i+1]}</label>
            <input type="text" class="form-control" name="${arrayEquipos[i]}" id="${arrayEquipos[i]}">
            </div>`;



        }else{
            
            textEquipo = textEquipo + `
            <div class="form-group col-12">
            <label>Equipo ${[i+1]}</label>
            <input type="text" class="form-control is-valid" name="${arrayEquipos[i]}" id="${arrayEquipos[i]}" value="${localStorage.getItem(arrayEquipos[i])}" disabled>
            </div>`;
            //$.notify("Prueba... de Exito");

        }


       
    }

    /*

    array que se utiliza para recorrer todos los equipos y obtener el nombre

    */
    $whatIsDOM.innerHTML = textEquipo;
    let existeEquipo = new Array(); 

    for (let i = 0; i < JSON.parse(localStorage.getItem("equipos")).length; i++) {

        existeEquipo[i] = localStorage.getItem(arrayEquipos[i]);
        
    }
    
    
    /*

    comprueba si el nombre del equipo ya se utilizo, si no se utilizo lo registra
    si ya se utilizo pinta de rojo el INPUT

    */

    for (let i = 0; i < JSON.parse(localStorage.getItem("equipos")).length; i++) {

            document.getElementById('equipo'+[i]).addEventListener('change',cambiotext, false);

            function cambiotext()
            {
                if(!existeEquipo.includes(document.getElementById('equipo'+[i]).value.toUpperCase())){
                    localStorage.setItem(`equipo${i}`,document.getElementById('equipo'+[i]).value.toUpperCase());
                    location.reload();
                }else{
                    let element = document.getElementById('equipo'+[i]);

                    element.classList.add('is-invalid');
                }
                
            }        

    }

}

/*  

Esta funcion se llama cuando se presiona el boton al ingresar la cantidad de equipos
La funcion se encarga de crear los INPUT para ingresar los nombres de los equipos 

*/

    function myFunction() {

        let cantidadEquipos = document.getElementById("cantidadEquipos").value;
    
        let $whatIsDOM = document.getElementById("equipos");

        let textEquipo = "";
        let equipoJson = [];
        let tablaEquipos = [];
    
        for (let i = 0; i < cantidadEquipos; i++) {
    
            textEquipo = textEquipo + `
                <div class="form-group col-12">
                <label>Equipo${i}</label>
                <input type="text" class="form-control" name="equipo${i}" id="equipo${i}">
                </div>`;
    
            equipoJson[i] = "equipo"+[i];
            

        }



        

        $whatIsDOM.innerHTML = textEquipo;

        /*
        
        Validacion para controlar que el numero de equipos sea minimo 2, 
        si es menor que 2 imprime nuevamente el formulario para que ingresen la cantidad de equipos

        Si es mayor a 2 crea un array y lo guarda en localStorage con las hey que se le asignaron a cada equipo
        luego crea una key para cada equipo y le asigna el valor null, esa key es la que tendra el nombre del equipo

        Tambien crea el objetoTablaEquipo, en este objeto se guardara el rogreso del equipo

        */

        if(cantidadEquipos > 1){
            localStorage.setItem('equipos', JSON.stringify(equipoJson));

            for (let i = 0; i < JSON.parse(localStorage.getItem("equipos")).length; i++) {
    
                equipoJson[i] = "equipo"+[i];

                localStorage.setItem(`equipo${i}`,null);

                tablaEquipos[i] = new TablaEquipos(equipoJson[i], 0, 0, 0, 0, 0, 0, 0, 0);

                localStorage.setItem(`tablaEquipos${i}`,JSON.stringify(tablaEquipos[i]));
                
            }

        }else{
            let $whatIsDOM = document.getElementById("equipos");
            $whatIsDOM.innerHTML = form_ingreso_cantiad_equipos;
        }

        location.reload();
    }

    function TablaEquipos(equipo, pj, pg, pe, pp, gf, gc, dif, puntos){

        this.equipo = equipo;
        this.pj = pj;
        this.pg = pg;
        this.pe = pe;
        this.pp = pp;
        this.gf = gf;
        this.gc = gc;
        this.dif = dif;
        this.puntos = puntos;
    
    }

    //console.log(JSON.parse(localStorage.getItem('tablaEquipos0')));





























/*
function Equipo(nombre, id){

    this.nombre     = nombre;
    this.id         = id;

}

function Resultado(equipoLocal, resultadoLocal, idLocal, equipoVisita, resultadoVisita, idVisita){

    this.equipoLocal        = equipoLocal;
    this.resultadoLocal     = resultadoLocal;
    this.equipoVisita       = equipoVisita;
    this.resultadoVisita    = resultadoVisita;
    this.idLocal            = idLocal;
    this.idVisita           = idVisita;

    var tabla = [];
    var difGolLoc = resultadoLocal - resultadoVisita;
    var difGolVis = resultadoVisita - resultadoLocal;
    
    this.calcularTabla = function(){

        if(resultadoLocal > resultadoVisita){
            tabla.push(idLocal, equipoLocal, 1, 1, 0, 0, resultadoLocal, resultadoVisita, difGolLoc, 3);
            tabla.push(idVisita, equipoVisita, 1, 0, 0, 1, resultadoVisita, resultadoLocal, difGolVis, 0);
        }else if(resultadoLocal < resultadoVisita){
            tabla.push(idLocal, equipoLocal, 1, 0, 0, 1, resultadoLocal, resultadoVisita, difGolLoc, 0);
            tabla.push(idVisita, equipoVisita, 1, 1, 0, 0, resultadoVisita, resultadoLocal, difGolVis, 3);
        }else{
            tabla.push(idLocal, equipoLocal, 1, 0, 1, 0, resultadoLocal, resultadoVisita, difGolLoc, 1);
            tabla.push(idVisita, equipoVisita, 1, 0, 1, 0, resultadoVisita, resultadoLocal, difGolVis, 1);
        }

        return tabla;
    }
}

var equipo = [];
for(var i = 0; i < 4; i++){
    var nombre = prompt("Ingrese el nombre del Equipo" + i);
    equipo[i] = new Equipo (nombre, i);
    //console.log(equipo[i]);
}

//variables de resultados
var resEq1;
var resEq2;
var resEq3;
var resEq4;

alert("Ingrese el resultado del partido entre " + equipo[0].nombre + " vs " + equipo[1].nombre);


resEq1 = parseInt(prompt("Goles marcados por " + equipo[0].nombre));
resEq2 = parseInt(prompt("Goles marcados por " + equipo[1].nombre));

alert("Ingrese el resultado del partido entre " + equipo[2].nombre + " vs " + equipo[3].nombre);

resEq3 = parseInt(prompt("Goles marcados por " + equipo[2].nombre));
resEq4 = parseInt(prompt("Goles marcados por " + equipo[3].nombre));

    if(!Number.isNaN(resEq1) && !Number.isNaN(resEq2) && !Number.isNaN(resEq3) && !Number.isNaN(resEq4)){

        var resultado1 = new Resultado(equipo[0].nombre, resEq1, equipo[0].id, equipo[1].nombre, resEq2, equipo[1].id);
        var resultado2 = new Resultado(equipo[2].nombre, resEq3, equipo[2].id, equipo[3].nombre, resEq4, equipo[3].id);

        var tabla = resultado1.calcularTabla().concat(resultado2.calcularTabla());

        var imprimirTabla = "";

        var e = 1;
        var salidaAlert = "";

        console.log(" | id |", "Equipo |", "PJ |", "PG |", "PE |", "PP |", "GF |", "GC |", "DIF |", "Puntos |")

        for(var i = 0; i < tabla.length; i++){
            
            if(e == 1){
                imprimirTabla = imprimirTabla + " | ";
                imprimirTabla = imprimirTabla + tabla[i];
                imprimirTabla = imprimirTabla + " | ";
            }else if((e%10) == 0){
                console.log(imprimirTabla);
                salidaAlert = salidaAlert + imprimirTabla;
                imprimirTabla = "";
                imprimirTabla = imprimirTabla + tabla[i];
                imprimirTabla = " | ";
                
            }else{
                imprimirTabla = imprimirTabla + tabla[i];
                imprimirTabla = imprimirTabla + " | ";
            }
            
            e++;

        }

        alert(salidaAlert);

    }else{

        alert("Alguno de los resultados ingresados, no es correcto, recuerde ingresar solamente números.");
        location.reload();

    }
*/