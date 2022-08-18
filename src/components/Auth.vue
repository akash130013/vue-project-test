<template>
  
  <div class="container">
      <div class="row">
          <div class="col-md-4">
              <div class="card">
                  <div><h2>Conditional statements</h2></div>
                  <div v-if="this.islogedIn" class="card-body">
                      <h3>Logged in!</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia, harum, aliquam illo sit
                           dignissimos asperiores excepturi voluptatibus necessitatibus, 
                           accusantium eos in eius! Expedita magni earum nisi, quasi incidunt soluta.
                     </p>
                  </div>
                  <div v-if="!this.islogedIn" class="card-body">
                      <h3>Loged out!!</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis, nemo autem amet nulla quos quaerat sapiente id dolor illo quisquam praesentium obcaecati voluptas repudiandae qui ducimus vero mollitia aliquam!
                      Harum nihil quia debitis eius ipsam obcaecati perferendis illum veritatis dignissimos cumque reiciendis consequuntur doloremque quasi quod, rem ad mollitia aut assumenda. Nemo veniam ex, quae omnis quis nihil debitis!
                      Modi perspiciatis asperiores nemo perferendis maiores temporibus saepe, nihil iusto rem dicta labore quis recusandae maxime, nobis totam quae numquam. Illum nulla ipsam totam nam et perferendis, temporibus vitae doloribus?
                     </p>
                  </div>
              </div>
              <div class="card-body">
                  <button v-if="this.islogedIn" class="btn btn-success" @click="login">Login</button>
                  <button v-if="!this.islogedIn" class="btn btn-warning" @click="logout">Logout</button>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
 name:'Auth',
 data:function(){
     return {
         islogedIn:false,
     }
 },
 methods:{
     login:function(){ this.islogedIn=false},
     logout:function(){this.islogedIn= true}
 }
}
</script>

<style>

</style>