var _board = "";

var _mainBall = "";
var _alphabetBall = "";

var mainSelectedBalls = [];
var alphabetSelectedBalls = [];
var betNumbers = "";
var currentBetType = null;
var noOfLines = 0;
var noOfMachLines = 0;
var totalBetPrice = 0;
var linePrice = 150;



function initBetAlpha() {
    
    try {
       
        if (alphaControls == null) {
            ErrorMessage("System Error - A! Please try again later");
            return false;
        }
       
        if (alphaControls.board == null || alphaControls.board === "" || alphaControls.board.length < 3) {
            ErrorMessage("System Error - B! Please try again later");
            return false;
        }
        if (alphaControls.mainBallHolder == null || alphaControls.mainBallHolder === "" || alphaControls.mainBallHolder.length < 3) {
            ErrorMessage("System Error - C! Please try again later");
            return false;
        }
        if (alphaControls.alphabetBallHolder == null || alphaControls.alphabetBallHolder === "" || alphaControls.alphabetBallHolder.length < 3) {
            ErrorMessage("System Error - D! Please try again later");
            return false;
        }
        _board = setItem(alphaControls.board);
        _mainBall = setItem(alphaControls.mainBallHolder);
        _alphabetBall = setItem(alphaControls.alphabetBallHolder);
        return initProcess();

    } catch (e) {
        ErrorMessage("System Error 1! Please try again later");
        return false;
    }
}

function initProcess() {
    try {
       
            currentBetType = getCurrentBetSetting(betSettings, _sourceBetType);
            if (currentBetType == null) {
                ErrorMessage("System Error! Please try again later");
                return false;
            }
            linePrice = currentBetType.MinStakeValue;
            var counterObj = $(_betPriceHolder);
            counterObj.html(parseFloat(linePrice).toFixed(2));
            if (! enlistBet()) {
                return false;
            }
            if (!initAlphabetBoard()) {
                return false;
            }
        return true;
    } catch (e) {
        ErrorMessage("System Error 2! Please try again later");
        return false;
    } 
}

