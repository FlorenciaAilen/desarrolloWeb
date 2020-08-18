

      function read(){
          
      let i = 0;
      
      if(!i){
        document.getElementById("read").innerHTML = "Read less";
        i = 1;
      }
      else{
        document.getElementById("read").innerHTML = "Read more";
        i = 0;
      }
    }

function creandoTablas (array,identificador){
let members = array.results[0].members

let table = identificador

let tbody = document.createElement('tbody')

for(let i = 0 ; i < members.length ; i++){

let tr = document.createElement('tr')
let td1 = document.createElement('td')
let a = document.createElement('a')

a.innerText = members[i].first_name + ' ' + (members[i].middle_name || '') + ' ' + members[i].last_name
a.setAttribute('href',`${members[i].url}`)
a.setAttribute('target','_blank')

td1.appendChild(a)

let td2 = document.createElement('td')
td2.innerText = members[i].party

td2.classList.add(`${members[i].party}`)

let td3 = document.createElement('td')
td3.innerText = members[i].state

let td4 = document.createElement('td')
td4.innerText = members[i].seniority

let td5 = document.createElement('td')
td5.innerText = members[i].votes_with_party_pct + '%'

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tr.appendChild(td5)

tbody.appendChild(tr)
}
table.appendChild(tbody)
}

if(document.getElementById("table-senate")){
    creandoTablas(dataSenate,document.getElementById("table-senate"))
}

if(document.getElementById("table-house")){
    creandoTablas(dataHouse,document.getElementById("table-house"))
}
