<template>
  <div class="md:mt-2 rounded-md md:w-72 box-border md:px-4 md:py-6 bg-white">
    <div class="flex gap-2 cursor-pointer mb-2 relative">
      <img width="64" height="64" class="rounded-full object-cover" src="https://picsum.photos/200/200" alt="A">
      <div class="flex-1">
        <h3>Carter Studios</h3>
        <div class="text-gradient-theme-bottom">Vip</div>
      </div>
      <Notification class="absolute top-0 right-0 md:hidden" />
    </div>
    <div class="mb-8 md:mb-0">Do something else</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import Notification from '../../Notification/idnex.vue'

export default defineComponent({
  components: {
    Notification
  },
  setup() {
    
  },
})
</script>
