<template>
    <Header />
    <div class="restaurant-list">
        <div v-for="restaurant in restaurantList" :key="restaurant.id" class="restaurant-card">
            <RestaurantUpdateCardVue :restaurant="restaurant" />
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
import RestaurantUpdateCardVue from './RestaurantUpdateCard.vue';
export default {
  name: 'UpdateRestaurantPage',
  components: {
    Header,
    RestaurantUpdateCardVue
  },
  data() {
    return {
      restaurantList: [],
    }
  },
  async mounted() {
    let currUser = localStorage.getItem('currentUser');
    if (!currUser) {
      this.$router.push({ name: "SignUp" });
    }
    const restaurantData = await axios.get('http://localhost:3000/restaurants');
    this.restaurantList = restaurantData.data
  },
   async updated() {
    const restaurantData = await axios.get('http://localhost:3000/restaurants');
    this.restaurantList = restaurantData.data
    }
}

</script>

<style scoped>
.restaurant-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.restaurant-card {
    border-radius: 8px;
    padding: 15px;
    text-align: center;
}
</style>