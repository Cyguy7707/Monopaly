var propertiesList = getColumn("Properties", "Names");
var cost = getColumn("Properties", "Price");
var space = getColumn("Properties", "Space");
var rent = getColumn("Properties", "Rent");
var rentSet = getColumn("Properties", "Rent with set");
var colorSet = getColumn("Properties", "Color Set");
var player1balance = 500;
var player2balance = 500;
var player1position = 0;
var player2position = 0;
var player1properties = "Spacer";
var player2properties = "Spacer";
var roll = 0;
var turn = 1;
var dice1roll = 6;
var dice2roll = 6;
function landingOnSpace(p1space, p2space) {
  setScreen("PropertyScreen");
  setProperty("p1balp", "text", ("p1: " + player1balance) + "$");
  setProperty("p2balp", "text", ("p2: " + player2balance) + "$");
  if (player1balance < 0) {
    setScreen("Winner");
    setProperty("Wincongrats", "text", "The winner is Player 1!");
  } else if (player2balance < 0) {
    setScreen("Winner");
    setProperty("Wincongrats", "text", "The winner is Player 2!");
  } else {
    if (turn == 2) {
      if (p1space == 0 ||p1space == 3 ||p1space == 6 ||p1space == 9 ||p1space == 12 ||p1space == 15 ||p1space == 18 ||p1space == 21 ||p1space == 24) {
        if (p1space == 3 || p1space == 9 || p1space == 15 || p1space == 21) {
          player1balance = player1balance + randomNumber(1,100) ;
        }
        if (p1space == 0) {
          player1balance = player1balance + 200 ;
        }
        if (p1space == 18) {
          player1position = 6;
        }
        changescreenp2();
      } else {
        for (var k = 0; k < 24; k++) {
          if (p1space == space[k]) {
            if (player1properties.includes(propertiesList[k])) {
              changescreenp2();
            } else if (player2properties.includes(propertiesList[k])) {
              player1balance = player1balance - rent[k];
              player2balance = player2balance + rent[k];
              changescreenp2();
            }
          }
        }
        for (var i = 0; i < 24; i++) {
          if (p1space == space[i]) {
            setProperty("propertyName", "text", "Property: " + propertiesList[i]);
            setProperty("propertyColor", "text", "Color set: " + colorSet[i]);
            setProperty("propertyCost", "text", "Cost: " + cost[i]);
            setProperty("rent", "text", "Rent: " + rent[i]);
            setProperty("rentcolor", "text", "Rent with set: " + rentSet[i]);
          }
        }
      }
    } else {
      if (p2space == 0 ||p2space == 3 ||p2space == 6 ||p2space == 9 ||p2space == 12 ||p2space == 15 ||p2space == 18 ||p2space == 21) {
        if (p2space == 3 || p2space == 9 || p2space == 15 || p2space == 21) {
          player2balance = player2balance + randomNumber(1,100) ;
        }
        if (p2space == 0) {
          player2balance = player2balance + 200 ;
        }
        if (p2space == 18) {
          player2position = 6;
        }
        changescreenp1();
      } else {
        for (var h = 0; h < 24; h++) {
          if (p2space == space[h]) {
            if (player1properties.includes(propertiesList[h])) {
              player2balance = player2balance - rent[h];
              player1balance = player1balance + rent[h];
              changescreenp1();
            } else if ((player2properties.includes(propertiesList[h]))) {
              changescreenp1();
            }
          }
        }
        for (var j = 0; j < 24; j++) {
          if (p2space == space[j]) {
            setProperty("propertyName", "text", "Property: " + propertiesList[j]);
            setProperty("propertyColor", "text", "Color set: " + colorSet[j]);
            setProperty("propertyCost", "text", "Cost: " + cost[j]);
            setProperty("rent", "text", "Rent: " + rent[j]);
            setProperty("rentcolor", "text", "Rent with set: " + rentSet[j]);
          }
        }
      }
    }
  }
}
onEvent("infobutton", "click", function( ) {
  setScreen("info");
});
onEvent("backbutton1", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("playagain", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("duo", "click", function( ) {
  setScreen("game1Screen");
  setProperty("p1bal1", "text", ("p1: " + player1balance) + "$");
  setProperty("p2bal1", "text", ("p2: " + player2balance) + "$");
  hideotherspotsp11();
  hideotherspotsp21();
});
onEvent("roll1", "click", function( ) {
  hideElement("roll1");
  hideElement("roll2");
  hideElement("roll3");
  hideElement("roll4");
  rolldice1();
  turns();
  setTimeout(function() {
    showElement("roll1");
    showElement("roll2");
    showElement("roll3");
    showElement("roll4");
    landingOnSpace(player1position, player2position);
  }, 2200);
});
onEvent("roll2", "click", function( ) {
  hideElement("roll1");
  hideElement("roll2");
  hideElement("roll3");
  hideElement("roll4");
  rolldice1();
  turns();
  setTimeout(function() {
    showElement("roll1");
    showElement("roll2");
    showElement("roll3");
    showElement("roll4");
    landingOnSpace(player1position, player2position);
  }, 2200);
});
onEvent("roll3", "click", function( ) {
  hideElement("roll1");
  hideElement("roll2");
  hideElement("roll3");
  hideElement("roll4");
  rolldice1();
  turns();
  setTimeout(function() {
    showElement("roll1");
    showElement("roll2");
    showElement("roll3");
    showElement("roll4");
    landingOnSpace(player1position, player2position);
  }, 2200);
});
onEvent("roll4", "click", function( ) {
  hideElement("roll1");
  hideElement("roll2");
  hideElement("roll3");
  hideElement("roll4");
  rolldice1();
  turns();
  setTimeout(function() {
    showElement("roll1");
    showElement("roll2");
    showElement("roll3");
    showElement("roll4");
    landingOnSpace(player1position, player2position);
  }, 2200);
});
onEvent("buy", "click", function( ) {
  if (turn == 1) {
    for (var j = 0; j < 24; j++) {
      if (player2position == space[j]) {
        player2balance = player2balance - cost[j] ;
        player2properties = player2properties + propertiesList[j];
      }
    }
    changescreenp1();
  } else {
    for (var i = 0; i < 24; i++) {
      if (player1position == space[i]) {
        player1balance = player1balance -cost[i] ;
        player1properties = player1properties + propertiesList[i];
      }
    }
    changescreenp2();
  }
});
onEvent("cancel", "click", function( ) {
  if (turn == 1) {
    changescreenp1();
  } else {
    changescreenp2();
  }
});
function turns() {
  setTimeout(function() {
    if (turn == 1) {
      player1position = player1position + roll;
      if (player1position > 23) {
        player1position  = player1position - 24;
        player1balance = player1balance + 200;
      }
      changescreenp1();
      hideotherspotsp11();
      turn = 2;
    } else {
      player2position = player2position + roll;
      if (player2position > 23) {
        player2position  = player2position - 24;
        player2balance = player2balance + 200;
      }
      changescreenp2();
      hideotherspotsp21();
      turn = 1;
    }
  }, 1400);
}
function changescreenp1() {
  if (player1position >= 7 && player1position < 13) {
    setScreen("game2Screen");
    hidedice2();
    setProperty("p1bal2", "text", ("p1: " + player1balance) + "$");
    setProperty("p2bal2", "text", ("p2: " + player2balance) + "$");
  } else if (player1position >= 13 && player1position < 19) {
    setScreen("game3Screen");
    hidedice3();
    setProperty("p1bal3", "text", ("p1: " + player1balance) + "$");
    setProperty("p2bal3", "text", ("p2: " + player2balance) + "$");
  } else if (player1position >= 19 && player1position < 24) {
    setScreen("game4Screen");
    hidedice4();
    setProperty("p1bal4", "text", ("p1: " + player1balance) + "$");
    setProperty("p2bal4", "text", ("p2: " + player2balance) + "$");
  } else {
    setScreen("game1Screen");
    hidedice1();
    setProperty("p1bal1", "text", ("p1: " + player1balance) + "$");
    setProperty("p2bal1", "text", ("p2: " + player2balance) + "$");
  }
}
function changescreenp2() {
  if (player2position >= 7 && player2position < 13) {
    setScreen("game2Screen");
    hidedice2();
    setProperty("p1bal2", "text", ("p1: " + player1balance) + "$");
    setProperty("p2bal2", "text", ("p2: " + player2balance) + "$");
  } else if (player2position >= 13 && player2position < 19) {
    setScreen("game3Screen");
    hidedice3();
    setProperty("p1bal3", "text", ("p1: " + player1balance) + "$");
    setProperty("p2bal3", "text", ("p2: " + player2balance) + "$");
  } else if (player2position >= 19 && player2position < 24) {
    setScreen("game4Screen");
    hidedice4();
    setProperty("p1bal4", "text", ("p1: " + player1balance) + "$");
    setProperty("p2bal4", "text", ("p2: " + player2balance) + "$");
  } else {
    setScreen("game1Screen");
    hidedice1();
    setProperty("p1bal1", "text", ("p1: " + player1balance) + "$");
    setProperty("p2bal1", "text", ("p2: " + player2balance) + "$");
  }
}
function rolldice1() {
  var countdown = 10;
  timedLoop(100, function() {
    dice1roll = randomNumber(1, 6);
    dice2roll = randomNumber(1, 6);
    countdown = countdown-1;
    if (countdown === 0) {
      stopTimedLoop();
    }
    roll = dice1roll + dice2roll;
    hidedice1();
    hidedice2();
    hidedice3();
    hidedice4();
  });
  return roll;
}
function hidedice1() {
  for (var i = 1; i < 7; i++) {
    if (dice1roll == i) {
      showElement("dice1" + i);
    } else {
      hideElement("dice1" + i);
    }
    if (dice2roll == i) {
      showElement("dice2" + i);
    } else {
      hideElement("dice2" + i);
    }
  }
}
function hidedice2() {
  for (var i = 1; i < 7; i++) {
    if (dice1roll == i) {
      showElement("dice3" + i);
    } else {
      hideElement("dice3" + i);
    }
    if (dice2roll == i) {
      showElement("dice4" + i);
    } else {
      hideElement("dice4" + i);
    }
  }
}
function hidedice3() {
  for (var i = 1; i < 7; i++) {
    if (dice1roll == i) {
      showElement("dice5" + i);
    } else {
      hideElement("dice5" + i);
    }
    if (dice2roll == i) {
      showElement("dice6" + i);
    } else {
      hideElement("dice6" + i);
    }
  }
}
function hidedice4() {
  for (var i = 1; i < 7; i++) {
    if (dice1roll == i) {
      showElement("dice7" + i);
    } else {
      hideElement("dice7" + i);
    }
    if (dice2roll == i) {
      showElement("dice8" + i);
    } else {
      hideElement("dice8" + i);
    }
  }
}
function hideotherspotsp11() {
  for (var i = 0; i < 24; i++) {
    if (player1position == i) {
      showElement("star1iconr" + i);
    } else {
      hideElement("star1iconr" + i);
    }
  }
}
function hideotherspotsp21() {
  for (var i = 0; i < 24; i++) {
    if (player2position == i) {
      showElement("happy2iconr" + i);
    } else {
      hideElement("happy2iconr" + i);
    }
  }
}
