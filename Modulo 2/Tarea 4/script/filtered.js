const filtered = new Vue({
    el:"#filtered",
    data:{
        init: { 
            method:'GET',
            headers:{
                'X-API-Key': '6O9DGlnFI336AAC5hCDNIiYAbKnQLeS51hJOHaa4'
            }
        },
        members: [],
        checkedParties: ['D','R','ID'],
        states: [],
        checkedState: 'All'
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

            console.log(json.results[0].members)
            this.members = json.results[0].members

            this.allStates()
        },
        allStates: function (){
            let statesList = []
            this.members.forEach(member => statesList.includes(member.state) == false ? statesList.push(member.state) : null)
            this.states = statesList.sort()
        }
    },
    computed:{
        // computed reacciona cuando algo cambia, mas para mostar info y no recibe parametros
        filteredMembers: function (){
            return this.members.filter(e => this.checkedParties.includes(e.party) && (this.checkedState == e.state || this.checkedState == 'All' ))
        }
    },
    created: function(){
        if(document.getElementById("table-senate")){
            this.getData('https://api.propublica.org/congress/v1/113/senate/members.json');
        }

        if(document.getElementById("table-house")){
            this.getData('https://api.propublica.org/congress/v1/113/house/members.json');
        }
    }
}) 