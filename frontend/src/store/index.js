import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Selected:null,
    GoalKeeper:[],
    backField:[],
    middleField:[],
    forwardField:[]
  },
  mutations: {
    changeSelected (state, newValue){
      state.Selected = newValue
    },
    changeGoalKeeper (state, newValue){
      state.GoalKeeper.push(newValue)
    },
    changeBackField (state, newValue){
      state.backField.push(newValue)
    },
    changeMiddleField (state, newValue){
      state.middleField.push(newValue)
    },
    changeForwardField (state, newValue){
      state.forwardField.push(newValue)
    }
  },
  actions: {
    async getPlayersGoalKepper(context){ 
      let getData = await fetch('http://localhost:3000/GoalKepper')
      let data = await getData.json()
      console.log(data)
      for(let i = 0; i < 4; i++){
        let RP = Math.floor(Math.random() * 71);
        context.commit('changeGoalKeeper', data[RP])
      }   
      context.commit('changeSelected', context.state.GoalKeeper)
    },
    async getPlayersBackField(context){ 
      let getData = await fetch('http://localhost:3000/BackField')
      let data = await getData.json()
      console.log(data)
      for(let i = 0; i < 4; i++){
        let RP = Math.floor(Math.random() * 216);
        context.commit('changeBackField', data[RP])
      }  
      context.commit('changeSelected', context.state.backField)
    },
    async getPlayersMidField(context){ 
      let getData = await fetch('http://localhost:3000/MidField')
      let data = await getData.json()
      console.log(data)
      for(let i = 0; i < 4; i++){
        let RP = Math.floor(Math.random() * 243);
        context.commit('changeMiddleField', data[RP])
      }  
      context.commit('changeSelected', context.state.middleField)
    },
    async getPlayersFrontField(context, id){ 
      let getData = await fetch('http://localhost:3000/FrontField')
      let data = await getData.json()
      console.log(data)
      for(let i = 0; i < 4; i++){
        let RP = Math.floor(Math.random() * 129);
        context.commit('changeForwardField', data[RP])
      }  
      context.commit('changeSelected', ["frontField", context.state.forwardField, id]) //Adding the Selected Info to the Prop that is going to pass to the Selected Player
      console.log(context.state.Selected)
    }
  },
  getters:{
    getSelected:state => state.Selected,
    getGoalKeeper: state => state.GoalKeeper,
    getBackField: state => state.backField,
    getMiddleField: state => state.middleField,
    getForwardField: state => state.forwardField
  },
  modules: {
  }
})
