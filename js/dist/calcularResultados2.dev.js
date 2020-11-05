"use strict";

// La variable equipos almacena la cantidad de equipos seleccionados en el select
var equipos = JSON.parse(localStorage.getItem("equipos")).length; // La variable partidos es el calculo de la cantidad de partidos que se van a realizar en el campeonato

var partidos = equipos * (equipos - 1) / 2;
/*

for que retorna los puntos de los distintos partidos.

*/

var tabla = null;

for (var i = 0; i < JSON.parse(localStorage.getItem('equipos')).length; i++) {
  var nombre_equipo = nombreEquipo(JSON.parse(localStorage.getItem("tablaEquipos".concat(i))).equipo);
  objetoEquipo = JSON.parse(localStorage.getItem("tablaEquipos".concat(i)));
  objetoEquipo.nombre = nombre_equipo;
  objetoEquipo.pj = 0;
  objetoEquipo.pg = 0;
  objetoEquipo.pe = 0;
  objetoEquipo.pp = 0;
  objetoEquipo.gf = 0;
  objetoEquipo.gc = 0;
  objetoEquipo.dif = 0;
  objetoEquipo.puntos = 0;
  localStorage.setItem("tablaEquipos".concat(i), JSON.stringify(objetoEquipo));
}

for (var _i = 1; _i <= partidos + 1; _i++) {
  var golLocal = "golLocal" + _i;
  var golVisita = "golVisita" + _i;
  var partidoJugado = "partidoJugado" + _i;
  var localExiste = 0;
  var visitaExiste = 0;

  if (localStorage.getItem(partidoJugado) == 2) {//console.log(partidoJugado);
  } else {
    if (localStorage.getItem(golLocal) !== null) {
      local = parseInt(localStorage.getItem(golLocal));
      localExiste = 1;
    }

    if (localStorage.getItem(golVisita) !== null) {
      visita = parseInt(localStorage.getItem(golVisita));
      visitaExiste = 1;
    }

    if (localExiste == 1 && visitaExiste == 1) {
      if (local > visita) {
        compruebaTabla(nombreEquipo(localStorage.getItem("p" + _i + "loc")), 1, 1, 0, 0, local, visita, local - visita, 3);
        compruebaTabla(nombreEquipo(localStorage.getItem("p" + _i + "vis")), 1, 0, 0, 1, visita, local, visita - local, 0); //localStorage.setItem(partidoJugado,"1");
      }

      if (local < visita) {
        compruebaTabla(nombreEquipo(localStorage.getItem("p" + _i + "loc")), 1, 0, 0, 1, local, visita, local - visita, 0);
        compruebaTabla(nombreEquipo(localStorage.getItem("p" + _i + "vis")), 1, 1, 0, 0, visita, local, visita - local, 3); //localStorage.setItem(partidoJugado,"1");
      }

      if (local === visita) {
        compruebaTabla(nombreEquipo(localStorage.getItem("p" + _i + "loc")), 1, 0, 1, 0, local, visita, local - visita, 1);
        compruebaTabla(nombreEquipo(localStorage.getItem("p" + _i + "vis")), 1, 0, 1, 0, visita, local, visita - local, 1); //localStorage.setItem(partidoJugado,"1");
      }
    }
  }
}

function nombreEquipo(nombre) {
  return localStorage.getItem(nombre);
} //console.log(JSON.parse(localStorage.getItem('equipos')).length)


function compruebaTabla(equipo, pj, pg, pe, pp, gf, gc, dif, puntos) {
  for (var _i2 = 0; _i2 < JSON.parse(localStorage.getItem('equipos')).length; _i2++) {
    var _nombre_equipo = nombreEquipo(JSON.parse(localStorage.getItem("tablaEquipos".concat(_i2))).equipo);

    if (_nombre_equipo == equipo) {
      objetoEquipo = JSON.parse(localStorage.getItem("tablaEquipos".concat(_i2)));
      objetoEquipo.nombre = _nombre_equipo;
      objetoEquipo.pj = objetoEquipo.pj + parseInt(pj);
      objetoEquipo.pg = objetoEquipo.pg + parseInt(pg);
      objetoEquipo.pe = objetoEquipo.pe + parseInt(pe);
      objetoEquipo.pp = objetoEquipo.pp + parseInt(pp);
      objetoEquipo.gf = objetoEquipo.gf + parseInt(gf);
      objetoEquipo.gc = objetoEquipo.gc + parseInt(gc);
      objetoEquipo.dif = objetoEquipo.dif + parseInt(dif);
      objetoEquipo.puntos = objetoEquipo.puntos + parseInt(puntos);
      localStorage.setItem("tablaEquipos".concat(_i2), JSON.stringify(objetoEquipo));
    }
  }
}

var data = new Array();

for (var _i3 = 0; _i3 < JSON.parse(localStorage.getItem('equipos')).length; _i3++) {
  if (_i3 == 0) {
    data.push(JSON.parse(localStorage.getItem("tablaEquipos".concat(_i3)))); //console.log(data)
  } else {
    data.push(JSON.parse(localStorage.getItem("tablaEquipos".concat(_i3)))); //console.log(data)
  }
}

var miTabla = "<table id=\"table_id\" class=\"table display\">\n                 <thead>\n                    <tr>\n                        <th>Nombre</th>\n                        <th>PJ</th>\n                        <th>PG</th>\n                        <th>PE</th>\n                        <th>PP</th>\n                        <th>GF</th>\n                        <th>GC</th>\n                        <th>DIF</th>\n                        <th>Puntos</th>\n                    </tr>\n                 </thead>\n                 <tbody>";

for (var _i4 = 0; _i4 < data.length; _i4++) {
  miTabla += "<tr><td>" + data[_i4].nombre + "</td>";
  miTabla += "<td>" + data[_i4].pj + "</td>";
  miTabla += "<td>" + data[_i4].pg + "</td>";
  miTabla += "<td>" + data[_i4].pe + "</td>";
  miTabla += "<td>" + data[_i4].pp + "</td>";
  miTabla += "<td>" + data[_i4].gf + "</td>";
  miTabla += "<td>" + data[_i4].gc + "</td>";
  miTabla += "<td>" + data[_i4].dif + "</td>";
  miTabla += "<td>" + data[_i4].puntos + "</td></tr>";
}

miTabla += "</tbody></table>";
$(".nacional").append(miTabla);
/*

$('#table_id').DataTable( {
    "searching": false,
    "lengthChange": false,
    "paging": false,
    "buttons": [],
    "data": data,
    "bInfo": false,
    "columns": [
        { data: "nombre" },
        { data: "pj" },
        { data: "pg" },
        { data: "pe" },
        { data: "pp" },
        { data: "gf" },
        { data: "gc" },
        { data: "dif" },
        { data: "puntos" }
    ],
    "order": [
        [ 8, 'desc' ],
        [ 7, 'desc' ],
        [ 5, 'desc' ],
        [ 0, 'asc' ]
    ],
    "aoColumnDefs": [
        { 'bSortable': false, 'aTargets': [ 8,7,6,5,4,3,2,1,0 ] }
     ]
} );

*/