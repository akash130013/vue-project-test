<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
     <div class="container">
         <router-link class="navbar-brand" to="/">Home</router-link>
         <router-link class="navbar-brand" to="/users">Users</router-link>
          <router-link class="navbar-brand" to="/about">About</router-link>
     </div>
  </nav>
</template>

<script>
export default {
  name:'NavBar',
}
</script>

<style>

</style>