var _board = "";
var _dlBetTypeObj = "";

var _mainBall = "";
var _megaBall = "";

var mainMegaSelectedBalls = [];
var megSelectedBalls = [];
var betNumbers = "";
var currentBetType = null;
var noOfLines = 0;
var noOfMachLines = 0;
var totalBetPrice = 0;
var linePrice = 100;
var thisBetPriceDisplay = "";

//txtJackpotBetPrice

function initBetMega() {

    try {

        if (megaControls == null) {
            ErrorMessage("System Error! Please try again later");
            return false;
        }
        if (megaControls.board == null || megaControls.board === "" || megaControls.board.length < 3) {
            ErrorMessage("System Error! Please try again later");
            return false;
        }
        if (megaControls.mainBallHolder == null || megaControls.mainBallHolder === "" || megaControls.mainBallHolder.length < 3) {
            ErrorMessage("System Error! Please try again later");
            return false;
        }
        if (megaControls.stateBallHolder == null || megaControls.stateBallHolder === "" || megaControls.stateBallHolder.length < 3) {
            ErrorMessage("System Error! Please try again later");
            return false;
        }
        //  _dlBetTypeObj = setItem(mainControls.betType);
        _board = setItem(megaControls.board);
        _mainBall = setItem(megaControls.mainBallHolder);
        _megaBall = setItem(megaControls.stateBallHolder);
        _dlBetTypeObj = setItem(megaControls.betType);
        thisBetPriceDisplay = setItem("txtJackpotBetPrice");
        return initBetType();

    } catch (e) {
        ErrorMessage("System Error! Please try again later");
        return false;
    }
}

function initBetType() {
    try {

        $("#chkAutoPick :checked").removeAttr("checked");
        $("#chkAutoPick").prop("disabled", true);

        loadObjData(_betTypeRoute + "?lotteryId=" + _lotteryType + "&betCategoryId=" + _sourceBetCategory, _dlBetTypeObj);

        $(document.body).on("change", _dlBetTypeObj, function () {
            try {
                if (this.value == null || this.value === "" || parseInt(this.value) < 1) {
                    resetMegaGame();
                    resetGame2();
                    $("#chkAutoPick :checked").removeAttr("checked");
                    $("#chkAutoPick").prop("disabled", true);
                    ErrorMessage("Validation Error: Please select valid Stake Type");
                    return;
                }
                var index = getSelctedValue(_dlBetTypeObj);
                if (index < 1) {
                    resetMegaGame();
                    resetGame2();
                    $("#chkAutoPick :checked").removeAttr("checked");
                    $("#chkAutoPick").prop("disabled", true);
                    return;
                }
                resetMegaGame();
                resetGame2();
                currentBetType = getCurrentBetSetting(betSettings, index);
                if (currentBetType == null) {
                    $("#chkAutoPick :checked").removeAttr("checked");
                    $("#chkAutoPick").prop("disabled", true);
                    ErrorMessage("System Error! Please try again later");
                    return;
                }

                initMegaBetPrice(betSettings, index);
           
                $("#chkAutoPick").prop("disabled", false);
                populateAutoPickBalls();
               
            } catch (e) {
                $("#chkAutoPick :checked").removeAttr("checked");
                $("#chkAutoPick").prop("disabled", true);
                ErrorMessage("Invalid Stake Information " + e.message);
            }
        });

        if (!enlistBet()) {
            return false;
        }
        if (!initMegaBoard()) {
            return false;
        }
        return true;
    } catch (e) {
        ErrorMessage("System Error! Please try again later");
        return false;
    } 
}



function initMegaBetPrice(betSettings, index) {
    linePrice = setBetPrice(betSettings, index);
    if (linePrice < 1) {
        linePrice = 5;
    }
    var counterObj = $(thisBetPriceDisplay);
    counterObj.html("");
    counterObj.html(parseFloat(linePrice).toFixed(2));
}

function initProcess() {
    try {

        $("#chkAutoPick :checked").removeAttr("checked");
        $("#chkAutoPick").prop("disabled", true);

        //currentBetType = getCurrentBetSetting(betSettings, _sourceBetType);
        //if (currentBetType == null) {
        //    ErrorMessage("System Error! Please try again later");
        //    return false;
        //}
        //linePrice = currentBetType.MinStakeValue;
        var counterObj = $(_betPriceHolder);
        counterObj.text(parseFloat(linePrice).toFixed(2));
        if (!enlistBet()) {
            return false;
        }
        if (!initMegaBoard()) {
            return false;
        }
        return true;
    } catch (e) {
        ErrorMessage("System Error! Please try again later");
        return false;
    }
}

