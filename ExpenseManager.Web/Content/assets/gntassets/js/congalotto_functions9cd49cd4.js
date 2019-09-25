
jQuery(document).ready(function(){
	
    // Choose Language
    $j = jQuery.noConflict(); 
	
	
    var langchooser = $j('#langchooser');
    langchooser.hover(
        function(){
            $j(this).addClass('hovered');
            $j(this).find('li:not(.current)').stop(true, true).slideDown(200);
        },
        function(){
            $j(this).removeClass('hovered');
            $j(this).find('li:not(.current)').css('display', 'none');
        }
  )
	
    // Tables's hover class. REMOVE link to test.js
	
    $j("table.hoverable tr").hover(
		function () {
		    $j(this).addClass('hover');
		}, 
		function () {
		    $j(this).removeClass('hover');
		}
	);

    $j("table.hoverable2 tr").hover(
		function () {
		    $j(this).addClass('hover');
		}, 
		function () {
		    $j(this).removeClass('hover');
		}
	);

    $j("table.hoverable3 tr").hover(
		function () {
		    $j(this).addClass('hover');
		}, 
		function () {
		    $j(this).removeClass('hover');
		}
	);
	
    // Tooltip Submenu
	 
    //QTIP 1 > Jugar en linea
	 
    $j('.submenu_1_content').hide();
    $j('a.submenu_1').each(function()
    {
        $j(this).qtip({
            content: $j('.submenu_1_content'),
            style: {
                classes: 'my_custom_class',
                tip: {width:50, height:10, corner:false, offset:75}
            },
            hide: {fixed: true, leave: false},
            position: {
                at: 'bottom left', // Position the tooltip above the link
                my: 'top left',
                effect: false // Disable positioning animation
            },
        });
    });
	 
    $j('.submenu_1_content').hover(function(){
        $j('.submenu_1').addClass('menu_hovered');
    }, function(){$j('.submenu_1').removeClass('menu_hovered');}); 
	 
    //QTIP 2 > Resultados
	 
    $j('.submenu_2_content').hide();
    $j('a.submenu_2').each(function()
    {
        $j(this).qtip({
            content: $j('.submenu_2_content'),
            style: {
                classes: 'my_custom_class',
                tip: {width:50, height:10, corner:false, offset:75}
            },
            hide: {fixed: true, leave: false},
            position: {
                at: 'bottom left', // Position the tooltip above the link
                my: 'top left',
                effect: false // Disable positioning animation
            },
        });
    });
	 
    $j('.submenu_2_content').hover(function(){
        $j('.submenu_2').addClass('menu_hovered');
    }, function(){$j('.submenu_2').removeClass('menu_hovered');}); 
	 
    //QTIP 3 > Blog y Noticias
	 
    $j('.submenu_3_content').hide();
    $j('a.submenu_3').each(function()
    {
        $j(this).qtip({
            content: $j('.submenu_3_content'),
            style: {
                classes: 'my_custom_class',
                tip: {width:50, height:10, corner:false, offset:75}
            },
            hide: {fixed: true, leave: false},
            position: {
                at: 'bottom left', // Position the tooltip above the link
                my: 'top left',
                effect: false // Disable positioning animation
            },
        });
    });
	 
    $j('.submenu_3_content').hover(function(){
        $j('.submenu_3').addClass('menu_hovered');
    }, function(){$j('.submenu_3').removeClass('menu_hovered');}); 
	 
    //QTIP 4 > Soporte
	 
    $j('.submenu_4_content').hide();
    $j('a.submenu_4').each(function()
    {
        $j(this).qtip({
            content: $j('.submenu_4_content'),
            style: {
                classes: 'my_custom_class',
                tip: {width:50, height:10, corner:false,}
            },
            hide: {fixed: true, leave: false},
            position: {
                at: 'bottom left', // Position the tooltip above the link
                my: 'top left',
                effect: false // Disable positioning animation
            },
        });
    });
	 
    $j('.submenu_4_content').hover(function(){
        $j('.submenu_4').addClass('menu_hovered');
    }, function(){$j('.submenu_4').removeClass('menu_hovered');}); 
	
    //QTIP 5 > My Account
	 
    $j('.submenu_5_content').hide();
    $j('a.submenu_5').each(function()
    {
        $j(this).qtip({
            content: $j('.submenu_5_content'),
            style: {
                classes: 'my_custom_class',
                tip: {width:50, height:10, corner:false,}
            },
            hide: {fixed: true, leave: false},
            position: {
                at: 'bottom left', // Position the tooltip above the link
                my: 'top left',
                effect: false // Disable positioning animation
            },
        });
    });
	 
    $j('.submenu_5_content').hover(function(){
        $j('.submenu_5').addClass('menu_hovered');
    }, function(){$j('.submenu_5').removeClass('menu_hovered');}); 
	
	
    // How it works Slider
	
    //$j('#slides').slides({
    //    preload: true,
    //    generateNextPrev: true,
    //    play: 3000,
    //    pause:1000,
    //});	
			
    // Home Slider
		
    //$j('#homeslides').slides({
    //    preload: true,
    //    play: 6000,
    //    pause:1000,
    //    navigation:false,
    //});
	
    // Hide/show tables 
    $j(function(){
        $j('#table-1').click(function(){
            $j('.table-1').show();
            $j('.table-2').hide();
            $j('.table-3').hide();
            $j('.table-4').hide();
            $j('#table-1').addClass('selected');
            $j('#table-2').removeClass('selected');
            $j('#table-3').removeClass('selected');
            $j('#table-4').removeClass('selected');
        });
    });
    $j(function(){
        $j('#table-2').click(function(){
            $j('.table-2').show();
            $j('.table-1').hide();
            $j('.table-3').hide();
            $j('.table-4').hide();
            $j('#table-2').addClass('selected');
            $j('#table-1').removeClass('selected');
            $j('#table-3').removeClass('selected');
            $j('#table-4').removeClass('selected');
        });
    });
    $j(function(){
        $j('#table-3').click(function(){
            $j('.table-3').show();
            $j('.table-1').hide();
            $j('.table-2').hide();
            $j('.table-4').hide();
            $j('#table-3').addClass('selected');
            $j('#table-1').removeClass('selected');
            $j('#table-2').removeClass('selected');
            $j('#table-4').removeClass('selected');
        });
    });
    $j(function () {
        $j('#table-4').click(function () {
            $j('.table-4').show();
            $j('.table-1').hide();
            $j('.table-2').hide();
            $j('.table-3').hide();
            $j('#table-4').addClass('selected');
            $j('#table-1').removeClass('selected');
            $j('#table-2').removeClass('selected');
            $j('#table-3').removeClass('selected');
        });
    });
	
    // Make a div clickable
	
	$j(function(){
		$j('.clickable').click(function(){
     	window.location=$j(this).find("a").attr("href"); 
     	return false;
	 	});
	});

	/*$j('#ltk-lottoslider').bxSlider({
	    maxSlides: 4,
	    slideWidth: 239,
	    slideMargin: 10,
	    pager: false
	});*/
	
	// Sign In Sign Up lightbox
	
	//$j(".ajax").colorbox({});

	//$j('#cboxLoadedContent a').live('click', function() {
 // 		$j.colorbox({href: $j(this).attr('href')});
 // 		return false;
	//});

});

