// JavaScript Document
function validate_form_login(){
	
	email=document.getElementById('email').value;
	pass=document.getElementById('pass').value;

	if( email == '' || pass == '' ){
		alert(ERROR_1);
		return false;
	}else if(!validate_mail(email)){
		alert(ERROR_4);
		return false;
	}else return true;
}

function validate_mail(valor) {
	var reg = new RegExp(".*[a-zA-Z0-9\_\.\-]{1}\@.*[a-zA-Z0-9]{1}\..*[a-zA-Z0-9]{1}",'gi');
	if (!reg.test(valor)) {
	    return false;
	}
	else
		return true;
}

function validate_info(){
	
	 var name=document.getElementById('Name').value;
	 var lastname=document.getElementById('LastName').value;
	 var email=document.getElementById('Email').value;
	 var email2=document.getElementById('Email2').value;
	 var tel=document.getElementById('Phone').value;
	 var address=document.getElementById('Address').value;
	 var city=document.getElementById('City').value;
	 var state=document.getElementById('State').value;
	 var country=document.getElementById('Country').value;
	 var zip=document.getElementById('Zip').value;
	 var altEmail=document.getElementById('altEmail').value;
	 
	 pass=document.getElementById('NewPassword').value;
	 pass2=document.getElementById('NewPassword2').value;
	 
	 if(pass != pass2){
	 	alert(ERROR_6);
		return false;	
	 }else if( pass == '' || pass2 == '' || name == '' || lastname == '' || email == '' || address == '' || city == '' || zip == '' || tel == ''){
			alert(ERROR_1);
			return false;
		}else if(!validate_mail(email) || !validate_mail(email2) ){
			alert(ERROR_4);
			return false;
		}else if(email != email2){
			alert(ERROR_2);
			return false;
		}else if((country == 305 || country == 281 || country == 272) && state == ''){
			alert(ERROR_1);
			return false;
		}else if(altEmail.length > 1 && !validate_mail(altEmail)){
			alert(ERROR_4);
			return false;
		} else return true;
}


function show_state(){    
    if(document.getElementById('Country').value == 305 || document.getElementById('Country').value == 281 || document.getElementById('Country').value == 272){
		document.getElementById('State').length=0;
		document.getElementById('State').options[0] = new Option('', '','');
		var i = 1;
		for( var st in arrStates ) {
			if(arrStates[st]['country_id'] == document.getElementById('Country').value){
				document.getElementById('State').options[i] = new Option(arrStates[st]['state_name'], arrStates[st]['state_iso'],'');
				i++;
			}
		}
		document.getElementById('view_state').style.display='block';
		document.getElementById('view_state2').style.display='none';
	}
	else{
		document.getElementById('view_state').style.display='none';
		document.getElementById('view_state2').style.display='block';
		document.getElementById('State').length=0;
		document.getElementById('State').options[0] = new Option('', '','defaultSelected');
	}
}

function alphanumeric(val){
	var regex=/^[0-9A-Za-z]+$/;
	if(regex.test(val)){
		return true;
	} 
	else {
		return false;
	}
}

function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g,'');

    if(cpf == '') return false;

    // Elimina CPFs invalidos
    if (cpf.length != 11 ||  cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" ||
        cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" ||
        cpf == "99999999999") {

        return false;
    }

    // Valida 1er digito
    add = 0;
    for (i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;

    // Valida 2do digito
    add = 0;
    for (i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;

    return true;
}