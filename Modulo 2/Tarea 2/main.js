//BOTON DE HOME DE LEER MAS O LEER MENOS
let i = 0
function read(){

  if(!i){
    document.getElementById("read").innerHTML = "Read less";
    i = 1;
  }
  else{
    document.getElementById("read").innerHTML = "Read more";
    i = 0;
    }
}

//CREANDO LAS TABLAS DE SENADORES Y DE CONGRESS
function creandoTablas (array,identificador){
  let members = array.results[0].members;

  let table = identificador;

  let thead = document.createElement("thead");
  let tr = document.createElement('tr');

  let th1 = document.createElement('th');
  th1.innerText = "Name";

  let th2 = document.createElement('th');
  th2.innerText = "Party";

  let th3 = document.createElement('th');
  th3.innerText = "State";

  let th4 = document.createElement('th');
  th4.innerText = "Seniority";

  let th5 = document.createElement('th');
  th5.innerText = "Total Votes";

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);

  thead.appendChild(tr);

  table.appendChild(thead);

  let tbody = document.createElement('tbody');

  for(let i = 0 ; i < members.length ; i++){

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let a = document.createElement('a');

    a.innerText = members[i].first_name + ' ' + (members[i].middle_name || '') + ' ' + members[i].last_name;
    a.setAttribute('href',`${members[i].url}`);
    a.setAttribute('target','_blank');

    td1.appendChild(a);

    let td2 = document.createElement('td');
    td2.innerText = members[i].party;

    let td3 = document.createElement('td');
    td3.innerText = members[i].state;
    td3.classList.add("state");

    let td4 = document.createElement('td');
    td4.innerText = members[i].seniority;

    let td5 = document.createElement('td');
    td5.innerText = members[i].votes_with_party_pct + '%';

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
}

if(document.getElementById("table-senate")){
    creandoTablas(dataSenate,document.getElementById("table-senate"));
}

if(document.getElementById("table-house")){
    creandoTablas(dataHouse,document.getElementById("table-house"));
}

// FILTROS PARA LA TABLA

// AGREGANDO UN LISTENER A LOS CHECKBOXES

document.querySelectorAll("input[name=party]").forEach(e => e.addEventListener('change',function(){createTable(dataSenate, document.getElementById("table-senate"))}));
document.querySelectorAll("input[name=party]").forEach(e => e.addEventListener('change',function(){createTable(dataHouse, document.getElementById("table-house"))}));
document.querySelector("#state-filter").addEventListener('change',function(){createTable(dataSenate, document.getElementById("table-senate"))});
document.querySelector("#state-filter").addEventListener('change',function(){createTable(dataHouse, document.getElementById("table-house"))});

