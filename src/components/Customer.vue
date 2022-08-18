<template>
  
   <div class="container">
      <div class="row">
          <div class="column">
              <p>Customer Data</p>
              <ul class="list-group">
                  <li class="list-group-item">Name : {{name}}</li>
                  <li class="list-group-item">Age : {{age}}</li>
                  <li class="list-group-item">designation: {{designation}}</li>
              </ul>
          </div>
      </div>
   </div>
</template>

<script>
export default {
  name:'Customer',
   props:{ 
       age: {type: Number, required: true},
        name: {type: String, required: true},
        designation: {type: String, required: true}

       }
}
</script>

<style>

</style>