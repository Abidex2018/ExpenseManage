/*
 * ----------------------------- LMART THREE BY TEN -------------------------------------
 * Javascript library for processing lottery bet.
 * Works all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Author: Adegboyega Olwaseyi, sadegboyega@xplugng.com
 * Project Lotto-Mart
 *
 * Licensed: This is propreitary software of xPlug Technologies Limited
 */

function loadObjData(loadRoute, obj) {
	$.getJSON(loadRoute, function (data) {
		var items = "";
		$.each(data, function (i, item) {
			if (obj === item.K) {
				items += "<option value='" + item.K + "' selected='selected'>" + item.C + "</option>";
			} else {
				items += "<option value='" + item.K + "'>" + item.C + "</option>";
			}
		});
		$(obj).html(items);
	}).complete(function () {
	});
}


function loadObjData(loadRoute, obj, secondaryRoute, secondaryObj) {
	$.getJSON(loadRoute, function (data) {
		var items = "";
		$.each(data, function (i, item) {
			if (obj === item.K) {
				items += "<option value='" + item.K + "' selected='selected'>" + item.C + "</option>";
				secondaryRoute = secondaryRoute + "&betCategoryId=" + parseInt(item.K);
				loadObjData(secondaryRoute, secondaryObj);
			} else {
				items += "<option value='" + item.K + "'>" + item.C + "</option>";
			}
		});
		$(obj).html(items);
	}).complete(function () {
	});
}

function loadObjData(loadRoute, obj, secondaryRoute, secondaryObj, tertiaryRoute, tertiaryObj) {
  
    $.getJSON(loadRoute, function (data) {
        var items = "";
        $.each(data, function (i, item) {
            if (obj === item.K) {
                items += "<option value='" + item.K + "' selected='selected'>" + item.C + "</option>";
                secondaryRoute = secondaryRoute + "&betCategoryId=" + parseInt(item.K);
                loadObjData(secondaryRoute, secondaryObj);
                loadObjData(tertiaryRoute, tertiaryObj);
            } else {
                items += "<option value='" + item.K + "'>" + item.C + "</option>";
            }
        });
        $(obj).html(items);
    }).complete(function () {
    });
}

function loadListData(loadRoute) {
    
    try {
        
	    var holder = [];
	   
	    $.ajax({
	        url: loadRoute,
	        type: 'GET',
	        async: false,
	        cache: false,
	        timeout: 30000,
	        error: function () {
	            ErrorMessage("System Error! Please try again later");
	            return null;
	        },
	        success: function (data) {
	            if (data.betSettings != null && data.betSettings.length > 0) {
	                $.each(data.betSettings, function(i, item) {
	                    holder.push(item);
	                });
	                return holder;
	            } else {
	                ErrorMessage("System Error! Please try again later");
	                return null;
	            }
	        }
	    });
		return holder;
	} catch (e) {
		ErrorMessage("System Error! Please try again later");
		return null;
	}

}


function loadEnumData(loadRoute) {
	try {
		var holder = [];
		$.getJSON(loadRoute, function (data) {

			if (data.betSettings != null && data.betSettings.length > 0) {
				$.each(data.betSettings, function (i, item) {
					holder.push(item.Name);
				});
				return holder;
			}
		}).complete(function () {
		});
		return holder;
	} catch (e) {
		ErrorMessage("System Error! Please try again later");
		return null;
	}

}

function setBetPrice(betSettings, selBetType) {
	var price = 5;
	try {
		if (betSettings.length < 1) {
			return price;
		}
	    for (var i = 0; i < betSettings.length; i++) {
			if (betSettings[i].BetTypeId === selBetType) {
				price = betSettings[i].MinStakeValue;
				return price;
			}
		}
		return price;
	} catch (e) {
		return price;
	}
}

function isAgainstBet(betCategoryEnum, selBetCategory) {

	try {
		if (betCategoryEnum.length < 1 || selBetCategory < 1) {
			return false;
		}
		var thisCategory = betCategoryEnum[selBetCategory - 1];
		if (thisCategory == null || thisCategory === "" || thisCategory.length < 3) {
			ErrorMessage("Validation Error: Please select valid Stake Category");
			return 0;
		}
		return thisCategory.trim() === "AGAINST";
	} catch (e) {
		return false;
	}
}

