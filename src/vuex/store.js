import { createStore } from 'vuex'
export default createStore({
    state:{
        name: 'test',
        title: 'vuex', 
        count: 0,
        utr: 99,
        secretKey: '888!!!!!'
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
            return new Promise((resolve) => {
                setTimeout(()=>{
                    context.commit('setNewTitle', payload)
                    resolve('ok')
                },2000)
            })
        },
        newTitle2(context){
            context.dispatch({
                type: "newTitle", title: "title Action 2", name: 'abc'
            }).then((response)=>{
                console.log('========',response)
            })
        },
        IncrementAction({commit}, payload){
            commit('Increment', payload)
        },
        DecrementAction({commit}, payload){
            commit('Decrement', payload)
        },
       
    },
    getters: {
        hashAdd(state){
            return state.secretKey + '###'
        },
        hashNewAdd(state, getters){
            return state.utr + '/' + getters.hashAdd;
        }
    }
})