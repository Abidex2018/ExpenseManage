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

var _dlBetCatObj = "";
var _dlBetTypeObj = "";
var _dlBetChance = "";
var _bdMainBoard = "";
var _bdAgainstBoard = "";
var _bdDoubleBoard = "";


var _mainBall = "";
var _againstBall = "";
var _mainDoubleBall = "";
var _againstDoubleBall = "";

var mainSelectedBalls = [];
var againstSelectedBalls = [];
var betNumbers = "";
var betMachNumbers = "";
var ticketData = [];
var linePrice = 5.00;
var noOfLines = 0;
var noOfMachLines = 0;
var totalBetPrice = 0.00;
var currentBetType = null;
var stakeTypes = [];

//txtJackpotBetPrice




function initMainBet() {
	if (!areInitValsValid()) return false;
	try {
		
	    _dlBetCatObj = setItem(mainControls.betCategory);
	    _dlBetTypeObj = setItem(mainControls.betType);
	    _dlBetChance = setItem(mainControls.betChance);
	    _bdMainBoard = setItem(mainControls.mainBoard);
	    _bdAgainstBoard = setItem(mainControls.againstBoard);
	    _bdDoubleBoard = setItem(mainControls.doubleBoard);
        
	    _mainBall = setItem(mainControls.mainBallHolder);
	    _againstBall = setItem(mainControls.againstBallHolder);
	    _mainDoubleBall = setItem(mainControls.mainDoubleBallHolder);
	    _againstDoubleBall = setItem(mainControls.machineDoubleBallHolder);

	    return initSettings();

	} catch (e) {
		ErrorMessage("System Error! Please try again later");
		return false;
	}
}

function areInitValsValid() {
	try {
	    if (mainControls == null) {
			ErrorMessage("System Error! Please try again later");
			return false;
	    }

	    if (mainControls.betCategory === "" ||
			mainControls.betType === "" ||
            mainControls.betChance === "" ||
			mainControls.mainBoard === "" ||
			mainControls.alphabetBoard === "" ||
			mainControls.againstBoard === "" ||
            mainControls.mainBallHolder === "" ||
			mainControls.againstBallHolder === "" ||
			mainControls.mainAlphabetBallHolder === "" ||
			mainControls.againstAlphabetBallHolder === "") {
			ErrorMessage("System Error! Please try again later"); //
			return false;
		}
		return true;
	} catch (e) {
		ErrorMessage("System Error! Please try again later");
		return false;
	}

}

function initSettings() {

    $("#chkAutoPick :checked").removeAttr("checked");
    $("#chkAutoPick").prop("disabled", true);

    if (!initObjData()) {
        return false;
    }
    if (!initMainBoard()) return false;
    if (!initDoubleBoard()) return false;
    if (!initEventHands()) return false;
    if (!initAgainstBoard())return false;
    return true;
}

