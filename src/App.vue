<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import Customer from "./components/Customer.vue";
import Employee from './components/Employee.vue';
import Counter from './components/Counter.vue';
import Register from './components/Register.vue';
</script>

<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p>
            Qui irure aliqua id laboris ut ullamco pariatur laborum ex ullamco
            excepteur laboris.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quaerat minus veniam sint ut deleniti, repellat dolorem repellendus
            asperiores, quo expedita similique sequi doloremque reprehenderit
            molestias perferendis ducimus quod corrupti.
          </p>
        </div>
        <Customer name="John" age="32" designation="Engineer" />
        <Employee />
        <Counter />
        <Register />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
