var hexNum = { 0:1, 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 
				A:1, B:1, C:1, D:1, E:1, F:1, 
				a:1, b:1, c:1, d:1, e:1, f:1 };
var jEscape = { 0:1, b:1, t:1, n:1, v:1, f:1, r:1 };
var decDigit = { 0:1, 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1 };

function convertCP2Char ( textString ) {
  var outputString = '';
  textString = textString.replace(/^\s+/, '');
  if (textString.length == 0) { return ""; }
  	textString = textString.replace(/\s+/g, ' ');
  var listArray = textString.split(' ');
  for ( var i = 0; i < listArray.length; i++ ) {
    var n = parseInt(listArray[i], 16);
    if (n <= 0xFFFF) {
      outputString += String.fromCharCode(n);
    } else if (n <= 0x10FFFF) {
      n -= 0x10000
      outputString += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
    } else {
      outputString += 'convertCP2Char error: Code point out of range: '+dec2hex(n);
    }
  }
  return( outputString );
}

function convertXML2CP(textString) {
	// convert whole string to chars before starting (allows for mixed strings)
	CPstring = '';
	textString += ' ';
	var tempString = '';
	var charStr = '';

	// first convert whole string to characters
	for (var i=0; i<textString.length-1; i++) {   
		// check for hex ncrs
		if (i<textString.length-4 && textString.charAt(i) == '&' 
			&& textString.charAt(i+1) == '#' && textString.charAt(i+2) == 'x'
			&& textString.charAt(i+3) in hexNum) { // &#x
			tempString = '';
			i += 3;
			while (i<textString.length-1 && textString.charAt(i) in hexNum) { 
				tempString += textString.charAt(i); 
				i++;
				}
			// only convert sequence to character if terminated by ;
			if (textString.charAt(i) == ';') {
				charStr += convertCP2Char(tempString);
				}
			else { charStr += '&#x'+tempString; i--; }
			}
		// check for dec ncrs
		else if (i<textString.length-3 && textString.charAt(i) == '&' 
			&& textString.charAt(i+1) == '#' 
			&& textString.charAt(i+2) in hexNum) { 
			tempString = '';
			i += 2;
			while (i<textString.length-1 && textString.charAt(i) in hexNum) { 
				tempString += textString.charAt(i); 
				i++;
				}
			// only convert sequence to character if terminated by ;
			if (textString.charAt(i) == ';') {
				charStr += convertCP2Char(parseInt(tempString).toString(16));
				}
			else { charStr += '&#'+tempString; i--; }
			}
		// check for character entities
		else if (i<textString.length-2 && textString.charAt(i) == '&' 
			&& textString.charAt(i+1) != ' ') { 
			tempString = '';
			i++;
			while (i<textString.length-1 && textString.charAt(i) != ';'
				 && textString.charAt(i) != '&') { 
				tempString += textString.charAt(i); 
				i++;
				}
			// only convert sequence to character if terminated by ;
			if (textString.charAt(i) == ';') {
				if (tempString in entities) { //alert(entities[tempString]);
					charStr += entities[tempString];
					} 
				else { charStr += '&'+tempString; i--; }
				}
			else { charStr += '&'+tempString; i--; }
			}
		else { 
			charStr += textString.charAt(i);
			}
		} 	
//alert('charStr='+charStr+'<'+charStr.length);
	return	charStr;

	}