function initEventHands() {
    try {
       
        $(document.body).on("keyup keypress paste change input", _betPriceHolder, function () {
            calBetPrice(this.value);
            $(_betPriceDisplay).html(format_money(totalBetPrice));
        });
        $(document.body).on("click", _clearBet, function () {
            resetThisGame();
        });
        $(document.body).on("click", _addBet, function () {

            if (currentBetType == null) {
                ErrorMessage("Validation Error! Please select Stake Type");
                return;
            }

            var isAgainst = isAgainstBet(betCategoryConstants, getSelctedValue(_dlBetCatObj));
            var isOneAgainst = false;

            if (isAgainst) {
                isOneAgainst = isOneAgainstBet(betTypeConstants, getSelctedValue(_dlBetTypeObj));
                if (isOneAgainst) {
                    if (mainSelectedBalls.length !== 1) {
                        ErrorMessage("Exactly one ball is required for this type of betting");
                        return;
                    }
                } else {
                    if (mainSelectedBalls.length < 1) {
                        ErrorMessage("Please select at least one ball from the Main category ");
                        return;
                    }
                    if (againstSelectedBalls.length < 1) {
                        ErrorMessage("Please select at least one ball from the Against category ");
                        return;
                    }
                }

            }

            var thisBetChance = getSelctedValue(_dlBetChance);
            if (thisBetChance == null || thisBetChance === "" || isNaN(thisBetChance) || parseInt(thisBetChance) < 1) {
                ErrorMessage("Validation Error! Please select Stake Chance");
                return;
            } 

            var noOfBalls = countSelected(betNumbers);
            if (thisBetChance === 3) {
                if (mainSelectedBalls.length < currentBetType.MinBalls) {
                    ErrorMessage("Minimum number of  Winning ball(s) is " + currentBetType.MinBalls);
                    return;
                }

                if (againstSelectedBalls.length < currentBetType.MinBalls) {
                    ErrorMessage("Minimum number of  Machine ball(s) is " + currentBetType.MinBalls);
                    return;
                }

                if (mainSelectedBalls.length > currentBetType.MaxBalls) {
                    ErrorMessage("You can only select maximum number of " + currentBetType.MaxBalls + " Winning ball(s)");
                    return;
                }

                if (againstSelectedBalls.length > currentBetType.MaxBalls) {
                    ErrorMessage("You can only select maximum number of " + currentBetType.MaxBalls + " Machine ball(s)");
                    return;
                }

                noOfBalls = mainSelectedBalls.length;
            }


            if (isAgainst && !isOneAgainst) {
                if (mainSelectedBalls.length < currentBetType.MinBalls) {
                    ErrorMessage("Minimum number of  Winning ball(s) is " + currentBetType.MinBalls);
                    return;
                }

                if (againstSelectedBalls.length < currentBetType.MinBalls) {
                    ErrorMessage("Minimum number of  Against ball(s) is " + currentBetType.MinBalls);
                    return;
                }

                if (mainSelectedBalls.length > currentBetType.MaxBalls) {
                    ErrorMessage("You can only select maximum number of " + currentBetType.MaxBalls + " Winning ball(s)");
                    return;
                }

                if (againstSelectedBalls.length > currentBetType.MaxBalls) {
                    ErrorMessage("You can only select maximum number of " + currentBetType.MaxBalls + " Against ball(s)");
                    return;
                }
               
            } else {
              
                if (noOfBalls < currentBetType.MinBalls) {
                    ErrorMessage("Minimum number of  Winning ball(s) is " + currentBetType.MinBalls);
                    return;
                }
                if (noOfBalls > currentBetType.MaxBalls) {
                    ErrorMessage("You can only select maximum number of " + currentBetType.MaxBalls + " Winning ball(s)");
                    return;
                }
            }
           
          
            var amountPerLine = $(_betPriceHolder).text();
            amountPerLine = number_format(amountPerLine);
            if (amountPerLine < currentBetType.MinStakeValue) {
                ErrorMessage("Please enter a minimum  amount of  ₦" + currentBetType.MinStakeValue);
                return;
            }
            if (amountPerLine > currentBetType.MaxStakeValue) {
                ErrorMessage("Please adjust your bet amount. You can not bet more than " + currentBetType.MaxStakeValue + " naira at once.");
                return;
            }
            if (noOfLines < 1) {
                ErrorMessage("Invalid number of lines. Please make sure you select minimum required balls");
                return;
            }
           
            var checkPrice = noOfLines * amountPerLine;
            var checkMachPrice = noOfMachLines * amountPerLine;
            switch (parseInt(thisBetChance)) {
                case 1:
                   break;
                case 2:
                    if (totalBetPrice !== parseFloat(checkPrice + (checkPrice * 0.5)).toFixed(2)) {//TODO: Remove default 0.5 and replace with dynamic from DB 
                        ErrorMessage("Winning / Machine stake requires stake price plus additional 50% of the stake price");
                        return;
                    }
                   break;
                case 3:
                    if (totalBetPrice !== parseFloat(checkPrice + checkMachPrice).toFixed(2)) {
                        ErrorMessage("Winning & Machine stake price");
                        return;
                    }
                    noOfBalls += againstSelectedBalls.length;
                    betMachNumbers = againstSelectedBalls.join("*");
                   break;
                default:
            }

            if (checkDuplicate()) {
                return;
            }


            var stakeCategory = getSelctedValue(_dlBetCatObj);
            var stakeType = getSelctedValue(_dlBetTypeObj);
            //var stakeTypeName = getSelctedText(_dlBetTypeObj);

            var stake = {
                StakedNumbers: betNumbers,
                StakedMachineNumbers: betMachNumbers,
                NoOfLines: parseInt(noOfLines),
                NoOfMachLines: parseInt(noOfMachLines),
                NoOfBalls: parseInt(noOfBalls),
                AmountPerLine: amountPerLine,
                TotalAmount: totalBetPrice,
                GameId: _gameTag,
                GameActivityId: _betActivityTag,
                GameSettingId: currentBetType.BetSettingId,
                BetCategoryId: parseInt(stakeCategory),
                BetTypeId: parseInt(stakeType),
                BetTypeName: getSelctedText(_dlBetTypeObj),
                BetChanceName: getBetTitle(),
                LotteryId: _lotteryType,
                BetChanceId: thisBetChance,
                BetModeId: '2'
            };


            if (!addBetItem(stake)) {
                return;
            }
            resetThisGame();
        });
       
    } catch (e) {
        alert(e.message);
        return false;
    }
   
   return true;
}
function initEngine() {


	
	if (!initObjData()) {
		return false;
	}

	
	if (!initAgainstBoard()) return false;
	if (!initAlphabetBoard()) return false;

	
}
function initObjData() {
	try {

	    loadObjData(_betCatRoute + "?lotteryId=" + _lotteryType, _dlBetCatObj, _betTypeRoute + "?lotteryId=" + _lotteryType, _dlBetTypeObj, _chanceSettingRoute, _dlBetChance);
		$(document.body).on("change", _dlBetCatObj, function () {
			if (this.value == null || this.value === "" || parseInt(this.value) < 1) {
			    clearDropList(_dlBetTypeObj, "-- EMPTY STAKE TYPE --");
			    clearDropList(_dlBetChance, "-- EMPTY STAKE CHANCE --");
				return;
			}
			resetThisGame();
			resetGame2();
			loadObjData(_betTypeRoute + "?lotteryId=" + _lotteryType + "&betCategoryId=" + parseInt(this.value), _dlBetTypeObj);
			loadObjData(_chanceSettingRoute + "?betCategoryId=" + parseInt(this.value), _dlBetChance);
		});
		$(document.body).on("change", _dlBetTypeObj, function () {
			if (this.value == null || this.value === "" || parseInt(this.value) < 1) {
				ErrorMessage("Validation Error: Please select valid Stake Type");
				return;
			}
			var index = getSelctedValue(_dlBetTypeObj);
			if (index < 1) {
				return;
			}
			resetThisGame();
			resetGame2();
			initBetPrice(betSettings, index);
			currentBetType = getCurrentBetSetting(betSettings, index);
			setDefaultValue(_dlBetChance);


		    //setSelectionType(currentBetType);
	        //setDefaultValue(_dlBetTypeObj);
			//setDefaultValue(_dlBetChance);
		});

		$(document.body).on("change", _dlBetChance, function () {
		    if (this.value == null || this.value === "" || parseInt(this.value) < 1) {
		        ErrorMessage("Validation Error: Please select valid Stake Chance");
		        return;
		    }
		    if (getSelctedValue(_dlBetCatObj) < 1) {
		        ErrorMessage("Validation Error: Please select valid Stake Category");
		        return;
		    }
		    if (getSelctedValue(_dlBetTypeObj) < 1) {
		        ErrorMessage("Validation Error: Please select valid Stake Type");
		        return;
		    }
		    var index = getSelctedValue(_dlBetChance);
		    if (index < 1) {
		        return;
		    }
		    resetThisGame();
		    resetGame2();
		    switch (index) {
		        case 1:
		            $(_bdDoubleBoard).hide();
		            if (isAgainstBet(betCategoryConstants, getSelctedValue(_dlBetCatObj))) {
		                $("#chkAutoPick").prop("disabled", true);
		                resetGame2();
		                if (isOneAgainstBet(betTypeConstants, getSelctedValue(_dlBetTypeObj))) {
		                    $(_bdMainBoard).show();
		                    $(_bdAgainstBoard).hide();
		                } else {
		                    $(_bdMainBoard).hide();
		                    $(_bdAgainstBoard).show();
		                }

		            } else {
		                $("#chkAutoPick").prop("disabled", false);
		                populateAutoPickBalls();
		                $(_bdMainBoard).show();
		                $(_bdAgainstBoard).hide();
		            }
		            break;
		        case 2:
		            $("#chkAutoPick").prop("disabled", false);
		            populateAutoPickBalls();
		            $(_bdAgainstBoard).hide();
		            $(_bdDoubleBoard).hide();
		            $(_bdMainBoard).show();
		            break;
		        case 3:
		            $("#chkAutoPick").prop("disabled", false);
		            populateAutoPickBalls();
		            $(_bdMainBoard).hide();
		            $(_bdAgainstBoard).hide();
		            $(_bdDoubleBoard).show();
		            break;
		        default:
		            resetGame2();
		            ErrorMessage("System Error! Unknown Lottery Type");
		    }
		  
		});
		return true;
	} catch (e) {
		ErrorMessage("System Error! Please try again " + e.message);
		return false;
	}
}
function initAgainstBoard() {
	try {
		$(getListSelector(_bdAgainstBoard)).on("click", function () {
			if (!validateNumberClick()) {
				return;
			}
			var index = getSelctedValue(_dlBetTypeObj);
			var selGameSetting = getCurrentBetSetting(betSettings, index);
			if (selGameSetting == null || selGameSetting.BetSettingId < 1) {
				ErrorMessage("System Error! Please try again later");
				return;
			}
			var selBetChance = getSelctedValue(_dlBetChance);
			if (selBetChance !== 1) {
			    ErrorMessage("Invalid Stake Chance!");
			    return;
			}
			var thisSelection = parseInt($(this).children().text());
			thisSelection = (thisSelection < 10 ? "0" : "") + parseInt(thisSelection);
			var arrayPos = -1;
		    var ballType = $(this).attr("ball-type");
			if (parseInt(ballType) === 1) {
				arrayPos = $.inArray(thisSelection, mainSelectedBalls);
				var aSpan = $(getListSpanSelector(_againstBall, thisSelection));
				if (arrayPos >= 0) {
					if (mainSelectedBalls.length === 1) {
						ErrorMessage("You need to retain at least one ball in the Main category");
						return;
					}
					$(this).removeClass("selected");
					aSpan.parent().addClass("stakenumber");
					aSpan.parent().removeClass("disabledNumber");
					aSpan.removeClass("strike");
					mainSelectedBalls.splice(arrayPos, 1);
				} else {
					if ($.inArray(thisSelection, againstSelectedBalls) >= 0) {
						return;
					}
					if (selGameSetting.MaxBalls <= mainSelectedBalls.length) {
						ErrorMessage("Maximum of " + selGameSetting.MaxBalls + " ball(s) allowed.");
						return;
					}
					aSpan.parent().removeClass("stakenumber");
					aSpan.parent().addClass("disabledNumber");
					aSpan.addClass("strike");
					$(this).addClass("selected");
					mainSelectedBalls.push(thisSelection);
				}
			} else {
				arrayPos = $.inArray(thisSelection, againstSelectedBalls);
				var mSpan = $(getListSpanSelector(_mainBall, thisSelection));
				if (arrayPos >= 0) {
					$(this).removeClass("selected2");
					mSpan.parent().addClass("stakenumber");
					mSpan.parent().removeClass("disabledNumber");
					mSpan.removeClass("strike");
					againstSelectedBalls.splice(arrayPos, 1);
				} else {
					if (mainSelectedBalls.length < 1) {
						ErrorMessage("Please select at least one ball in the Main category");
						return;
					}
					if ($.inArray(thisSelection, mainSelectedBalls) >= 0) {
						return;
					}
					if (selGameSetting.MaxBalls <= againstSelectedBalls.length) {
						ErrorMessage("Maximum of " + selGameSetting.MaxBalls + " ball(s) allowed.");
						return;
					}
					mSpan.parent().removeClass("stakenumber");
					mSpan.parent().addClass("disabledNumber");
					mSpan.addClass("strike");
					$(this).addClass("selected2");
					againstSelectedBalls.push(thisSelection);
				}
			}
			betNumbers = mainSelectedBalls.join("*");
			if (againstSelectedBalls.length > 0) {
				betNumbers = betNumbers + "|" + againstSelectedBalls.join("*");
			}
			if (selGameSetting.MinBalls > countSelected(betNumbers)) {
				noOfLines = 0;
				totalBetPrice = 0;
			} else {
				var thisLines = getNoOfLines(-1);
				if (thisLines < 1) {
					noOfLines = 0;
					totalBetPrice = 0;
					return;
				}
				noOfLines = thisLines;
				calBetPrice();
			}
			previewBet();
			$(_betPriceHolder).prop('disabled', false);
		});
		return true;
	} catch (e) {
		ErrorMessage("System Error! Please try again");
		return false;
	}

}
function initMainBoard() {
	try {
		$(getListSelector(_bdMainBoard)).on("click", function () {
			if (!validateNumberClick()) {
				return;
			}
			var index = getSelctedValue(_dlBetTypeObj);
			var selGameSetting = getCurrentBetSetting(betSettings, index);
			if (selGameSetting == null || selGameSetting.BetSettingId < 1) {
				ErrorMessage("Process Error Encountered! Inconveniences Regreted [BT-000]");
				return;
			}
		    var thisSelection = parseInt($(this).children().text());
			thisSelection = (thisSelection < 10 ? "0" : "") + parseInt(thisSelection);
			var arrayPos = $.inArray(thisSelection, mainSelectedBalls);
			if (arrayPos >= 0) {
				$(this).removeClass("selected");
				mainSelectedBalls.splice(arrayPos, 1);
			} else {
				if (selGameSetting.MaxBalls <= mainSelectedBalls.length) {
					ErrorMessage("Maximum of " + selGameSetting.MaxBalls + " number(s) allowed.");
					return;
				}
				$(this).addClass("selected");
				mainSelectedBalls.push(thisSelection);
			}
			betNumbers = mainSelectedBalls.join("*");
			if (selGameSetting.MinBalls > countSelected(betNumbers)) {
				noOfLines = 0;
				totalBetPrice = 0;
			} else {
				var thisLines = getNoOfLines(mainSelectedBalls.length);
				if (thisLines < 1) {
					noOfLines = 0;
					totalBetPrice = 0;
					return;
				}
				noOfLines = thisLines;
				calBetPrice();
			}

			previewBet();
			$(_betPriceHolder).prop('disabled', false);
		});
		return true;
	} catch (e) {
		ErrorMessage("System Error! Please try again");
		return false;
	}

}
function initDoubleBoard() {
    try {
        $(getListSelector(_bdDoubleBoard)).on("click", function () {
            if (!validateNumberClick()) {
                return;
            }
            var index = getSelctedValue(_dlBetTypeObj);
            var selBetChance = getSelctedValue(_dlBetChance);
            if (selBetChance !== 3) {
                ErrorMessage("Invalid Stake Chance!");
                return;
            }
            var selGameSetting = getCurrentBetSetting(betSettings, index);
            if (selGameSetting == null || selGameSetting.BetSettingId < 1) {
                ErrorMessage("System Error! Please try again later");
                return;
            }
            var thisSelection = parseInt($(this).children().text());
            thisSelection = (thisSelection < 10 ? "0" : "") + parseInt(thisSelection);
            var arrayPos = -1;
            var ballType = $(this).attr("ball-type"); //$(this).attr('title'); //  //
            if (parseInt(ballType) === 1) {
                arrayPos = $.inArray(thisSelection, mainSelectedBalls);
                var aSpan = $(getListSpanSelector(_againstDoubleBall, thisSelection));
                if (arrayPos >= 0) {
                    if (mainSelectedBalls.length === 1) {
                        ErrorMessage("You need to retain at least one ball in the Main Ball category");
                        return;
                    }
                    $(this).removeClass("selected");
                    aSpan.removeClass("strike");
                    mainSelectedBalls.splice(arrayPos, 1);
                } else {
                   if (selGameSetting.MaxBalls <= mainSelectedBalls.length) {
                        ErrorMessage("Maximum of " + selGameSetting.MaxBalls + " ball(s) allowed.");
                        return;
                    }
                    $(this).addClass("selected");
                    mainSelectedBalls.push(thisSelection);
                }
            } else {
                arrayPos = $.inArray(thisSelection, againstSelectedBalls);
                var mSpan = $(getListSpanSelector(_mainDoubleBall, thisSelection));
                if (arrayPos >= 0) {
                    $(this).removeClass("selected2");
                    mSpan.removeClass("strike");
                    againstSelectedBalls.splice(arrayPos, 1);
                } else {
                    var selCat = getSelctedValue(_dlBetCatObj);
                    if (selCat === 2) { //Nap
                        if (mainSelectedBalls.length !== selGameSetting.MinBalls) {
                            ErrorMessage("Please select " + selGameSetting.MinBalls  + " ball(s) from the Winning Balls");
                            return;
                        }
                        if (againstSelectedBalls.length >= mainSelectedBalls.length) {
                            ErrorMessage("There must be equal number of Winning and Machine balls");
                            return;
                        }
                    }
                    if (selCat === 3) { //Perm
                       if (mainSelectedBalls.length < selGameSetting.MinBalls) {
                            ErrorMessage("Please select minimum of " + selGameSetting.MinBalls + " ball(s) from the  Winning Balls");
                            return;
                        }
                    }
                    if (selGameSetting.MaxBalls <= againstSelectedBalls.length) {
                        ErrorMessage("Maximum of " + selGameSetting.MaxBalls + " Machine ball(s) allowed.");
                        return;
                    }
                    $(this).addClass("selected2");
                    againstSelectedBalls.push(thisSelection);
                }
            }
            betNumbers = mainSelectedBalls.join("*");
            if (againstSelectedBalls.length > 0) {
                betNumbers = betNumbers + "|" + againstSelectedBalls.join("*");
                betMachNumbers = againstSelectedBalls.join("*");
            }
            if (selGameSetting.MinBalls > mainSelectedBalls.length) {
                noOfLines = 0;
                noOfMachLines = 0;
                totalBetPrice = 0;
            } else {
                var thisLines = getNoOfLines(mainSelectedBalls.length);
                if (thisLines < 1) {
                    noOfLines = 0;
                    noOfMachLines = 0;
                    totalBetPrice = 0;
                    return;
                }
                noOfLines = thisLines;
                if (againstSelectedBalls.length >= selGameSetting.MinBalls) {
                    var thisMachLines = getNoOfLines(againstSelectedBalls.length);
                    noOfMachLines = thisMachLines;
                } else {
                    noOfMachLines = 0;
                }
                calBetPrice();
            }
            previewBet();
            $(_betPriceHolder).prop('disabled', false);
        });
        return true;
    } catch (e) {
        ErrorMessage("System Error! Please try again");
        return false;
    }

}
function getNoOfLines(stakedNoCount) {
	try {
		var linesInfo = {
			stakedNoCount: stakedNoCount,
			betCatId: getSelctedValue(_dlBetCatObj),
			betTypeId: getSelctedValue(_dlBetTypeObj),
			betTypeConstants: betTypeConstants,
			betCategoryConstants: betCategoryConstants,
			mainCount: mainSelectedBalls.length,
			againstCount: againstSelectedBalls.length,
			betChance: getSelctedValue(_dlBetChance)
		};
		prepAutPossibleWins(getSelctedValue(_dlBetTypeObj), countSelected(betNumbers), linePrice, currentBetType.WinFactor, 2);
		return calNumberOfLines(linesInfo);
	} catch (e) {
		return 0;
	}
}
function checkDuplicate() { //TODO: Work on this later 
	return isBetDuplicate(bets, betNumbers);
}
function validateNumberClick() {
	var stakeCategory = getSelctedValue(_dlBetCatObj);
	var stakeType = getSelctedValue(_dlBetTypeObj);
	var betChance = getSelctedValue(_dlBetChance);
	if (stakeCategory == null || stakeCategory === "" || isNaN(stakeCategory) || parseInt(stakeCategory) < 1) {
		$("li.stakenumber").removeClass("selected");
		ErrorMessage("Please select a Stake category");
		return false;
	}
	if (stakeType == null || stakeType === "" || isNaN(stakeType) || parseInt(stakeType) < 1) {
		$("li.stakenumber").removeClass("selected");
		ErrorMessage("Please select a Stake type");
		return false;
	}
	if (betChance == null || betChance === "" || isNaN(betChance) || parseInt(betChance) < 1) {
	    $("li.stakenumber").removeClass("selected");
	    ErrorMessage("Please select a Stake Chance");
	    return false;
	}
	return true;
}
function calBetPrice(enteredPrice) {
	try {
		if (linePrice == null || linePrice === "" || parseFloat(linePrice) < 1) {
			linePrice = parseFloat(currentBetType.MinStakeValue);
		}

		if (enteredPrice) {
			if (parseFloat(enteredPrice) < 1) {
				ErrorMessage("Invalid Stake Price");
				return;
			}
			if (parseFloat(enteredPrice) < parseFloat(currentBetType.MinStakeValue)) {
				return;
			}
			linePrice = enteredPrice;
	     }

		var nwPrice = parseFloat(linePrice * noOfLines);
		var nwMachPrice = parseFloat(linePrice * noOfMachLines);
		var betChance = getSelctedValue(_dlBetChance);
		if (betChance != null && betChance !== "" && !isNaN(betChance) && parseInt(betChance) > 0) {
		    switch (parseInt(betChance)) {
		        case 1:
		            totalBetPrice = parseFloat(nwPrice).toFixed(2);
		             break;
		        case 2:
		            totalBetPrice = (parseFloat(nwPrice) + parseFloat(nwPrice * 0.5)).toFixed(2); //TODO: Replace 0.0 with value from DB
		            break;
		        case 3:
		            totalBetPrice = parseFloat(nwPrice + nwMachPrice).toFixed(2); 
		            break;
		        default:
		    }
		}

		$(_betPriceDisplay).text(numberWithCommas(parseFloat(totalBetPrice).toFixed(2)));
	} catch (e) {
		ErrorMessage("Invalid Stake Price");
	}
}
function previewBet() {
   
	try {
		var betInfo = {
		    betChanceName: getBetTitle(),
		    betTypeName: getSelctedText(_dlBetTypeObj),
			betNumbers: betNumbers,
			noOfLines: noOfLines,
			noOfMachLines: noOfMachLines,
			totalBetPrice: totalBetPrice,
			betPrice: linePrice
		};
		previewBetData(betInfo);
		var counterObj = $(_betPriceHolder);
		counterObj.html(parseFloat(linePrice).toFixed(2));
		$(_betPriceDisplay).text(numberWithCommas(parseFloat(totalBetPrice).toFixed(2)));
		prepAutPossibleWins(getSelctedValue(_dlBetTypeObj), countSelected(betNumbers), linePrice, currentBetType.WinFactor, 2);
	} catch (e) {

	}
}
function getBetTitle() {
   
    var betChance = getSelctedValue(_dlBetChance);
    if (betChance != null && betChance !== "" && !isNaN(betChance) && parseInt(betChance) > 0) {
        switch (parseInt(betChance)) {
            case 1:
                return "Winning Only";
            case 2:
                return "Winning / Machine";
            case 3:
                return "Winning & Machine";
            default:
                return "";
        }
    }
    return typeTitle;
}
function resetThisGame() {
	$(_betPreviewHolder).hide();
	$(_betPreviewContentHolder).html("");
	$("li.stakenumber").removeClass("selected");
	$("li.stakenumber").removeClass("selected2");
	$(".disabledNumber").each(function () {
		$(this).addClass("stakenumber");
		$(this).removeClass("disabledNumber");
		$(this).children().removeClass("strike");
	});
	mainSelectedBalls = [];
	againstSelectedBalls = [];
	betNumbers = "";
	noOfLines = 0;
	totalBetPrice = 0;
    
	if (currentBetType != null) {
		if (currentBetType.MinStakeValue > 5) {
			linePrice = currentBetType.MinStakeValue;
		} else {
			linePrice = 5;
		}
	}
}
function initBetPrice(betSettings, index) {
    var linePrice = setBetPrice(betSettings, index);
    if (linePrice < 1) {
        linePrice = 5;
    }
    var counterObj = $(_betPriceHolder);
    counterObj.html(parseFloat(linePrice).toFixed(2));
}
function changeServiceBetPrice(sign) {
    var min = currentBetType.MinStakeValue;
    var max = currentBetType.MaxStakeValue;
    
    var counterObj =  $(_betPriceHolder);
    linePrice = parseFloat(getNumberNumeric(counterObj.html()));
    if (min === max) {
        ErrorMessage("Stake Price is ₦" + formatAmount(min) + " Flat.");
        return;
    }
    if (sign === "-") {
        if (linePrice === min) {
            linePrice = (max);
        } else {
            if (linePrice === 0) {
                linePrice = min;
            } else {
                linePrice = linePrice - min;
            }
        }
    } else {
        if (linePrice === (max)) {
            linePrice = min;
        } else {
            linePrice = linePrice + min;
        }
    }
    counterObj.html(parseFloat(linePrice).toFixed(2));
    calBetPrice(linePrice);
    
    var selType = getSelectedBetType();
    prepAutPossibleWins(selType, countSelected(betNumbers), linePrice, currentBetType.WinFactor, 2);
}
function confirmDeleteStake(index) {
	ConfirmMessage("Are you sure you want to delete this stake?", deleteStake, index);
}