function isOneAgainstBet(betTypeConstants, selBetType) {

	try {
		if (betTypeConstants.length < 1 || selBetType < 1) {
			return false;
		}
		var selCategory = betTypeConstants[selBetType - 1];
		if (selCategory == null || selCategory === "" || selCategory.length < 3) {
			ErrorMessage("Validation Error: Please select valid Stake Category 4");
			return 0;
		}
		return selCategory.trim() === "ONE_AGINST_ALL";
	} catch (e) {
		return false;
	}
}
function getCurrentBetSetting(betSettings, selBetType) {

	try {
		if (betSettings.length < 1) {
			return null;
		}

		for (var i = 0; i < betSettings.length; i++) {
			if (betSettings[i].BetTypeId === selBetType) {
				return betSettings[i];
			}
		}
		return null;
	} catch (e) {
		return null;
	}
}
function setItem(item) {
	return "#" + item;
}
function getSelctedValue(itemObj) {
	try {
		return parseInt($(itemObj + " option:selected").val());
	} catch (e) {
		return 0;
	}
}
function getSelctedText(itemObj) {
	try {
		return $(itemObj + " option:selected").text();
	} catch (e) {
		return 0;
	}
}
function setDefaultValue(itemObj) {
	try {
		return $(itemObj).val(0);
	} catch (e) {
		return 0;
	}
}
function getListSpanSelector(control, item) {
	try {
		return control + " li span:contains(" + item + ")";
	} catch (e) {
		return "";
	}
}
function getListSelector(control) {
	try {
		return control + " li.stakenumber";
	} catch (e) {
		return "";
	}
}
function prepSlipBody(bet, index) {
	try {
	    return "<div class=\"row\" style=\"margin: 0px\"><span class=\"pull-left\">" + bet.BetTypeName + " @ ₦" + parseFloat(bet.AmountPerLine).toFixed(2) + "</span>" +
				  "<span class=\"pull-right\"><img src=\"../Content/assets/img/remove-icon.png\" alt=\"Delete Bet\" style=\"cursor: pointer\" onclick=\"confirmDeleteStake(" + index + ")\" /></span></div>" +
						"<div class=\"row\" style=\"margin: 0px\"><span class=\"pull-left\">" + displayResultBalls(bet.StakedNumbers) + "</span></div>" +
				  "<div class=\"pageSeprator padding5\"></div>" +
                     displayChanceTitle(bet.BetChanceName) +
                     displayLineNos(bet.NoOfLines) +
                     displayMachLineNos(bet.NoOfMachLines) +
                     displayTotalLineNos(bet.NoOfLines + bet.NoOfMachLines) +
	                 displayLineTotal(bet.TotalAmount);
	} catch (e) {
	    return ""; //
	}
}
function prepSlipFooter(totalAmount) {
	try {
		return "<div class=\"row\"><div class=\"col-sm-5\"><div style=\"padding-top: 10px;\">Grand Total </div></div>" +
					   "<div class=\"col-sm-7\" style=\"text-align: right;font-size: large;\"><b id=\"totalStakeSlipPrice\"><div class=\"valNums\"><span class=\"currencySymbol\">₦</span><span id=\"stakeSlipPrice\">" + numberWithCommas(parseFloat(totalAmount).toFixed(2)) + "</span></div></b></div></div>" +
			  "<div class=\"row\"><div class=\"col-md-6\"><input class=\"btn\" id=\"clearStakeSlip\" type=\"button\" value=\"Clear Slip\" />" +
					  "</div><div class=\"col-md-6\" style=\"text-align: right\"><input class=\"btn btn-success\" id=\"playStake\" type=\"button\" value=\"Submit Play\" /></div></div><div class=\"clearfix\"></div>";
	} catch (e) {
		return "";
	}
}
//betChanceName
function previewBetData(betInfo) {
	if (betInfo == null || betInfo.length < 1) {
		$("#stakePreview").hide();
		$("#stakePreviewContent").html("");
	} else {

		$("#stakePreview").show();
		$("#stakePreviewContent").html("");
		var preview = "<div class=\"row\" style=\"margin: 0px\"><span class=\"pull-left\">" + betInfo.betTypeName + "  { " + betInfo.betChanceName + " }</span></div>" +
                      "<div class=\"row\" style=\"margin: 0px\"><span class=\"pull-left\">" + displayResultBalls(betInfo.betNumbers) + "</span></div>" +
                      "<div class=\"pageSeprator padding10\"><hr class=\"no-margin no-padding\" /></div>" +
                      "<div class=\"row\" style=\"margin: 0px\"><span class=\"pull-left\">Stake Line(s) </span><span class=\"pull-right\">" + betInfo.noOfLines + "</span></div>" +
                       "<div class=\"row\" style=\"margin: 0px\"><span class=\"pull-left\">Machine Line(s) </span><span class=\"pull-right\">" + betInfo.noOfMachLines + "</span></div>" +
                        "<div class=\"row\" style=\"margin: 0px\"><span class=\"pull-left\">Total Line(s) </span><span class=\"pull-right\">" + (betInfo.noOfLines + betInfo.noOfMachLines) + "</span></div>" +
                      "<div class=\"pageSeprator padding10\"><hr class=\"no-margin no-padding\" /></div>" +
                     prepStakePrice() +
                       "<div class=\"pageSeprator padding10\"><hr class=\"no-margin no-padding\" /></div>" +
                     prepPossibleWins() +
                     "<div class=\"row\"><div class=\"col-sm-4\"><div style=\"padding-top: 10px;\">Total </div></div>" +
                     "<div class=\"col-sm-8\" style=\"text-align: right;font-size: large;\"><b id=\"totalStakePrice\"><div class=\"valNums\"><span class=\"currencySymbol\">₦</span><span id=\"stakePrice\"></span></div></b></div></div>" +
                      "<div class=\"row\"><div class=\"col-md-6\"><input class=\"btn\" id=\"clearStake\" type=\"button\" value=\"Clear\" />" +
                      "</div><div class=\"col-md-6\" style=\"text-align: right\"><input class=\"btn btn-success\" id=\"addStake\" type=\"button\" value=\"Add\" /></div></div><div class=\"clearfix\"></div>";
		$("#stakePreviewContent").html(preview);
		$("#txtStakePrice").ForceNumericOnly();
	}
}