function enlistBet() {
    try {
        $(document.body).on("click", _addBet, function () {
            var selType = getSelctedValue(_dlBetTypeObj);
            if (selType < 1) {
                ErrorMessage("Please select Stake Type ");
                return;
            }
            
            if (currentBetType == null) {
                ErrorMessage("Invalid Stake Information");
                return;
            }

            if (currentBetType.MinBalls < 1) {
                ErrorMessage("Please select Stake Type ");
                return;
            } 
            var mailSelCount = (currentBetType.MinBalls - currentBetType.MinNonBall);

            if (mainMegaSelectedBalls.length !== mailSelCount) {
                ErrorMessage("You must select " + mailSelCount +" balls in the Number Category");
                return;
            }
            if (megSelectedBalls.length !== currentBetType.MinNonBall) {
                ErrorMessage("You must select " + currentBetType.MinNonBall +" block(s) from the State Category");
                return;
            }

            var noOfBalls = countSelected(betNumbers);

            var amountPerLine = $(_betPriceHolder).text();
            if (amountPerLine < currentBetType.MinStakeValue) {
                ErrorMessage("Please enter a minimum  amount of  ₦" + currentBetType.MinStakeValue);
                return;
            }
            if (amountPerLine > currentBetType.MaxStakeValue) {
                ErrorMessage("Please adjust your bet amount. You cannot place bet beyond ₦" + currentBetType.MaxStakeValue + " in one transaction.");
                return;
            }
            if (noOfLines < 1) {
                ErrorMessage("Invalid number of lines. Please make sure you select minimum required items");
                return;
            }

            if (checkMegaDuplicate()) {
                return;
            }

            var stakeCategory = _sourceBetCategory;
            var stakeType = _sourceBetType;
            var stakeTypeName = _selBetText;

            var stake = {
                StakedNumbers: betNumbers,
                StakedMachineNumbers:  '',
                NoOfLines: parseInt(noOfLines),
                NoOfMachLines: noOfMachLines,
                NoOfBalls: parseInt(noOfBalls),
                AmountPerLine: parseFloat(amountPerLine),
                TotalAmount: parseInt(noOfLines) * parseFloat(amountPerLine),
                GameId: _gameTag,
                GameActivityId: _betActivityTag,
                GameSettingId: currentBetType.BetSettingId,
                BetCategoryId: parseInt(stakeCategory),
                BetTypeId: parseInt(stakeType),
                BetTypeName: stakeTypeName,
                BetChanceName: 'Winning Only',
                LotteryId: _lotteryType,
                BetChanceId: '1',
                BetModeId: '2'
            };


            if (!addBetItem(stake)) {
                return;
            }
            resetMegaGame();
            resetGame2();
            setDefaultValue(_dlBetTypeObj);
            enableAutoPick();
        });
        return true;
    } catch (e) {
        return false;
    }
}
function initMegaBoard() {
    try {
        $(getListSelector(_board)).on("click", function () {
            var selType = getSelctedValue(_dlBetTypeObj);
            if (selType < 1) {
                ErrorMessage("Please select Stake Type ");
                return;
            }
            if (currentBetType == null) {
                ErrorMessage("Please select Stake Type ");
                return;
            }
            if (currentBetType.MinBalls < 1) {
                ErrorMessage("Please select Stake Type ");
                return;
            }
            var arrayPos = -1;
            var mailSelCount = (currentBetType.MinBalls - currentBetType.MinNonBall);
            var ballType = $(this).attr("ball-type");
           if (parseInt(ballType) === 1) {
                var thisSelection = parseInt($(this).children().text());
                thisSelection = (thisSelection < 10 ? "0" : "") + parseInt(thisSelection);
                var mSpan = $(getListSpanSelector(_mainBall, thisSelection));
                arrayPos = $.inArray(thisSelection, mainMegaSelectedBalls);
                if (arrayPos >= 0) {
                   $(this).removeClass("selected");
                    mSpan.parent().addClass("stakenumber");
                    mSpan.parent().removeClass("disabledNumber");
                    mSpan.removeClass("strike");
                    mainMegaSelectedBalls.splice(arrayPos, 1);
                    betNumbers = mainMegaSelectedBalls.join("*");
                    if (megSelectedBalls.length > 0) {
                        betNumbers = betNumbers + "|" + megSelectedBalls.join("*");
                    }
                    if (currentBetType.MinBalls > countSelected(betNumbers)) {
                        noOfLines = 0;
                        totalBetPrice = 0;
                    } else {
                        noOfLines = 1;
                        totalBetPrice = noOfLines * linePrice;
                    }
                   previewMegBet();
                    return;
                }
                if (mainMegaSelectedBalls.length >= mailSelCount) {
                    ErrorMessage("Maximum Number Balls allowed is " + mailSelCount);
                    return;
                }
                $(this).addClass("selected");
               mainMegaSelectedBalls.push(thisSelection);
            } else {
                var thisAlphaSelection = $(this).children().text();
                var aSpan = $(getListSpanSelector(_megaBall, thisAlphaSelection));
                arrayPos = $.inArray(thisAlphaSelection, megSelectedBalls);
                if (arrayPos >= 0) {
                    $(this).removeClass("selected2");
                    aSpan.parent().addClass("stakenumber");
                    aSpan.parent().removeClass("disabledNumber");
                    aSpan.removeClass("strike");
                    megSelectedBalls.splice(arrayPos, 1);
                    betNumbers = mainMegaSelectedBalls.join("*");
                    if (megSelectedBalls.length > 0) {
                        betNumbers = betNumbers + "|" + megSelectedBalls.join("*");
                    }
                    if (currentBetType.MinBalls > countSelected(betNumbers)) {
                        noOfLines = 0;
                        totalBetPrice = 0;
                    } else {
                        noOfLines = 1;
                        totalBetPrice = noOfLines * linePrice;
                    }
                    previewMegBet();
                    return;
                }

                if (mainMegaSelectedBalls.length !== mailSelCount) {
                    ErrorMessage("You must select " + mailSelCount + " balls from the Number Category");
                    return;
                }
                if (megSelectedBalls.length >= currentBetType.MinNonBall) {
                    ErrorMessage("Only " + currentBetType.MinNonBall + " State(s) Ball Allowed.");
                    return;
                }
                $(this).addClass("selected2");
                megSelectedBalls.push(thisAlphaSelection);
            }
            betNumbers = mainMegaSelectedBalls.join("*");
            if (megSelectedBalls.length > 0) {
                betNumbers = betNumbers + "|" + megSelectedBalls.join("*");
            }
            if (currentBetType.MinBalls > countSelected(betNumbers)) {
                noOfLines = 0;
                totalBetPrice = 0;
            } else {
                noOfLines = 1;
                totalBetPrice = noOfLines * linePrice;
            }
            previewMegBet();
            disablePriceChange();
            disableAutoPick();
        });
        return true;
    } catch (e) {
        ErrorMessage("System Error! Please try again later");
        return false;
    }

}
function checkMegaDuplicate() {
    return isBetDuplicate(bets, betNumbers);
}
function previewMegBet() {
    try {
        var betInfo = {
            betTypeName: getSelctedText(_dlBetTypeObj),
            betNumbers: betNumbers,
            noOfLines: noOfLines,
            noOfMachLines: noOfMachLines,
            totalBetPrice: totalBetPrice,
            betPrice: linePrice,
            betChanceName: 'Winning Only'
        };
        previewBetData(betInfo);
        var counterObj = $(_betPriceHolder);
        counterObj.text(parseFloat(linePrice).toFixed(2));
        $(_betPriceDisplay).text(numberWithCommas(parseFloat(totalBetPrice).toFixed(2)));
        prepStatePossibleWins(countSelected(betNumbers), linePrice, currentBetType.WinFactor, 2);
    } catch (e) {

    }
}
function resetMegaGame() {
    $(_betPreviewHolder).hide();
    $(_betPreviewContentHolder).html("");
    $("li.stakenumber").removeClass("selected");
    $("li.stakenumber").removeClass("selected2");
    $(".disabledNumber").each(function () {
        $(this).addClass("stakenumber");
        $(this).removeClass("disabledNumber");
        $(this).children().removeClass("strike");
    });
    mainMegaSelectedBalls = [];
    megSelectedBalls = [];
    betNumbers = "";
    noOfLines = 0;
    totalBetPrice = 0;
    var counterObj = $(thisBetPriceDisplay);
    counterObj.html("0.00");
    if (currentBetType != null) {
        if (currentBetType.MinStakeValue > 5) {
            linePrice = currentBetType.MinStakeValue;
        } else {
            linePrice = 5;
        }
    }

}
