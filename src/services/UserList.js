import axios from 'axios'

export class UserList{
    static userlist=[];

    static getAllUsers(){
        const data= axios.get('https://jsonplaceholder.typicode.com/todos');
       return data;
    }
}