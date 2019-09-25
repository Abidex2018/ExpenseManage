var bG=0;var fk=10;var fl=12;var fm=15;var fn=2;function ad(cH,di,dY,fc){bG=cH*86400+di*3600+dY*60+fc;ap(fI);};function ae(){var fG=bG;var cH=parseInt(fG/86400,10);fG=fG%86400;var di=parseInt(fG/3600,10);fG=fG%3600;var dY=parseInt(fG/60,10);fG=fG%60;var eF="";if(cH>0){if(cH==1){eF+=cH+" day ";}else{eF+=cH+" cH ";}}eF+=(di<10?"0":"")+di+":";eF+=(dY<10?"0":"")+dY+":";eF+=(fG<10?"0":"")+fG;return eF};function ap(){document.getElementById('Timer').innerHTML=ae();if(bG<=0)return;bG--;setTimeout('ap()',1000);};function change_lotto_countries(arrRegions,arrLotteries)
{
	var cz=document.getElementById('country').options[document.getElementById('country').selectedIndex].value;
	if(cz!='#'){
		document.getElementById('lottery').length=0;
		document.getElementById('lottery').options[0]=new Option('','#','defaultSelected');
		var i=1;
		for(var dU in arrLotteries){
			if(!isNaN(dU)){
				if(cz==arrRegions[arrLotteries[dU]['reg_id']]['country_id']){
					document.getElementById('lottery').options[i]=new Option(convertXML2CP(arrRegions[arrLotteries[dU]['reg_id']]['reg_name'])+' - '+arrLotteries[dU]['lot_name'],dU,'');
					i++;
				}
			}
		}
	}else{
		document.getElementById('lottery').length=0;
		document.getElementById('lottery').options[0]=new Option('','#','defaultSelected');
		i=1;
		for(var dU in arrLotteries){
			if(!isNaN(dU)){
				document.getElementById('lottery').options[i]=new Option(convertXML2CP(arrRegions[arrLotteries[dU]['reg_id']]['reg_name'])+' - '+arrLotteries[dU]['lot_name'],dU,'');
				i++;
			}
		}
	}
};var fI=null;function bw(){bn(0);};function bn(eE){var dateTime=new Date(cR.getTime()+parseInt(eE));var di=dateTime.getHours();var dY=dateTime.getMinutes();dY=((dY<10)?"0":"")+dY;var fc=dateTime.getSeconds();fc=((fc<10)?"0":"")+fc;var cj=di+":"+dY+":"+fc;document.getElementById('idTimeBlue').innerHTML=cj;document.getElementById('idTimeBlue').display;eE=parseInt(eE)+1000;setTimeout("bn("+eE+")",1000);var eb=new Array(ea);var cG="";dZ=eb[0];cG=dateTime.getDate()+" "+dZ+" "+dateTime.getFullYear();document.getElementById("Time").innerHTML=cG;};


var countDownCounter; 
//var dtNow = new Date();

function set_lotto_countdown(pCaptionDay, pCaptionDays,countDownCounter1)
{
	sCaptionDay = pCaptionDay;
	sCaptionDays = pCaptionDays;
	
	countDownCounter = countDownCounter1;
	
	resetDrawCountdown1(0);
}

function resetDrawCountdown1(offset)
{
	//alert('resetDrawCountdown1. countDownCounter: '+countDownCounter);
	for  (var index=1; index<=countDownCounter; index++) 
	{
		setTime(index, offset, parseInt(eval('time_Y'+index)), parseInt(eval('time_M'+index)), parseInt(eval('time_D'+index)), parseInt(eval('time_HH'+index)), parseInt(eval('time_MM'+index)));	
	}

	
	//setting the function timeout 1 second
	offset = parseInt(offset) + 1000;
	setTimeout("resetDrawCountdown1("+offset+")",1000);
}