function prepStakePrice() {
    return "<div class=\"row\"><div class=\"col-sm-4 numberActionBox\"> " +
                "<span> Rate(₦) </span> </div>" +
             
             "<div class=\"col-sm-8 numberActionBox pull-right\">" +
                "<span class=\"minus\" id=\"sidePriceInc\" onclick=\"changeServiceBetPrice('-');\" style=\"visibility: visible;\"><i class=\"fa fa-fw\"></i></span>" +
                "<span class=\"displayTextBox\" id=\"txtStakePrice\">3</span>" +
                "<span class=\"plus\" id=\"sidePriceDec\" onclick=\"changeServiceBetPrice('+');\" style=\"visibility: visible;\"><i class=\"fa fa-fw\"></i></span>" +
             "</div>" +
        "</div> ";
}

function displayLineTotal(lineTotalVal) {
    var lineTotal = "<div class=\"row\"><div class=\"col-sm-6\"><div style=\"padding-top: 4px;\">Line Total </div></div>" +
                    "<div class=\"col-sm-6\" style=\"text-align: right; font-size: medium;\"><b><div class=\"valNums\"><span class=\"currencySymbol\">₦</span><span>" + numberWithCommas(parseFloat(lineTotalVal).toFixed(2)) + "</span></div></b></div></div>" +
                    "<div class=\"pageSeprator padding10\"><hr class=\"no-margin no-padding\" /></div>";
    return lineTotal;

}

function displayLineNos(lineTotalVal) {
    var lineTotal = "<div class=\"row\"><div class=\"col-sm-6\"><div style=\"padding-top: 3px;\">Stake Line(s) </div></div>" +
                    "<div class=\"col-sm-6\" style=\"text-align: right; font-size: medium;\"><b><div class=\"valNums\"><span>" + lineTotalVal + "</span></div></b></div></div>"
                   ;
    return lineTotal;

}
function displayMachLineNos(lineTotalVal) {
    var lineTotal = "<div class=\"row\"><div class=\"col-sm-6\"><div style=\"padding-top: 3px;\">Machine Line(s) </div></div>" +
                    "<div class=\"col-sm-6\" style=\"text-align: right; font-size: medium;\"><b><div class=\"valNums\"><span>" + lineTotalVal + "</span></div></b></div></div>"
    ;
    return lineTotal;

}
function displayTotalLineNos(lineTotalVal) {
    var lineTotal = "<div class=\"row\"><div class=\"col-sm-6\"><div style=\"padding-top: 3px;\">Total Line(s) </div></div>" +
                    "<div class=\"col-sm-6\" style=\"text-align: right; font-size: medium;\"><b><div class=\"valNums\"><span>" + lineTotalVal + "</span></div></b></div></div>"
    ;
    return lineTotal;

}

