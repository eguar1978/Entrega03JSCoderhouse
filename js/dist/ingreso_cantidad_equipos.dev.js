"use strict";

//Variable que contiene el Formulario HTML para ingresar la cantidad de equipos
var form_ingreso_cantiad_equipos = "<form id=\"ingreso_cantiad_equipos\">\n    <div class=\"form-group\">\n      <label>Seleccionar la cantidad de equipos que van a participar</label>\n      <select class=\"form-control\" name=\"cantidadEquipos\" id=\"cantidadEquipos\">\n        <option>Seleccionar cantidad de equipos</option>\n        <option value=\"4\">4 Equipos</option>\n        <option value=\"6\">6 Equipos</option>\n        <option value=\"8\">8 Equipos</option>\n        <option value=\"10\">10 Equipos</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <button onclick=\"myFunction()\" class=\"btn btn-primary\">Submit</button>\n    </div>\n</form>";
/* 

IF ----   Si la KEY equipos no esta definida imprime nuevamente el formulario
ELSE ---- Si la KEY esta definida, pasa el JSON a un ARRAY y lo recorre
          imprimiento los INPUT para ingresar los nombres de los equipos

*/

if (localStorage.getItem("equipos") === null) {
  var $whatIsDOM = document.getElementById("equipos");
  $whatIsDOM.innerHTML = form_ingreso_cantiad_equipos;
} else {
  (function () {
    /* 
      */
    var $whatIsDOM = document.getElementById("equipos");
    var textEquipo = ""; //let equipoJson = [];

    var arrayEquipos = JSON.parse(localStorage.getItem("equipos"));
    /*
    
    Este for recoge el nombre de los equipos, si tiene nombre, despliega el INPUT desabilitado mostrando el nombre que tiene el equipo en esa ubicacion
    pero si no tiene nombre despliega el INPUT para que se lo ingresen
      */

    for (var i = 0; i < JSON.parse(localStorage.getItem("equipos")).length; i++) {
      if (localStorage.getItem(arrayEquipos[i]) == "null") {
        textEquipo = textEquipo + "\n            <div class=\"form-group col-12\">\n            <label>Equipo ".concat([i + 1], "</label>\n            <input type=\"text\" class=\"form-control\" name=\"").concat(arrayEquipos[i], "\" id=\"").concat(arrayEquipos[i], "\">\n            </div>");
      } else {
        textEquipo = textEquipo + "\n            <div class=\"form-group col-12\">\n            <label>Equipo ".concat([i + 1], "</label>\n            <input type=\"text\" class=\"form-control is-valid\" name=\"").concat(arrayEquipos[i], "\" id=\"").concat(arrayEquipos[i], "\" value=\"").concat(localStorage.getItem(arrayEquipos[i]), "\" disabled>\n            </div>"); //$.notify("Prueba... de Exito");
      }
    }
    /*
      array que se utiliza para recorrer todos los equipos y obtener el nombre
      */


    $whatIsDOM.innerHTML = textEquipo;
    var existeEquipo = new Array();

    for (var _i = 0; _i < JSON.parse(localStorage.getItem("equipos")).length; _i++) {
      existeEquipo[_i] = localStorage.getItem(arrayEquipos[_i]);
    }
    /*
      comprueba si el nombre del equipo ya se utilizo, si no se utilizo lo registra
    si ya se utilizo pinta de rojo el INPUT
      */


    var _loop = function _loop(_i2) {
      document.getElementById('equipo' + [_i2]).addEventListener('change', cambiotext, false);

      function cambiotext() {
        if (!existeEquipo.includes(document.getElementById('equipo' + [_i2]).value.toUpperCase())) {
          localStorage.setItem("equipo".concat(_i2), document.getElementById('equipo' + [_i2]).value.toUpperCase());
          location.reload();
        } else {
          var element = document.getElementById('equipo' + [_i2]);
          element.classList.add('is-invalid');
        }
      }
    };

    for (var _i2 = 0; _i2 < JSON.parse(localStorage.getItem("equipos")).length; _i2++) {
      _loop(_i2);
    }
  })();
}
/*  

Esta funcion se llama cuando se presiona el boton al ingresar la cantidad de equipos
La funcion se encarga de crear los INPUT para ingresar los nombres de los equipos 

*/


function myFunction() {
  var cantidadEquipos = document.getElementById("cantidadEquipos").value;
  var $whatIsDOM = document.getElementById("equipos");
  var textEquipo = "";
  var equipoJson = [];
  var tablaEquipos = [];

  for (var i = 0; i < cantidadEquipos; i++) {
    textEquipo = textEquipo + "\n                <div class=\"form-group col-12\">\n                <label>Equipo".concat(i, "</label>\n                <input type=\"text\" class=\"form-control\" name=\"equipo").concat(i, "\" id=\"equipo").concat(i, "\">\n                </div>");
    equipoJson[i] = "equipo" + [i];
  }

  $whatIsDOM.innerHTML = textEquipo;
  /*
  
  Validacion para controlar que el numero de equipos sea minimo 2, 
  si es menor que 2 imprime nuevamente el formulario para que ingresen la cantidad de equipos
    Si es mayor a 2 crea un array y lo guarda en localStorage con las hey que se le asignaron a cada equipo
  luego crea una key para cada equipo y le asigna el valor null, esa key es la que tendra el nombre del equipo
    Tambien crea el objetoTablaEquipo, en este objeto se guardara el rogreso del equipo
    */

  if (cantidadEquipos > 1) {
    localStorage.setItem('equipos', JSON.stringify(equipoJson));

    for (var _i3 = 0; _i3 < JSON.parse(localStorage.getItem("equipos")).length; _i3++) {
      equipoJson[_i3] = "equipo" + [_i3];
      localStorage.setItem("equipo".concat(_i3), null);
      tablaEquipos[_i3] = new TablaEquipos(equipoJson[_i3], 0, 0, 0, 0, 0, 0, 0, 0);
      localStorage.setItem("tablaEquipos".concat(_i3), JSON.stringify(tablaEquipos[_i3]));
    }
  } else {
    var _$whatIsDOM = document.getElementById("equipos");

    _$whatIsDOM.innerHTML = form_ingreso_cantiad_equipos;
  }

  location.reload();
}

function TablaEquipos(equipo, pj, pg, pe, pp, gf, gc, dif, puntos) {
  this.equipo = equipo;
  this.pj = pj;
  this.pg = pg;
  this.pe = pe;
  this.pp = pp;
  this.gf = gf;
  this.gc = gc;
  this.dif = dif;
  this.puntos = puntos;
} //console.log(JSON.parse(localStorage.getItem('tablaEquipos0')));

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