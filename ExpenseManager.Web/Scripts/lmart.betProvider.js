
var holderControls = {
    previewHolder: "stakePreview",
    previewContentHolder: "stakePreviewContent",
    slipHolder: "stakeSlip",
    priceHolder: "txtStakePrice",
    priceDisplay: "stakePrice",
    jackpotPrice: "txtJackpotBetPrice"
 };

var mainControls = {
    betCategory: "ddlBetCategory",
    betType: "ddlBetType",
    mainBoard: "mainBoard",
    againstBoard: "againstBoard",
    doubleBoard: "doubleBoard",
    mainBallHolder: "mainBall",
    againstBallHolder: "againstBall",
    mainDoubleBallHolder: "winBall",
    machineDoubleBallHolder: "machineBall",
    betChance: "ddlBetChance"
};

var actionControls = {
    clear: "clearStake",
    add: "addStake",
    play: "playStake",
    reset: "clearStakeSlip"
};

var alphaControls = {
    board: "alphaBoard",
    mainBallHolder: "mainBall",
    alphabetBallHolder: "alphabetBall"
 };

var megaControls = {
    board: "megaBoard",
    mainBallHolder: "mainBall",
    stateBallHolder: "stateBall",
    betType: "ddlBetType"
};

var _betCatRoute = "";
var _betTypeRoute = "";
var _betRoute = "";
var _betSettingsRoute = "";
var _betConstantRoute = "";
var _betCategoryConstantRoute = "";
var _betTicketRoute = "";
var _loginRoute = "";
var _depositRoute = "";
var _chanceSettingRoute = "";

var _betPreviewHolder = "";
var _betPreviewContentHolder = "";
var _betSlipViewer = "";
var _betPriceHolder = "";
var _betPriceDisplay = "";
var _jackpotBetPriceDisplay = "";


var _clearBet = "";
var _addBet = "";
var _placeBet = "";
var _resetBet = "";

var betSettings = [];
var betTypeConstants = [];
var betCategoryConstants = [];
var bets = [];
var currentBetType = null;



var _sourceBetCategory = 0;
var _sourceBetType = 0;
var _lotteryType = 0;
var _betActivityTag = 0;
var _gameTag = 0;
var _selBetText = "";

var betStorekey = "bets_" + _betActivityTag;