function setTime(index, offset, closeYear, closeMonth, closeDay, closeHour, closeMinute, closeSecond)
{ 
	var dtClose = new Date(closeYear, parseInt(closeMonth) - 1 , closeDay, closeHour, closeMinute);
	
	var milliseconds1 = dtClose.getTime();
	var milliseconds2 = dtNow.getTime();
	var difference = milliseconds1 - (milliseconds2 + offset);
	var prevDifference = milliseconds1 - (milliseconds2 + offset - 1000); //the previous offset
	
	var d = Math.floor(difference / (1000 * 60 * 60 * 24));
	var h = Math.floor(difference / (1000 * 60 * 60)) - d * 24;
	var m = Math.floor(difference / (1000 * 60)) - d * 24 * 60 - h * 60;
	var s = Math.floor(difference / (1000)) - d * 24 * 60 * 60 - h * 60 * 60 - m * 60;
	
	var prevD = Math.floor(prevDifference / (1000 * 60 * 60 * 24));
	var prevH = Math.floor(prevDifference / (1000 * 60 * 60)) - d * 24;

	//setting the day's image or text
	var daysImage;
	var isNextChangeImage = false;
	if (d < 1)
	{
		daysImage = "";
		if (h >= 0 && h < 1) 
		{
			daysImage = "<img src='images/congalotto.com/closing_1.gif'>";
		}
		if (h >= 1 && h < 6) 
		{
			daysImage = "<img src='images/congalotto.com/closing_2.gif'>";
		}
		if (h >= 6 && h < 12) 
		{
			daysImage = "<img src='images/congalotto.com/closing_3.gif'>";
		}
		if (h >= 12 && h < 24) 
		{
			daysImage = "<img src='images/congalotto.com/closing_4.gif'>";
		}
	}
	else
	{
		if (d == 1)
			daysImage = d + " " + sCaptionDay;
		else
			daysImage = d + " " + sCaptionDays;
	}
	
	//adding leading '0' for 1 digit numbers
	if (h<10)
		h = "0"+h.toString();
	if (m<10)
		m = "0"+m.toString();
	if (s<10)
		s = "0"+s.toString();
	
	
	//changing the days/hours image only every change of hour or for the first time
	if (prevH!=h || prevD!=d || offset<=0)
	{
		setValue('td_lotto_countdown_days_'+index, daysImage);
	}
	var timeStr = h + ":" + m + ":" + s + "";
	setValue('td_lotto_countdown_time_'+index, timeStr);
}


function setValue(id, value) 
{
	var obj;
	obj=document.getElementById(id);
	if (obj!=null) {
		obj.innerHTML = value;
	}
}

