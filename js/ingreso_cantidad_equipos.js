

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

            let ii = i+1;

            if(localStorage.getItem("mostrarNotificacion"+i) == null){
                alertify.set('notifier','delay', 2);
                alertify.set('notifier','position', 'bottom-right');
                alertify.success("Equipo " + ii + ": " + localStorage.getItem(arrayEquipos[i]));

                localStorage.setItem("mostrarNotificacion"+i,"1")
            }

            

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


                        alertify.set('notifier','delay', 2);
                        alertify.set('notifier','position', 'bottom-right');
                        alertify.error("El equipo : " + document.getElementById('equipo'+[i]).value.toUpperCase() + " ya fue ingresado.");


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

    localStorage.setItem("actualizaFixture","0");

/*

SI SE SELECCIONO LA CANTIDAD DE EQUIPOS SE COMPRUEBA
CUANTOS EQUIPOS TIENEN NOMBRE PARA CALCULAR EL PORCENTAJE DE LA BARRA QUE SE MUESTRA EN EL INDEX.

*/

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
        var hayDatos = Math.round((100/cantidadEquipos)*equiposConNombre);
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

    $('#tabla_mediana').hide();

}