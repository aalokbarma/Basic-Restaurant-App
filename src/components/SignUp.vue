<template>
  <div class="form-container">
    <img src="../assets/logo1.png" class="restroLogo" />
    <h2>Signup</h2>
    <form @submit.prevent="submitForm" class="signupForm">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model.trim="formData.name" placeholder="Enter your name" required />
        </div>
    
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model.trim="formData.email" placeholder="Enter your email" required />
        </div>
    
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model.trim="formData.password" placeholder="Enter your password" required />
        </div>
    
        <button type="submit" class="submit-button">Sign Up</button>
        <div class="loginLinkContainer">
          <p class="alreadyText">Already a user?</p>
          <h3 class="loginText" @click="onLoginClick">Log In</h3>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
      usersData: [],

    };
  },
  mounted() {
    let currUser = localStorage.getItem('currentUser');
    if (currUser) {
        this.$router.push('/');
    }
  },
  methods: {
    async submitForm() {
      const result = await axios.post('http://localhost:3000/users', this.formData);
      const getUserData = await axios.get('http://localhost:3000/users');
      this.usersData = getUserData.data;
      const currentUserData = {
        email: this.formData.email,
        name: this.formData.name
      }
      localStorage.setItem('currentUser', JSON.stringify(currentUserData))
      if (result.status == 201) {
          alert("Form is submitted successfully...")
          this.$router.push("/");
      }
    },
    onLoginClick() {
      this.$router.push({name: "Login"})
    }
  },
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    font-family: Arial, sans-serif;
}

/* Form group styling */
.form-group {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
    font-family: Arial, sans-serif;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: Arial, sans-serif;
}

/* Button styling */
.submit-button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: Arial, sans-serif;
}

.submit-button:hover {
    background-color: #218838;
}

.signupForm {
    width: 300px;
    margin: auto;
}
.alreadyText {

}
.loginText {
  color: #218838;
  margin-left: 10px;
  cursor: pointer;
}
.loginLinkContainer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.restroLogo {
  width: 100px;
  height: 100px;
}
</style>