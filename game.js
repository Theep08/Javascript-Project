var money;
var bet;

$("#number1").parent().css("background-color", "bisque")
$("#number2").parent().css("background-color", "bisque")
$("#number3").parent().css("background-color", "bisque")

document.getElementById("runRace").addEventListener("click", function(){
    runRace()
})

document.getElementById("runRace10").addEventListener("click", function(){
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
        saveData()
        $("#money").text("$" + money)
        $("#betAmount").text("$" + bet)
    }
  })

  document.getElementById("betDecrease").addEventListener("click", function() {
    if (bet >= 10) {
        bet -= 10
        money += 10
        saveData()
        $("#money").text("$" + money)
        $("#betAmount").text("$" + bet)
    }
  })

  document.getElementById("betAll").addEventListener("click", function() {
    bet += money;
    money = 0;
    saveData()
    $("#money").text("$" + money)
    $("#betAmount").text("$" + bet)
  })

  document.getElementById("unBetAll").addEventListener("click", function() {
    money += bet;
    bet = 0;
    saveData()
    $("#money").text("$" + money)
    $("#betAmount").text("$" + bet)
  })

  document.getElementById("resetGame").addEventListener("click", function() {
    money = 100;
    bet = 0;
    saveData()
    $("#money").text("$" + money)
    $("#betAmount").text("$" + bet)
  })

  $('#lane1').prepend('<img id="car1" src="car1.png" />')
  $('#lane2').prepend('<img id="car2" src="car2.png" />')
  $('#lane3').prepend('<img id="car3" src="car3.webp" />')
  $('#lane4').prepend('<img id="car4" src="car4.png" />')

function isEven(number) {
    return number % 2 === 0; 
  }


function spin(initialBet) {
    if (initialBet) {
        bet += initialBet;
        money -= initialBet;
    }
    const num1 = Math.round(Math.random() * 9);
    const num2 = Math.round(Math.random() * 9);
    const num3 = Math.round(Math.random() * 9);
    $("#number1").animate({
        'background-color': "red"
    }, 1500);
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


    saveData()
    $("#money").text("$" + money);
    $("#betAmount").text("$" + bet);
    document.getElementById("score").innerHTML = scoreReciept;
}


function saveData () {
    localStorage.setItem("betAmount", bet);
    localStorage.setItem("money", money);
}


$(window).on('load', function() {
    // Your code to execute on page reload
    
    bet = localStorage.getItem("betAmount");
    if (bet == "null") {
        bet = 0;
    } else {
        bet = Number(bet);
    }

    money = localStorage.getItem("money");
    if (money == "null") {
        money = 100;
    } else {
        money = Number(money);
    }

    $("#money").text("$" + money)
    $("#betAmount").text("$" + bet)

  });
  
  const carImages = [
    "car1.png",
    "car2.png",
    "car3.webp",
    "car4.png"
  ]

  function pickWinner(listOfCars) {
    const index = Math.round(Math.random() * 3);
    listOfCars[index].speed = 9
    return index + 1
  }

  var carChoice = {
    text: "1"
  };

  function runRace() {
    if (carChoice.text != null) { // Add car choice variable
        

        $("#car1").css({
            left: '0px'
        })
        $("#car2").css({
            left: '0px'
        })
        $("#car3").css({
            left: '0px'
        })
        $("#car4").css({
            left: '0px'
        })

        var car1 = {
            speed: 0
          };
          var car2 = {
            speed: 0
          };
          var car3 = {
            speed: 0
          };
          var car4 = {
            speed: 0
          };
        car1.speed = Math.round(Math.random() * 4) + 4
        car2.speed = Math.round(Math.random() * 4) + 4
        car3.speed = Math.round(Math.random() * 4) + 4
        car4.speed = Math.round(Math.random() * 4) + 4
        const winningCarNumber = pickWinner([car1, car2, car3, car4])
        console.log(car1.speed, car2.speed, car3.speed, car4.speed)

        $("#car1").animate({
            left: '1000px'
        }, 6000/car1.speed)

        $("#car2").animate({
            left: '1000px'
        }, 6000/car2.speed)

        $("#car3").animate({
            left: '1000px'
        }, 6000/car3.speed)

        $("#car4").animate({
            left: '1000px'
        }, 6000/car4.speed)

        if (carChoice.text = winningCarNumber) {
            //do something
        }
    }
  }

  runRace()