var _alphas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var _states = ["Abia", "Adamawa", "Anambra", "Akwa Ibom", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Abuja"];
var initActionRoutes = null;
var apickLinePrice = 5;
var apickTotalPrice = 0;
var apickNoOfLines = 0;
var apickMachNoOfLines = 0;
var apickTotalLines = 0;
var randPicked = [];
var randMachPicked = [];
var rand310Picked = [];
var rand536Picked = [];
var randStatePicked = [];
var apickNoOfBalls = 0;
var apickNoOfMachBalls = 0;
var apickNoOfNoneBalls = 0;
var isAutoPick = false;
var pickedNos = "";
var pickedMachNos = "";

function initBetSystem(betParams, betRoutes) {
    try {
            if (betParams == null || betParams.lotteryType === "" || parseInt(betParams.lotteryType) < 1) {
                return false;
            }
            if (!initControls(betRoutes, betParams)) {
                return false;
            }
       
            inititalSlipStore();
            if (!loadLists()) {
                return false;
            }
        
            switch (parseInt(betParams.lotteryType)) {
                case 1:
                    if (!initMainBet()) { return false; }
                    break;
                case 2:
                    if (!initBetAlpha()) { return false; }
                    break;
                case 3:
                    if (!initBetMega()) { return false; }
                    break;
                default:
                    return false;
            }

       
            $("#chkAutoPick").change(function () {
                isAutoPick = this.checked;
                if (this.checked) {
                    if (_lotteryType === 1) {
                        resetThisGame();
                    }
                    if (_lotteryType === 2) {
                        resetGame();
                        setCurrentType();;
                        populateAutoPickBalls();
                    }
                    if (_lotteryType === 3) {
                        resetMegaGame();
                    }
                  
                    $("#dvAutoPick").show();
                    $("#dvManualPick").hide();
                } else {
                    $("#dvAutoPick").hide();
                    $("#dvManualPick").show();
                }
            });
        
           
            $(document.body).on("keyup keypress paste change input", "#txtAutoPickPrice", function () {
                calPickedPrice(this.value);
                $("#pickedTotalPrice").html(parseFloat(apickTotalPrice).toFixed(2));
            });

            if (!initActions()) {
                ErrorMessage("System Error x1! Please try later");
                return false;
            }

          
    
       
    } catch (e) {
        ErrorMessage("System Error 2! Please try later");
        return false;
    } 
    return true;
}


function initControls(betRoutes, betParams) {
    try {
        _betPreviewHolder = setItem(holderControls.previewHolder);
        _betPreviewContentHolder = setItem(holderControls.previewContentHolder);
        _betSlipViewer = setItem(holderControls.slipHolder);
        _betPriceHolder = setItem(holderControls.priceHolder);
        _betPriceDisplay = setItem(holderControls.priceDisplay);
        _jackpotBetPriceDisplay = setItem(holderControls.jackpotPrice);

        _betCatRoute = betRoutes.catRoute;
        _betTypeRoute = betRoutes.typeRoute;
        _betRoute = betRoutes.betRoute;
        _betSettingsRoute = betRoutes.settingRoute;
        _betConstantRoute = betRoutes.settingConstantRoute;
        _betCategoryConstantRoute = betRoutes.settingCategoryConstantRoute;
        _betTicketRoute = betRoutes.ticketRoute;
        _loginRoute = betRoutes.loginRoute;
        _depositRoute = betRoutes.depositRoute;
        _chanceSettingRoute = betRoutes.settingChanceRoute;

         _clearBet = setItem(actionControls.clear);
         _addBet = setItem(actionControls.add);
         _placeBet =setItem(actionControls.play);
         _resetBet = setItem(actionControls.reset);

        _sourceBetCategory = parseInt(betParams.sourceBetCategory);
        _sourceBetType = parseInt(betParams.sourceBetType);
        _lotteryType = parseInt(betParams.lotteryType);
        _betActivityTag = parseInt(betParams.activityId);
        _gameTag = parseInt(betParams.gameId);
        _selBetText = betParams.sourceBetTypeText;

        return true;
    } catch (e) {
        ErrorMessage("System Error! Please try again");
        return false;
    } 
}

function initActions() {
    try {
        $(document.body).on("click", _resetBet, function () {
            ConfirmMessage("Are you sure you want to clear this slip?", clearSlip);
        });
        $(document.body).on("click", _placeBet, function () {
            $(".ajax-loader").show();
            $("#loadingMessage").html("Processing Please wait.");
            $.ajax({
                type: "POST",
                url: _betRoute,
                data: JSON.stringify({ stakes: bets }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    if (!data.IsAuthenticated) {
                        swal({
                            title: "",
                            text: "You must be logged in to stake",
                            type: "error",
                            showCancelButton: false,
                            confirmButtonText: "Okay",
                            closeOnConfirm: false
                        },
                        function () {
                            if ($.jStorage.storageAvailable()) {
                                $.jStorage.set("returnURL", window.location.pathname + window.location.search, { TTL: 1800000 });
                            }
                            window.location.href = _loginRoute; /// "/Login";
                        });
                        return;
                    }
                    if (!data.IsSuccessful) {
                        if (data.Error) {
                            if (data.Error.indexOf("insufficient balance") > -1) {
                                swal({
                                    title: "",
                                    text: data.Error,
                                    type: "error",
                                    showCancelButton: true,
                                    confirmButtonText: "Top Up",
                                    closeOnConfirm: true
                                },
                                function () {
                                    if ($.jStorage.storageAvailable()) {
                                        $.jStorage.set("depositReturnURL", window.location.pathname + window.location.search, { TTL: 1800000 });
                                    }
                                    window.location.href = _depositRoute;
                                });
                                return;
                            }
                            if (data.Error.indexOf("closed") > -1) {
                                swal({
                                    title: "",
                                    text: data.Error,
                                    type: "error",
                                    showCancelButton: true
                                },
                                function () {
                                    window.location.href = "/Staking";
                                });
                                return;
                            }
                            ErrorMessage(data.Error);
                        } else
                            ErrorMessage("An error occured. Please try again later!");

                        return;
                    } else {
                        clearSlip();
                        $("#ticketDetails").load(_betTicketRoute + "?ticketNumber=" + data.responseData.AnchorTicketNo);
                        $("#dvTicket").show();
                        $("#dvStaking").hide();
                        SuccessMessage("Your stake was placed successfully");
                    }
                }, complete: function () {
                    $(".ajax-loader").hide();
                    $("#loadingMessage").html("");
                }
            });
        });
        $(document.body).on("click", "#btnAutoPickToSlip", function () {

            if (currentBetType == null) {
                ErrorMessage("Process Error! Please try again later");
                return;
            }


            var thisBetChance = 0;
           
            var totalBetPrice = parseFloat($("#pickedTotalPrice").text().trim());

            var noOfBalls = countSelected(pickedNos);
            if (noOfBalls < currentBetType.MinBalls) {
                ErrorMessage("Please select a minimum number of " + currentBetType.MinBalls + " ball(s).");
                return;
            }
            var amountPerLine = $("#txtAutoPickPrice").text().trim();
            if (amountPerLine < currentBetType.MinStakeValue) {
                ErrorMessage("Please enter a minimum  amount of  ₦" + currentBetType.MinStakeValue);
                return;
            }
            if (amountPerLine > currentBetType.MaxStakeValue) {
                ErrorMessage("Please adjust your stake amount. You can not bet more than " + currentBetType.MaxStakeValue + " naira at once.");
                return;
            }
            if (apickNoOfLines < 1) {
                ErrorMessage("Invalid number of lines. Please make sure you select minimum required balls");
                return;
            }
            if (checkDuplicate2()) {
                return;
            }
            
            var checkPrice = apickNoOfLines * amountPerLine;
            var checkMachPrice = apickMachNoOfLines * amountPerLine;
            var betChanceName = "";
            switch (_lotteryType) {
                case 1:
                    thisBetChance = getSelectedBetChanceId();
                    if (thisBetChance == null || thisBetChance === "" || isNaN(thisBetChance) || parseInt(thisBetChance) < 1) {
                        ErrorMessage("Validation Error! Please select Stake Chance");
                        return;
                    }
                   switch (parseInt(thisBetChance)) {
                        case 1:
                          if (parseFloat(totalBetPrice).toFixed(2) !== parseFloat(checkPrice).toFixed(2)) {
                              ErrorMessage("Validation Error! Incorrect Stake Calculation");
                              return;
                          }
                            betChanceName = "Winning Only";
                            break;
                        case 2:
                            if (parseFloat(totalBetPrice).toFixed(2) !== parseFloat(checkPrice + (checkPrice* 0.5)).toFixed(2)) {
                                ErrorMessage("Winning or Machine stake requires stake price plus 50% of stake price");
                                return;
                            }
                            betChanceName = "Winning / Machine";
                            break;
                       case 3:
                           if (parseFloat(totalBetPrice).toFixed(2) !== parseFloat(checkPrice + checkMachPrice).toFixed(2)) {
                               ErrorMessage("Winning And Machine stake requires stake price plus 50% of stake price");
                               return;
                           }
                           betChanceName = " Winning & Machine";
                           break;
                        default:
                            ErrorMessage("Validation Error! Process not enabled for this Stake Chance");
                            return;
                    }
                    break;
                case 2:
                    thisBetChance = 1;
                    if (rand310Picked.length !== 4) {
                        ErrorMessage("Invalid Auto-Picked Numbers");
                        return;
                    }
                    break;
                case 3:
                    thisBetChance = 1;
                    break;
                default:
            }

            var stakeCategory = getSelectedBetCategory();
            var stakeType = getSelectedBetType();
            var stakeTypeName = getSelectedBetTypeText();
            var stake = {
                StakedNumbers: pickedNos,
                StakedMachineNumbers: pickedMachNos,
                NoOfLines: parseInt(apickNoOfLines),
                NoOfMachLines: parseInt(apickMachNoOfLines),
                NoOfBalls: parseInt(apickNoOfBalls),
                AmountPerLine: parseFloat(amountPerLine).toFixed(2),
                TotalAmount: parseFloat(totalBetPrice).toFixed(2),
                GameId: _gameTag,
                GameActivityId: _betActivityTag,
                GameSettingId: currentBetType.BetSettingId,
                BetCategoryId: parseInt(stakeCategory),
                BetTypeId: parseInt(stakeType),
                BetTypeName: stakeTypeName,
                BetChanceName: betChanceName,
                LotteryId: _lotteryType,
                BetChanceId: getSelectedBetChanceId(),
                BetModeId: '1'
            };
            bets.push(stake);
            if ($.jStorage.storageAvailable()) {
                $.jStorage.set(betStorekey, bets, { TTL: 1800000 });
            }
            prepareSlip();

            switch (_lotteryType) {
                case 1:
                    resetBetParams();
                    resetGame2();
                    break;
                case 2:
                    resetGame2();
                case 3:
                    resetGame2();
                    setDefaultValue(_dlBetTypeObj);
                    break;
            }
        });
        return true;
    } catch (e) {
        return false;
    } 
}

function addBetItem(betInfo) {
    try {
        var stake = {
            StakedNumbers: betInfo.StakedNumbers,
            StakedMachineNumbers: betInfo.StakedMachineNumbers,
            NoOfLines: betInfo.NoOfLines,
            NoOfMachLines: betInfo.NoOfMachLines,
            NoOfBalls: betInfo.NoOfBalls,
            AmountPerLine: betInfo.AmountPerLine,
            TotalAmount: betInfo.TotalAmount,
            GameId: betInfo.GameId,
            GameActivityId: betInfo.GameActivityId,
            GameSettingId: betInfo.GameSettingId,
            BetCategoryId: betInfo.BetCategoryId,
            BetTypeId: betInfo.BetTypeId,
            BetTypeName: betInfo.BetTypeName,
            LotteryId: betInfo.LotteryId,
            BetChanceId: betInfo.BetChanceId,
            BetChanceName: betInfo.BetChanceName,
            BetModeId: betInfo.BetModeId
        };
        bets.push(stake);
        if ($.jStorage.storageAvailable()) {
            $.jStorage.set(betStorekey, bets, { TTL: 1800000 });
        }
        prepareSlip();
        return true;
    } catch (e) {
        ErrorMessage("System Error! Please try later");
        return false;
    } 
}
function deleteStake(index) {
	bets.splice(index, 1);
	if ($.jStorage.storageAvailable()) {
		$.jStorage.set(betStorekey, bets, { TTL: 1800000 });
	}
	enableAutoPick();
	prepareSlip();
}

function clearSlip() {
	bets = [];
	if ($.jStorage.storageAvailable()) {
		$.jStorage.set(betStorekey, bets, { TTL: 1800000 });
	}
	switch (_lotteryType) {
	    case 1:
	        resetThisGame();
			break;
	    case 2:
	        resetGame();
		case 3:
			resetGame2();
			break;
	}
    enableAutoPick();
	prepareSlip();
}

function inititalSlipStore() {
	if ($.jStorage.storageAvailable()) {
		bets = $.jStorage.get(betStorekey, bets);
		prepareSlip();
	}

}

function prepareSlip() {
	if (bets.length === 0) {
		$(_betSlipViewer).html("<p>Stake Slip is empty</p>");
	} else {
		$(_betSlipViewer).html("");
		var totalAmount = 0.00;
		$.each(bets, function (index, bet) {
		    totalAmount = parseFloat(totalAmount) + parseFloat(bet.TotalAmount);
			$(_betSlipViewer).append(prepSlipBody(bet, index));
		});
	   $(_betSlipViewer).append(prepSlipFooter(totalAmount));
		if ($.jStorage.storageAvailable()) {
			$.jStorage.set(betStorekey, bets, { TTL: 1800000 });
		}
	}
}

function loadLists() {
	try {
	    betSettings = loadListData(_betSettingsRoute + "?lotteryId=" + _lotteryType);
        betTypeConstants = loadEnumData(_betConstantRoute + "?lotteryId=" + _lotteryType);
	    betCategoryConstants = loadEnumData(_betCategoryConstantRoute + "?lotteryId=" + _lotteryType);
	   return true;
	} catch (e) {
		ErrorMessage("System Error x1! Please try again");
		return false;
	}
}
function resetGame2() {
	randPicked = [];
	rand310Picked = [];
	rand536Picked = [];
	randStatePicked = [];
	pickedNos = "";
	apickNoOfLines = 0;
    apickMachNoOfLines = 0;
	apickTotalPrice = 0;
	apickNoOfNoneBalls = 0;
	pickedMachNos = "";
	apickMachNoOfLines = 0;
	apickTotalLines = 0;
    apickNoOfMachBalls = 0;
    $("#chkAutoPick").prop("checked", false);
	$("#txtAutoPickNo").text(0);
	$("#txtAutoPickPrice").text(0);
	$("#spNoOfNumber").html(apickNoOfBalls);
	
	$("#spNoOfLines").html(apickNoOfLines);
	$("#spNoOfMachLines").html(apickMachNoOfLines);
	$("#spNoOfTotalLines").html(apickTotalLines);

	$("#pickedTotalPrice").html(apickTotalPrice);
	$("#autopickedBalls").html("");
	$("#dvAutoPick").hide();
	$("#dvManualPick").show();
	$("#chkAutoPick :checked").removeAttr("checked");
	if (_lotteryType === 1 || _lotteryType === 3) {
	    $("#chkAutoPick").prop("disabled", true);
    }
   
}
function resetBetParams() {

	setDefaultValue(_dlBetCatObj);
	clearDropList(_dlBetTypeObj, "-- EMPTY LIST --");
	clearDropList(_dlBetChance, "-- EMPTY LIST --");
}

function checkDuplicate2() {
	return isBetDuplicate(bets, pickedNos);
}

function setCurrentType() {
	setBetPrice(betSettings, _sourceBetType);
	currentBetType = getCurrentBetSetting(betSettings, _sourceBetType);
}

function populateAutoPickBalls() {
    try {

	    _sourceBetType = getSelectedBetType();
		
	    if (parseInt(_lotteryType) === 2 || parseInt(_lotteryType) === 3) {
				$("#inBallNo").prop("disabled", true);
				$("#rdBallNo").prop("disabled", true);
		} else {
				$("#inBallNo").prop("disabled", false);
				$("#rdBallNo").prop("disabled", false);
		}
		
		if (currentBetType == null) {
			currentBetType = getCurrentBetSetting(betSettings, _sourceBetType);
			if (currentBetType == null) {
			    ErrorMessage("Process Error! Select Stake Category and Type");
				return;
			}
			
		}

		$("#txtAutoPickNo").text(currentBetType.MinBalls);
	    $("#txtAutoPickPrice").text(parseFloat(currentBetType.MinStakeValue).toFixed(2));

	    apickNoOfBalls = currentBetType.MinBalls - currentBetType.MinNonBall;
	    apickNoOfNoneBalls = currentBetType.MinNonBall;
		apickLinePrice = currentBetType.MinStakeValue;
		

		var selCategory = getSelectedBetCategory();
		var selType = getSelectedBetType();

		apickNoOfLines = getPickedNoOfLines(currentBetType.MinBalls, selCategory, selType);
		var thisBetChance = getSelectedBetChanceId();
		if (parseInt(thisBetChance) === 3) {
		    apickMachNoOfLines = apickNoOfLines;
		    apickNoOfMachBalls =  apickNoOfBalls;
		}

		calPickedPrice();

		
	    switch (_lotteryType) {
	    	case 1:
	    		if (!getnerate590Pick(apickNoOfBalls)) {
	    			return;
	    		}
			 	break;
	    	case 2:
	    		if (!generate310Pick()) {
	    			return;
	    		}
	    		break;
	    	case 3:
	    	    if (!generate536Pick(apickNoOfBalls)) {
	    			return;
	    		}
				break;
	    	default:
	    		alert("Invalid Auto-Pick Process");
		        return;
	    }

	    displayPickedBalls(pickedNos);
	    apickTotalLines = apickMachNoOfLines + apickNoOfLines;
	    $("#spNoOfNumber").html(apickNoOfBalls + apickNoOfMachBalls);
	    $("#spNoOfLines").html(apickNoOfLines);
	    $("#spNoOfMachLines").html(apickMachNoOfLines);
		$("#spNoOfTotalLines").html(apickTotalLines);
		$("#pickedTotalPrice").text(parseFloat(apickTotalPrice).toFixed(2));

	    processPossibleWins();
	} catch (e) {
		alert(e.message);
	}


}

function calPickedPrice(enteredPrice) {
    try {

		if (apickLinePrice == null || apickLinePrice === "" || parseFloat(apickLinePrice) < 1) {
			apickLinePrice = parseFloat(currentBetType.MinStakeValue);
		}

		if (enteredPrice) {
			if (parseFloat(enteredPrice) < 1) {
			    ErrorMessage("Invalid Stake Price");
				return;
			}
			if (parseFloat(enteredPrice) < parseFloat(currentBetType.MinStakeValue) || parseFloat(enteredPrice) > parseFloat(currentBetType.MaxStakeValue)) {
				ErrorMessage("Invalid Stake Price");
				return;
			}
			apickLinePrice = enteredPrice;
		}
		
		var nwPrice = parseFloat(apickLinePrice * apickNoOfLines);
		var machPrice = parseFloat(apickLinePrice * apickMachNoOfLines);
		var betChance = getSelectedBetChanceId();
		if (betChance != null && betChance !== "" && !isNaN(betChance) && parseInt(betChance) > 0) {
		    switch (parseInt(betChance)) {
		        case 1:
		            apickTotalPrice = parseFloat(nwPrice).toFixed(2);
		            break;
		        case 2:
		            apickTotalPrice = (parseFloat(nwPrice) + parseFloat(nwPrice * 0.5)).toFixed(2); //TODO: Replace 0.0 with value from DB
		            break;
		        case 3:
		            apickTotalPrice = parseFloat(nwPrice + machPrice).toFixed(2);
		            break;
		        default:
		    }
		}
        
		$("#pickedTotalPrice").text(parseFloat(apickTotalPrice).toFixed(2));
	} catch (e) {
		ErrorMessage("Invalid Stake Price");
	}
}

function getPickedNoOfLines(stakedNoCount, selBetCategory, selBetType) {
	try {
		var linesInfo = {
			stakedNoCount: stakedNoCount,
			betCatId: selBetCategory,
			betTypeId: selBetType, 
			betTypeConstants: betTypeConstants,
			betCategoryConstants: betCategoryConstants,
			mainCount: 0,
			againstCount: 0
		};
        processPossibleWins();
		return calNumberOfLines(linesInfo);
	} catch (e) {
		return 0;
	}
}

function processPossibleWins() {
    var selType = getSelectedBetType();
    switch (_lotteryType) {
        case 1:
            prepAutPossibleWins(selType, countSelected(pickedNos), apickLinePrice, currentBetType.WinFactor, 1);
            break;
        case 2:
            prepAlphaPossibleWins(countSelected(pickedNos), apickLinePrice, currentBetType.WinFactor, 1);
            break;
        case 3:
            prepStatePossibleWins(countSelected(pickedNos), apickLinePrice, currentBetType.WinFactor, 1);
            break;

    }
}
function displayPickedBalls(result) {
    if (result === "") return;
    $("#autopickedBalls").html("");
	var splitOne = result.split("|");
	var content = "";

	content += "<div class=\"selectedNumberDisplay selected\" style=\"display:inline-block;\"><ul id=\"winNo\">";
	$.each(splitOne, function (index, value) {
		var split = value.split("*");
		$.each(split, function (index2, value2) {
			if (index === 0) {
				content += "<li class=\"selected\">" + value2 + "</li>";
			} else {
				if (value2.length > 2) {
					content += "<li class=\"selected2\" style=\"width: 100px;  border-radius: 8%;\">" + value2.toUpperCase() + "</li>";
				} else {
					content += "<li class=\"selected2\">" + value2 + "</li>";
				}
			}
		});
	});
	content += "</ul></div>";
	$("#autopickedBalls").html(content);

}

function getnerate590Pick(noOfPicks) {
	try {

		if (noOfPicks < 1 || noOfPicks > 15) {
			ErrorMessage("Invalid Pick Sequence");
			return false;
		}

		var thisBetChance = getSelectedBetChanceId();
		

		randPicked = [];
		randMachPicked = [];

		while (randPicked.length < noOfPicks) {
			var randomnumber = Math.ceil(Math.random() * 90);
			if (randPicked.indexOf((randomnumber < 10 ? "0" : "") + parseInt(randomnumber)) > -1) continue;
			randPicked[randPicked.length] = (randomnumber < 10 ? "0" : "") + parseInt(randomnumber);
		}

	   if (parseInt(thisBetChance) === 3) {
		    while (randMachPicked.length < noOfPicks) {
		        var randomnumber2 = Math.ceil(Math.random() * 90);
		        if (randMachPicked.indexOf((randomnumber2 < 10 ? "0" : "") + parseInt(randomnumber2)) > -1 || randPicked.indexOf((randomnumber2 < 10 ? "0" : "") + parseInt(randomnumber2)) > -1) continue;
		        randMachPicked[randMachPicked.length] = (randomnumber2 < 10 ? "0" : "") + parseInt(randomnumber2);
		    }
		}

		pickedNos = randPicked.join("*");

		if (randMachPicked.length > 0) {
		    pickedNos += "|" + randMachPicked.join("*");
		}

		return true;

	} catch (e) {
		ErrorMessage("Invalid Pick Sequence " + e.message);
		return false;
	}
}

function generate310Pick() {
	try {
		var noOfPicks = 3;

		rand310Picked = [];
		while (rand310Picked.length < noOfPicks) {
			var randomnumber = Math.ceil(Math.random() * 10);
			if (rand310Picked.indexOf((randomnumber < 10 ? "0" : "") + parseInt(randomnumber)) > -1) continue;
			rand310Picked[rand310Picked.length] = (randomnumber < 10 ? "0" : "") + parseInt(randomnumber);
		}

		var alphab = generateAlphaPick();
		if (alphab == null || alphab === "" || alphab.length !== 1) {
			ErrorMessage("Invalid Pick Sequence " + e.message);
			return false;
		}
		pickedNos = rand310Picked.join("*") + "|" + alphab;
		rand310Picked.push(alphab);
		return rand310Picked.length === noOfPicks + 1;

	} catch (e) {
		ErrorMessage("Invalid Pick Sequence " + e.message);
		return false;
	}
}

function generateAlphaPick() {
	try {
		var alphaSeed = Math.ceil(Math.random() * 26);
		return _alphas[alphaSeed - 1];
	} catch (e) {
		return "";
	}
}

function generate536Pick(noOfPicks) {
    try {

	    rand536Picked = [];
		while (rand536Picked.length < noOfPicks) {
			var randomnumber = Math.ceil(Math.random() * 36);
			if (rand536Picked.indexOf((randomnumber < 10 ? "0" : "") + parseInt(randomnumber)) > -1) continue;
			rand536Picked[rand536Picked.length] = (randomnumber < 10 ? "0" : "") + parseInt(randomnumber);
		}

		if (rand536Picked.length !== noOfPicks) {
			ErrorMessage("Auto - Pick Error! Try again later");
			return false;
		}

		if (!generateStatePick() || randStatePicked.length !== apickNoOfNoneBalls) {
		    ErrorMessage("Invalid Pick Sequence");
		    return false;
		}

        //var alphab = generateStatePick();
		//if (alphab == null || alphab === "" || alphab.length < 2) {
		//	ErrorMessage("Invalid Pick Sequence");
		//	return false;
        //}

		var selStates = "";
		for (var i = 0; i < randStatePicked.length; i++) {
		    selStates += _states[randStatePicked[i]] + "*";
		}

		if (selStates.endsWith("*")) {
		    selStates = selStates.substring(0, selStates.length - 1);
		}

		pickedNos = rand536Picked.join("*") + "|" + selStates;
        return true;
        //rand536Picked.push(alphab);
        //return rand536Picked.length === noOfPicks + 1;

    } catch (e) {
		ErrorMessage("Invalid Pick Sequence " + e.message);
		return false;
	}
}

function generateStatePick() {
    try {
        randStatePicked = [];

        while (randStatePicked.length < apickNoOfNoneBalls) {
            var randomnumber = Math.ceil(Math.random() * 37);
            if (randStatePicked.indexOf(parseInt(randomnumber)) > -1) continue;
            randStatePicked[randStatePicked.length] = parseInt(randomnumber);
        }

        if (randStatePicked.length !== apickNoOfNoneBalls) {
            ErrorMessage("Auto - Pick Error! Try again later");
            return false;
        }

		//var alphaSeed = Math.ceil(Math.random() * 37);
        //return _states[alphaSeed - 1];

        return true;
    } catch (e) {
		return false;
	}
}

function changeBallCount(sign) {
	try {
		var min = currentBetType.MinBalls;
		var max = currentBetType.MaxBalls;
		var counterObj = $("#txtAutoPickNo");
		var count = parseFloat(counterObj.html());
		if (min === max) {
			ErrorMessage("Only " + min + " Balls Can Be Picked For This Stake Type.");
			return;
		}
		if (sign === "-") {
			if (count === min) {
				count = (max);
			} else {
				if (count === 0) {
					count = min;
				} else {
					count--;
				}
			}
		} else {
			if (count === (max)) {
				count = min;
			} else {
				count++;
			}
		}

		var selCategory = getSelectedBetCategory();
		var selType = getSelectedBetType();

		counterObj.html(count);
		apickNoOfLines = getPickedNoOfLines(count, selCategory, selType);
		apickNoOfBalls = count;
		var thisBetChance = getSelectedBetChanceId();
	    if (parseInt(thisBetChance) === 3) {
	        apickMachNoOfLines = apickNoOfLines;
	        apickNoOfMachBalls = apickNoOfBalls;
	    }
		calPickedPrice();
		if (!getnerate590Pick(count)) {
			return;
		}

		//var balls = randPicked.join("*");
		displayPickedBalls(pickedNos);
		

		apickTotalLines = apickMachNoOfLines + apickNoOfLines;
		$("#spNoOfNumber").html(apickNoOfBalls + apickNoOfMachBalls);
		$("#spNoOfLines").html(apickNoOfLines);
		$("#spNoOfMachLines").html(apickMachNoOfLines);
		$("#spNoOfTotalLines").html(apickTotalLines);




		//$("#spNoOfNumber").html(count);
		//$("#spNoOfLines").html(apickNoOfLines);
		$("#pickedTotalPrice").text(parseFloat(apickTotalPrice).toFixed(2));
		processPossibleWins();
		
	} catch (e) {

	}

}
function setSelectionType(selType) {
    currentBetType = selType;
    populateAutoPickBalls();
}
function changeBetPrice(sign) {
	var min = currentBetType.MinStakeValue;
	var max = currentBetType.MaxStakeValue;
	
	var counterObj = $("#txtAutoPickPrice");
	apickLinePrice = parseFloat(getNumberNumeric(counterObj.html()));
	if (min === max) {
		ErrorMessage("Stake Price is ₦" + formatAmount(min) + " Flat.");
		return;
	}
	if (sign === "-") {
		if (apickLinePrice === min) {
			apickLinePrice = (max);
		} else {
			if (apickLinePrice === 0) {
				apickLinePrice = min;
			} else {
				apickLinePrice = apickLinePrice - min;
			}
		}
	} else {
		if (apickLinePrice === (max)) {
			apickLinePrice = min;
		} else {
			apickLinePrice = apickLinePrice + min;
		}
	}
	counterObj.html(parseFloat(apickLinePrice).toFixed(2));
	calPickedPrice(apickLinePrice);
    processPossibleWins();
}
function getSelectedBetCategory() {
    try {
        switch (_lotteryType) {
			case 1:
			    return getSelctedValue(_dlBetCatObj);
        	case 2:
			case 3:
	            return _sourceBetCategory;
        	default:
	            return 0;
        }

    } catch (e) {
        return 0;
    } 
}
function getSelectedBetType() {
	try {
		switch (_lotteryType) {
			case 1:
				return getSelctedValue(_dlBetTypeObj);
		    case 2:
		        return _sourceBetType;
		    case 3:
		        return getSelctedValue(_dlBetTypeObj);
		    default:
				return 0;
		}

	} catch (e) {
		return 0;
	}
}
function getSelectedBetTypeText() {
	try {
		switch (_lotteryType) {
			case 1:
				return getSelctedText(_dlBetTypeObj);
			case 2:
			case 3:
				return _selBetText;
			default:
				return 0;
		}

	} catch (e) {
		return 0;
	}
}
function getSelectedBetChanceId() {
    try {
        switch (_lotteryType) {
            case 1:
                return getSelctedValue(_dlBetChance);
            case 2:
            case 3:
                return 1;
            default:
                return 1;
        }

    } catch (e) {
        return 1;
    } 
}

function repickDirect() {
	setCurrentType();;
	populateAutoPickBalls();
}

function repickJackpotDirect() {
    var selType = getSelectedBetType();
    setBetPrice(betSettings, selType);
    populateAutoPickBalls();
}
