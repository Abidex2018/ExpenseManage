//Adds a subscription of type sub_type (1, 2, 3 or 4) for lottery lot_id
function addToCart(form, lot_id, prcln_id)
{
	form.lot_id.value = lot_id;
	form.prcln_id.value = prcln_id;
	form.action = "cart_add.php";
	form.submit();
	return false;
}

//Removes the cart subscription cts_id from cart
function removeFromCart(form, cts_id)
{
	form.cts_id.value = cts_id;
	form.action = "cart_remove.php";
	form.submit();
	return false;
}

//Removes the cart subscription cts_id from cart
function removeSyndicateFromCart(form, cts_id)
{
	form.cts_id.value = cts_id;
	form.action = "cart_remove_syndicate.php";
	form.submit();
	return false;
}

function removeScratchFromCart(form, cts_id)
{
	form.cts_id.value = cts_id;
	form.action = "cart_remove_scratch.php";
	form.submit();
	return false;
}
//Removes the cart subscription cts_id from cart
function removeSyndicateFromCartRaffle(form, cts_id)
{
	form.cts_id.value = cts_id;
	form.action = "cart_remove_syndicate_raffle.php";
	form.submit();
	return false;
}

function checkMail(mail)
{
	var x = mail;
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(x))
		return true;
	else
		return false;
}

function openNewWindow(URLtoOpen, windowName, height, width)
{
	windowFeatures ="menubar=no,scrollbars=yes,location=yes,favorites=no,resizable=yes,status=no,toolbar=no,directories=no";
	var test = "'";
	winLeft = (screen.width-width)/2;
	winTop = (screen.height-(height+110))/2;
	window.open(URLtoOpen,windowName,"width=" + width +",height=" + height + ",left=" + winLeft + ",top=" + winTop + test + windowFeatures + test);
	return false;
}

function OpenCenterPop(link, nombre, ancho, alto){
  derecha=(screen.width-ancho)/2;
  arriba=(screen.height-alto)/2;
  string="toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width="+ancho+",height="+alto+",left="+derecha+",top="+arriba+"";
  fin=window.open(link,nombre,string);
}

function OpenWindow(link, nombre, ancho, alto, scrollbars, resaizable){
  derecha=(screen.width-ancho)/2;
  arriba=(screen.height-alto)/2;
  string="toolbar=0,scrollbars="+ scrollbars +",location=0,statusbar=0,menubar=0,resizable=" + resaizable + ",width="+ancho+",height="+alto+",left="+derecha+",top="+arriba+"";
  fin=window.open(link,nombre,string);
  return false;
}

function showStates(selected_state)
{

		if( document.getElementById('country').value == 305 || document.getElementById('country').value == 281 ||
                    document.getElementById('country').value == 272)
		{
			document.getElementById('state_select').length = 0;
			document.getElementById('view_state_field').style.display='none';
			var i = 0;
			var selected = false;
			for( var st in states )
			{
				if(states[st]['country_id'] == document.getElementById('country').value)
				{
					if(states[st]['state_iso'] == selected_state)
					{
						selected = true;
					}
					else
					{
						selected = false;
					}

					document.getElementById('state_select').options[i] = new Option(states[st]['state_name'], states[st]['state_iso'], '', selected);

					i++;
				}
			}

			document.getElementById('usr_state_field').value = '';
			document.getElementById('view_state').style.display='';
		}
		else
		{
			document.getElementById('view_state').style.display='none';
			document.getElementById('state_select').length=0;
			document.getElementById('state_select').options[0] = new Option('', '','defaultSelected');
			document.getElementById('view_state_field').style.display='';

		}

}


