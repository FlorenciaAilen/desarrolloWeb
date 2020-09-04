// LOYALTY
// CREANDO LA TABLA AT GLANCE
function createTabletGlance (array,identificador,addOrLoy){
    let table = identificador;


    let thead = document.createElement("thead");
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let tr2 = document.createElement('tr');
    let tr3 = document.createElement('tr');
    let tr4 = document.createElement('tr');
    let tr5 = document.createElement('tr');
  
    let th1 = document.createElement('th');
    th1.innerText = "Party";
  
    let th2 = document.createElement('th');
    th2.innerText = "N° of representants";
  
    let th3 = document.createElement('th');
    th3.innerText = addOrLoy == "loyal" ? "% voted with party" : "% Missed Voted with Party";
  
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);


    let th4 = document.createElement('th');
    th4.innerText = "Democrats";
    tr2.appendChild(th4);

    let th5 = document.createElement('th');
    th5.innerText = "Republicans";
    tr3.appendChild(th5);

    let th6 = document.createElement('th');
    th6.innerText = "Independent";
    tr4.appendChild(th6);

    let th7 = document.createElement('th');
    th7.innerText = "Total";
    tr5.appendChild(th7);

    thead.appendChild(tr);
    table.appendChild(thead);
    
 // rellenando tabla

 // democratas
    let td1 = document.createElement('td');
    td1.innerText = array.democrats.length
    tr2.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerText = addOrLoy == "loyal" ? `${array.avg_votes_democrats}%` : `${array.avg_missed_votes_democrats}%`;
    tr2.appendChild(td2);

    tbody.appendChild(tr2);

    // republicanos
    let td3 = document.createElement('td');
    td3.innerText = array.republicans.length
    tr3.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerText = addOrLoy == "loyal" ? `${array.avg_votes_republicans}%` :  `${array.avg_missed_votes_republicans}%`;
    tr3.appendChild(td4);

    tbody.appendChild(tr3);

    // independientes 

    let td5 = document.createElement('td');
    td5.innerText = array.independent.length
    tr4.appendChild(td5);

    let td6 = document.createElement('td');
    td6.innerText = addOrLoy == "loyal" ? `${array.avg_votes_independent}%` :  `${array.avg_missed_votes_independent}%`; 
    tr4.appendChild(td6);

    // total
    let td7 = document.createElement('td');
    td7.innerText = array.members_total;
    tr5.appendChild(td7);

    let td8 = document.createElement('td');
    td8.innerText = addOrLoy == "loyal" ? `${array.avg_votes_total}%` : `${array.avg_missed_votes_total}%`  ;
    tr5.appendChild(td8);


    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);
    tbody.appendChild(tr5);

    table.appendChild(tbody);
}

if(document.getElementById("table-senate-loyalty")){
    createTabletGlance(SenateStatistics,document.getElementById("table-senate-loyalty"),"loyal");
  }
  
if(document.getElementById("table-house-loyalty")){
    createTabletGlance(HouseStatistics,document.getElementById("table-house-loyalty"),"loyal");
}

if(document.getElementById("table-senate-attendance")){
    createTabletGlance(SenateStatistics,document.getElementById("table-senate-attendance"),"attendance");
}

if(document.getElementById("table-house-attendance")){
    createTabletGlance(HouseStatistics,document.getElementById("table-house-attendance"),"attendance");
}

// tablas de menos y mas leal y menos y mas comprometidos
function createTabletLoyaltyandAttendance (array,identificador,addOrLoy){
    let table = identificador;

    let thead = document.createElement("thead");
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    let th1 = document.createElement('th');
    th1.innerText = "Name";
  
    let th2 = document.createElement('th');
    th2.innerText = addOrLoy == "loyal" ? "N° Party Votes" : "N° Missed Votes";
  
    let th3 = document.createElement('th');
    th3.innerText = addOrLoy == "loyal" ? "% Party Votes" : "% Missed";
  
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    thead.appendChild(tr);
    table.appendChild(thead);

    for(let i = 0 ; i < array.length ; i++){

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerText =  array[i].first_name + ' ' + (array[i].middle_name || '') + ' ' + array[i].last_name;
        td2.innerText = addOrLoy == "loyal" ? array[i].total_votes : array[i].missed_votes;
        td3.innerText = addOrLoy == "loyal" ? `${array[i].votes_with_party_pct}%` : `${array[i].missed_votes_pct}%`;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}

if(document.getElementById("table-senate-least-loyalty") || document.getElementById("table-senate-most-loyalty")){
    createTabletLoyaltyandAttendance(SenateStatistics.leastLoyal,document.getElementById("table-senate-least-loyalty"),"loyal");
    createTabletLoyaltyandAttendance(SenateStatistics.mostLoyal,document.getElementById("table-senate-most-loyalty"),"loyal");

}
  
if(document.getElementById("table-house-least-loyalty") || document.getElementById("table-house-most-loyalty")){
    createTabletLoyaltyandAttendance(HouseStatistics.leastLoyal,document.getElementById("table-house-least-loyalty"),"loyal");
    createTabletLoyaltyandAttendance(HouseStatistics.mostLoyal,document.getElementById("table-house-most-loyalty"),"loyal");
}

if(document.getElementById("table-senate-least-engaged") || document.getElementById("table-senate-most-engaged")){
    createTabletLoyaltyandAttendance(SenateStatistics.leastEngaged,document.getElementById("table-senate-least-engaged"),"attendance");
    createTabletLoyaltyandAttendance(SenateStatistics.mostEngaged,document.getElementById("table-senate-most-engaged"),"attendance");

}
  
if(document.getElementById("table-house-least-engaged") || document.getElementById("table-house-most-engaged")){
    createTabletLoyaltyandAttendance(HouseStatistics.leastEngaged,document.getElementById("table-house-least-engaged"),"attendance");
    createTabletLoyaltyandAttendance(HouseStatistics.mostEngaged,document.getElementById("table-house-most-engaged"),"attendance");
}