function displayChanceTitle(lineTotalVal) {
    var lineTotal = "<div class=\"row\"><div class=\"col-sm-5\"><div style=\"padding-top: 3px;\">Play Type</div></div>" +
                    "<div class=\"col-sm-7\" style=\"text-align: right;\"><span>" + lineTotalVal + "</span></div></div>"
    ;
    return lineTotal;

}


function prepPossibleWins() {
    return "<div id=\"sidePosWins\"> </div>";
}
function displayResultBalls(result) {
	if (result === "") return "";
	var splitOne = result.split("|");
	var html = "";

	html += "<div class=\"selectedNumberDisplay selected\" style=\"display:inline-block;\"><ul id=\"winNo\">";
	$.each(splitOne, function (index, value) {
		var split = value.split("*");
		$.each(split, function (index2, value2) {
			if (index === 0) {
				html += "<li class=\"selected\">" + value2 + "</li>";
			} else {
			    if (value2.length > 2) {
			        html += "<li class=\"selected2\" style=\"width: 100px;  border-radius: 8%;\">" + value2.toUpperCase() + "</li>";
			    } else {
			        html += "<li class=\"selected2\">" + value2 + "</li>";
			    }
		    }
		});
	});
	html += "</ul></div>";
	return html;
}
function Factorial(x) {
	if (x <= 1)
		return 1;
	return x * Factorial(x - 1);
}
function CombinePerm(betSelected, reqNo) {
	if (betSelected <= 1)
		return 1;
	return Factorial(betSelected) / (Factorial(reqNo) * Factorial(betSelected - reqNo));
}
function calNumberOfLines(linesInfo) {
	try {
		if (linesInfo == null || linesInfo.length < 1) return 0;
		if (linesInfo.stakedNoCount < 1) {
			if (linesInfo.stakedNoCount !== -1) {
				ErrorMessage("Validation Error: No stake ball has been selected");
				return 0;
			}

		}

		var betCatId = linesInfo.betCatId;
		var betTypeId = linesInfo.betTypeId;
	    var betChance = linesInfo.betChance;
	    if (betCatId < 1 || betTypeId < 1 || betChance < 1) {
	        ErrorMessage("Validation Error: Please select valid Stake Category, Stake Type and Stake Chance");
			return 0;
		}


		var selCategory = linesInfo.betCategoryConstants[betCatId - 1]; // cos of index position
		if (selCategory == null || selCategory === "" || selCategory.length < 3) {

			ErrorMessage("Validation Error: Please select valid Stake Category");
			return 0;
		}

		var selBetType = linesInfo.betTypeConstants[betTypeId - 1]; // cos of index
		if (selBetType == null || selBetType === "" || selBetType.length < 3) {
			ErrorMessage("Validation Error: Please select valid Stake Type 2");
			return 0;
		}
		
		switch (selCategory.trim()) {
			case "BANKER":
			    return 89;
		    case "NAP":
                return 1;
			case "PERM":
				return getPermNoOfLines(linesInfo.stakedNoCount, selBetType);
			case "AGAINST":
				if (selBetType.includes("ONE_AGINST_ALL")) return 89;
				if (selBetType.includes("MANY_AGAINST_MANY")) return linesInfo.mainCount * linesInfo.againstCount;
				ErrorMessage("Validation Error: Please select valid Stake Category and Stake Type");
				return 0;
			case "THREE_TEN_ALPHABET":
				return 1;
			case "GNT_JACKPOT":
				return 1;
			default:
				ErrorMessage("Validation Error: Please select valid Stake Category and Stake Type");
				return 0;
		}
	} catch (e) {
		ErrorMessage("Process Error: Kindly ensure that valid Stake Category and Stake Type are selected!");
		return 0;
	}
}
function getPermNoOfLines(stakedNoCount, betIdentifier) {
	try {
		var identVal = getIdentierValue(betIdentifier);
		if (identVal < 1) {
			ErrorMessage("Validation Error: Please select valid Stake Category");
			return 0;
		}
		return CombinePerm(stakedNoCount, identVal);
	} catch (e) {
		ErrorMessage("Process Error: Kindly ensure that valid Stake Category and Stake Type are selected!");
		return 0;
	}
}
function getIdentierValue(betIdentifier) {
	try {
		//if (betIdentifier.includes("PERM_ONE")) return 2; //
		if (betIdentifier.includes("PERM_TWO")) return 2; //
		if (betIdentifier.includes("PERM_THREE")) return 3; //
		if (betIdentifier.includes("PERM_FOUR")) return 4; //
		if (betIdentifier.includes("PERM_FIVE")) return 5;
		return 0;
	} catch (e) {
		return 0;
	}
}
function isBetDuplicate(stakes, stakeNumbers) {
	try {
		if (stakes == null) {
			return false;
		}
		if (stakes.length < 1) {
			return false;
		}
		for (var i = 0; i < stakes.length ; i++) {
			if (stakes[i].StakedNumbers === stakeNumbers) {
				ErrorMessage("Duplicate Error: You have already placed this stake in the current ticket!");
				return true;
			}
		}
		return false;
	} catch (e) {
		ErrorMessage("Validation Error: Unable to verify duplicate stake! Please try again");
		return true;
	}
}
function ConfirmMessage(msg, confirmFunction, parameters) {
	swal(
        {
        	title: "Are you sure?",
        	text: msg,
        	type: "warning",
        	showCancelButton: true,
        	confirmButtonColor: "#DD6B55",
        	confirmButtonText: "Yes",
        	closeOnConfirm: true
        }, function (isConfirm) {
        	if (isConfirm) {
        		if (parameters) {
        			confirmFunction(parameters);
        		} else {
        			confirmFunction();
        		}
        		// swal("Deleted!", "Your imaginary file has been deleted.", "success");
        	}
        });
}
function clearDropList(objId, defaultText) {
	$(objId)
    .find("option")
    .remove()
    .end()
    .append("<option value=\"\">" + defaultText + "</option>")
    .val("")
	;
}
function countSelected(nums) {
    var count = 0;
    var splitOne = nums.split("|");
    $.each(splitOne, function (index, value) {
        var split = value.split("*");
        count = count + split.length;
    });
    return count;
}
function confirmDeleteStake(index) {
    ConfirmMessage("Are you sure you want to delete this stake?", deleteStake, index);
}
function getNumberNumeric(amount) {
    if (amount.indexOf(",") !== -1)
        return Number(amount.replace(",", ""));
    else
        return Number(amount);
}

