<template>
  <nav class="flex flex-wrap md:flex-nowrap xxl:mx-8 md:mx-4 md:overflow-x-auto xxl:gap-8 xl:gap-2">
    <router-link
      :class="[
        'basis-full break-normal md:basis-auto px-2 xxl:px-6 leading-8 duration-300 rounded-md hover-gradient-theme-right text-neutral-600 hover:text-white',
        item.name === route.name ? 'bg-gradient-theme-right text-white' : '',
      ]"
      v-for="item in menus"
      :key="item.name"
      :to="item.name"
      >{{ item.title }}</router-link
    >
  </nav>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    setup() {
      const route = useRoute()
      const menus = ref([
        {
          name: 'Generators',
          title: 'Generators',
        },
        {
          name: 'Discover',
          title: 'Discover',
        },
        {
          name: 'Education',
          title: 'Education',
        },
        {
          name: 'SocialInsights',
          title: 'Social In sights',
        },
         {
          name: 'Pricing',
          title: 'Pricing',
        },
      ])
      return {
        menus,
        route,
      }
    },
  })
</script>
