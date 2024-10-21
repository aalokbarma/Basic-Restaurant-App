<template>
    <Header />
    <div class="restaurant-list">
        <div v-for="restaurant in restaurantList" :key="restaurant.id" class="restaurant-card">
            <RestaurantCard :restaurant="restaurant" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import RestaurantCard from './RestaurantCard.vue';
export default {
  name: 'HomePage',
  data() {
    return {
      restaurantList: [],
    }
  },
  components: {
    Header,
    RestaurantCard,
  },
  async mounted() {
    let currUser = localStorage.getItem('currentUser');
    if (!currUser) {
      this.$router.push({ name: "SignUp" });
    } else {
      this.name = JSON.parse(currUser).name
    }
    const restaurantData = await axios.get('http://localhost:3000/restaurants');
    this.restaurantList = restaurantData.data
  },
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