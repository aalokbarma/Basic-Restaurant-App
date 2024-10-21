<template>
  <div class="restaurant-card">
    <h3 class="restaurant-name">{{ restaurant.name }}</h3>
    <p class="restaurant-address">{{ restaurant.address }}</p>
    <p class="restaurant-contact">Contact: {{ restaurant.contact }}</p>
  </div>
</template>

<script>
export default {
    name: 'RestaurantCard',
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  mounted(){
    console.warn("AAAA => ", JSON.stringify(this.restaurant))
  }
};
</script>

<style scoped>
.restaurant-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  
}

.restaurant-card:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.restaurant-name {
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.restaurant-address,
.restaurant-contact {
  color: #555;
  font-family: Arial, sans-serif;
  font-size: 14px;
}
</style>