<template >
  <div :style="{'height': '100%'
  ,'width': '100%'}">
<div id="nav">
    <button  @click="show=1">Home</button>  |
    <button  @click="show=2">About</button>  |
    <button  @click="show=3">Login</button> |
    <button  @click="show=4">Contact Us</button>
</div>
  <div class="welcome container">
    
    
      <div v-if="show===1">
          <h2>Home</h2>
      </div>
      <div v-else-if="show===2">
          <h2>About</h2>
      </div>
      <div v-else-if="show===3">
          <h2>Login</h2>
          <LoginForm />
      </div>
      <div v-else-if="show===4">
          <h2>Contact Us</h2>
      </div>
   
    
  </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import {ref} from 'vue'

export default {
  components: {LoginForm /*, Home , About , Contactus*/ },
  setup() {
    const show = ref(1)
    return { show }
  }
}
</script>

<style>

  .welcome {
    text-align: center;
    padding: 20px 0;

    
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 5px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
    border-radius: 10px;
    background-color: grey;
  }
  #nav {
  text-align: center;
  padding: 30px;
}




</style>

