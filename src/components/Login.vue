<template>
  <div class="form-container">
    <img src="../assets/logo1.png" class="restroLogo" />
    <h2>Login</h2>
    <form @submit.prevent="loginUser" class="loginForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="loginData.email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="loginData.password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit" class="submit-button">Login</button>
      <div class="signUpLinkContainer">
          <p class="notUserText">Not a user?</p>
          <h3 class="signUpText" @click="onSignUpClick">Sign Up</h3>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "LogIn",
        data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    let currUser = localStorage.getItem('currentUser');
    if (currUser) {
        this.$router.push('/');
    }
  },
  methods: {
    async loginUser() {
      // Perform login logic (e.g., API request, validation)
    //   const getUserData = await axios.get('http://localhost:3000/users');
    //   const currentUserData = await getUserData.data.filter((item) => item.email == this.loginData.email && item.password == this.loginData.password);
    
    //     if (currentUserData.length > 0){
    //         localStorage.setItem("currentUser", JSON.stringify(currentUserData[0]));
    //         this.$router.push("/");
    //     } else {
    //         alert("Invalid credentials")
    //     }

    const userDataResult = await axios.get(`http://localhost:3000/users?email=${this.loginData.email}&password=${this.loginData.password}`);
    console.warn(userDataResult)

    if (userDataResult.status == 200 && userDataResult.data.length > 0 ) {
        localStorage.setItem("currentUser", JSON.stringify(userDataResult.data[0]));
            this.$router.push("/");
    } else {
            alert("Invalid credentials")
        }

    },
    onSignUpClick() {
        this.$router.push({name: "SignUp"})
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
.notUserText {

}
.signUpText {
  color: #218838;
  margin-left: 10px;
  cursor: pointer;
}
.signUpLinkContainer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.loginForm {
    width: 300px;
    margin: auto;
}
.restroLogo {
  width: 100px;
  height: 100px;
}
</style>