function validarDocumentoColombia(document_type, document_num) {
    
   /*
    CE           /^[a-zA-Z]*[1-9]\d{3,7}$/
    TI           /^\d{2}[0-1][0-9][0-3][0-9]\-\d{5}$/
    PPN          /^\w{4,12}$/
    SSN          /^\d{3}\-?\d{2}\-?\d{4}$/
    LIC          /^\w{4,12}$/
    TAX          /^\w{4,12}$/
    */
   
   var re = '';
   var result = 0;
   if (document_type == 'CE') {
       re = /^[a-zA-Z]*[1-9]\d{3,7}$/;  // varios alfanumericos + entre 4 y 8 digitos, ej : A3454434
       result = 1;
   } else if (document_type == 'TI') {
       re = /^\d{2}[0-1][0-9][0-3][0-9]\-\d{5}$/  // 2 digitos + dig 0-1 + dig 0-9 + dig 0-3 + dig 0-9 + "-" + 5 digitos, ej : 120326-44566
       result = 2;
   } else if (document_type == 'PPN') {
       re = /^\w{4,12}$/      // palabra entre 4 y 12 chars , ej: abcd12345
       result = 3;
   } else if (document_type == 'SSN') {
       re = /^\d{3}\-?\d{2}\-?\d{4}$/  // 3 digitos + "-" + 2 digitos + "-" + 4 digitos , ej: 123-45-6789
       result = 4;
   } else if (document_type == 'LIC') {
       re = /^\w{4,12}$/     // palabra entre 4 y 12 chars , ej: abcd12345
       result = 5;
   } else if (document_type == 'TAX') {
       re = /^\w{4,12}$/     // palabra entre 4 y 12 chars , ej: abcd12345
       result = 6;
   }
   
   if (!document_num.match(re)) {
       //alert("DON'T MATCH - DOCUMENT TYPE = " + document_type + ", DOCUMENT NUM = " + document_num);
   } else {
       //alert("MATCH - DOCUMENT TYPE = " + document_type + ", DOCUMENT NUM = " + document_num);
       result = 0;
   }
    
   return result; 
    
    
}

