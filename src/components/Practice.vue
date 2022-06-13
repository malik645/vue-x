<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1 class="text-violet-500">{{$store.state.name}}</h1>
  <h1 class="text-red-500">{{$store.state.title}}</h1>
  <button @click="changeTitle" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">change title</button>
  <div class="flex justify-center items-center p-5">
      <button @click="Decr" class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
    <h1 class="text-red-500">{{$store.state.count}}</h1>
  <button @click="Incr" class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'PracticeVuex',
  components: {
    // HelloWorld
  },
  
  methods: {
    
    changeTitle(){
        // this.$store.commit("setNewTitle", "new title changed")
        // this.$store.commit("setNewTitle", {title: "new title changed", name: "tester"})
        // this.$store.commit({type: "setNewTitle", title: "new title changed", name: "tester"})
      this.$store.dispatch({type: "newTitle", title: "title Action", name: 'abc'})

    },
    Incr(){
        // this.$store.commit("Increment", 5)
        this.$store.dispatch("IncrementAction", 5)
    },
     Decr(){
        // this.$store.commit("Decrement", 1)
        this.$store.dispatch("DecrementAction", 1)
    }
  }
}
</script>


