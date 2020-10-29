"use strict";

// La variable equipos almacena la cantidad de equipos seleccionados en el select
var equipos = JSON.parse(localStorage.getItem("equipos")).length; // La variable partidos es el calculo de la cantidad de partidos que se van a realizar en el campeonato

var partidos = equipos * (equipos - 1) / 2; // Los proximos IF almacenan los partidos en el LocalStorage

if (equipos == 4) {
  localStorage.setItem("p1loc", "equipo0");
  localStorage.setItem("p1vis", "equipo3");
  localStorage.setItem("p2loc", "equipo1");
  localStorage.setItem("p2vis", "equipo2");
  localStorage.setItem("p3loc", "equipo2");
  localStorage.setItem("p3vis", "equipo0");
  localStorage.setItem("p4loc", "equipo3");
  localStorage.setItem("p4vis", "equipo1");
  localStorage.setItem("p5loc", "equipo0");
  localStorage.setItem("p5vis", "equipo1");
  localStorage.setItem("p6loc", "equipo2");
  localStorage.setItem("p6vis", "equipo3");
}

if (equipos == 6) {
  localStorage.setItem("p1loc", "equipo0");
  localStorage.setItem("p1vis", "equipo5");
  localStorage.setItem("p2loc", "equipo1");
  localStorage.setItem("p2vis", "equipo4");
  localStorage.setItem("p3loc", "equipo2");
  localStorage.setItem("p3vis", "equipo3");
  localStorage.setItem("p4loc", "equipo4");
  localStorage.setItem("p4vis", "equipo0");
  localStorage.setItem("p5loc", "equipo5");
  localStorage.setItem("p5vis", "equipo3");
  localStorage.setItem("p6loc", "equipo1");
  localStorage.setItem("p6vis", "equipo2");
  localStorage.setItem("p7loc", "equipo0");
  localStorage.setItem("p7vis", "equipo3");
  localStorage.setItem("p8loc", "equipo4");
  localStorage.setItem("p8vis", "equipo2");
  localStorage.setItem("p9loc", "equipo5");
  localStorage.setItem("p9vis", "equipo1");
  localStorage.setItem("p10loc", "equipo2");
  localStorage.setItem("p10vis", "equipo0");
  localStorage.setItem("p11loc", "equipo3");
  localStorage.setItem("p11vis", "equipo1");
  localStorage.setItem("p12loc", "equipo4");
  localStorage.setItem("p12vis", "equipo5");
  localStorage.setItem("p13loc", "equipo0");
  localStorage.setItem("p13vis", "equipo1");
  localStorage.setItem("p14loc", "equipo2");
  localStorage.setItem("p14vis", "equipo5");
  localStorage.setItem("p15loc", "equipo3");
  localStorage.setItem("p15vis", "equipo4");
}

if (equipos == 8) {
  localStorage.setItem("p1loc", "equipo0");
  localStorage.setItem("p1vis", "equipo7");
  localStorage.setItem("p2loc", "equipo1");
  localStorage.setItem("p2vis", "equipo6");
  localStorage.setItem("p3loc", "equipo2");
  localStorage.setItem("p3vis", "equipo5");
  localStorage.setItem("p4loc", "equipo3");
  localStorage.setItem("p4vis", "equipo4");
  localStorage.setItem("p5loc", "equipo6");
  localStorage.setItem("p5vis", "equipo0");
  localStorage.setItem("p6loc", "equipo7");
  localStorage.setItem("p6vis", "equipo5");
  localStorage.setItem("p7loc", "equipo1");
  localStorage.setItem("p7vis", "equipo4");
  localStorage.setItem("p8loc", "equipo2");
  localStorage.setItem("p8vis", "equipo3");
  localStorage.setItem("p9loc", "equipo5");
  localStorage.setItem("p9vis", "equipo0");
  localStorage.setItem("p10loc", "equipo6");
  localStorage.setItem("p10vis", "equipo4");
  localStorage.setItem("p11loc", "equipo7");
  localStorage.setItem("p11vis", "equipo3");
  localStorage.setItem("p12loc", "equipo1");
  localStorage.setItem("p12vis", "equipo2");
  localStorage.setItem("p13loc", "equipo0");
  localStorage.setItem("p13vis", "equipo4");
  localStorage.setItem("p14loc", "equipo5");
  localStorage.setItem("p14vis", "equipo3");
  localStorage.setItem("p15loc", "equipo6");
  localStorage.setItem("p15vis", "equipo2");
  localStorage.setItem("p16loc", "equipo7");
  localStorage.setItem("p16vis", "equipo1");
  localStorage.setItem("p17loc", "equipo3");
  localStorage.setItem("p17vis", "equipo0");
  localStorage.setItem("p18loc", "equipo4");
  localStorage.setItem("p18vis", "equipo2");
  localStorage.setItem("p19loc", "equipo5");
  localStorage.setItem("p19vis", "equipo1");
  localStorage.setItem("p20loc", "equipo6");
  localStorage.setItem("p20vis", "equipo7");
  localStorage.setItem("p21loc", "equipo0");
  localStorage.setItem("p21vis", "equipo2");
  localStorage.setItem("p22loc", "equipo3");
  localStorage.setItem("p22vis", "equipo1");
  localStorage.setItem("p23loc", "equipo4");
  localStorage.setItem("p23vis", "equipo7");
  localStorage.setItem("p24loc", "equipo5");
  localStorage.setItem("p24vis", "equipo6");
  localStorage.setItem("p25loc", "equipo1");
  localStorage.setItem("p25vis", "equipo0");
  localStorage.setItem("p26loc", "equipo2");
  localStorage.setItem("p26vis", "equipo7");
  localStorage.setItem("p27loc", "equipo3");
  localStorage.setItem("p27vis", "equipo6");
  localStorage.setItem("p28loc", "equipo4");
  localStorage.setItem("p28vis", "equipo5");
}

