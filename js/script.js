
window.onload=function () {

    var dpto= (Object.keys(dptosLocs)); //obtengo las key del objeto
    var locs = (Object.values(dptosLocs) ) // obtengo los values del objeto
    var txtnom = document.getElementById('nom');
    var txtape = document.getElementById('ape');
    var txtmail = document.getElementById('mail');
    var txtci = document.getElementById('ci');
    var checkBases= document.getElementById('bases');

    var dptoInput= document.getElementById('dpto');
    var locsInput= document.getElementById('locs');
    getData(dpto,dptoInput);
    dptoInput.addEventListener("change",function(){ // escucha la action change
      var index = this.selectedIndex - 1 ;
      locsInput.innerHTML="";
      getData(locs[index],locsInput);
    });

    document.getElementById('btnForm').addEventListener("click",function(){ // escucha la action onsubmit

      validarCheck(checkBases);
      validarSelect(dptoInput);
      validarSelect(locsInput);
      ValCI(txtci);
      ValidarMail(txtmail);
      ValidarNomApe(txtape);
      ValidarNomApe(txtnom);

    }); //end onsubmit
} //end onload


function getData(data, input){ // getData toma la info de dpto y locs y carga los combobox
  for (var i = 0; i < data.length; i++) {
    var node = document.createElement("option");
   node.innerHTML = data[i]; //doy valor a el elemento node
  input.appendChild(node);

  } //end for
} //end getdata

function ValidarNomApe(txt){
  var val = txt.value.trim();
  if(  val == "" || val.length < 2  ){
    txt.className += " invalid";
    var msj = document.getElementById( txt.id+"Msj" )
    msj.innerHTML = "Input incorrecto, debe tener al menos 2 caracteres";
    txt.focus();
  }else{
    txt.className = " form-control ";
    var msj = document.getElementById( txt.id+"Msj" )
    msj.innerHTML = "";
  }//end if
} //end Validar

function ValidarMail(mail){
  var val= mail.value.trim();
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (val.length < 1) {
    mail.className += " invalid";
    var msj = document.getElementById( mail.id+"Msj" )
    msj.innerHTML = "Input incorrecto, debe completar el campo";
    mail.focus();
  }else if ( (regex.test(mail.value)) ) {
    mail.className = " form-control ";
    var msj = document.getElementById( mail.id+"Msj" )
    msj.innerHTML = "";
  }else {
    mail.className += " invalid";
    var msj = document.getElementById( mail.id+"Msj" )
    msj.innerHTML = "Input incorrecto, debe tener una extructura ej:'ejemplo@gmail.com'";
    mail.focus();
  }

} //end ValidarMail

function ValCI(CI){
  var val = CI.value.trim();
  if (val.length < 8) {
    CI.className += " invalid"
    var msj = document.getElementById( CI.id+"Msj" )
    msj.innerHTML = "El largo de la cedula debe ser de 8 digitos";
    CI.focus();
  }else {
    var estado =  validarCedula(CI.value);
    if(estado){
      CI.className = "form-control"
      var msj = document.getElementById( CI.id+"Msj" )
      msj.innerHTML = "";
    }else {
      CI.className += " invalid"
      var msj = document.getElementById( CI.id+"Msj" )
      msj.innerHTML = "Cedula incorrecta";
      CI.focus();
    }//end if estado
  } //end if
}// end valci

function validarSelect(input){
  if(input.value == ""){
    input.className += " invalid"
    var msj = document.getElementById( input.id+"Msj" )
    msj.innerHTML = "Input incorrecto, debe selecionar una opcion";
    input.focus();
  }else{
    input.className = "form-control"
    var msj = document.getElementById( input.id+"Msj" )
    msj.innerHTML = "";
  }//end if
}//end validarSelect

function validarCheck(input){
  if(input.checked){
    input.className = "form-control"
    var msj = document.getElementById( input.id+"Msj" )
    msj.innerHTML = "";
  }else{
    input.className += " invalid"
    var msj = document.getElementById( input.id+"Msj" )
    msj.innerHTML = "Input incorrecto, debe selecionar una opcion";
    input.focus();
  }
}
