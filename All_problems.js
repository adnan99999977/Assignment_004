// Problem-01 : Train TT's Fine Calculator .......................................>>>>

function totalFine( fare ) {
    let extraFee = fare * (20/100);
    const fine = fare + extraFee + 30  ;
        if(typeof fare !== "number" ||  fare <=0  ){
    return  "Invalid"
}
    return fine
}

// let result1 = totalFine(200);
// let result2 = totalFine(0);
// let result3 = totalFine(50);
// let result4 = totalFine(552);
// let result5 = totalFine(-35);
// let result6= totalFine("65");
// let result7 = totalFine("Gorib tai ticket katinai");

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result7);







// Problem-02 : Clean & Capitalize Characters .......................................>>>>

function  onlyCharacter( str ) {

    if(typeof str !== "string"){
        return "Invalid"
    }
    let text = str.split(" ").join("").toUpperCase()
    return text
}



// let result1 = onlyCharacter("  h e llo wor   ld" );
// let result2 = onlyCharacter("Cy   bar- At  tac k  ");
// let result3 = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
// let result4 = onlyCharacter("Serv er : : Do wn");
// let result5 = onlyCharacter(["hack", "me"]);
// let result6 = onlyCharacter(true);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);





// Problem-03 : FIFA Best Team Award .......................................>>>>

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
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

// let result = bestTeam(
//  { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
// );
// let result2 = bestTeam(
//   { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
//   { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
// );
// let result3 = bestTeam(
//   { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
//   { name: "France", foul: 10, cardY: 2, cardR: 1 }
// );
// let result4 = bestTeam(
//   { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
//   "France"
// );

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);





// Problem-04: Same Same But Different.......................................>>>>

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[1] === arr2[i] && arr1.length === arr2.length) {
      return true;
    }
  }
  return false;
}

// let result1 = isSame([1, 2, 3], [1, 2, 3]);
// let result2 = isSame([34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ]);
// let result3 = isSame([1, undefined , 3] , [1,null ,3]);
// let result4 = isSame([1 , 4 , 5], [1 , 4 , 5]);
// let result5 = isSame([1 , "4" , 4] ,[1 , 4  , 4]);
// let result6 = isSame([2 , 5 , 6] ,256);
// let result7 = isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result7);






// Problem-05: Exam Result Report Generator .......................................>>>>

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let passMark = 40;
  let finalMark = 0;
  let countPassSub = 0;
  let countFailSub = 0;
  let totalMark = 0;
  for (mark of marks) {
    totalMark += mark;
    finalMark = totalMark / marks.length;
    if (mark < passMark) {
      countFailSub++;
    }
    if (mark > passMark) {
      countPassSub++;
    }
  }
  return {
    finalScore: Math.round(finalMark),
    pass: countPassSub,
    fail: countFailSub,
  };
}

// let result = resultReport([]);
// let result2 = resultReport([98, 87, 67, 91, 92, 33, 87]);
// let result3 = resultReport([99, 87, 67, 12, 87]);
// let result4 = resultReport([99]);
// let result5 = resultReport(100);
// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
