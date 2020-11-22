// La variable equipos almacena la cantidad de equipos seleccionados en el select
let equipos = JSON.parse(localStorage.getItem("equipos")).length;

//console.log(equipos)

// La variable partidos es el calculo de la cantidad de partidos que se van a realizar en el campeonato
let partidos = (equipos * (equipos -1)) / 2;

// Los proximos IF almacenan los partidos en el LocalStorage



function crearFixture(equipos) {

    $.ajax({
        url: "js/partidos.json",
        type: "GET",
        dataType: "json"
    }).done( function(resultadoJson) {

        if(equipos == 4){
            for(let i = 0; i < resultadoJson.equipos4.length; i++){
                key = resultadoJson.equipos4[i].id_partido;
                value = resultadoJson.equipos4[i].equipo;
                localStorage.setItem(key,value);
            }
        }

        if(equipos == 6){
            for(let i = 0; i < resultadoJson.equipos6.length; i++){
                key = resultadoJson.equipos6[i].id_partido;
                value = resultadoJson.equipos6[i].equipo;
                localStorage.setItem(key,value);
            }
        }

        if(equipos == 8){
            for(let i = 0; i < resultadoJson.equipos8.length; i++){
                key = resultadoJson.equipos8[i].id_partido;
                value = resultadoJson.equipos8[i].equipo;
                localStorage.setItem(key,value);
            }
        }

        if(equipos == 10){
            for(let i = 0; i < resultadoJson.equipos10.length; i++){
                key = resultadoJson.equipos10[i].id_partido;
                value = resultadoJson.equipos10[i].equipo;
                localStorage.setItem(key,value);
            }
        }
        
        

    }).fail( function(xhr, status, error) {    //xhr (request completa)        
        console.log(xhr);
        console.log(status);
        console.log(error);
    })           

}


crearFixture(equipos)

// Las siguientes variables estan definidas fuera del bucle for donde van a ser utilizadas.

let cantPartidos = 1;
let fechaNumero = 1;
let fechaMostrar = "";
let imprimirPartido = new Array;
let local = "";
let visita = "";
let golLocal = "";
let golVisita = "";
/*
For recorre la cantidad de partidos y despliega las fechas y quienes juegan de local y quienes de visitante.
*/

for(let i = 1; i <= partidos; i++){

    // Funcion que trae el nombre del equipo para que sea mostrado en la WEB
    local = nombreEquipo(localStorage.getItem("p"+[i]+"loc"));
    visita = nombreEquipo(localStorage.getItem("p"+[i]+"vis"));
    localStorage.setItem("partidoJugado"+i,"");

    // Variables que van a ser utilizadas en los name del input
    golLocal = "golLocal"+[i];
    golVisita = "golVisita"+[i];


    // Si la variable cantPartidos == 1, almacena en el array "imprimirPartido" la cabecera de la tabla de la fecha en juego
 

    if(cantPartidos == 1){
        fechaMostrar = "Fecha " + fechaNumero;
        fechaNumero++;
        imprimirPartido.push(`<div class="col-12">
        <table class="table table-sm table-dark">
        <thead>
          <tr>
            <th colspan="5" class="tituloTabla">`+fechaMostrar+`</th>
          </tr>
            <th>Local</th>
            <th>Gol local</th>
            <th> - </th>
            <th>Gol visita</th>
            <th>Visitante</th>
          </tr>
          </thead>
          <tbody>`);
    }

   // Si el siguiente IF es true reinicia la variable cantPartidos a 1 y agrega al array imprimirPartido los imput del final de la fecha y cierra la tabla html
   // Al setear la variable cantPartidos a 1 si el for se vuelve a ejecutar nuevamente el if anterior seria true y comienza una nueva tabla
   // Si el resultado del if es false, se incrementa la variable cantPartidos y se agregan al if los partidos de esa fecha.

    if(cantPartidos == (equipos/2)){


        resultadosIngresados();
        ingresoResultados();
        cantPartidos = 1;
        imprimirPartido.push(`<tr>
                                <td>`+local+`</td>
                                <td><input type="number" name="`+golLocal+`" id="`+golLocal+`" class="form-control form-control-sm" placeholder="`+golLocal+`"></td>
                                <td> - </td>
                                <td><input type="number" name="`+golVisita+`" id="`+golVisita+`" class="form-control form-control-sm" placeholder="`+golVisita+`"></td>
                                <td>`+visita+`</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>`);

    }else{

        resultadosIngresados();
        ingresoResultados();
        cantPartidos++;
        imprimirPartido.push(`<tr>
                                <td>`+local+`</td>
                                <td><input type="number" name="`+golLocal+`" id="`+golLocal+`" class="form-control form-control-sm" placeholder="`+golLocal+`"></td>
                                <td> - </td>
                                <td><input type="number" name="`+golVisita+`" id="`+golVisita+`" class="form-control form-control-sm" placeholder="`+golVisita+`"></td>
                                <td>`+visita+`</td>
                            </tr>`);
    }



}


