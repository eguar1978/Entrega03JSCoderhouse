// La variable equipos almacena la cantidad de equipos seleccionados en el select
let equipos = JSON.parse(localStorage.getItem("equipos")).length;

// La variable partidos es el calculo de la cantidad de partidos que se van a realizar en el campeonato
let partidos = (equipos * (equipos -1)) / 2;

/*

for que retorna los puntos de los distintos partidos.

*/

let tabla = null;

for(let i = 0; i < JSON.parse(localStorage.getItem('equipos')).length; i++){
            
    let nombre_equipo = nombreEquipo(JSON.parse(localStorage.getItem(`tablaEquipos${i}`)).equipo);    
        
        objetoEquipo = JSON.parse(localStorage.getItem(`tablaEquipos${i}`));

        //objetoEquipo.equipo     = nombre_equipo;
        objetoEquipo.pj         = 0;
        objetoEquipo.pg         = 0;
        objetoEquipo.pe         = 0;
        objetoEquipo.pp         = 0;
        objetoEquipo.gf         = 0;
        objetoEquipo.gc         = 0;
        objetoEquipo.dif        = 0;
        objetoEquipo.puntos     = 0;

        localStorage.setItem(`tablaEquipos${i}`, JSON.stringify(objetoEquipo));
    
}

for (let i = 1; i <= partidos+1; i++) {

    let golLocal    = "golLocal"+i;
    let golVisita   = "golVisita"+i;
    let partidoJugado     = "partidoJugado"+i;
    let localExiste = 0;
    let visitaExiste = 0;

    if(localStorage.getItem(partidoJugado) == 1){
        console.log(partidoJugado);
    }else{

        if(localStorage.getItem(golLocal) !== null){
            local = parseInt(localStorage.getItem(golLocal));
            localExiste = 1;
        }

        if(localStorage.getItem(golVisita) !== null){
            visita = parseInt(localStorage.getItem(golVisita));
            visitaExiste = 1;
        }

        if(localExiste == 1 && visitaExiste == 1){

            if(local > visita){

                compruebaTabla(compruebaTabla(nombreEquipo(localStorage.getItem("p"+i+"loc")),1,1,0,0,local,visita,(local - visita),3));
                compruebaTabla(compruebaTabla(nombreEquipo(localStorage.getItem("p"+i+"vis")),1,0,0,1,visita,local,(visita - local),0));

                    //localStorage.setItem(partidoJugado,"1");
            }

            if(local < visita){


                compruebaTabla(nombreEquipo(localStorage.getItem("p"+i+"loc")),1,0,0,1,local,visita,(local - visita),0);
                compruebaTabla(nombreEquipo(localStorage.getItem("p"+i+"vis")),1,1,0,0,visita,local,(visita - local),3);

                //localStorage.setItem(partidoJugado,"1");
            }

            if(local === visita){

                compruebaTabla(nombreEquipo(localStorage.getItem("p"+i+"loc")),1,0,1,0,local,visita,(local - visita),1);
                compruebaTabla(nombreEquipo(localStorage.getItem("p"+i+"vis")),1,0,1,0,visita,local,(visita - local),1);

                    //localStorage.setItem(partidoJugado,"1");
            }

        }
    }

    
}

function nombreEquipo(nombre){
    return localStorage.getItem(nombre);
}

//console.log(JSON.parse(localStorage.getItem('equipos')).length)

function compruebaTabla(equipo, pj, pg, pe, pp, gf, gc, dif, puntos){

        for(let i = 0; i < JSON.parse(localStorage.getItem('equipos')).length; i++){
        
            let nombre_equipo = nombreEquipo(JSON.parse(localStorage.getItem(`tablaEquipos${i}`)).equipo);    
            if(nombre_equipo == equipo){
                
                objetoEquipo = JSON.parse(localStorage.getItem(`tablaEquipos${i}`));

                objetoEquipo.nombre     = nombre_equipo;
                objetoEquipo.pj         = objetoEquipo.pj + parseInt(pj);
                objetoEquipo.pg         = objetoEquipo.pj + parseInt(pg);
                objetoEquipo.pe         = objetoEquipo.pj + parseInt(pe);
                objetoEquipo.pp         = objetoEquipo.pj + parseInt(pp);
                objetoEquipo.gf         = objetoEquipo.pj + parseInt(gf);
                objetoEquipo.gc         = objetoEquipo.pj + parseInt(gc);
                objetoEquipo.dif        = objetoEquipo.pj + parseInt(dif);
                objetoEquipo.puntos     = objetoEquipo.pj + parseInt(puntos);

                localStorage.setItem(`tablaEquipos${i}`, JSON.stringify(objetoEquipo));

            }
            
            
        }

}

for(let i = 0; i < JSON.parse(localStorage.getItem('equipos')).length; i++){

    if(i == 0){
        var data = localStorage.getItem(`tablaEquipos${i}`);
        //console.log(data)
    }else{
        data = data + "," + localStorage.getItem(`tablaEquipos${i}`);
    }

}

data = '[' + data + ']';

console.log(data);

/*

Esta salida  que esta abajo comentada es la salida del console.log, si la copio y la pego en la variable data la tabla se ejecuta OK,
pero si la ejecuto despues que recorro el for si bien la salida es la misma, me tira un error

//data = [{"equipo":"equipo0","pj":2,"pg":2,"pe":3,"pp":2,"gf":3,"gc":3,"dif":2,"puntos":3,"nombre":"111"},{"equipo":"equipo1","pj":2,"pg":2,"pe":2,"pp":3,"gf":3,"gc":5,"dif":0,"puntos":2,"nombre":"333"},{"equipo":"equipo2","pj":2,"pg":3,"pe":2,"pp":2,"gf":5,"gc":3,"dif":4,"puntos":5,"nombre":"GFG"},{"equipo":"equipo3","pj":2,"pg":3,"pe":2,"pp":2,"gf":5,"gc":4,"dif":3,"puntos":5,"nombre":"FGFG"},{"equipo":"equipo4","pj":2,"pg":2,"pe":3,"pp":2,"gf":3,"gc":3,"dif":2,"puntos":3,"nombre":"DDDDDDD"},{"equipo":"equipo5","pj":2,"pg":2,"pe":2,"pp":3,"gf":4,"gc":5,"dif":1,"puntos":2,"nombre":"FDDFG"}]
*/

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

