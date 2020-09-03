// FILTRAR MIEMBROS POR PARTIDO
function numberMemberEachParty (array, statistics){
  let members = array.results[0].members;

  statistics.members_total = members.length;
  statistics.democrats = members.filter(member => member.party == "D");
  statistics.republicans = members.filter(member => member.party == "R");
  statistics.independent = members.filter(member => member.party == "ID");
}
  
// LLAMANDO A numberMemberEachParty
if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
  numberMemberEachParty(dataSenate,SenateStatistics);
}

if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
  numberMemberEachParty(dataHouse,HouseStatistics);
}


// CALCULAR ESTADISTICAS
  function avgParty (array,statistics,arrayMember){

    //sumando todos los promedios en total de todos los partidos
    let members = arrayMember.results[0].members;

    let sumTotalAvg = 0;
    let sumTotalMissed = 0;

    members.forEach(member => sumTotalAvg += member.votes_with_party_pct);
    members.forEach(member => sumTotalMissed += member.missed_votes_pct);

    statistics.avg_votes_total = Math.ceil(sumTotalAvg / members.length);
    statistics.avg_missed_votes_total =  Math.ceil(sumTotalMissed / members.length);

    // calculando porcentaje de los diferentes partidos
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
      else{
        statistics.avg_missed_votes_independent = avgMissedVotesParty;
        statistics.avg_votes_independent = avgVotesParty;
      }
    }
   
  }

  //LLAMANDO A LA FUNCION
 if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
  avgParty(SenateStatistics.democrats, SenateStatistics,dataSenate);
  avgParty(SenateStatistics.republicans, SenateStatistics,dataSenate);
  avgParty(SenateStatistics.independent, SenateStatistics,dataSenate);
 }

 if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
  avgParty(HouseStatistics.democrats, HouseStatistics,dataHouse);
  avgParty(HouseStatistics.republicans, HouseStatistics,dataHouse);
  avgParty(HouseStatistics.independent, HouseStatistics,dataHouse);
 }
  

 // FILTRANDO EL 10% DE LOS MIEMBROS QUE CUMPLEN CIERTA CONDICION
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

//LLAMANDO A LA FUNCION
if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
  loyaltyANDattendace(dataSenate,SenateStatistics);
}

if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
  loyaltyANDattendace(dataHouse,HouseStatistics);
}
