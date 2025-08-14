
// Problem-01 : Train TT's Fine Calculator ....................................

function totalFine( fare ) {
            if(typeof fare !== "number" ||  fare <=0  ){
    return  "Invalid"
}
    let extraFee = fare * (20/100);
    const fine = fare + extraFee + 30  ;
    return fine
}




// Problem-02 : Clean & Capitalize Characters ................................

function  onlyCharacter( str ) {

    if(typeof str !== "string"){
        return "Invalid"
    }
    let text = str.split(" ").join("").toUpperCase()
    return text
}





// Problem-03 : FIFA Best Team Award .......................................

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || player1 === null || Array.isArray(player1) ||
      typeof player2 !== "object" || player2 === null || Array.isArray(player2) ) {
    return "Invalid";
  }

  let playerOne = player1.foul + player1.cardY + player1.cardR;
  let playerTwo = player2.foul + player2.cardY + player2.cardR;

  if (playerOne < playerTwo) {
    return player1.name;
  }
  if (playerOne > playerTwo) {
    return player2.name;
  }
  if (playerOne == playerTwo) {
    return "Tie";
  }
}





// Problem-04: Same Same But Different......................................

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
    if(arr1.length !== arr2.length  ) {
        return false
    }

  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i] ) {
      return false;
    }
  }
  
  return true;
}




// Problem-05: Exam Result Report Generator ......................................

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let passMark = 40;
  let finalMark = 0;
  let countPassSub = 0;
  let countFailSub = 0;
  let totalMark = 0;
  for (let mark of marks) {
    totalMark += mark;
    finalMark = totalMark / marks.length;
    if (mark >= passMark) {
      countPassSub++;
    }
    else {
      countFailSub++;
    }
  }
  return {
    finalScore: Math.round(finalMark),
    pass: countPassSub,
    fail: countFailSub,
  };
}