var longpress_time_plus = null;

function longPressOn(func, param, param1, param2) {
   longpress_time_plus = setInterval(function () {
        if (func === "changeBetPrice")
            changeBetPrice(param, param1, param2);
        else if (func === "changeBallCount")
            changeBallCount(param);
    }, 200);
}

function longPressOff() {
    //event.originalEvent.stopImmediatePropagation();
    //event.originalEvent.stopPropagation();
    clearInterval(longpress_time_plus);
}

function formatAmount(amount) {
    amount = amount + "";
    amount = amount.replace(",", "");
    var tmp = amount.split(".");
    if (tmp.length === 2) {
        if (tmp[1].length > 2) {
            if (tmp[1].substr(0, 2) !== "00")
                return number_format(amount, 2);
        }
        else if (tmp[1].length === 2) {
            if (tmp[1] !== "00")
                return number_format(amount, 2);
        }
        else if (tmp[1].length === 1) {
            if (tmp[1] !== "0")
                return number_format(amount, 2);
        }
        else {
            return number_format(amount, 0);
        }
    }
    return number_format(amount, 0);
}

function number_format(number, decimals, dec_point, thousands_sep) {
   
    number = (number + '')
        .replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                    .toFixed(prec);
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
            .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }
    return s.join(dec);
}

function disableAutoPick() {
    $("#chkAutoPick :checked").removeAttr("checked");
    $("#chkAutoPick").prop("disabled", true);
}

function enableAutoPick() {
    $("#chkAutoPick :checked").removeAttr("checked");
    $("#chkAutoPick").prop("disabled", false);
}

function disablePriceChange() {
    $("#sidePriceInc").prop("disabled", true);
    $("#sidePriceDec").prop("disabled", true);
}

function enablePriceChange() {
    $("#sidePriceInc").prop("disabled", false);
    $("#sidePriceDec").prop("disabled", false);
}

