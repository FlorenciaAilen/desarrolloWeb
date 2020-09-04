// LOYALTY
// CREANDO LA TABLA AT GLANCE
function createTabletGlance (array,identificador){
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
    th3.innerText = "% voted with party";
  
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
    td2.innerText = array.avg_votes_democrats + "%";
    tr2.appendChild(td2);

    tbody.appendChild(tr2);

    // republicanos
    let td3 = document.createElement('td');
    td3.innerText = array.republicans.length
    tr3.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerText = array.avg_votes_republicans + "%";
    tr3.appendChild(td4);

    tbody.appendChild(tr3);

    // independientes 

    let td5 = document.createElement('td');
    td5.innerText = array.independent.length
    tr4.appendChild(td5);

    let td6 = document.createElement('td');
    td6.innerText = array.avg_votes_independent + "%" ; 
    tr4.appendChild(td6);

    // total
    let td7 = document.createElement('td');
    td7.innerText = array.members_total;
    tr5.appendChild(td7);

    let td8 = document.createElement('td');
    td8.innerText = array.avg_votes_total + "%"  ;
    tr5.appendChild(td8);


    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);
    tbody.appendChild(tr5);

    table.appendChild(tbody);
}

if(document.getElementById("table-senate-loyalty")){
    createTabletGlance(SenateStatistics,document.getElementById("table-senate-loyalty"));
  }
  
if(document.getElementById("table-house-loyalty")){
    createTabletGlance(HouseStatistics,document.getElementById("table-house-loyalty"));
  }


// tablas de menos y mas leal
function createTabletLoyalty (array,identificador){
    let table = identificador;

    let thead = document.createElement("thead");
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    let th1 = document.createElement('th');
    th1.innerText = "Name";
  
    let th2 = document.createElement('th');
    th2.innerText = "N° Party Votes";
  
    let th3 = document.createElement('th');
    th3.innerText = "% Party Votes";
  
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
        td2.innerText = array[i].total_votes;
        td3.innerText = array[i].votes_with_party_pct + "%";

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}

if(document.getElementById("table-senate-least-loyalty") || document.getElementById("table-senate-most-loyalty")){
    createTabletLoyalty(SenateStatistics.leastLoyal,document.getElementById("table-senate-least-loyalty"));
    createTabletLoyalty(SenateStatistics.mostLoyal,document.getElementById("table-senate-most-loyalty"));

}
  
if(document.getElementById("table-house-least-loyalty") || document.getElementById("table-house-most-attendance")){
    createTabletLoyalty(HouseStatistics.leastLoyal,document.getElementById("table-house-least-loyalty"));
    createTabletLoyalty(HouseStatistics.mostLoyal,document.getElementById("table-house-most-loyalty"));
}


// ATTENDANCE

function createTabletGlanceAttendance (array,identificador){
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
    th2.innerText = "N° of Representants";
  
    let th3 = document.createElement('th');
    th3.innerText = "% Missed Voted with Party";
  
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
    td2.innerText = array.avg_missed_votes_democrats + "%";
    tr2.appendChild(td2);

    tbody.appendChild(tr2);

    // republicanos
    let td3 = document.createElement('td');
    td3.innerText = array.republicans.length
    tr3.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerText = array.avg_missed_votes_republicans + "%";
    tr3.appendChild(td4);

    tbody.appendChild(tr3);

    // independientes 

    let td5 = document.createElement('td');
    td5.innerText = array.independent.length
    tr4.appendChild(td5);

    let td6 = document.createElement('td');
    td6.innerText = array.avg_missed_votes_independent + "%" ; 
    tr4.appendChild(td6);

    // total
    let td7 = document.createElement('td');
    td7.innerText = array.members_total;
    tr5.appendChild(td7);

    let td8 = document.createElement('td');
    td8.innerText = array.avg_missed_votes_total + "%"  ;
    tr5.appendChild(td8);

    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);
    tbody.appendChild(tr5);

    table.appendChild(tbody);
}

if(document.getElementById("table-senate-attendance")){
    createTabletGlanceAttendance(SenateStatistics,document.getElementById("table-senate-attendance"));
}
  
if(document.getElementById("table-house-attendance")){
    createTabletGlanceAttendance(HouseStatistics,document.getElementById("table-house-attendance"));
}

  // tablas de los que son menos y mas comprometidos
function createTabletEngaged (array,identificador){
    let table = identificador;

    let thead = document.createElement("thead");
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    let th1 = document.createElement('th');
    th1.innerText = "Name";
  
    let th2 = document.createElement('th');
    th2.innerText = "N° Missed Votes";
  
    let th3 = document.createElement('th');
    th3.innerText = "% Missed";
  
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
        td2.innerText = array[i].missed_votes;
        td3.innerText = array[i].missed_votes_pct + "%";

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}

if(document.getElementById("table-senate-least-engaged") || document.getElementById("table-senate-most-engaged")){
    createTabletEngaged(SenateStatistics.leastEngaged,document.getElementById("table-senate-least-engaged"));
    createTabletEngaged(SenateStatistics.mostEngaged,document.getElementById("table-senate-most-engaged"));

}
  
if(document.getElementById("table-house-least-engaged") || document.getElementById("table-house-most-engaged")){
    createTabletEngaged(HouseStatistics.leastEngaged,document.getElementById("table-house-least-engaged"));
    createTabletEngaged(HouseStatistics.mostEngaged,document.getElementById("table-house-most-engaged"));
}
