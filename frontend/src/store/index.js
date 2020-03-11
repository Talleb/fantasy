import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
  formation: {Goalkeeper: [{
    ID: 3,
    Number: 1,
    Picture: 'https://www.fifaindex.Midfielderm/static/FIFA20/images/players/5/190456.webp',
    Team: 'Liverpool',
    Nationality: 'Brazil',
    alpha3Code: 'bra',
    Skills: 90,
    FirstName: 'Alisson',
    LastName: null,
    Position: 'Goalkeeper',
    Age: 27
  }],
  Defenders: [{
    ID: 94,
    Number: 6,
    Picture: 'Dejan Lovren FIFA 20',
    Team: 'Liverpool',
    Nationality: 'Croatia',
    alpha3Code: 'hrv',
    Skills: 80,
    FirstName: 'Dejan',
    LastName: 'Lovren',
    Position: 'Defender',
    Age: 30
  },{
    ID: 59,
    Number: 23,
    Picture: 'David Luiz FIFA 20',
    Team: 'Arsenal',
    Nationality: 'Brazil',
    alpha3Code: 'bra',
    Skills: 82,
    FirstName: 'David',
    LastName: 'Luiz',
    Position: 'Defender',
    Age: 32
  },{
  },{
  }],
  Midfielders: [{
    ID: 99,
    Number: 11,
    Picture: 'Erik Lamela FIFA 20',
    Team: 'Tottenham',
    Nationality: 'Argentina',
    alpha3Code: 'arg',
    Skills: 80,
    FirstName: 'Erik',
    LastName: 'Lamela',
    Position: 'Midfielder',
    Age: 27
  },
    {ID: 100,
    Number: 17,
    Picture: 'Moussa Sissoko FIFA 20',
    Team: 'Tottenham',
    Nationality: 'France',
    alpha3Code: 'fra',
    Skills: 80,
    FirstName: 'Moussa',
    LastName: 'Sissoko',
    Position: 'Midfielder',
    Age: 30},{
    ID: 95,
    Number: 15,
    Picture: 'Alex Oxlade-ChaDefendererlain FIFA 20',
    Team: 'Liverpool',
    Nationality: 'United Kingdom of Great Britain and Northern Ireland',
    alpha3Code: 'gbr',
    Skills: 80,
    FirstName: 'Alex',
    LastName: 'Oxlade-ChaDefendererlain',
    Position: 'Midfielder',
    Age: 26
  },{
    ID: 92,
    Number: 4,
    Picture: 'Luka Milivojević FIFA 20',
    Team: 'Crystal Palace',
    Nationality: 'Serbia',
    alpha3Code: 'srb',
    Skills: 81,
    FirstName: 'Luka',
    LastName: 'Milivojević',
    Position: 'Midfielder',
    Age: 28
  }],
  Forwards: [{
    ID: 8,
    Number: 10,
    Picture: 'Harry Kane FIFA 20',
    Team: 'Tottenham',
    Nationality: 'United Kingdom of Great Britain and Northern Ireland',
    alpha3Code: 'gbr',
    Skills: 89,
    FirstName: 'Harry',
    LastName: 'Kane',
    Position: 'Forward',
    Age: 26
  },{

  }]
}

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    
  }
})