function displaySSN(country){
    if(country.value == 272){
        document.getElementById('ssn_div').style.display = '';
        document.getElementById('label_ssn_other').style.display = '';
        document.getElementById('label_ssn_colombia').style.display = 'none';
        
        document.getElementById('view_document_type').style.display='none';
    }else if ( country.value == 287) {
        document.getElementById('ssn_div').style.display = '';
        document.getElementById('label_ssn_other').style.display = 'none';
        document.getElementById('label_ssn_colombia').style.display = '';
        
        document.getElementById('view_document_type').style.display='';
    }else{
        document.getElementById('ssn_div').style.display = 'none';
        document.getElementById('label_ssn_other').style.display = 'none';
        document.getElementById('label_ssn_colombia').style.display = 'none';
        document.getElementById('view_document_type').style.display='none';
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

function showStatesCC(selected_state)
{

		if( document.getElementById('cc_country').value == 305 || document.getElementById('cc_country').value == 281 ||
                    document.getElementById('cc_country').value == 272)
		{
			document.getElementById('cc_state_select').length = 0;
			document.getElementById('cc_view_state_field').style.display='none';
			var i = 0;
			var selected = false;
			for( var st in states )
			{
				if(states[st]['country_id'] == document.getElementById('cc_country').value)
				{
					if(states[st]['state_iso'] == selected_state)
					{
						selected = true;
					}
					else
					{
						selected = false;
					}

					document.getElementById('cc_state_select').options[i] = new Option(states[st]['state_name'], states[st]['state_iso'], '', selected);

					i++;
				}
			}

			document.getElementById('cc_view_state').style.display='';
		}
		else
		{
			document.getElementById('cc_view_state').style.display='none';
			document.getElementById('cc_state_select').length=0;
			document.getElementById('cc_state_select').options[0] = new Option('', '','defaultSelected');
			document.getElementById('cc_view_state_field').style.display='';

		}

}

function showStatesCCEdit(cc_id, selected_state)
{

		if(document.getElementById('cc_country_' + cc_id).value == 305 || document.getElementById('cc_country_' + cc_id).value == 281 ||
                    document.getElementById('cc_country_' + cc_id).value == 272)
		{
			document.getElementById('cc_state_select_' + cc_id).length = 0;
			document.getElementById('cc_view_state_field_' + cc_id).style.display='none';
			var i = 0;
			var selected = false;
			for( var st in states )
			{
				if(states[st]['country_id'] == document.getElementById('cc_country_' + cc_id).value)
				{
					if(states[st]['state_iso'] == selected_state)
					{
						selected = true;
					}
					else
					{
						selected = false;
					}

					document.getElementById('cc_state_select_' + cc_id).options[i] = new Option(states[st]['state_name'], states[st]['state_iso'], '', selected);

					i++;
				}
			}

			document.getElementById('cc_view_state_' + cc_id).style.display='';
		}
		else
		{
			document.getElementById('cc_view_state_' + cc_id).style.display='none';
			document.getElementById('cc_state_select_' + cc_id).length=0;
			document.getElementById('cc_state_select_' + cc_id).options[0] = new Option('', '','defaultSelected');
			document.getElementById('cc_view_state_field_' + cc_id).style.display='';

		}

}

function showCCs(cc_type, default_card_id)
{

	document.getElementById('bil_ccNumber_select').length=0;
	document.getElementById('bil_ccNumber_select').options[0] = new Option('', '','defaultSelected');

	var i = 0;
	var selected = false;
	for( var cc in cards )
	{
		//alert(payways[pw]['country_id']);
		if(cards[cc]['cc_type'] == cc_type)
		{
			if(cards[cc]['cc_id'] == default_card_id)
				selected = true;
			else
				selected = false;

			document.getElementById('bil_ccNumber_select').options[i] = new Option(cards[cc]['cc_Number'], cards[cc]['cc_id'], '', selected);
			i++;
		}


	}
}

function showCC(cc_id)
{
	document.getElementById('bil_ccHolderName').value = convertXML2CP(cards[cc_id]['cc_HolderName']);
	document.getElementById('bil_ccHolderLastname').value = convertXML2CP(cards[cc_id]['cc_HolderLastName']);
	document.getElementById('bil_ccExpMonth').value = cards[cc_id]['cc_ExPMonth'];
	document.getElementById('bil_ccExpYear').value = cards[cc_id]['cc_ExPYear'];

	if(cards[cc_id]['cc_personal_details']==1){
		document.getElementById('billing_personal_details_div').style.display='';
		show_selected_country(cards[cc_id]['cc_country']);
		document.getElementById('bil_same_info_pd').checked=true;
		if(cards[cc_id]['cc_country'] == 305 || cards[cc_id]['cc_country'] == 281 || cards[cc_id]['cc_country'] == 272){
			showStatesCCPersonalDetails(cards[cc_id]['cc_country'],cards[cc_id]['cc_state']);
			document.getElementById('personal_details_cc_view_state').style.display='';
			document.getElementById('personal_details_cc_view_state_field').style.display='none';
		}
		else{
			document.getElementById('personal_details_cc_view_state').style.display='none';
			document.getElementById('personal_details_cc_view_state_field').style.display='';
			document.getElementById('personal_details_cc_usr_state_field').value = convertXML2CP(cards[cc_id]['cc_state']);
		}
		document.getElementById('personal_details_cc_usr_city').value = convertXML2CP(cards[cc_id]['cc_city']);
		document.getElementById('personal_details_cc_usr_address1').value = convertXML2CP(cards[cc_id]['cc_address']);
		document.getElementById('personal_details_cc_usr_zipcode').value = convertXML2CP(cards[cc_id]['cc_zipcode']);
		document.getElementById('personal_details_cc_usr_phone').value = convertXML2CP(cards[cc_id]['cc_phone']);
	}else{
		document.getElementById('bil_same_info_pd').checked=false;
		document.getElementById('billing_personal_details_div').style.display='none';
		document.getElementById('personal_details_cc_usr_city').value = '';
		document.getElementById('personal_details_cc_usr_address1').value = '';
		document.getElementById('personal_details_cc_usr_zipcode').value = '';
		document.getElementById('personal_details_cc_usr_phone').value = '';
		document.getElementById('personal_details_cc_view_state').style.display='none';
		document.getElementById('personal_details_cc_view_state_field').style.display='';
		document.getElementById('personal_details_cc_usr_state_field').value = '';
		document.getElementById('personal_details_cc_country').options[0].selected = true;
	}
        
        
        //Put at the end of the function so if it fails other stuff still gets displayed
        //This code aims to fix the disabled performed by php in the option for not allowing cc expiration date be modified.
        if(document.getElementById('bil_ccExpMonth').selectedIndex>=0 && document.getElementById('bil_ccExpYear').selectedIndex>=0){
            for(var i=0;i<document.getElementById('bil_ccExpMonth').length;i++){
                if(!document.getElementById('bil_ccExpMonth').options[i].hasAttribute("disabled")){
                    document.getElementById('bil_ccExpMonth').options[i].setAttribute("disabled","true");
                }
            }
            for(var i=0;i<document.getElementById('bil_ccExpYear').length;i++){
                if(!document.getElementById('bil_ccExpYear').options[i].hasAttribute("disabled")){
                    document.getElementById('bil_ccExpYear').options[i].setAttribute("disabled","true");
                }
            }
            if(document.getElementById('bil_ccExpMonth').options[document.getElementById('bil_ccExpMonth').selectedIndex].hasAttribute("disabled")){
                document.getElementById('bil_ccExpMonth').options[document.getElementById('bil_ccExpMonth').selectedIndex].removeAttribute("disabled");
            }
            if(document.getElementById('bil_ccExpYear').options[document.getElementById('bil_ccExpYear').selectedIndex].hasAttribute("disabled")){
                document.getElementById('bil_ccExpYear').options[document.getElementById('bil_ccExpYear').selectedIndex].removeAttribute("disabled");
            }
        }else{
            for(var i=0;i<document.getElementById('bil_ccExpMonth').length;i++){
                if(document.getElementById('bil_ccExpMonth').options[i].hasAttribute("disabled")){
                    document.getElementById('bil_ccExpMonth').options[i].removeAttribute("disabled");
                }
            }
            for(var i=0;i<document.getElementById('bil_ccExpYear').length;i++){
                if(document.getElementById('bil_ccExpYear').options[i].hasAttribute("disabled")){
                    document.getElementById('bil_ccExpYear').options[i].removeAttribute("disabled");
                }
            }
        }
}

function show_selected_country(country){
	var cant=document.getElementById('personal_details_cc_country').options.length ;
	for(i=0;i<cant;i++){
		if(document.getElementById('personal_details_cc_country').options[i].value == country){
			document.getElementById('personal_details_cc_country').options[i].selected=true;
		}
	}
}

function showStatesCCPersonalDetails(country, selected_state){

	if(country == '')
		country = document.getElementById('personal_details_cc_country').value ;

		if(country == 305 || country == 281 || country == 272)
		{
			document.getElementById('personal_details_cc_state_select').length = 0;
			document.getElementById('personal_details_cc_view_state_field').style.display='none';
			var i = 0;
			var selected = false;
			for( var st in states )
			{
				if(states[st]['country_id'] == country)
				{
					if(states[st]['state_iso'] == selected_state)
					{
						selected = true;
					}
					else
					{
						selected = false;
					}

					document.getElementById('personal_details_cc_state_select').options[i] = new Option(states[st]['state_name'], states[st]['state_iso'], '', selected);

					i++;
				}
			}

			document.getElementById('personal_details_cc_view_state').style.display='';
		}
		else
		{
			document.getElementById('personal_details_cc_view_state').style.display='none';
			document.getElementById('personal_details_cc_state_select').length=0;
			document.getElementById('personal_details_cc_state_select').options[0] = new Option('', '','defaultSelected');
			document.getElementById('personal_details_cc_view_state_field').style.display='';

		}

}

function y2k(number) { return (number < 1000) ? number + 1900 : number; }

function isDate (day,month,year) {

    var today = new Date();
    year = ((!year) ? y2k(today.getYear()):year);
    month = ((!month) ? today.getMonth():month-1);
    if (!day) return false
    var test = new Date(year,month,day);
    if ( (y2k(test.getYear()) == year) &&
         (month == test.getMonth()) &&
         (day == test.getDate()) )
        return true;
    else
        return false
}


function change_lotto_countries(arrRegions,arrLotteries){
	var cz = document.getElementById('country').options[document.getElementById('country').selectedIndex].value;
	if(cz!='#'){
		document.getElementById('lottery').length=0;
		document.getElementById('lottery').options[0]=new Option('','#','defaultSelected');
		var i=1;
		for(var dU in arrLotteries){
			if(!isNaN(dU)){
				if(cz==arrRegions[arrLotteries[dU]['reg_id']]['country_id']){
					document.getElementById('lottery').options[i]=new Option(arrRegions[arrLotteries[dU]['reg_id']]['reg_name']+' - '+arrLotteries[dU]['lot_name'],dU,'');i++;
				}
			}
		}
	}else{
		document.getElementById('lottery').length=0;document.getElementById('lottery').options[0]=new Option('','#','defaultSelected');
		i=1;
		for(var dU in arrLotteries){
			if(!isNaN(dU)){
				document.getElementById('lottery').options[i]=new Option(arrRegions[arrLotteries[dU]['reg_id']]['reg_name']+' - '+arrLotteries[dU]['lot_name'],dU,'');
				i++;
			}
		}
	}
}

function checkABA(s) {

  var i, n, t;

  // First, remove any non-numeric characters.
  t = "";
  for (i = 0; i < s.length; i++) {
    c = parseInt(s.charAt(i), 10);
    if (c >= 0 && c <= 9)
      t = t + c;
  }

  // Check the length, it should be nine digits.
  if (t.length != 9)
    return false;

  // Now run through each digit and calculate the total.
  n = 0;
  for (i = 0; i < t.length; i += 3) {
    n += parseInt(t.charAt(i),     10) * 3
      +  parseInt(t.charAt(i + 1), 10) * 7
      +  parseInt(t.charAt(i + 2), 10);
  }


  // If the resulting sum is an even multiple of ten (but not zero),
  // the aba routing number is good.
  if (n != 0 && n % 10 == 0)
    return true;
  else
    return false;


}

function show_syndicate_tab(tab){

	var rows = jQuery('#table_syndicate tr');
	var tr_syndicate = rows.filter('.tr_syndicate');
	var tr_syndicate_raffle = rows.filter('.tr_syndicate_raffle');

	if(tab =='raffle'){
		tr_syndicate.hide();
		tr_syndicate_raffle.show();
		jQuery('.see_more').hide();
		jQuery('#a_syndicate').removeClass('current');
		jQuery('#a_all').removeClass('current');
		jQuery('#a_syndicate_raffle').addClass('current');
	}else if(tab == 'syndicate'){
		tr_syndicate.show();
		tr_syndicate_raffle.hide();
		jQuery('.see_more').show();
		jQuery('.see_more').hide();
		jQuery('#a_syndicate').addClass('current');
		jQuery('#a_all').removeClass('current');
		jQuery('#a_syndicate_raffle').removeClass('current');
	}else{
		jQuery('#a_all').addClass('current');
		jQuery('#a_syndicate_raffle').removeClass('current');
		jQuery('#a_syndicate').removeClass('current');
		var jackpot_tab_item = jQuery('.jackpotCounter_New .jackpot_tab_table_holder .jackpot_tab_item');
		jackpot_tab_item.find('#see_more_syndicates .buttons').each(function(){
			var this_expand_txt = jQuery(this).find('strong').html();
			var this_colapse_txt = jQuery(this).find('a').attr('rel');
			var this_tab = jQuery(this).find('a').attr('href');
			jQuery(this).find('a strong').html( this_colapse_txt );
			jQuery(this).addClass('expanded');

			jQuery(this_tab).find('.hideMe').each(function(e){
				var time = e*50;
				jQuery(this).delay(time).show(0, 'linear').addClass('visible');
			})
			var refPos = jQuery('#jackpotCounter').offset().top;
			if(jQuery.browser.opera){
				 jQuery('html').animate({scrollTop:refPos}, 'slow')
			  }else if(jQuery.browser.msie){
				 jQuery(document).scrollTop( refPos );
			  }else{
				 jQuery('html, body').animate({scrollTop:refPos}, 'slow')
			 }
		});
		tr_syndicate.show();
		tr_syndicate_raffle.show();
		jQuery('.see_more').show();
	}
	return false;
}

function setSelectByValue(eID,val)
{ //Loop through sequentially//
  var ele=document.getElementById(eID);
  for(var ii=0; ii<ele.length; ii++)
    if(ele.options[ii].value==val) { //Found!
      ele.options[ii].selected=true;
      return true;
    }
  return false;
}