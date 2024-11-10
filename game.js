var money = 100;
$("#money").text("$" + money)
var bet = 0;

document.getElementById("wheelSpin").addEventListener("click", function(){
    spin(0)
})

document.getElementById("wheelSpinW10").addEventListener("click", function(){
    money += bet;
    bet = 0;

    if (money >= 10){
        spin(10)
    }
})

  document.getElementById("betIncrease").addEventListener("click", function() {
    if (money >= 10) {
        bet += 10
        money -= 10
        $("#money").text("$" + money)
        $("#betAmount").text("$" + bet)
    }
  })

  document.getElementById("betDecrease").addEventListener("click", function() {
    if (bet >= 10) {
        bet -= 10
        money += 10
        $("#money").text("$" + money)
        $("#betAmount").text("$" + bet)
    }
  })

  document.getElementById("betAll").addEventListener("click", function() {
    bet += money;
    money = 0;
    $("#money").text("$" + money)
    $("#betAmount").text("$" + bet)
  })

  document.getElementById("unBetAll").addEventListener("click", function() {
    money += bet;
    bet = 0;
    $("#money").text("$" + money)
    $("#betAmount").text("$" + bet)
  })


  
function isEven(number) {
    return number % 2 === 0; 
  }

function spin(initialBet) {
    console.log(initialBet)
    if (initialBet) {
        bet += initialBet;
        money -= initialBet;
    }
    const num1 = Math.round(Math.random() * 9);
    const num2 = Math.round(Math.random() * 9);
    const num3 = Math.round(Math.random() * 9);
    $("#number1").text(num1);
    $("#number2").text(num2);
    $("#number3").text(num3);
    var score = 0;
    var scoreReciept = "---<br>";

    // Equality
    if ((num1 == num2) & (num2 == num3)) {
        score += 100 * num1;
        scoreReciept += "3 Equal Numbers<br>: 100 x " + num1 + " = " + 100 * num1 + "<br>"
    } else if (num1 == num2) {
        score += 25 * num1
        scoreReciept += "2 Equal Numbers<br>: 25 x " + num1 + " = " + 25 * num1 + "<br>"
    }

    // If high number is obtained
    if ((num1 == 9) | (num2 == 9) | (num2 == 9)) {
        score += 25
        scoreReciept += "High Number<br>: 25<br>"
    }

    // Sequencial order
    if ((num2 == num1 + 1) & (num3 == num2 + 1)) {
        score += 200
        scoreReciept += "Numbers in sequencial order<br>: 200<br>"
    } else if ((num2 == num1 - 1) & (num3 == num2 - 1)) {
        score += 200
        scoreReciept += "Numbers in reverse sequencial order<br>: 200<br>"
    }

    // Evens
    if ((isEven(num1)) & (isEven(num2)) & (isEven(num3))) {
        score += 25;
        scoreReciept += "Numbers are even<br>: 25<br>";
    }

    
    scoreReciept += "<br>Total Score<br>: " + score;
    scoreReciept += "<br>Total Money Won<br>: " + score/10 + " x " + bet + " = " + score*bet/10;
    money += score*bet/10;
    bet = 0;
    $("#money").text("$" + money);
    $("#betAmount").text("$" + bet);
    document.getElementById("score").innerHTML = scoreReciept;
}

