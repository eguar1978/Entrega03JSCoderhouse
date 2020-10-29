"use strict";

function mostrar(equipos) {
  $.ajax({
    url: "js/partidos.json",
    type: "GET",
    dataType: "json"
  }).done(function (resultadoJson) {
    console.log(resultadoJson.equipos10);

    if (equipos == 4) {
      for (var i = 0; i < resultadoJson.equipos4.length; i++) {
        key = resultadoJson.equipos4[i].id_partido;
        value = resultadoJson.equipos4[i].equipo;
        localStorage.setItem(key, value);
      }
    }

    if (equipos == 6) {
      for (var _i = 0; _i < resultadoJson.equipos6.length; _i++) {
        key = resultadoJson.equipos6[_i].id_partido;
        value = resultadoJson.equipos6[_i].equipo;
        localStorage.setItem(key, value);
      }
    }

    if (equipos == 8) {
      for (var _i2 = 0; _i2 < resultadoJson.equipos8.length; _i2++) {
        key = resultadoJson.equipos8[_i2].id_partido;
        value = resultadoJson.equipos8[_i2].equipo;
        localStorage.setItem(key, value);
      }
    }

    if (equipos == 10) {
      for (var _i3 = 0; _i3 < resultadoJson.equipos10.length; _i3++) {
        key = resultadoJson.equipos10[_i3].id_partido;
        value = resultadoJson.equipos10[_i3].equipo;
        localStorage.setItem(key, value);
      }
    }
  }).fail(function (xhr, status, error) {
    //xhr (request completa)        
    console.log(xhr);
    console.log(status);
    console.log(error);
  });
}

mostrar(10);