function login_ajax(call_params,called_from_signup, domain){
	var post_data = '';
	if (called_from_signup == 1){
		post_data = call_params;
	} else {
		post_data = 'email='+document.getElementById('email').value+'&pass='+document.getElementById('pass').value+'&'+call_params; 
		if (document.getElementById('rememberme').checked) post_data += '&rememberme=1';
	}
	
	$j.ajax({
		url: domain + '/login_ajax.php',
		type: 'post',
		data: post_data,
		dataType: 'json',
		success: function(data){
			if (typeof data.usr_name !== 'undefined'){

				if (data.caller_id != '7'){
					parent.jQuery("#login_div").hide();
					parent.jQuery("#login_span").show();
					
					parent.jQuery("#sp_idN").html(data.usr_name);
					parent.jQuery("#sp_idB").html(data.balance);
					parent.jQuery("#login_span").addClass("on_logged");
					parent.jQuery('body').addClass("logged");
					
					if (jQuery("#my_wallet").length) {
						var login_html = parent.jQuery(".my_wallet").html();
						login_html = login_html.replace("#SEC#",data.security_id);
						parent.jQuery(".my_wallet").html(login_html);
					}
					
					if (jQuery("#my_info").length) {
						var myinfo_html = parent.jQuery(".my_info").html();
						myinfo_html = myinfo_html.replace("#SEC#",data.security_id);
						parent.jQuery(".my_info").html(myinfo_html);
					}
					
					parent.jQuery("#logout_a").show();
					parent.jQuery("#usr_id").val(data.usr_id);
				}
				
				if (typeof data.gostep3 !== 'undefined'){ // go to step 3
					parent.jQuery.colorbox.close();
					parent.location.href=data.gostep3_redirect+'/orderCompleted.php?confirm='+data.crt_id+'&extra_msg=2&m='+data.security_id;
				}else if (data.userHasAllData == '0') {
					// falta data, mando a modal para actualizar la data
					jQuery.colorbox({href:"/modal_signup_step2.php?"+call_params});
				} else {
					parent.jQuery.colorbox.close();
					// particularidades dependiendo del caller 
					if(typeof data.caller_id !== 'undefined'){
						switch(data.caller_id){
							case '1': // playlotto.php desde header
								parent.jQuery('#bottomTable').append(data.my_nums_tr_html);
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								break;
							case '2': // playlotto.php desde botón de play
								parent.send_data();
								break;
							case '3': // play_syndicate.php desde header
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								break;
							case '4': // play_syndicate.php desde botón de play now!
								parent.send_picker_form();
								break;
							case '5': // playraffle.php desde header
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								break;
							case '6':
								if( parent.check_mode_play()) parent.addToCartRafflesGordo(parent.addToCartForm, data.rff_id, 1);
								break;
							case '7':
								//groupon landings
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								parent.jQuery('#sendForm').submit();
								break;
							case '8': //cart_step1
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								parent.continueButton_onclick(data.security_id);
								break;
							default:
						}
					}
				}

			} else {
				//alert(data.error);
				jQuery('#error-alert-3').show();
				jQuery('#signintext').hide();
			}
		},
		error: function(data, errmsg, objerror){
			/*if (data.status == 400)
			{
				alert($.parseJSON(data.responseText).join(', '));
			}
			else
			{
				alert(data.status + "\n" + objerror);
			}*/
			jQuery('#error-alert-3').show();
		}
	});
}


