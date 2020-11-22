let equiposConNombre = 0;
if(localStorage.getItem("equipos") !== null){
    for (let i = 0; i < JSON.parse(localStorage.getItem("equipos")).length; i++) {
        
        if(localStorage.getItem(`equipo${i}`) != 'null'){
            equiposConNombre++;
        }

    }

    if (equiposConNombre == JSON.parse(localStorage.getItem("equipos")).length) {
        $('#posiciones').show();
        $('#fechasJugar').show();
        $('#pelota').removeClass('base');
        $('#pelota').addClass('verde');
    }else{
        $('#posiciones').hide();
        $('#fechasJugar').hide();
    }

}else{
    $('#posiciones').hide();
    $('#fechasJugar').hide();
}