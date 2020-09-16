const statistics = new Vue({
    el:"#statistics",
    data: {
        init: { 
            method:'GET',
            headers:{
                'X-API-Key': '6O9DGlnFI336AAC5hCDNIiYAbKnQLeS51hJOHaa4'
            }
        },
        members: [],
        democrats:[],
        republicans:[],
        independent:[],
        members_total:undefined,
        avg_votes_democrats:undefined,
        avg_votes_republicans:undefined,
        avg_votes_independent:undefined,
        avg_votes_total:undefined,
        leastLoyal: [],
        mostLoyal:[],
        avg_missed_votes_democrats:undefined,
        avg_missed_votes_republicans:undefined,
        avg_missed_votes_independent:undefined,
        avg_missed_votes_total:undefined,
        leastEngaged:[],
        mostEngaged:[]
    },
    methods:{
        getData: async function(api){
        
            let promise = await fetch(api,this.init) // fetch se comunica con la base de datos
            let isOk = promise.ok
            let json
            if(isOk){
                json = await promise.json()
            } else{
                alert(promise.status)
                return 0;
            }

            //guardando a todos los miembros
            this.members       = json.results[0].members
            //guardando cantidad de miembros
            this.members_total = this.members.length;

            // filtrando cantidad de miembros por partido
            this.democrats     = this.members.filter(member => member.party == "D");
            this.republicans   = this.members.filter(member => member.party == "R");
            this.independent   = this.members.filter(member => member.party == "ID");

            // calculando porcentaje de los diferentes partidos
            this.avgParties(this.democrats);
            this.avgParties(this.independent);
            this.avgParties(this.republicans);

            // FILTRANDO EL 10% DE LOS MIEMBROS QUE CUMPLEN CIERTA CONDICION
            this.loyaltyANDattendace();
        },
        avgParties: function (array){
            //sumando todos los promedios en total de todos los partidos
                    
            let sumTotalAvg    = 0;
            let sumTotalMissed = 0;

            this.members.forEach(member => sumTotalAvg += member.votes_with_party_pct);
            this.members.forEach(member => sumTotalMissed += member.missed_votes_pct);

            this.avg_votes_total        = Math.ceil(sumTotalAvg / this.members_total);
            this.avg_missed_votes_total =  Math.ceil(sumTotalMissed / this.members_total);

            // calculando porcentaje de los diferentes partidos

            let sumVotesParty = 0;
            let sumMissedVotesParty = 0;

            let avgVotesParty = 0;
            let avgMissedVotesParty = 0;

            for(let i = 0 ; i < array.length ; i++){
            sumVotesParty       += array[i].votes_with_party_pct;
            sumMissedVotesParty += array[i].missed_votes_pct;
            }

            avgVotesParty       = array.length == 0 ? 0 : Math.ceil(sumVotesParty / array.length);
            avgMissedVotesParty = array.length == 0 ? 0 : Math.ceil(sumMissedVotesParty / array.length);

            if(array.length != 0){
                if(array[0].party == 'D'){
                    this.avg_missed_votes_democrats = avgMissedVotesParty;
                    this.avg_votes_democrats        = avgVotesParty;
                }
                else if(array[0].party == 'R'){
                    this.avg_missed_votes_republicans = avgMissedVotesParty;
                    this.avg_votes_republicans        = avgVotesParty;
                } else{
                    this.avg_missed_votes_independent = avgMissedVotesParty;
                    this.avg_votes_independent        = avgVotesParty;
                }
            } else{
                this.avg_missed_votes_independent = avgMissedVotesParty;
                this.avg_votes_independent        = avgVotesParty;
            }
        },
        loyaltyANDattendace: function(){
             // ENCONTRAR EL INDICE DEL MIEMBRO UBICADO EN EL 10% DEL TOTAL
            let tenPercent = Math.round(this.members.length/10);
            
            //ORDENAR DE MENOR A MAYOR
            let sortedLoyalty    = [...this.members];
            let sortedAttendance = [...this.members];
            
            sortedLoyalty.sort((memberA,memberB)    => {return memberA.votes_with_party_pct - memberB.votes_with_party_pct})
            sortedAttendance.sort((memberA,memberB) => {return memberA.missed_votes_pct - memberB.missed_votes_pct})
            
            //filtrar todos los que cumplan el criterio del 10%

            let voteAtTenPctL     = sortedLoyalty[tenPercent].votes_with_party_pct;
            let voteAtTenPctMostL = sortedLoyalty[sortedLoyalty.length - tenPercent].votes_with_party_pct;

            let voteAtTenPctA     = sortedAttendance[tenPercent].missed_votes_pct;
            let voteAtTenPctMostA = sortedAttendance[sortedAttendance.length - tenPercent].missed_votes_pct;

            this.mostEngaged  = sortedAttendance.filter(member => member.missed_votes_pct <= voteAtTenPctA);
            this.leastEngaged =  sortedAttendance.filter(member => member.missed_votes_pct >= voteAtTenPctMostA);

            this.leastLoyal = sortedLoyalty.filter(member => member.votes_with_party_pct <= voteAtTenPctL);
            this.mostLoyal  =  sortedLoyalty.filter(member => member.votes_with_party_pct >= voteAtTenPctMostL);
        }
    },
    created: function(){
        
        if(document.getElementById("table-senate-loyalty") || document.getElementById("table-senate-attendance")){
            this.getData('https://api.propublica.org/congress/v1/113/senate/members.json')
        }

        if(document.getElementById("table-house-loyalty") || document.getElementById("table-house-attendance")){
            this.getData('https://api.propublica.org/congress/v1/113/house/members.json');
        }
    }
})




