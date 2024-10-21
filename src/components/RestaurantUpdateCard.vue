<template>
  <div class="card-container">
    <div class="card">
      <!-- Three dots menu for options -->
      <div class="dots-menu" @click="showOptions = !showOptions">⋮</div>

      <!-- Popup menu for update and delete -->
      <div v-if="showOptions" class="options-popup">
        <p @click="openUpdateModal">Update</p>
        <p @click="confirmDelete">Delete</p>
      </div>

      <!-- Restaurant details -->
      <h3 class="restaurant-name">{{ restaurant.name }}</h3>
      <p class="restaurant-address">{{ restaurant.address }}</p>
      <p class="restaurant-contact">{{ restaurant.contact }}</p>
    </div>

    <!-- Update Modal -->
    <div v-if="showUpdateModal" class="modal">
      <div class="modal-content">
        <h3>Update Restaurant</h3>
        <form @submit.prevent="updateRestaurant">
          <div>
            <label>Name:</label>
            <input type="text" v-model="updatedRestaurant.name" required />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" v-model="updatedRestaurant.address" required />
          </div>
          <div>
            <label>Contact:</label>
            <input type="text" v-model="updatedRestaurant.contact" required />
          </div>
          <button type="submit">Update</button>
          <button @click="closeUpdateModal">Cancel</button>
        </form>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteConfirm" class="modal">
      <div class="modal-content">
        <p>Are you sure you want to delete this restaurant?</p>
        <button @click="deleteRestaurant">Yes, Delete</button>
        <button @click="closeDeleteConfirm">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showOptions: false, // To toggle the options popup
      showUpdateModal: false, // To toggle the update modal
      showDeleteConfirm: false, // To toggle the delete confirmation
      updatedRestaurant: { ...this.restaurant }, // Cloning restaurant data for updates
    };
  },
  methods: {
    openUpdateModal() {
      this.showOptions = false;
      this.showUpdateModal = true;
    },
    closeUpdateModal() {
      this.showUpdateModal = false;
    },
    updateRestaurant() {
      // Make an API call to update the restaurant in the database
      axios.put(`http://localhost:3000/restaurants/${this.restaurant.id}`, this.updatedRestaurant)
        .then(response => {
          alert('Restaurant updated successfully!');
          this.$emit('restaurantUpdated', response.data); // Notify parent component of the update
          this.closeUpdateModal();
          this.$router.push({name: "UpdateRestaurantPage"})
        })
        .catch(error => {
          console.error("Error updating restaurant:", error);
        });
    },
    confirmDelete() {
      this.showOptions = false;
      this.showDeleteConfirm = true;
    },
    closeDeleteConfirm() {
      this.showDeleteConfirm = false;
    },
    deleteRestaurant() {
      // Make an API call to delete the restaurant from the database
      axios.delete(`http://localhost:3000/restaurants/${this.restaurant.id}`)
        .then(() => {
          alert('Restaurant deleted successfully!');
          this.$emit('restaurantDeleted', this.restaurant.id); // Notify parent component of the deletion
          this.closeDeleteConfirm();
        })
        .catch(error => {
          console.error("Error deleting restaurant:", error);
        });
    },
    
  },
};
</script>

<style scoped>
/* Card container */
.card-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  z-index: 0;
}

/* Card styling */
.card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 1px solid #ddd;
  position: relative;
}

.dots-menu {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
}

.options-popup {
  position: absolute;
  top: 35px;
  right: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.options-popup p {
  cursor: pointer;
  margin: 0;
  padding: 5px;
  text-align: left;
}

.options-popup p:hover {
  background-color: #eee;
}

/* Modal Styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.modal-content form label {
  text-align: left;
  font-size: 14px;
}

.modal-content form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.modal-content button {
  padding: 10px;
  margin-top: 10px;
  background-color: #218838;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
}

.modal-content button:hover {
  background-color: #19692c;
}
</style>