function enlistBet() {
    try {
        $(document.body).on("click", _addBet, function () {

            if (currentBetType == null) {
                ErrorMessage("Invalid Stake Information");
                return;
            }

            if (mainSelectedBalls.length !== 3) {
                ErrorMessage("You must select 3 balls in the Number Category");
                return;
            }
            if (alphabetSelectedBalls.length !== 1) {
                ErrorMessage("You must select 1 ball from the Alphabet Category");
                return;
            }

            var noOfBalls = countSelected(betNumbers);

            var amountPerLine = $(_betPriceHolder).text();
            amountPerLine = number_format(amountPerLine);
            if (amountPerLine < currentBetType.MinStakeValue) {
                ErrorMessage("Please enter a minimum  amount of  ₦" + currentBetType.MinStakeValue);
                return;
            }
            if (amountPerLine > currentBetType.MaxStakeValue) {
                ErrorMessage("Please adjust your bet amount. You cannot place bet above ₦" + currentBetType.MaxStakeValue + " at once.");
                return;
            }
            if (noOfLines < 1) {
                ErrorMessage("Invalid number of lines. Please make sure you select minimum required balls");
                return;
            }

            if (checkDuplicate()) {
                return;
            }

            var stakeCategory = _sourceBetCategory;
            var stakeType = _sourceBetType;
            var stakeTypeName = _selBetText;

            var stake = {
                StakedNumbers: betNumbers,
                StakedMachineNumbers: '',
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
            resetGame();
            enableAutoPick();
        });
        return true;
    } catch (e) {
        return false;
    } 
}

function initAlphabetBoard() {
    try {
        $(getListSelector(_board)).on("click", function () {
           
            var arrayPos = -1;
            var ballType = $(this).attr("ball-type");
            if (parseInt(ballType) === 1) {
                var thisSelection = parseInt($(this).children().text());
                thisSelection = (thisSelection < 10 ? "0" : "") + parseInt(thisSelection);
                var mSpan = $(getListSpanSelector(_mainBall, thisSelection));
                arrayPos = $.inArray(thisSelection, mainSelectedBalls);
                if (arrayPos >= 0) {
                    $(this).removeClass("selected");
                    mSpan.parent().addClass("stakenumber");
                    mSpan.parent().removeClass("disabledNumber");
                    mSpan.removeClass("strike");
                    mainSelectedBalls.splice(arrayPos, 1);
                    betNumbers = mainSelectedBalls.join("*");
                    if (alphabetSelectedBalls.length > 0) {
                        betNumbers = betNumbers + "|" + alphabetSelectedBalls.join("*");
                    }
                    if (currentBetType.MinBalls > countSelected(betNumbers)) {
                        noOfLines = 0;
                        totalBetPrice = 0;
                    } else {
                        noOfLines = 1;
                        totalBetPrice = noOfLines * linePrice;
                    }
                    previewAlphaBet();
                    disableAutoPick();
                    return;
                }
                if (mainSelectedBalls.length >= 3) {
                    ErrorMessage("Maximum number of balls allowed is 3.");
                    return;
                }
                $(this).addClass("selected");
                mainSelectedBalls.push(thisSelection);
            } else {
                var thisAlphaSelection = $(this).children().text();
                var aSpan = $(getListSpanSelector(_alphabetBall, thisAlphaSelection));
                arrayPos = $.inArray(thisAlphaSelection, alphabetSelectedBalls);
                if (arrayPos >= 0) {
                    $(this).removeClass("selected2");
                    aSpan.parent().addClass("stakenumber");
                    aSpan.parent().removeClass("disabledNumber");
                    aSpan.removeClass("strike");
                    alphabetSelectedBalls.splice(arrayPos, 1);
                    betNumbers = mainSelectedBalls.join("*");
                    if (alphabetSelectedBalls.length > 0) {
                        betNumbers = betNumbers + "|" + alphabetSelectedBalls.join("*");
                    }
                    if (currentBetType.MinBalls > countSelected(betNumbers)) {
                        noOfLines = 0;
                        totalBetPrice = 0;
                    } else {
                        noOfLines = 1;
                        totalBetPrice = noOfLines * linePrice;
                    }
                    disableAutoPick();
                    previewAlphaBet();
                    return;
                }

                if (mainSelectedBalls.length !== 3) {
                    ErrorMessage("You must select three balls from the Number Category");
                    return;
                }
                if (alphabetSelectedBalls.length >= 1) {
                    ErrorMessage("Only 1 Alphabet Ball Allowed.");
                    return;
                }
              
                $(this).addClass("selected");
                alphabetSelectedBalls.push(thisAlphaSelection);
            }
            betNumbers = mainSelectedBalls.join("*");
            if (alphabetSelectedBalls.length > 0) {
                betNumbers = betNumbers + "|" + alphabetSelectedBalls.join("*");
            }
            if (currentBetType.MinBalls > countSelected(betNumbers)) {
                noOfLines = 0;
                totalBetPrice = 0;
            } else {
                noOfLines = 1;
                totalBetPrice = noOfLines * linePrice;
                $(_betPriceDisplay).text(numberWithCommas(parseFloat(totalBetPrice).toFixed(2)));
            }
            previewAlphaBet();
            disablePriceChange();
            disableAutoPick();
        });
        return true;
    } catch (e) {
        ErrorMessage("System Error 3! Please try again later");
        return false;
    }

}
function checkDuplicate() {
    return isBetDuplicate(bets, betNumbers);
}
function previewAlphaBet() {
    try {
        var betInfo = {
            betTypeName: _selBetText,
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
        prepAlphaPossibleWins(countSelected(betNumbers), linePrice, currentBetType.WinFactor, 2);
    } catch (e) {

    }
}
function resetGame() {
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
    alphabetSelectedBalls = [];
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