function purchase_ajax(signup_form,call_params,is_short_signup){

	var post_data = '';
	if (call_params != ''){
		post_data = call_params;
	}
		
	if (is_short_signup == 0){
		if (post_data != '') post_data += '&';
		post_data += 'LastName='+signup_form.LastName.value+'&month_nac='+signup_form.month_nac.value+'&day_nac='+signup_form.day_nac.value+'&year_nac='+signup_form.year_nac.value+'&Country='+signup_form.Country.value+'&State='+signup_form.State.value+'&State2='+signup_form.State2.value+'&Phone='+signup_form.Phone.value+'&receiveademails='+signup_form.receiveademails.value+'&Country='+signup_form.Country.value+'&Address='+signup_form.Address.value+'&City='+signup_form.City.value+'&Zip='+signup_form.Zip.value+'&MobilePhone='+signup_form.MobilePhone.value;
		if (typeof(signup_form.Ssn.value) !== "undefined"){
			post_data += "&Ssn="+signup_form.Ssn.value;
		}
	} else {
		if (post_data != '') post_data += '&';
		post_data += 'email='+signup_form.signup_email.value+'&pass='+signup_form.signup_pass.value+'&name='+signup_form.signup_name.value+'&is_short_signup='+is_short_signup;
	}

	var success = false;
	$j.ajax({
		url: '/purchase_ajax.php',
		type: 'post',
		data: post_data,
		dataType: 'json',
		success: function(data){
			if (typeof data.ok !== 'undefined'){
				succes = true;
				if(is_short_signup==0){
					// termina el signup y esta loggueado:
					// particularidades dependiendo del caller 
					parent.jQuery.colorbox.close();
					parent.jQuery("#usr_id").val(data.usr_id);
					if(typeof data.caller_id !== 'undefined'){
						switch(data.caller_id){
							case '1': // playlotto.php desde header
								parent.jQuery('#bottomTable').append(data.my_nums_tr_html);
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								break;
							case '2': // playlotto.php desde botón de play
								parent.send_data();
								break;
							case '3': // play_syndicate.php desde header
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								break;
							case '4': // play_syndicate.php desde botón de play now!
								parent.send_picker_form();
								break;
							case '5': // playraffle.php desde header
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								break;
							case '6': // playraffle desde play
								if( parent.check_mode_play()) parent.addToCartRafflesGordo(parent.addToCartForm, data.rff_id, 1);
								break;
							case '7':
								//groupon landings
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								parent.jQuery('#sendForm').submit();
								break;
							case '8': //cart_step1
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								parent.continueButton_onclick(data.security_id);
								break;
							default:
						}
					} 
				} else {
					
					if (typeof data.gostep3 !== 'undefined'){ // go to step 3
						parent.location.href=data.gostep3_redirect+'/orderCompleted.php?confirm='+data.confirm+'&extra_msg=2&m='+data.security_id;
					}else{// go to step 2
						if (typeof data.usr_name !== 'undefined'){
							if (parent.jQuery("#login_span").html() !== undefined){
								parent.jQuery("#login_div").hide();
								parent.jQuery("#login_span").show();
								
								parent.jQuery("#sp_idN").html(data.usr_name);
								parent.jQuery("#sp_idB").html(data.balance);
								parent.jQuery("#login_span").addClass("on_logged");
								parent.jQuery('body').addClass("logged");
								
								if (jQuery(".my_wallet").length) {
									var login_html = parent.jQuery(".my_wallet").html();
									login_html = login_html.replace("#SEC#",data.security_id);
									parent.jQuery(".my_wallet").html(login_html);
								}
								
								if (jQuery(".my_info").length) {
									var myinfo_html = parent.jQuery(".my_info").html();
									myinfo_html = myinfo_html.replace("#SEC#",data.security_id);
									parent.jQuery(".my_info").html(myinfo_html);
								}
								
								parent.jQuery("#logout_a").show();
							}
								//parent.jQuery('#play_link_div_to_modal').hide();
								//parent.jQuery('#play_link_div').show();
							jQuery.colorbox({href:"/modal_signup_step2.php?"+call_params});
						}
					}
				}
			} else {
				// mostrar error correspondiente
				jQuery('#newtocgltext').hide();
				jQuery('#cboxLoadedContent').height('810px');
				if(typeof data.error_user !== 'undefined'){
					jQuery('#error-alert-16').show();
					jQuery('#error-fraud').hide();
				}
				if(typeof data.error_login !== 'undefined'){
					jQuery('#error-alert-5').show();
					jQuery('#error-fraud').hide();
				}
				if(typeof data.error_fraud !== 'undefined'){
					jQuery('#error-alert-16').hide();
					jQuery('#error-alert-5').hide();
					jQuery('#error-fraud').show();
				}
				jQuery.colorbox.resize();
			} 
		},
		error: function(data, errmsg, objerror){
			if (data.status == 400)
			{
				alert($.parseJSON(data.responseText).join(', '));
			}
			else
			{
				alert(data.status + "\n" + objerror);
			}
		}
	});
	
}
function updateStatesModal(country_id,domain,selected_value){
	$j.ajax({
		url:'/inc/ajax_country_states.php',
		type: 'post',
		data: 'country_id='+country_id,
		dataType: 'json',
		success: function(data){
			if(country_id == 305 || country_id == 281 || country_id == 272){
				$j('#State option').remove();
				$j('#State').append($j('<option>', {value: '', text: ''}));
				$j.each( data, function( key, value ) {
					  if (value != null && value != ''){
						  $j('#State').append($j('<option>', {value: key, text: value}));
					  }
				});
				$j('#State').val(selected_value).change();
				$j('#view_state').show();	
				$j('#view_state2').hide();
			}
			else{
				$j('#view_state').hide();
				$j('#State option').remove();
				$j('#view_state2').show();	
				$j('#State2').val(selected_value);
			}
		}
	});
}

