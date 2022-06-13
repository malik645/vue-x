import { createStore } from 'vuex'
export default createStore({
    state:{
        name: 'test',
        title: 'vuex', 
        count: 0
    },
    mutations:{
        setNewTitle(state, payload){
            state.title =  "Name is:"+" "+payload.name+ " " +"title is:" + payload.title
        },
        Increment(state, payload){
            state.count += payload
        },
        Decrement(state, payload){
            state.count -= payload
        }
    },
    actions: {
        newTitle(context, payload){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    context.commit('setNewTitle', payload)
                    resolve('ok')
                },2000)
            })
        },
        IncrementAction({commit}, payload){
            commit('Increment', payload)
        },
        DecrementAction({commit}, payload){
            commit('Decrement', payload)
        }
    }
})