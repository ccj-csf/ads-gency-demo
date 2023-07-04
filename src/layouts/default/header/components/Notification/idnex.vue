<template>
  <div class=" relative bg-gradient-theme-right w-8 h-8 rounded-md text-center leading-8 text-white cursor-pointer">
    <NotificationOutlined />
    <em class=" absolute w-2 h-2 rounded-full bg-red-600 top-0 right-0" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

  import { NotificationOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    NotificationOutlined
  },
  setup() {
    
  },
})
</script>
