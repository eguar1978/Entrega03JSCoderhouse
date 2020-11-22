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
        textEquipo = textEquipo + "\n            <div class=\"form-group col-12\">\n            <label>Equipo ".concat([i + 1], "</label>\n            <input type=\"text\" class=\"form-control is-valid\" name=\"").concat(arrayEquipos[i], "\" id=\"").concat(arrayEquipos[i], "\" value=\"").concat(localStorage.getItem(arrayEquipos[i]), "\" disabled>\n            </div>");
        var ii = i + 1;

        if (localStorage.getItem("mostrarNotificacion" + i) == null) {
          alertify.set('notifier', 'delay', 2);
          alertify.set('notifier', 'position', 'bottom-right');
          alertify.success("Equipo " + ii + ": " + localStorage.getItem(arrayEquipos[i]));
          localStorage.setItem("mostrarNotificacion" + i, "1");
        }
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
          alertify.set('notifier', 'delay', 2);
          alertify.set('notifier', 'position', 'bottom-right');
          alertify.error("El equipo : " + document.getElementById('equipo' + [_i2]).value.toUpperCase() + " ya fue ingresado.");
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
}

localStorage.setItem("actualizaFixture", "0");
/*

SI SE SELECCIONO LA CANTIDAD DE EQUIPOS SE COMPRUEBA
CUANTOS EQUIPOS TIENEN NOMBRE PARA CALCULAR EL PORCENTAJE DE LA BARRA QUE SE MUESTRA EN EL INDEX.

*/

if (localStorage.getItem("equipos") !== null) {
  cantidadEquipos = JSON.parse(localStorage.getItem("equipos")).length;
  var equiposConNombre = 0;

  for (var i = 0; i < cantidadEquipos; i++) {
    if (localStorage.getItem("equipo".concat(i)) != 'null') {
      equiposConNombre = equiposConNombre + 1;
    }
  }

  $(document).ready(function () {
    var percent = 0;
    var hayDatos = Math.round(100 / cantidadEquipos * equiposConNombre); //console.log(hayDatos)

    if (hayDatos <= 0) {} else {
      timerId = setInterval(function () {
        //increment progress bar
        percent += 1;
        $('.progress-bar').css('width', percent + '%');
        $('.progress-bar').attr('aria-valuenow', percent);
        $('.progress-bar').text(percent + '%'); //complete

        if (percent == hayDatos) {
          clearInterval(timerId);
          $('.information').show();
        }
      }, 1);
    }
  });
  $('#tabla_mediana').hide();
}