document.getElementByI('formulario-inicio').addEventListener('submit', function (){
    const usuario = document.getElementById("usuario").values();
    const clave = document.getElementById("clave").values();
    const rol = document.getElementById("rol").values();

     console.log(usuario, clave, rol);
});
function inicioSesion(){

    switch (rol){
        case 1:
            //href="ap_liderProyecto.html"
            break;
        case 2:
           // href="ap_Estudiante.html"
            break;
        case 3:
           // href="ap_Asesor.html"
            break;
    }

    console.log(documento.getElementById('usuario').value);
}

let urlDB;
urlDB = process.env.MONGD_URI ;