if (equipos == 10) {
  localStorage.setItem("p1loc", "equipo0");
  localStorage.setItem("p1vis", "equipo9");
  localStorage.setItem("p2loc", "equipo1");
  localStorage.setItem("p2vis", "equipo8");
  localStorage.setItem("p3loc", "equipo2");
  localStorage.setItem("p3vis", "equipo7");
  localStorage.setItem("p4loc", "equipo3");
  localStorage.setItem("p4vis", "equipo6");
  localStorage.setItem("p5loc", "equipo4");
  localStorage.setItem("p5vis", "equipo5");
  localStorage.setItem("p6loc", "equipo8");
  localStorage.setItem("p6vis", "equipo0");
  localStorage.setItem("p7loc", "equipo9");
  localStorage.setItem("p7vis", "equipo7");
  localStorage.setItem("p8loc", "equipo1");
  localStorage.setItem("p8vis", "equipo6");
  localStorage.setItem("p9loc", "equipo2");
  localStorage.setItem("p9vis", "equipo5");
  localStorage.setItem("p10loc", "equipo3");
  localStorage.setItem("p10vis", "equipo4");
  localStorage.setItem("p11loc", "equipo0");
  localStorage.setItem("p11vis", "equipo7");
  localStorage.setItem("p12loc", "equipo8");
  localStorage.setItem("p12vis", "equipo6");
  localStorage.setItem("p13loc", "equipo9");
  localStorage.setItem("p13vis", "equipo5");
  localStorage.setItem("p14loc", "equipo1");
  localStorage.setItem("p14vis", "equipo4");
  localStorage.setItem("p15loc", "equipo2");
  localStorage.setItem("p15vis", "equipo3");
  localStorage.setItem("p16loc", "equipo6");
  localStorage.setItem("p16vis", "equipo0");
  localStorage.setItem("p17loc", "equipo7");
  localStorage.setItem("p17vis", "equipo5");
  localStorage.setItem("p18loc", "equipo8");
  localStorage.setItem("p18vis", "equipo4");
  localStorage.setItem("p19loc", "equipo9");
  localStorage.setItem("p19vis", "equipo3");
  localStorage.setItem("p20loc", "equipo1");
  localStorage.setItem("p20vis", "equipo2");
  localStorage.setItem("p21loc", "equipo0");
  localStorage.setItem("p21vis", "equipo5");
  localStorage.setItem("p22loc", "equipo6");
  localStorage.setItem("p22vis", "equipo4");
  localStorage.setItem("p23loc", "equipo7");
  localStorage.setItem("p23vis", "equipo3");
  localStorage.setItem("p24loc", "equipo8");
  localStorage.setItem("p24vis", "equipo2");
  localStorage.setItem("p25loc", "equipo9");
  localStorage.setItem("p25vis", "equipo1");
  localStorage.setItem("p26loc", "equipo4");
  localStorage.setItem("p26vis", "equipo0");
  localStorage.setItem("p27loc", "equipo5");
  localStorage.setItem("p27vis", "equipo3");
  localStorage.setItem("p28loc", "equipo6");
  localStorage.setItem("p28vis", "equipo2");
  localStorage.setItem("p29loc", "equipo7");
  localStorage.setItem("p29vis", "equipo1");
  localStorage.setItem("p30loc", "equipo8");
  localStorage.setItem("p30vis", "equipo9");
  localStorage.setItem("p31loc", "equipo0");
  localStorage.setItem("p31vis", "equipo3");
  localStorage.setItem("p32loc", "equipo4");
  localStorage.setItem("p32vis", "equipo2");
  localStorage.setItem("p33loc", "equipo5");
  localStorage.setItem("p33vis", "equipo1");
  localStorage.setItem("p34loc", "equipo6");
  localStorage.setItem("p34vis", "equipo9");
  localStorage.setItem("p35loc", "equipo7");
  localStorage.setItem("p35vis", "equipo8");
  localStorage.setItem("p36loc", "equipo2");
  localStorage.setItem("p36vis", "equipo0");
  localStorage.setItem("p37loc", "equipo3");
  localStorage.setItem("p37vis", "equipo1");
  localStorage.setItem("p38loc", "equipo4");
  localStorage.setItem("p38vis", "equipo9");
  localStorage.setItem("p39loc", "equipo5");
  localStorage.setItem("p39vis", "equipo8");
  localStorage.setItem("p40loc", "equipo6");
  localStorage.setItem("p40vis", "equipo7");
  localStorage.setItem("p41loc", "equipo0");
  localStorage.setItem("p41vis", "equipo1");
  localStorage.setItem("p42loc", "equipo2");
  localStorage.setItem("p42vis", "equipo9");
  localStorage.setItem("p43loc", "equipo3");
  localStorage.setItem("p43vis", "equipo8");
  localStorage.setItem("p44loc", "equipo4");
  localStorage.setItem("p44vis", "equipo7");
  localStorage.setItem("p45loc", "equipo5");
  localStorage.setItem("p45vis", "equipo6");
} // Las siguientes variables estan definidas fuera del bucle for donde van a ser utilizadas.


