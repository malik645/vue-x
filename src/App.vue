<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <h1 class="text-violet-500">{{$store.state.name}}</h1>
  <h1 class="text-red-500">{{$store.state.title}}</h1>
  <button @click="mapActionTitle({title: 'map Action Title'})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">change title</button>
  <div class="flex justify-center items-center p-5">
      <button @click="Decr" class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
    <h1 class="text-red-500">{{$store.state.count}}</h1>
  <button @click="Incr" class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
  </div> 
  <h1 class="text-blue-900">{{ privateKey }}</h1>
  <span class="text-violet-900">{{ sample }}</span>
<!-- <Practice/> -->
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<button @click="reverseText">Click Me</button>
  <button @click="append">Append "!"</button>

</template>

<script>
// import Practice from './components/Practice.vue'
// import HelloWorld from './components/HelloWorld.vue'
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    // Practice
    // HelloWorld
  },
  data(){
    return{
      message: 'Hello World!'
    }
  },
  computed: {
    ...mapState({
      sample: (state)=> state.name
  }),
    ...mapGetters({
    privateKey: 'hashAdd'
  }),
      // privateKey(){
      //   return this.$store.getters.hashNewAdd;
      // }
  },
  methods: {
    ...mapActions({
      mapActionTitle: 'newTitle2'
    }),
    // changeTitle(){
        // this.$store.commit("setNewTitle", "new title changed")
        // this.$store.commit("setNewTitle", {title: "new title changed", name: "tester"})
        // this.$store.commit({type: "setNewTitle", title: "new title changed", name: "tester"})

        // --------- Action 1 --------

      //    this.$store.dispatch({
      // type: "newTitle", title: "title Action", name: 'abc'})

      // --------- Action 2 --------

      // this.$store.dispatch({
      // type: "newTitle", title: "title Action", name: 'abc'}).then((response) =>{
      //   console.log('called', response)
      // })

       // --------- Action 3 --------

    // this.$store.dispatch({
    //   type: "newTitle2", title: "title Action2", name: 'abc'}).then((response) =>{
    //     console.log('called', response)
    //   })

    // },
    Incr(){
        // this.$store.commit("Increment", 5)
        this.$store.dispatch("IncrementAction", 5)
    },
     Decr(){
        // this.$store.commit("Decrement", 1)
        this.$store.dispatch("DecrementAction", 1)
    },
    reverseText(){
      this.message = this.message.split('').reverse().join('')
    },
    append(){
      this.maessage = this.message += "!"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