function prepStatePossibleWins(selBalls, stakedAmount, winFactor, senderId) {
    try {
        $("#autoPossibleWins").html("");
        $("#sidePosWins").html("");
        if (stakedAmount < 1 || winFactor < 1 || senderId < 1) {
            return;
        }

        //TODO: Get Prizes won from Database
        var possibleWins = [];

        possibleWins[0] = bindMegaInfo(5, 1, 15350000);
        possibleWins[1] = bindMegaInfo(5, 0, 2000000);
        possibleWins[2] = bindMegaInfo(4, 1, 400000);
        possibleWins[3] = bindMegaInfo(3, 1, 15000);
        possibleWins[4] = bindMegaInfo(4, 0, 12000);
        possibleWins[5] = bindMegaInfo(2, 1, 1500);
        possibleWins[6] = bindMegaInfo(3, 0, 400);
        possibleWins[7] = bindMegaInfo(1, 1, 400);
        possibleWins[8] = bindMegaInfo(2, 0, 100);
        switch (senderId) {
            case 1:
                var posWins = prepAutoPosibleWins(possibleWins);
                if (posWins.length > 2) {
                    $("#autoPossibleWins").html(posWins);
                }
            case 2:
                var sideView = sidePosView(possibleWins);
                if (sideView.length > 2) {
                    $("#sidePosWins").html(sideView);
                }
                break;

        }

    } catch (e) {

    }
}
function bindMegaInfo(ballCount, alphaCount, amount) {
    if (alphaCount < 1) {
        return "<span style=\"color: #2f4f4f\">" + ballCount + " BALL(S) ONLY =" + "</span>" + " ₦ " + numberWithCommas(parseFloat(amount).toFixed(2));
    }
    return "<span style=\"color: #2f4f4f\">" + ballCount + " BALL(S) & " + alphaCount + " STATE =" + "</span>" + " ₦ " + numberWithCommas(parseFloat(amount).toFixed(2));
}
function prepAlphaPossibleWins(selBalls,  stakedAmount, winFactor, senderId) {
    try {
        $("#autoPossibleWins").html("");
        $("#sidePosWins").html("");
        if (selBalls !== 4 || stakedAmount < 1 || winFactor < 1 || senderId < 1) {
            return;
        }
       
        //TODO: Get Prizes won from Database
        var possibleWins = [];

        possibleWins[0] = bindAlphaInfo(3, 1, 500000);
        possibleWins[1] = bindAlphaInfo(2, 1, 15000);
        possibleWins[2] = bindAlphaInfo(3, 0, 5000);
        possibleWins[3] = bindAlphaInfo(1, 1, 1000);
        possibleWins[4] = bindAlphaInfo(2, 0, 500);
        possibleWins[5] = bindAlphaInfo(0, 1, 200);
        switch (senderId) {
            case 1:
                var posWins = prepAutoPosibleWins(possibleWins);
                if (posWins.length > 2) {
                    $("#autoPossibleWins").html(posWins);
                }
            case 2:
                var sideView = sidePosView(possibleWins);
                if (sideView.length > 2) {
                    $("#sidePosWins").html(sideView);
                }
                break;

        }

    } catch (e) {

    } 
}
function bindAlphaInfo(ballCount, alphaCount, amount) {
    return "<span style=\"color: #2f4f4f\">" + ballCount + " BALL(S), " + alphaCount + " ALPH. =" + "</span>" + " ₦ " + numberWithCommas(parseFloat(amount).toFixed(2));
}
function prepAutPossibleWins(selBetTypeId, selBalls, stakedAmount, winFactor, senderId) {
    try {
        $("#autoPossibleWins").html("");
        $("#sidePosWins").html("");

        if (selBetTypeId < 1 || selBalls < 1 || stakedAmount < 1 || winFactor < 1) {
            return;
        }
     
        var possibleWins = [];
        
        switch (selBetTypeId) {
            case 1:
            case 2:
                if (selBalls !== 1) {
                    return;
                }
                possibleWins[0] = bindInfo(1, 1 * stakedAmount * winFactor);
                break;
            case 3: //Nap-2
                if (selBalls !== 2) {
                    return;
                }
                possibleWins[0] = bindInfo(2, 1 * stakedAmount * winFactor);
                break;
            case 4: //Nap-3
                if (selBalls !== 3) {
                    return;
                }
                possibleWins[0] = bindInfo(3, 1 * stakedAmount * winFactor);
                break;
            case 5: //Nap-4
                if (selBalls !== 4) {
                    return;
                }
                possibleWins[0] = bindInfo(4, 1 * stakedAmount * winFactor);
                break;
            case 6: //Nap-5
                if (selBalls !== 5) {
                    return;
                }
                possibleWins[0] = bindInfo(5, 1 * stakedAmount * winFactor);
                break;
            case 7:
                break;
            case 8://Perm -2
                if (selBalls < 2) {
                    return;
                }
               
                switch (selBalls) {
                    case 2:
                        possibleWins[0] =bindInfo(2, CombinePerm(2, 2) * stakedAmount * winFactor);
                        break;
                    case 3:
                        possibleWins[0] = bindInfo(2, CombinePerm(2, 2) * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(3, CombinePerm(3, 2) * stakedAmount * winFactor);
                        break;
                    case 4:
                        possibleWins[0] = bindInfo(2, CombinePerm(2, 2) * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(3, CombinePerm(3, 2) * stakedAmount * winFactor);
                        possibleWins[2] = bindInfo(4, CombinePerm(4, 2) * stakedAmount * winFactor);
                        break;
                    case 5:
                        possibleWins[0] = bindInfo(2, CombinePerm(2, 2) * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(3, CombinePerm(3, 2) * stakedAmount * winFactor);
                        possibleWins[2] = bindInfo(4, CombinePerm(4, 2) * stakedAmount * winFactor);
                        possibleWins[3] = bindInfo(5, CombinePerm(5, 2) * stakedAmount * winFactor);
                        break;
                    default:
                        possibleWins[0] = bindInfo(2, CombinePerm(2, 2) * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(3, CombinePerm(3, 2) * stakedAmount * winFactor);
                        possibleWins[2] = bindInfo(4, CombinePerm(4, 2) * stakedAmount * winFactor);
                        possibleWins[3] = bindInfo(5, CombinePerm(5, 2) * stakedAmount * winFactor);
                        break;
                }
                break;
            case 9: //Perm -3
                if (selBalls < 3) {
                    return;
                }
                switch (selBalls) {
                    case 3:
                        possibleWins[0] = bindInfo(3, CombinePerm(3, 3) * stakedAmount * winFactor);
                        break;
                    case 4:
                        possibleWins[0] = bindInfo(3, CombinePerm(3, 3) * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(4, CombinePerm(4, 3) * stakedAmount * winFactor);
                        break;
                    case 5:
                    default:
                        possibleWins[0] = bindInfo(3, CombinePerm(3, 3) * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(4, CombinePerm(4, 3) * stakedAmount * winFactor);
                        possibleWins[2] = bindInfo(5, CombinePerm(5, 3) * stakedAmount * winFactor);
                }
                break;
            case 10: //Perm -4
                if (selBalls < 4) {
                    return;
                }
                switch (selBalls) {
                    case 4:
                        possibleWins[0] = bindInfo(4, CombinePerm(4, 4) * stakedAmount * winFactor);
                        break;
                    case 5:
                    default:
                        possibleWins[0] = bindInfo(4, CombinePerm(4, 4) * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(5, CombinePerm(5, 4) * stakedAmount * winFactor);
                }
                break;
            case 11: //Perm -5
                if (selBalls < 5) {
                    return;
                }
                switch (selBalls) {
                   case 5:
                   default:
                        possibleWins[0] = bindInfo(5, CombinePerm(5, 5) * stakedAmount * winFactor);
                }
                break;
            case 12:
                if (selBalls !== 1) {
                    return;
                }
                possibleWins[0] = bindInfo(1, 1 * stakedAmount * winFactor);
                break;
            case 13:
                if (selBalls < 2) {
                    return;
                }
                switch (selBalls) {
                    case 2:
                        possibleWins[0] = bindInfo(2, 2 * stakedAmount * winFactor);
                        break;
                    case 3:
                        possibleWins[0] = bindInfo(2,  2 * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(3,  3 * stakedAmount * winFactor);
                        break;
                    case 4:
                        possibleWins[0] = bindInfo(2, 2 * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(3, 3 * stakedAmount * winFactor);
                        possibleWins[2] = bindInfo(4, 4 * stakedAmount * winFactor);
                        break;
                    case 5:
                        possibleWins[0] = bindInfo(2,  2 * stakedAmount * winFactor);
                        possibleWins[1] = bindInfo(3, 3 * stakedAmount * winFactor);
                        possibleWins[2] = bindInfo(4, 4 * stakedAmount * winFactor);
                        possibleWins[3] = bindInfo(5, 5 * stakedAmount * winFactor);
                        break;
                    default:
                        return;
                }
                break;
            default:
                return;
        }
       
        switch (senderId) {
            case 1:
                var posWins = prepAutoPosibleWins(possibleWins);
                if (posWins.length > 2) {
                    $("#autoPossibleWins").html(posWins);
                }
            case 2:
                var sideView = sidePosView(possibleWins);
                if (sideView.length > 2) {
                   $("#sidePosWins").html(sideView);
                }
                break;
       
        }
     
    } catch (e) {

    }
}

function bindInfo(ballCount, amount) {
    if (ballCount < 2) {
        return ballCount + " BALL = ₦ " + numberWithCommas(parseFloat(amount).toFixed(2));
    }
    return "<span style=\"color: #2f4f4f\">" + ballCount + " BALLS =" + "</span>" + " ₦ " + numberWithCommas(parseFloat(amount).toFixed(2));
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function prepAutoPosibleWins(winItems) {
    try {
        var retTabble = "<div class=\"row col-md-12\"><div class=\"col-md-12 align-center\" style=\"color: #000; font-size: 13pt; font-weight: bold; padding-bottom: 7px\"><u> Possible Prizes </u> </div></div>" +
            "<div class=\"col-md-12\">" + prepReqStructure(winItems) + " </div>";

        return retTabble;

    } catch (e) {
        return "";
    }
}

function prepReqStructure(winItems) {
    try {
        var kount = winItems.length;
        if (kount < 1) {
            return "";
        }
        switch (kount) {
            case 1:
                return oneColumWin(winItems);
            case 2:
                return twoColumWin(winItems);
            case 3:
                return threeColumWin(winItems);
            case 4:
                return fourColumWin(winItems);
            case 6:
                return sixColumWin(winItems);
            case 9:
                return nineColumWin(winItems);
        }
    } catch (e) {
        return "";
    } 
}
function oneColumWin(winItems) {
    var winBody =
        "<div class=\"col-md-12 align-center\">" + setCellValue(winItems) + "</div>";
    return winBody;
}
function twoColumWin(winItems) {
    var winBody =
       "<div class=\"col-md-12\">" +
            "<div class=\"col-md-6 align-center\">" + setCellValue(winItems[0]) + "</div>" +
            "<div class=\"col-md-6 align-center\">" + setCellValue(winItems[1]) + "</div>" +
       "</div>";
    return winBody;
}
function threeColumWin(winItems) {
    var winBody =
       "<div class=\"col-md-12\">" +
            "<div class=\"col-md-4 align-center\">" + setCellValue(winItems[0]) + "</div>" +
            "<div class=\"col-md-4 align-center\">" + setCellValue(winItems[1]) + "</div>" +
            "<div class=\"col-md-4 align-center\">" + setCellValue(winItems[2]) + "</div>" +
       "</div>";
    return winBody;
}
function fourColumWin(winItems) {
    var winBody =
       "<div class=\"col-md-12 align-left\" style=\"padding-bottom: 4px\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[0]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[1]) + "</div>" +
       "</div>" +
         "<div class=\"col-md-12 align-left\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[2]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[3]) + "</div>" +
       "</div>";
    return winBody;
}
function sixColumWin(winItems) {
    var winBody =
       "<div class=\"col-md-12 align-left\" style=\"padding-bottom: 4px\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[0]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[1]) + "</div>" +
       "</div>" +
        "<div class=\"col-md-12 align-left\" style=\"padding-bottom: 4px\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[2]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[3]) + "</div>"  +
       "</div>" +
       "<div class=\"col-md-12 align-left\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[4]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[5]) + "</div>" +
       "</div>";
    return winBody;
}
function nineColumWin(winItems) {
    var winBody =
       "<div class=\"col-md-12 align-left\" style=\"padding-bottom: 4px\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[0]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[1]) + "</div>" +
       "</div>" +
       "<div class=\"col-md-12 align-left\" style=\"padding-bottom: 4px\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[2]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[3]) + "</div>" +
       "</div>" +
        "<div class=\"col-md-12 align-left\" style=\"padding-bottom: 4px\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[4]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[5]) + "</div>" +
       "</div>" +
        "<div class=\"col-md-12 align-left\">" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[6]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[7]) + "</div>" +
            "<div class=\"col-md-6 align-left\">" + setCellValue(winItems[8]) + "</div>" +
       "</div>";
    return winBody;
}
function setCellValue(cellItem) {
    return "<span class=\"valNums text-center\" style=\"font-size: 15px\">" + cellItem + "</span>";
}

function sidePosView(winItems) {
    var retVal =  "<div class=\"row\"><div class=\"col-sm-12 align-center\"> " + "<span class=\"text-center\"> Possible Prizes </span> </div></div>" +

             "<div class=\"row\" ><div class=\"col-sm-12 align-center\">" +
                    loadItemVals(winItems)
                 +
             "</div>" +
        "</div> <div class=\"pageSeprator padding10\"><hr class=\"no-margin no-padding\" /></div>";
    return retVal;
}

function loadItemVals(winItems) {
    var retVal = "";
    for (var q = 0; q < winItems.length; q++) {
        retVal +=  "<span class=\"align-center\"> " +  winItems[q] + "</span>"     + "<br />";
    }
    return retVal;
}
//"<span class=\"align-center\"> 3 BALLS = N1,200.00</span>"