var cantPartidos = 1;
var fechaNumero = 1;
var fechaMostrar = "";
var imprimirPartido = new Array();
var local = "";
var visita = "";
var golLocal = "";
var golVisita = "";
/*
For recorre la cantidad de partidos y despliega las fechas y quienes juegan de local y quienes de visitante.
*/

for (var i = 1; i <= partidos; i++) {
  // Funcion que trae el nombre del equipo para que sea mostrado en la WEB
  local = nombreEquipo(localStorage.getItem("p" + [i] + "loc"));
  visita = nombreEquipo(localStorage.getItem("p" + [i] + "vis")); // Variables que van a ser utilizadas en los name del input

  golLocal = "golLocal" + [i];
  golVisita = "golVisita" + [i]; // Si la variable cantPartidos == 1, almacena en el array "imprimirPartido" la cabecera de la tabla de la fecha en juego

  if (cantPartidos == 1) {
    fechaMostrar = "Fecha " + fechaNumero;
    fechaNumero++;
    imprimirPartido.push("<div class=\"col-12\">\n        <table class=\"table table-sm table-dark\">\n        <thead>\n          <tr>\n            <th colspan=\"5\" class=\"tituloTabla\">" + fechaMostrar + "</th>\n          </tr>\n            <th>Local</th>\n            <th>Gol local</th>\n            <th> - </th>\n            <th>Gol visita</th>\n            <th>Visitante</th>\n          </tr>\n          </thead>\n          <tbody>");
  } // Si el siguiente IF es true reinicia la variable cantPartidos a 1 y agrega al array imprimirPartido los imput del final de la fecha y cierra la tabla html
  // Al setear la variable cantPartidos a 1 si el for se vuelve a ejecutar nuevamente el if anterior seria true y comienza una nueva tabla
  // Si el resultado del if es false, se incrementa la variable cantPartidos y se agregan al if los partidos de esa fecha.


  if (cantPartidos == equipos / 2) {
    cantPartidos = 1;
    imprimirPartido.push("<tr>\n                                <td>" + local + "</td>\n                                <td><input type=\"number\" name=\"" + golLocal + "\" class=\"form-control form-control-sm\"></td>\n                                <td> - </td>\n                                <td><input type=\"number\" name=\"" + golVisita + "\" class=\"form-control form-control-sm\"></td>\n                                <td>" + visita + "</td>\n                            </tr>\n                            </tbody>\n                            </table>\n                            </div>");
  } else {
    cantPartidos++;
    imprimirPartido.push("<tr>\n                                <td>" + local + "</td>\n                                <td><input type=\"number\" name=\"" + golLocal + "\" class=\"form-control form-control-sm\"></td>\n                                <td> - </td>\n                                <td><input type=\"number\" name=\"" + golVisita + "\" class=\"form-control form-control-sm\"></td>\n                                <td>" + visita + "</td>\n                            </tr>");
  }

  document.getElementById("fixture").innerHTML = imprimirPartido;
} // Funcion que trae el nombre del equipo para que sea mostrado en la WEB, esta funcion es llamada cada ves que recorre el bucle for anterior


function nombreEquipo(nombre) {
  return localStorage.getItem(nombre);
}