function createTable (array, identificador){
  let members = array.results[0].members;
  let table = identificador;

  //LIMPIANDO LA TABLA QUE ANTERIORMENTE ESTABA CREADA
  table.innerHTML = '';

  //creando el thead con su respectivo tr y th
  let thead = document.createElement("thead");
  let tr = document.createElement('tr');

  let th1 = document.createElement('th');
  th1.innerText = "Name";

  let th2 = document.createElement('th');
  th2.innerText = "Party";

  let th3 = document.createElement('th');
  th3.innerText = "State";

  let th4 = document.createElement('th');
  th4.innerText = "Seniority";

  let th5 = document.createElement('th');
  th5.innerText = "Total Votes";

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);

  thead.appendChild(tr);

  table.appendChild(thead);  //FIN DEL THEAD

  //CREANDO EL TBODY
  let tbody = document.createElement('tbody');
  // CREANDO UN ARRAY CON LOS CHECKBOXES QUE ESTAN SELECCIONADOS
  let checkedParties = Array.from(document.querySelectorAll("input[name=party]:checked")).map(e=> e.value);
  let checkedStates = $("#state-filter").val();

  

  for(let i = 0 ; i < members.length ; i++){

    // COMPROBANDO QUE SE MUSTRE SOLO LOS MIEMBROS QUE TIENEN UN PARTIDO QUE ESTA SELECCIONADO
    if(checkedParties.includes(members[i].party) && members[i].state == checkedStates){

      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let a = document.createElement('a');

      a.innerText = members[i].first_name + ' ' + (members[i].middle_name || '') + ' ' + members[i].last_name;
      a.setAttribute('href',`${members[i].url}`);
      a.setAttribute('target','_blank');

      td1.appendChild(a);

      let td2 = document.createElement('td');
      td2.innerText = members[i].party;

      let td3 = document.createElement('td');
      td3.innerText = members[i].state;
      td3.classList.add("state")

      let td4 = document.createElement('td');
      td4.innerText = members[i].seniority;

      let td5 = document.createElement('td');
      td5.innerText = members[i].votes_with_party_pct + '%';

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tbody.appendChild(tr);

    }
    else if(checkedParties.includes(members[i].party) && "All" == checkedStates){
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let a = document.createElement('a');

      a.innerText = members[i].first_name + ' ' + (members[i].middle_name || '') + ' ' + members[i].last_name;
      a.setAttribute('href',`${members[i].url}`);
      a.setAttribute('target','_blank');

      td1.appendChild(a);

      let td2 = document.createElement('td');
      td2.innerText = members[i].party;

      let td3 = document.createElement('td');
      td3.innerText = members[i].state;
      td3.classList.add("state")

      let td4 = document.createElement('td');
      td4.innerText = members[i].seniority;

      let td5 = document.createElement('td');
      td5.innerText = members[i].votes_with_party_pct + '%';

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tbody.appendChild(tr);
    }
    else if (checkedParties.length == 0){
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let a = document.createElement('a');

      a.innerText = members[i].first_name + ' ' + (members[i].middle_name || '') + ' ' + members[i].last_name;
      a.setAttribute('href',`${members[i].url}`);
      a.setAttribute('target','_blank');

      td1.appendChild(a);

      let td2 = document.createElement('td');
      td2.innerText = members[i].party;

      let td3 = document.createElement('td');
      td3.innerText = members[i].state;
      td3.classList.add("state")

      let td4 = document.createElement('td');
      td4.innerText = members[i].seniority;

      let td5 = document.createElement('td');
      td5.innerText = members[i].votes_with_party_pct + '%';

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tbody.appendChild(tr);

    }
    
  }
    // AGREFANDO EL TBODY AL TABLE
    table.appendChild(tbody);
}



// function updateUI() {

//   let state = $("#state-filter").val();
//   var states = state ? [ state ] : [];

//     $("#table-senate tbody tr").each(function () {
//       var state = $(this).find(".state").text();
//       var stateSelected = isIncluded(state, states);
//       $(this).toggle(stateSelected);
//     });

// }

// // x is included if lst is empty or contains x
// function isIncluded(x, lst) {
//   return lst.length === 0 || lst.indexOf(x) != -1;
// }

// $("#filter-form").on("change", updateUI);

function addState(array){
  let members = array.results[0].members;
  let states = [];

  for(let i = 0; i < members.length ; i++){
    states.push(members[i].state)

  }

  let statesRepeats = sinRepetir(states);
  let select = document.getElementById("state-filter");
  let option = document.createElement('option');
  option.innerText = "All";
  option.setAttribute('value','All');
  select.appendChild(option);

  for(let i = 0; i < statesRepeats.length ; i++){
    let option = document.createElement('option');
    option.innerText = statesRepeats[i];
    option.setAttribute('name','state');
    option.setAttribute('value',`${statesRepeats[i]}`);
    select.appendChild(option);
  }

}

if(document.getElementById("table-senate")){
  addState(dataSenate);
}

if(document.getElementById("table-house")){
  addState(dataHouse);
}

function sinRepetir (array){

  array.sort();
  var sinRepetidos = [];

 for (var i = 0 ; i < array.length ; i++){

      for(var y = (1+i); y < array.length ; y ++){

          if (sinRepetidos[sinRepetidos.length - 1] != array[i]){
            sinRepetidos.push(array[i]);
          }


      }
  }
  return sinRepetidos;
}
