<template>
  <div class="container">
      <div class="row">
          <div class="md-col-3">
              <div class="card">
                  <div class="card-header bg-success text-white">
                      <h2>Register here! <span>form Validation</span></h2>
                  </div>
                  <div class="card-body">
                      <form @submit.prevent="register()">
                          <div class="mb-2">
                              <input v-model="user.name" type="text" name="name" class="form-control" placeholder="Name">
                          </div>

                          <div class="mb-2">
                              <input v-model="user.email" type="email" name="email" class="form-control" placeholder="Email">
                          </div>

                          <div class="mb-2">
                              <input v-model="user.password" type="password" name="password" class="form-control" placeholder="Password">
                          </div>

                          <div class="mb-2">
                              <input type="submit" class="btn btn-success" value="submit">
                          </div>

                      </form>
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'Register',
  data: function(){
      return {
          user:{name:'', email:'',password:''}
      }
 },
 methods:{
     register:function () {
         console.log('======>',this.user);
     }
 }
}
</script>

<style>

</style>