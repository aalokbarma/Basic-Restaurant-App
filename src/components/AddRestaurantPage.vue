<template>
    <Header />
    <div class="form-container">
        <h2>Add Restaurant</h2>
        <form @submit.prevent="submitRestaurant">
            <div class="form-group">
                <label for="name">Restaurant Name:</label>
                <input type="text" id="name" v-model="restaurantData.name" placeholder="Enter restaurant name" required />
            </div>
    
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" v-model="restaurantData.address" placeholder="Enter restaurant address"
                    required />
            </div>
    
            <div class="form-group">
                <label for="contact">Contact Number:</label>
                <input type="text" id="contact" v-model="restaurantData.contact" placeholder="Enter contact number"
                    required />
            </div>
    
            <button type="submit" class="submit-button">Add Restaurant</button>
        </form>
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: 'AddRestaurantPage',
  components: {
    Header
  },
  mounted() {
    let currUser = localStorage.getItem('currentUser');
    if (!currUser) {
      this.$router.push({ name: "SignUp" });
    }
  },
  data() {
    return {
      restaurantData: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async submitRestaurant() {
      // Perform any form validation and submit the restaurant data (e.g., API call)

      // Save restaurant data to localStorage (optional)
    //   localStorage.setItem("restaurantData", JSON.stringify(this.restaurantData));
        await axios.post('http://localhost:3000/restaurants', this.restaurantData);

      // Clear the form after submission
      this.restaurantData.name = "";
      this.restaurantData.address = "";
      this.restaurantData.contact = "";

      // You can add a success message or redirect the user if needed
      alert("Restaurant added successfully!");
      this.$router.push('/');
    },
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
</style>