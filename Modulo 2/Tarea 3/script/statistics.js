function numberMemberEachParty (array, statistics){
  let members = array.results[0].members;

  statistics.democrats = members.filter(member => member.party == "D");
  statistics.republicans = members.filter(member => member.party == "R");
  statistics.independent = members.filter(member => member.party == "ID");
}
  

if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
  numberMemberEachParty(dataSenate,SenateStatistics);
}

if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
  numberMemberEachParty(dataHouse,HouseStatistics);
}


  // function avgParty (array){
  
  //   let avgVotesParty = 0;
  //   let sumVotesParty = 0;

  //   for(let i = 0 ; i < array.length ; i++){
  //     sumVotesParty += array[i].votes_with_party_pct;
  //   }

  //   return Math.ceil(sumVotesParty / array.length);
  // }

  // if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
  //   SenateStatistics.avg_votes_democrats = avgParty(SenateStatistics.democrats)
  //   SenateStatistics.avg_votes_republicans = avgParty(SenateStatistics.republicans)
  //   SenateStatistics.avg_votes_independent = avgParty(SenateStatistics.independent)
  // }

  // if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
  //   HouseStatistics.avg_votes_democrats= avgParty(HouseStatistics.democrats)
  //   HouseStatistics.avg_votes_republicans = avgParty(HouseStatistics.republicans)
  //   HouseStatistics.avg_votes_independent = avgParty(HouseStatistics.independent)
  // }
  

  // function avgMissingVotesParty (array){

  //   let avgMissedVotesParty = 0;
  //   let sumMissedVotesParty = 0;
  
  //   for(let i = 0 ; i < array.length ; i++){

  //     sumMissedVotesParty += array[i].missed_votes_pct;
  //   }

    
  //   return Math.ceil(sumMissedVotesParty / array.length);
    
  // }

  // if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
  //   SenateStatistics.avg_missed_votes_democrats = avgMissingVotesParty(SenateStatistics.democrats)
  //   SenateStatistics.avg_missed_votes_republicans = avgMissingVotesParty(SenateStatistics.republicans)
  //   SenateStatistics.avg_missed_votes_independent = avgMissingVotesParty(SenateStatistics.independent)
  // }

  // if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
  //   HouseStatistics.avg_missed_votes_democrats= avgMissingVotesParty(HouseStatistics.democrats)
  //   HouseStatistics.avg_missed_votes_republicans = avgMissingVotesParty(HouseStatistics.republicans)
  //   HouseStatistics.avg_missed_votes_independent = avgMissingVotesParty(HouseStatistics.independent)
  // }

  function avgParty (array,statistics){
  
    let sumVotesParty = 0;
    let sumMissedVotesParty = 0;

    let avgVotesParty = 0;
    let avgMissedVotesParty = 0;
    
    for(let i = 0 ; i < array.length ; i++){
      sumVotesParty += array[i].votes_with_party_pct;
      sumMissedVotesParty += array[i].missed_votes_pct;
    }
 
    avgVotesParty = array.length == 0 ? 0 : Math.ceil(sumVotesParty / array.length);
    avgMissedVotesParty = array.length == 0 ? 0 : Math.ceil(sumMissedVotesParty / array.length);

    if(array.length != 0){
      if(array[0].party == 'D'){
      statistics.avg_missed_votes_democrats = avgMissedVotesParty;
      statistics.avg_votes_democrats = avgVotesParty;
      }
      else if(array[0].party == 'R'){
      statistics.avg_missed_votes_republicans = avgMissedVotesParty;
      statistics.avg_votes_republicans = avgVotesParty;
      }
    }
    else{
    statistics.avg_missed_votes_independent = avgMissedVotesParty;
    statistics.avg_votes_independent = avgVotesParty;
    }
  }

 if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
  avgParty(SenateStatistics.democrats, SenateStatistics);
  avgParty(SenateStatistics.republicans, SenateStatistics);
  avgParty(SenateStatistics.independent, SenateStatistics);
 }

 if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
  avgParty(HouseStatistics.democrats, HouseStatistics);
  avgParty(HouseStatistics.republicans, HouseStatistics);
  avgParty(HouseStatistics.independent, HouseStatistics);
 }
  
