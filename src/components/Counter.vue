<template>
  
  <div class="container">
      <div class="row">
          <div class="column-md-4">
              <div class="card">
                  <h2>Event handling</h2>
                  <p>Counter: {{this.count}}</p>
                  <button class="btn btn-success m-1" @click="incr">Increment</button>
                  <button class="btn btn-warning m-1" @click="decr">Decrement</button>
                  <button class="btn btn-primary m-1" @click="reset">Reset</button>
              </div>
              <div class="column-md-4">
                  <h2>Passing eventhandler with params</h2>
                  <p>Good {{this.msg}}</p>
                  <button class="btn btn-success m-1" @click="greet('morning')">Morning</button>
                  <button class="btn btn-warning m-1" @click="greet('afternoon')">AfterNoon</button>
                  <button class="btn btn-primary m-1" @click="greet('evening')">Evening</button>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'Counter',
  data: () => {
      return {count:0, msg:''}
      },
 methods:{
     incr(){this.count++;} ,
     decr(){this.count=this.count-1},
     reset() {this.count=0},
     greet(val){this.msg= val}
         
 }  


}
</script>

<style>

</style>