function VerPixel(){
	$j.ajax({
		url:'/inc/ajax_pixel.php',
		type: 'post',
		data: '',
		dataType: 'text',
		success: function(text){
			parent.jQuery('#pixel_step2').html(text);
		}
	});
}
function modal_register_ajax(signup_form,call_params,is_short_signup, domain){

	var post_data = '';
	if (call_params != ''){
		post_data = call_params;
	}
		
	if (is_short_signup == 0){ // Si parte 2 del alta
		if (post_data != '') post_data += '&';
		post_data += 'zip='+signup_form.Zip.value+'&address='+signup_form.Address.value+'&address2='+signup_form.Address2.value+'&city='+signup_form.city.value+'&newsletter='+signup_form.newsletter.value;
		if (typeof(signup_form.State.value) !== "undefined"){
			post_data += "&state="+signup_form.State.value;
		}
		if (typeof(signup_form.State2.value) !== "undefined"){
			post_data += "&state2="+signup_form.State2.value;
		}
		if (typeof(signup_form.Ssn.value) !== "undefined"){
			post_data += "&ssn="+signup_form.Ssn.value;
		}
		if (typeof(signup_form.AddressNro) !== "undefined"){
			post_data += "&addressNro="+signup_form.AddressNro.value;
		}
	} else { // Es alta corta
		if (post_data != '') post_data += '&';
		post_data += 'email='+signup_form.signup_email.value+'&password='+signup_form.signup_pass.value+'&FirstName='+signup_form.signup_name.value+'&LastName='+signup_form.signup_lastname.value;
		post_data +='&month_nac='+signup_form.month_nac.value+'&day_nac='+signup_form.day_nac.value+'&year_nac='+signup_form.year_nac.value+'&Country='+signup_form.Country.value;
		post_data +='&MobilePhone='+signup_form.MobilePhone.value+'&is_short_signup=1';
	}

	var success = false;
	$j.ajax({
		url: '/ajax_modal_register.php',
		type: 'post',
		data: post_data,
		dataType: 'json',
		success: function(data){
			if (typeof data.ok !== 'undefined'){
				succes = true;
				if(is_short_signup==0){ // competa registro
				
					// termina el signup y esta loggueado:
					// particularidades dependiendo del caller 
					parent.jQuery("#usr_id").val(data.usr_id);
					if(typeof data.caller_id !== 'undefined'){
						switch(data.caller_id){
							case '7':
								//groupon landings
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								parent.jQuery('#sendForm').submit();
								break;
							case '8': //cart_step1
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								if (data.crt_id != ''){
									parent.continueButton_onclick(data.security_id);
								}else{
									parent.location.href=domain+'/index.php';
								}
								break;
                            case '9': //casino game
                                if(globalCasinoGameId !== undefined){
                                    parent.location.href=domain+'/games.php?id='+globalCasinoGameId;
                                    globalCasinoGameId = undefined;
                                }
                                break;
                            case '10': //casino game details
                                if(globalCasinoGameId !== undefined){
                                    parent.location.href=domain+'/game-details.php?id='+globalCasinoGameId+'&load=1';
                                    globalCasinoGameId = undefined;
                                }
                                break;
							default:
						}
					} else {
                        if (data.crt_id != '') {
                            parent.location.href = domain + '/cart_step2.php?crt_id=' + data.crt_id + '&m=' + data.security_id;
                        } else {
                            parent.location.href = domain + '/index.php';
                        }
					}
				} else { // registro corto
					if (typeof data.gostep3 !== 'undefined'){ // go to step 2
						if (data.crt_id != ''){
							parent.location.href=data.gostep3_redirect+'/orderCompleted.php?confirm='+data.confirm+'&extra_msg=2&m='+data.security_id;
						}else{
							parent.location.href=domain+'/index.php';
						}
					}else if(typeof data.gostep2 !== 'undefined'){ // go to step 2){
						if (data.crt_id != ''){
							parent.location.href=domain+'/cart_step2.php?crt_id='+data.crt_id+'&m='+data.security_id;
						}else{
							parent.location.href=domain+'/index.php';
						}
					}else{// go to step 2
						if (typeof data.usr_name !== 'undefined'){
							if (parent.jQuery("#login_span").html() !== undefined){
								parent.jQuery("#login_div").hide();
								parent.jQuery("#login_span").show();
								
								parent.jQuery("#sp_idN").html(data.usr_name);
								parent.jQuery("#sp_idB").html(data.balance);
								parent.jQuery("#login_span").addClass("on_logged");
								parent.jQuery('body').addClass("logged");
								
								if (jQuery(".my_wallet").length) {
									var login_html = parent.jQuery(".my_wallet").html();
									login_html = login_html.replace("#SEC#",data.security_id);
									parent.jQuery(".my_wallet").html(login_html);
								}
								
								if (jQuery(".my_info").length) {
									var myinfo_html = parent.jQuery(".my_info").html();
									myinfo_html = myinfo_html.replace("#SEC#",data.security_id);
									parent.jQuery(".my_info").html(myinfo_html);
								}
								
								parent.jQuery("#logout_a").show();
							}
							//Voy a completar el registro
							parent.jQuery('.modal_overlay').remove();
							parent.jQuery('.login_box').hide();
							parent.jQuery('.callLogin').prop('href','#signUpModal-step2');
							parent.jQuery('.callLogin').data('modal','signUpModalStep2');
							parent.jQuery('.callLogin').click();
							
							
							
							if (signup_form.Country.value == 272 || signup_form.Country.value == 305 || signup_form.Country.value == 281){
								updateStatesModal(signup_form.Country.value,domain,parent.jQuery('#State').val());
							
							}else{
								updateStatesModal(signup_form.Country.value,domain,parent.jQuery('#State2').val());
								
							}
							
							if (signup_form.Country.value == 272){ // Brazil
								parent.jQuery('#div_cpf').show();
								parent.jQuery('#div_cpf_text').show();
								parent.jQuery('#Address').addClass('mltk-street');
								parent.jQuery('#AddressNro').show();
								
								country_code = arr_countries[signup_form.Country.value];
								if ((rules_modal_sign_up !== null) && typeof rules_modal_sign_up[eval('"'+country_code+'"')] !== 'undefined'){
									if (typeof rules_modal_sign_up[eval('"'+country_code+'"')].ZIPCODE !== 'undefined'){
										parent.jQuery('#Zip').prop('placeholder',rules_modal_sign_up[eval('"'+country_code+'"')].ZIPCODE.format);
									}
								}
								parent.jQuery('#Address').prop('placeholder',parent.jQuery('#Address').data('placeholder'));
								parent.jQuery('#Address2').prop('placeholder',parent.jQuery('#Address2').data('placeholder'));
							}
							VerPixel();
						}
					}
				}
			} else { // else del if (typeof data.ok !== 'undefined')
				// mostrar error correspondiente
				jQuery('#newtocgltext').hide();
				jQuery('#cboxLoadedContent').height('810px');
				if(typeof data.error_user !== 'undefined'){
					jQuery('#error-alert-16').show();
					jQuery('#error-fraud').hide();
				}
				if(typeof data.error_login !== 'undefined'){
					jQuery('#error-alert-5').show();
					jQuery('#error-fraud').hide();
				}
				if(typeof data.error_fraud !== 'undefined'){
					jQuery('#error-alert-16').hide();
					jQuery('#error-alert-5').hide();
					jQuery('#error-fraud').show();
				}
				if (typeof data.error_session !== 'undefined'){
					parent.location.href=domain+'/index.php';
				}
			} 
		},
		error: function(data, errmsg, objerror){
			if (data.status == 400)
			{
				alert($.parseJSON(data.responseText).join(', '));
			}
			else
			{
				alert(data.status + "\n" + objerror);
			}
		}
	});
	
}
function showBrasilianFields(){
	parent.jQuery('#div_cpf').show();
	parent.jQuery('#div_cpf_text').show();
	parent.jQuery('#Address').addClass('mltk-street');
	parent.jQuery('#AddressNro').show();
}
function hideBrasilianFields(){
	parent.jQuery('#div_cpf').hide();
	parent.jQuery('#div_cpf_text').hide();
	parent.jQuery('#Address').removeClass('mltk-street');
	parent.jQuery('#AddressNro').hide();
}
function login_ajax_new(call_params,called_from_signup, domain){
	var post_data = '';
	if (called_from_signup == 1){
		post_data = call_params;
	} else {
		post_data = 'email='+document.getElementById('email').value+'&pass='+document.getElementById('pass').value+'&'+call_params; 
		if (document.getElementById('rememberme').checked) post_data += '&rememberme=1';
	}
	
	$j.ajax({
		url: domain + '/login_ajax.php',
		type: 'post',
		data: post_data,
		dataType: 'json',
		success: function(data){
			if (typeof data.usr_name !== 'undefined'){

				if (data.caller_id != '7'){
					parent.jQuery("#login_div").hide();
					parent.jQuery("#login_span").show();
					
					parent.jQuery("#sp_idN").html(data.usr_name);
					parent.jQuery("#sp_idB").html(data.balance);
					parent.jQuery("#login_span").addClass("on_logged");
					parent.jQuery('body').addClass("logged");
					
					if (jQuery("#my_wallet").length) {
						var login_html = parent.jQuery(".my_wallet").html();
						login_html = login_html.replace("#SEC#",data.security_id);
						parent.jQuery(".my_wallet").html(login_html);
					}
					
					if (jQuery("#my_info").length) {
						var myinfo_html = parent.jQuery(".my_info").html();
						myinfo_html = myinfo_html.replace("#SEC#",data.security_id);
						parent.jQuery(".my_info").html(myinfo_html);
					}
					
					parent.jQuery("#logout_a").show();
					parent.jQuery("#usr_id").val(data.usr_id);
				}
				
				if (data.userHasAllData == '0' || data.userHasModalStep2Complete==0) {
					// falta data, mando a modal para actualizar la data
			       // e.preventDefault();		
					if (data.userHasModalStep2Complete==0){
						parent.jQuery('.modal_overlay').remove();
						parent.jQuery('.login_box').hide(); 
						parent.jQuery('#cgl_loginModal').show().parent('.cglbox_modal_wrap').show().before('<div class="modal_overlay"></div>');
						parent.jQuery('#signUpModal').show();
						// Put data info at modal window			
						parent.jQuery('.callLogin').data('modal','signUpModal');
					}else{
						parent.jQuery('.modal_overlay').remove();
						parent.jQuery('.login_box').hide();
						parent.jQuery('.callLogin').prop('href','#signUpModal-step2');
						parent.jQuery('.callLogin').data('modal','signUpModalStep2');
						parent.jQuery('.callLogin').click();
					}
					parent.jQuery('#signup_pass').val(data.pass);
					parent.jQuery('#signup_name').val(data.usr_name);
					parent.jQuery('#signup_lastname').val(data.lastname);
					parent.jQuery('#Country').val(data.country_id);
					parent.jQuery('#Country_hidden').val(data.country_id);
					parent.jQuery('#month_nac').val(parseInt(''+data.month));
					parent.jQuery('#day_nac').val(parseInt(''+data.day));
					parent.jQuery('#year_nac').val(data.year);
					parent.jQuery('#MobilePhone').val(data.mobile);
					parent.jQuery('#signup_email').val(data.email);
					parent.jQuery('#signup_email').attr('readonly','readonly');	
					parent.jQuery('#MobilePhone').val(data.mobile);
					parent.jQuery('#idBackLogin').hide();
					
					updateStatesModal(data.country_id,domain,data.state);
					if (parent.jQuery('#Country_hidden').val() == 272){
						showBrasilianFields();
						
					}
					parent.jQuery('#city').val(data.city);
					parent.jQuery('#Address').val(data.address1);
					parent.jQuery('#Address2').val(data.address2);
					parent.jQuery('#Zip').val(data.zipcode);
					parent.jQuery('#Ssn').val(data.ssn);					
				} else {
					parent.jQuery('.cglbox_modal_wrap').hide();
					parent.jQuery('.modal_overlay').remove();
					// particularidades dependiendo del caller 
					if(typeof data.caller_id !== 'undefined'){
						switch(data.caller_id){
							case '7':
								//groupon landings
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								parent.jQuery('#sendForm').submit();
								break;
							case '8': //cart_step1
								parent.jQuery('#play_link_div_to_modal').hide();
								parent.jQuery('#play_link_div').show();
								if (data.crt_id != ''){
									parent.continueButton_onclick(data.security_id);
								}else{
									parent.location.href=domain+'/index.php';
								}
								break;
                            case '9': //casino game
								if(globalCasinoGameId !== undefined){
                                    parent.location.href=domain+'/games.php?id='+globalCasinoGameId;
                                    globalCasinoGameId = undefined;
								}
                                break;
                            case '10': //casino game details
                                if(globalCasinoGameId !== undefined){
                                    parent.location.href=domain+'/game-details.php?id='+globalCasinoGameId+'&load=1';
                                    globalCasinoGameId = undefined;
                                }
                                break;
							default:
						}
					}
				}

			} else {
				//alert(data.error);
				jQuery('#error-alert-3').show();
				jQuery('#signintext').hide();
				parent.jQuery('#pass').val('');
				jQuery.colorbox.resize();
			}
		},
		error: function(data, errmsg, objerror){
			jQuery('#error-alert-3').show();
			jQuery.colorbox.resize();
		}
	});
}
