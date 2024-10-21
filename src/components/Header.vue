<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add-restaurant" class="nav-link">Add Restaurant</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/update-restaurant" class="nav-link">Update Restaurant</router-link>
      </li>
      <li class="nav-item">
        <a href="#" @click="logout" class="nav-link">Log Out</a>
      </li>
    </ul>
  </nav>
</template>
<script>
    export default {
        name : "HeaderNav",
        methods: {
            logout() {
            // Add your logout logic here (e.g., clearing tokens, redirecting to login page, etc.)
            localStorage.setItem("currentUser", "")
            // Redirect to login page or home
            this.$router.push('/login');
            },
  },
    }
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 15px;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-family: Arial, sans-serif;
  padding: 10px 20px;
  /* background-color: #28a745; */
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #218838;
}

.router-link-exact-active {
  background-color: #218838;
  color: white;
  font-weight: bold;
}

.router-link-active {
  background-color: #218838;
  color: white;
}
</style>