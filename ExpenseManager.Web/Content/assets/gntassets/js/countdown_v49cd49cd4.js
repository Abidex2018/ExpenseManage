function set_lotto_countdown_v4(pCaptionDay, pCaptionDays,countDownCounter1,pCaptionHourAbrev,pCaptionMinuteAbrev,pCaptionSecondAbrev, inicial)
{
	sCaptionDay = pCaptionDay;
	sCaptionDays = pCaptionDays;
	
	sCaptionHourAbrev =pCaptionHourAbrev;
	sCaptionMinuteAbrev = pCaptionMinuteAbrev;
	sCaptionSecondAbrev = pCaptionSecondAbrev;
	sInicial = inicial;
	
	countDownCounter2 = countDownCounter1;
	
	resetDrawCountdown1_v4(0);
}

function resetDrawCountdown1_v4(offset)
{
	for  (var index=1; index<=countDownCounter2; index++) 
	{
		if (sInicial != ''){
			setTime_v4(index, offset, parseInt(eval('time_'+ sInicial +'_Y'+index)), parseInt(eval('time_'+ sInicial +'_M'+index)), parseInt(eval('time_'+ sInicial +'_D'+index)), parseInt(eval('time_'+ sInicial +'_HH'+index)), parseInt(eval('time_'+ sInicial +'_MM'+index)),sInicial);
		}else{
			setTime_v4(index, offset, parseInt(eval('time_Y'+index)), parseInt(eval('time_M'+index)), parseInt(eval('time_D'+index)), parseInt(eval('time_HH'+index)), parseInt(eval('time_MM'+index)));
		}
	}

	
	//setting the function timeout 1 second
	offset = parseInt(offset) + 1000;
	setTimeout("resetDrawCountdown1_v4("+offset+")",1000);
}


function setTime_v4(index, offset, closeYear, closeMonth, closeDay, closeHour, closeMinute, closeSecond, inicial)
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
			daysImage = "";
		}
		if (h >= 1 && h < 6) 
		{
			daysImage = "";
		}
		if (h >= 6 && h < 12) 
		{
			daysImage = "";
		}
		if (h >= 12 && h < 24) 
		{
			daysImage = "";
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

	if (sCaptionHourAbrev != '' &&  sCaptionMinuteAbrev != '' && sCaptionSecondAbrev !=''){
		if (sInicial !=''){
			if (prevH!=h || prevD!=d || offset<=0)
			{
				setValue(sInicial+'_countdown_days_'+index, daysImage+ " ");
			}
			setValue(sInicial+'_countdown_time_'+index, h + " " + sCaptionHourAbrev + " "+ m + " " + sCaptionMinuteAbrev + " "+  s + " " + sCaptionSecondAbrev);
		}else{
			setValue('td_lotto_countdown_countdown_time_'+index, h + " " + sCaptionHourAbrev + " "+ m + " " + sCaptionMinuteAbrev + " "+  s + " " + sCaptionSecondAbrev);
		}
	}else{
		var timeStr = h + ":" + m + ":" + s + "";
		if (sInicial !=''){			
			if ((prevH!=h || prevD!=d || offset<=0))
			{
				setValue(sInicial+'_countdown_days_'+index, daysImage+ " ");
			}
			setValue(sInicial+'_countdown_time_'+index,timeStr);
		}else{
			if ((prevH!=h || prevD!=d || offset<=0))
			{
				setValue('td_lotto_countdown_days_'+index, daysImage);
			}
			setValue('td_lotto_countdown_time_'+index, timeStr);
		}
	}
}


countDownCounterBanner = 0;
function set_lotto_countdownBanner(pCaptionDay, pCaptionDays,countDownCounter1,pCaptionHourAbrev,pCaptionMinuteAbrev,pCaptionSecondAbrev, inicial)
{
	sCaptionDay = pCaptionDay;
	sCaptionDays = pCaptionDays;
	
	countDownCounterBanner = countDownCounter1;
	
	resetDrawCountdownBanner(0);
}

function resetDrawCountdownBanner(offset)
{
	//alert('resetDrawCountdown1. countDownCounter: '+countDownCounter);
	for  (var index=1; index<=countDownCounterBanner; index++) 
	{
		setTimeBanner(index, offset, parseInt(eval('time_banner_Y'+index)), parseInt(eval('time_banner_M'+index)), parseInt(eval('time_banner_D'+index)), parseInt(eval('time_banner_HH'+index)), parseInt(eval('time_banner_MM'+index)));	
	}

	
	//setting the function timeout 1 second
	offset = parseInt(offset) + 1000;
	setTimeout("resetDrawCountdownBanner("+offset+")",1000);
}

function changeClass(id){
	var obj;
	obj=document.getElementById(id);
	if (obj!=null) {
		obj.className = '';
	}
}

function setTimeBanner(index, offset, closeYear, closeMonth, closeDay, closeHour, closeMinute, closeSecond)
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

	}
	else
	{
		
		if (d == 1)
			daysImage = d;
		else
			daysImage = d;
	}
	
	// when day < 1 not show bg image	
	if(d<1){
		changeClass('countdown_banner_days_ref_'+index);
		changeClass('countdown_days0_'+index);
		changeClass('countdown_days1_'+index);
	}
	
	
	//adding leading '0' for 1 digit numbers
	if (d<10){
		d1 = "0"
		d2 = d.toString();
	}else{
		d1 = d.toString().charAt(0);
		d2 = d.toString().charAt(1);
	}
	if (h<10){
		h1 = "0"
		h2 = h.toString();
	}else{
		h1 = h.toString().charAt(0);
		h2 = h.toString().charAt(1);
	}
	if (m<10){
		m1 = "0"
		m2 = m.toString();
	}else{
		m1 = m.toString().charAt(0);
		m2 = m.toString().charAt(1);
	}
	if (s<10){
		s1 = "0"
		s2 = s.toString();
	}else{
		s1 = s.toString().charAt(0);
		s2 = s.toString().charAt(1);
	}
	
	
	//changing the days/hours image only every change of hour or for the first time
	if (prevH!=h || prevD!=d || offset<=0)
	{

		setValue('countdown_banner_days_ref_'+index, daysImage);
		//setting plural or singular for days
		if (d == 1){
			setValue('countdown_banner_days_ref_'+index, sCaptionDay);
		}else if(d < 1){
			setValue('countdown_banner_days_ref_'+index, '');
			setValue('countdown_days0_'+index, '');
			setValue('countdown_days1_'+index, '');
		}else{	
			setValue('countdown_days0_'+index, d1);
			setValue('countdown_days1_'+index, d2);
			setValue('countdown_banner_days_ref_'+index, sCaptionDays);
		}
	
	}
	setValue('countdown_hour0_'+index, h1);
	setValue('countdown_hour1_'+index, h2);
	setValue('countdown_minute0_'+index, m1);
	setValue('countdown_minute1_'+index, m2);
	setValue('countdown_second0_'+index, s1);
	setValue('countdown_second1_'+index, s2);
}