// function loyalty (array, stadistics){
//   let members = array.results[0].members;
    
//     // ENCONTRAR EL INDICE DEL MIEMBRO UBICADO EN EL 10% DEL TOTAL
//   let tenPercent = Math.round(members.length/10);
//     //ORDENAR DE MENOR A MAYOR
//   let sorted = [...members];
 
//   sorted.sort((memberA,memberB) => {return memberA.votes_with_party_pct - memberB.votes_with_party_pct})

//     //filtrar todos los que cumplan el criterio del 10%

//   let voteAtTenPct = sorted[tenPercent].votes_with_party_pct;
//   let voteAtTenPctMost = sorted[sorted.length - tenPercent].votes_with_party_pct;

//   stadistics.leastLoyal = sorted.filter(member => member.votes_with_party_pct <= voteAtTenPct);
//   stadistics.mostLoyal =  sorted.filter(member => member.votes_with_party_pct >= voteAtTenPctMost);
// }

// if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
//     loyalty(dataSenate,SenateStatistics);
// }
  
// if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
//     loyalty(dataHouse,HouseStatistics);
// }


// function attendance (array, stadistics){
//   let members = array.results[0].members;
  
//    // ENCONTRAR EL INDICE DEL MIEMBRO UBICADO EN EL 10% DEL TOTAL
//   let tenPercent = Math.round(members.length/10);
//   //ORDENAR DE MENOR A MAYOR
//   let sorted = [...members];
//   sorted.sort((memberA,memberB) => {return memberA.missed_votes_pct - memberB.missed_votes_pct})

//   //filtrar todos los que cumplan el criterio del 10%

//   let voteAtTenPct = sorted[tenPercent].missed_votes_pct;
//   let voteAtTenPctMost = sorted[sorted.length - tenPercent].missed_votes_pct;

//   stadistics.mostEngaged = sorted.filter(member => member.missed_votes_pct <= voteAtTenPct);
//   stadistics.leastEngaged =  sorted.filter(member => member.missed_votes_pct >= voteAtTenPctMost);

// }

// if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
//   attendance(dataSenate,SenateStatistics);
// }

// if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
//   attendance(dataHouse,HouseStatistics);
// }

if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
  loyaltyANDattendace(dataSenate,SenateStatistics);
}

if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
  loyaltyANDattendace(dataHouse,HouseStatistics);
}

function loyaltyANDattendace (array, stadistics){
  let members = array.results[0].members;
    
    // ENCONTRAR EL INDICE DEL MIEMBRO UBICADO EN EL 10% DEL TOTAL
  let tenPercent = Math.round(members.length/10);
    //ORDENAR DE MENOR A MAYOR
  let sortedLoyalty = [...members];
  let sortedAttendance = [...members];
 
  sortedLoyalty.sort((memberA,memberB) => {return memberA.votes_with_party_pct - memberB.votes_with_party_pct})
  sortedAttendance.sort((memberA,memberB) => {return memberA.missed_votes_pct - memberB.missed_votes_pct})
    //filtrar todos los que cumplan el criterio del 10%

  let voteAtTenPctL = sortedLoyalty[tenPercent].votes_with_party_pct;
  let voteAtTenPctMostL = sortedLoyalty[sortedLoyalty.length - tenPercent].votes_with_party_pct;

  let voteAtTenPctA = sortedAttendance[tenPercent].missed_votes_pct;
  let voteAtTenPctMostA = sortedAttendance[sortedAttendance.length - tenPercent].missed_votes_pct;

  stadistics.mostEngaged = sortedAttendance.filter(member => member.missed_votes_pct <= voteAtTenPctA);
  stadistics.leastEngaged =  sortedAttendance.filter(member => member.missed_votes_pct >= voteAtTenPctMostA);

  stadistics.leastLoyal = sortedLoyalty.filter(member => member.votes_with_party_pct <= voteAtTenPctL);
  stadistics.mostLoyal =  sortedLoyalty.filter(member => member.votes_with_party_pct >= voteAtTenPctMostL);
}

