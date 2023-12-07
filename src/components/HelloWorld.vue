<template>
  <div class="hello">
    <NavigationMenu />
    <h1>Welcome to My Vue App</h1>
    <div class="divider"></div>
    <p>This is a custom welcome page for my Vue.js application.</p>
    <p>There you can see result of work with api (now without db) and also there will be the little messenger.</p>
  </div>
</template>


<script>
import NavigationMenu from './NavigationMenu.vue';
export default {
   name: 'HelloWorld',
   components: {
    NavigationMenu
  }
}
</script>