var fo=0;function bv(){if(arrOurWinners==null||arrOurWinners.length==0){return;}var fF=document.getElementById('fF');if(!fF)return;if(S()){fF.innerHTML=arrOurWinners[fo];}else{if(fF.style.filter){fF.filters.cb.apply();fF.filters.cb.eI();}var bS=arrOurWinners[fo].split(';');if(bS.length>0){document.getElementById('fF').innerHTML=bS[0];}}if(fo<arrOurWinners.length-1)fo++;else fo=0;setTimeout("bv()",4000);};function aA(en,cP){var fu=null;var result=null;var ci=false;if("myUCPlayRequest_tblNumbers"==null)return false;if(en==1){fu="myUCPlayRequest_tblNumbers";}else{fu="myUCPlayRequest_tblNumbersAfterFive";}var fw=document.getElementById(fu);if(fw!=null&&fw.rows.length>0){for(var i=0;i<fw.rows.length;i++){for(var j=0;j<fw.rows[i].cells.length;j++){if(fw.rows[i].cells[j].getAttribute("dc")=='true'||fw.rows[i].cells[j].getAttribute("dc")=='false'){if(fw.rows[i].cells[j].innerHTML==""){ci=false;M(cP);}else{ci=true;if(fw.rows[i].cells[j].getAttribute("dc")=='true'){aV(fw.rows[i].cells[j].innerHTML);}if(fw.rows[i].cells[j].getAttribute("dc")=='false')aU(fw.rows[i].cells[j].innerHTML);}if(ci==false){return false;}}}}}else{return true;}};function aD(){var txtHiddenGuess=document.getElementById("txtHiddenGuess");if(txtHiddenGuess!=null)txtHiddenGuess.value="";var txtHiddenAdditional=document.getElementById("txtHiddenAdditional");if(txtHiddenAdditional!=null)txtHiddenAdditional.value="";var dM=document.getElementById("dM");if(dM!=null)dM.innerHTML="";};function aV(x){var txtHiddenGuess=document.getElementById('txtHiddenGuess');if(txtHiddenGuess!=null){var text=x+";";txtHiddenGuess.value+=text;}};function aU(x){var txtHiddenAdditional=document.getElementById("txtHiddenAdditional");var text=x+";";txtHiddenAdditional.value+=text;};function bi(){var txtHiddenIsActiveBlock=document.getElementById('txtHiddenIsActiveBlock');if(txtHiddenIsActiveBlock)txtHiddenIsActiveBlock.value='true';var txtHiddenFirstNumber=document.getElementById('txtHiddenFirstNumber');var txtHiddenNumber=document.getElementById('txtHiddenNumber');if(txtHiddenNumber&&txtHiddenFirstNumber){txtHiddenNumber.value=txtHiddenFirstNumber.value;}};function I(ce,hide){if(ce){if(S())ce.style.display=(hide?"none":"table-ce");else ce.style.display=(hide?"none":"");}};function J(div,hide){if(div){if(S()){div.style.display=(hide?"none":"block");}else div.style.display=(hide?"none":"");}};function K(eT,hide){if(eT){if(S()){eT.style.display=(hide?"none":"table-eT");}else eT.style.display=(hide?"none":"");}};function L(table,hide){if(table){if(S()){table.style.display=(hide?"none":"table");}else table.style.display=(hide?"none":"");}};function S(){return!document.all&&document.getElementById;};function bc(fp){return/^\d+$/.test(fp);};function Q(fp){return/^[\w\.\-]+@[\w\-]+(\.[\-\w]+)+$/.test(fp);};function R(fp){var cX=parseFloat(fp);return!isNaN(cX);};function au(fp){return!fp.fS();};String.prototype.fS=function(){return this.replace(/^\s+|\s+$/g,"");};function bd(fp){return/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(fp);};var cJ=null;function aT(e){if(e.keyCode==13){var dT=document.getElementById(cJ);if(dT){if(S())dT.focus();else dT.click();}}};function bk(cd){cJ=cd;if(S())document.addEventListener("keydown",aT,false);else document.attachEvent("onkeydown",aT);};function P(ev){var eD=(ev==null?window.event:ev);var bO=navigator.userAgent.toLowerCase();var du=(bO.indexOf('msie')!=-1);var dr=(bO.indexOf('firefox')!=-1);var code=0;if(du)code=eD.keyCode;else if(dr)code=eD.which;if(!(code>=48&&code<=57))return false;};function T(ev){var eD=(ev==null?window.event:ev);var bO=navigator.userAgent.toLowerCase();var du=(bO.indexOf('msie')!=-1);var dr=(bO.indexOf('firefox')!=-1);var code=0;if(du)code=eD.keyCode;else if(dr)code=eD.which;if(!(code>=48&&code<=57)&&code!=46)return false;};function aH(en){var cL=",";en=en.toString();var a=en.split('.',2);var d="00";if(a.length>1){d=a[1];}var i=parseInt(a[0]);if(isNaN(i)){return '';}var dX='';if(i<0){dX='-';}i=Math.abs(i);var n=new String(i);var a=[];while(n.length>3){var ek=n.substr(n.length-3);a.unshift(ek);n=n.substr(0,n.length-3);}if(n.length>0){a.unshift(n);}n=a.join(cL);if(d.length<1){bQ=n;}else{bQ=n+'.'+d;}en=dX+bQ;return en;};function AddToFavorite(dS,dR){ef=navigator.appName;if(ef=='Microsoft Internet Explorer'){external.AddFavorite(dS,dR);}else alert('Hit CTRL-D to bookmark this page')};function OpenCenterPop(link,el,bR,bP){cM=(screen.width-bR)/2;bZ=(screen.height-bP)/2;fq="toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width="+bR+",height="+bP+",left="+cM+",top="+bZ+"";cW=window.open(link,el,fq);}


//Removes the cart subscription cts_id from cart
function removeFromCart(form, cts_id, product_type, domain)
{
	form.cts_id.value = cts_id;
    form.product_type.value = product_type;
	form.action = domain + "/cart_remove.php";
	form.submit();
	return false;
}

function displaySSN(country){
    if(country.value == 272){
        document.getElementById('ssn_div').style.display = '';
    }else{
        document.getElementById('ssn_div').style.display = 'none';
    }
}