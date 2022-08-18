<template>
  <div class="container">
      <div class="row">
          <div class="column">
              <h2>Passing data from state</h2>
              <p>This is employee components</p>
              <ul class="list-group">
                  <li class="list-group-item">Name: {{this.employee.name}}</li>
                  <li class="list-group-item">Age: {{this.employee.age}}</li>
                  <li class="list-group-item">Job: {{this.employee.job}}</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Employee',
  data: () => {  //state
      return {
          employee:{
              name:"Kristi",
              age:31,
              job: "CA"
              }
      }
  }
}
</script>

<style>

</style>