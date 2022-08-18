<template>
  <div class="container">
      <div class="row">
          <div class="column">
              <h2>Data Listing is showing here!!!</h2>
              <table class="table text-center">
                   <thead>
                       <tr>
                       <th>Sr.No</th>
                       <th>Id</th>
                       <th>title</th>
                       <th>completed</th>
                       </tr>
                   </thead>
                   <tbody>
                    <tr v-for="user in this.userList" :key="user.id">
                       <td>{{user.id}}</td>
                       <td>{{user.title}}</td>
                       <td>{{user.userId}}</td>
                       <td>{{user.completed}}</td>
                    </tr>

                   </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
import {UserList} from '../services/UserList'
export default {
    name:'UserListData',
    data:function(){
        return {
            userList:[],
            isLoading:false,
            errorMsg:'',
        }
    },
    created: async function(){
        try {
       this.isLoading= true;
       const users= await UserList.getAllUsers();
       this.userList= users.data;
       this.isLoading= false;
        } catch (error) {
            this.isLoading= false;
            this.errorMsg=error;
        }
      
    }

}
</script>

<style>

</style>