// Funcion que trae el nombre del equipo para que sea mostrado en la WEB, esta funcion es llamada cada ves que recorre el bucle for anterior
function nombreEquipo(nombre){
    return localStorage.getItem(nombre);
}

function ingresoResultados(){
    // Estas variables son los nombres de los ID de cada input donde se van a ingresar los goles de cada partido
    let idgolLocal = "#"+golLocal;
    let idgolVisita = "#"+golVisita;
    
    // Funciones que toman el resultado ingresado
    // Como daba problemas al momento de almacenar el resultado tuve que hacer una arregle medio extraño, si bien el nombre del id del input
    // lo traia bien, el name del input nombreEquipo traia el ultimo del los que se cargaban en la web,
    // entonces para solucionar eso le quito el # al id con la funcion replace y queda ;)

    $(document).ready(function (){
        $(idgolLocal).change(function (){
                key = idgolLocal.replace("#", "");
                localStorage.setItem(key,$(idgolLocal).val());
                location.reload();
                $(idgolLocal).prop('disabled', true);
        });
    });

    $(document).ready(function (){
        $(idgolVisita).change(function (){
            key = idgolVisita.replace("#", "");
            localStorage.setItem(key,$(idgolVisita).val());
            location.reload();
            $(idgolVisita).prop('disabled', true);
        });
    });
    
}

function resultadosIngresados(){

    //Nuevamente, como daba problemas, tuve que utilizar la funcion replace y quitar el # del id

    let idgolLocal = "#"+golLocal;
    let idgolVisita = "#"+golVisita;

    if(localStorage.getItem(golLocal) !== null){
        //console.log("vacio");
        $(document).ready(function (){
            $(idgolLocal).prop('disabled', true);
            key = idgolLocal.replace("#", "");
            $(idgolLocal).val(localStorage.getItem(key));
        });
    }

    if(localStorage.getItem(golVisita) !== null){
        $(document).ready(function (){
            $(idgolVisita).prop('disabled', true);
            key = idgolVisita.replace("#", "");
            $(idgolVisita).val(localStorage.getItem(key));
        });
    }

}

// Guardo el array en una cadena para imprimir todo junto en pantalla

function imprimirFixture(){
    
    let salida = "";
    for (let i = 0; i < imprimirPartido.length; i++) {
        salida = salida + imprimirPartido[i];
    }

    if(localStorage.getItem("actualizaFixture") == 0){
        //refrescar la web
        localStorage.setItem("actualizaFixture","1");
        location.reload();
    }

    return document.getElementById("fixture").innerHTML = salida;



}


imprimirFixture();



/* PARA LA BARRA DE % DE LOS PATIDOS JUGADOS EN FIXTURE */


let partidosJugados = 0;
for (let i = 1; i < partidos+1; i++) {
    
    if (localStorage.getItem(`golLocal${i}`) !== null && localStorage.getItem(`golVisita${i}`) !== null) {
        localStorage.setItem(`partidoJugado${i}`,"1")
    }

    if (localStorage.getItem(`partidoJugado${i}`) == "1") {
        partidosJugados = partidosJugados + 1;
        
    }
    
}


if (localStorage.getItem("equipos") !== null) {

    cantidadEquipos = JSON.parse(localStorage.getItem("equipos")).length;
    let equiposConNombre = 0;

    for (let i = 0; i < cantidadEquipos; i++) {
    
        if(localStorage.getItem(`equipo${i}`) != 'null'){
            equiposConNombre = equiposConNombre + 1;
        }

    }

    $(document).ready(function() {
        var percent = 0;
        var hayDatos = Math.round((100/partidos)*partidosJugados);
        //console.log(hayDatos)
     
        if(hayDatos <= 0){

        }else{

            timerId = setInterval(function() {
                //increment progress bar
                percent += 1;
                $('.progress-bar').css('width', percent+'%');
                $('.progress-bar').attr('aria-valuenow', percent);
                $('.progress-bar').text(percent+'%');
         
                //complete
                if(percent == hayDatos) {
                    clearInterval(timerId);
                    $('.information').show();
                }
         
            }, 1);

        }

    });

}